import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";

import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

import moment from "moment";
import fetchResults from "../../services/api/CommitAPI";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.scss";

const localizer = momentLocalizer(moment);

const Calendar = (props) => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment());

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const retrievedCommits = await fetchResults();
      console.log(retrievedCommits);

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


  const CustomToolbar = (props) => {
    return (
      <div className="toolbar">
        <ArrowLeftRoundedIcon fontSize="large" className="back-button" onClick={props.onNavigate.bind(null, 'PREV')}>
          Back
        </ArrowLeftRoundedIcon>
        <span className="current-month">
          {props.label}
        </span>
        <ArrowRightRoundedIcon fontSize="large" className="next-button" onClick={props.onNavigate.bind(null, 'NEXT')}>
          Next
        </ArrowRightRoundedIcon>
      </div>
    );
  };

  return (
    <BigCalendar
      selectable
      date={selectedDate}
      onNavigate={date => setSelectedDate(date)}
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      components={{
        eventWrapper: (props) => (
          <div className="custom-event-wrapper">{props.children}</div>
        ),
        toolbar: CustomToolbar
      }}
      className="height-600"
    />
  );
};

export default Calendar;
