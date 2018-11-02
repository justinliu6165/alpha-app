import React from "react";
import "./Events.less";

import EventArray from "./Events/EventsArray";

export default class Events extends React.Component {
  render() {
    const array = EventArray.map(event => (
      <div className="event-wrapper">
        <div>{event.event}</div>
        <div>{event.organiser}</div>
        <div>{`${event.day} ${event.date} ${event.month}`}</div>
        <div />
      </div>
    ));

    return (
      <div className="events-container">
        <div className="events-title">Come see what's happening</div>
        <div className="flex-box-calender">
          <div className="calender">
            <ul>
              <li>This Week</li>
              <li>Next Week</li>
              <li>This Month</li>
              <li>Custom Date</li>
            </ul>
          </div>
          <div className="events-box">{array}</div>
        </div>
      </div>
    );
  }
}
