import React from "react";
import moment from "moment";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

import "./Toolbar.scss";

import { Navigate } from "react-big-calendar";

const Toolbar = ({ date, onNavigate, onView}) => {
  const handlePrevClick = () => {
    onNavigate(Navigate.PREVIOUS);
  };

  const handleNextClick = () => {
    onNavigate(Navigate.NEXT);
  };

  return (
    <div className="toolbar">
      <div className="month-changer">
        <ArrowLeftRoundedIcon
          fontSize="large"
          className="back-button"
          onClick={handlePrevClick}
        ></ArrowLeftRoundedIcon>
        <span className="current-month" onClick={() => onView("month")}>
          {moment(date).format("MMMM YYYY")}
        </span>
        <ArrowRightRoundedIcon
          fontSize="large"
          className="next-button"
          onClick={handleNextClick}
        ></ArrowRightRoundedIcon>
      </div>
    </div>
  );
};

export default Toolbar;
