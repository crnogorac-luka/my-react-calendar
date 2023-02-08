import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import {Views} from "react-big-calendar";
import Toolbar from "./toolbar/Toolbar";



import moment from "moment";
import fetchResults from "../../services/api/CommitAPI";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.scss";

const localizer = momentLocalizer(moment);

const Calendar = (props) => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [currentView, setCurrentView] = useState(Views.MONTH);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const retrievedCommits = await fetchResults();

      setCalendarEvents(
        retrievedCommits.map((commit) => ({
          title: commit.commit.message,
          start: new Date(commit.commit.author.date),
          end: new Date(commit.commit.author.date),
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

  const handleNavigate = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <BigCalendar
      selectable
      date={selectedDate}
      onNavigate={handleNavigate}
      onView={handleViewChange}
      view={currentView}
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      components={{
        eventWrapper: (props) => (
          <div className="custom-event-wrapper">{props.children}</div>
        ),
        toolbar: Toolbar
      }}
      className="height-600"
    />
  );
};

export default Calendar;
