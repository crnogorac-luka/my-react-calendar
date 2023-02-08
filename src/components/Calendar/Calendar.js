import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { Views } from "react-big-calendar";
import Toolbar from "./toolbar/Toolbar";
import Modal from "./modal/Modal";

import moment from "moment";
import fetchResults from "../../services/api/CommitAPI";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.scss";

const localizer = momentLocalizer(moment);

const Calendar = (props) => {
  // States
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [currentView, setCurrentView] = useState(Views.MONTH);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventData, setEventData] = useState({});

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const retrievedCommits = await fetchResults();

      setCalendarEvents(
        retrievedCommits.map((commit) => ({
          title: commit.commit.message,
          start: new Date(commit.commit.author.date),
          end: new Date(commit.commit.author.date),
          committer: commit.commit.committer.name,
          commitUrl: commit.html_url
        }))
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    const path = location.pathname.split("/");
    const date = moment(path[1]);
    if (date.isValid()) {
      setSelectedDate(date);
    }
  }, [location]);

  // Handlers

  const handleNavigate = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleEventClick = (event) => {
    setEventData(event);
    console.log(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        event={eventData}
        onClose={handleCloseModal}
      />
    <BigCalendar
      selectable
      date={selectedDate}
      onNavigate={handleNavigate}
      onView={handleViewChange}
      view={currentView}
      localizer={localizer}
      events={calendarEvents}
      onSelectEvent={handleEventClick}
      startAccessor="start"
      endAccessor="end"
      components={{
        toolbar: Toolbar,
      }}
      className="height-600"
    />
    
      </div>
  );
};

export default Calendar;
