import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';

// TODO: import not working

// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

// const DnDCalendar = withDragAndDrop(BigCalendar);

export default class Caledar extends React.Component {
    componentDidMount() {
        const userid = null;
        axios.get(`http://${this.api}/productions/${this.props.productionId}/dates`, { headers: { userid } })
            .then((response) => {
                response.data.production_dates.forEach((date) => {
                    date.title = 'Performance';
                });
                response.data.rehearsal_dates.forEach((date) => {
                    date.title = `Rehearsal: ${date.name}`;
                    date.end_time = date.end_time || date.start_time;
                });
                this.setState({
                    events:
                        response.data.production_dates.concat(response.data.rehearsal_dates)
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    constructor(props) {
        super(props);
        this.api = process.env.THEATRICAL_API || 'localhost:8000';
        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "Some title"
                },
                {
                    id: 14,
                    title: 'Today',
                    start: new Date(new Date().setHours(new Date().getHours() - 3)),
                    end: new Date(new Date().setHours(new Date().getHours() + 3)),
                    className: 'todayz'
                }
            ]
        };
    }

    render() {
        return (
            <BigCalendar
                events={this.state.events}
                startAccessor='start_time'
                endAccessor='end_time'
                style={{ height: "100vh" }}
                defaultDate={new Date()}
            />
        )
    }
}