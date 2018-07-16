import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// TODO: import not working

// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

// const DnDCalendar = withDragAndDrop(BigCalendar);

export default class Caledar extends React.Component {
    //     componentDidMount() {
    //         $('#calendar').fullCalendar({
    //             editable: false,
    //             // put your options and callbacks here
    //         });
    //     }
    state = {
        events: [
            {
                start: new Date(),
                end: new Date(moment().add(1, "days")),
                title: "Some title"
            }
        ]
    };

    render() {
        const myEventsList = null;
        return <BigCalendar
            events={this.state.events}
            startAccessor='startDate'
            endAccessor='endDate'
            style={{ height: "100vh" }}
            defaultDate={new Date()}
        />
    }
}