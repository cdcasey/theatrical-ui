# TheatriCAL

Theatre rehearsals are notoriously difficult to schedule. Actors typically submit black-out dates on paper, email, or via google forms. Regardless of the method, theatre directors need to manually collate the information in order to schedule rehearsals. TheatriCAL puts all of the information necessary to schedule rehearsals in one place.

[Demo Video](https://youtu.be/6_qVLI79CWY)

## Stack
While all of the information is contained within this README, this project is split into two separate repositories:

[TheatriCAL-UI](https://github.com/cdcasey/theatrical-ui)
<br>
[TreatriCAL-API](https://github.com/cdcasey/theatrical)

TheatriCAL is built with the following technologies:
* Node
* Express
* Knex
* PostgreSQL
* Bcrypt
* Bootstrap
* React
* Axios
* Big Calendar
* Mocha, Chai, Supertest

## Challenges

### Data

The first challenge was organizing the data model. This app has many separate pieces of data that need to relate in some way. The two pieces of data that the purpose of this app revolve around are scenes and blackout dates. A director should be able to schedule a scene rehearsal, and the app should know who is needed for that rehearsal and who is unavailable. I originally thought I could just put lists of dates into tables as jsonb objects. While that did work on a technical level, breaking the dates out into their own tables definitely simplified working with the data. After quite a bit of thinking, planning, and testing, I created the following ERD. Migrations and seed data soon followed.

![erd](readme-assets/theatrical-erd.png)

Shortly after I completed the ERD, I created the database migrations, seed data, and routes, thus completing the bulk of the back end. The next major challenge was assembling the front end.

### React + Bootstrap

I chose a [Bootstrap template](https://startbootstrap.com/template-overviews/sb-admin/) for the layout because it was responsive and I could see where menu items would go. It also meant that I didn't have to create my own UI. However, this was my first React application. I found the process of cutting up the template into React components tedious and slightly error-prone. While I did get a functioning UI in the end, I think may have been better to build components as they were needed.

### React + JQuery

I had initially chosen a JQuery-based plugin called [FullCalendar](https://fullcalendar.io/) for the calendar functionality. However, once I tried adding the calendar to the React component that was to contain it, it did not render. I learned the hard way that DOM-manipulation libraries do not play well with virtual DOM frameworks. I found a tutorial that said to put the JQuery code that calls FullCalendr in the componentDidMount method, but that didn't work either. In the end I foundd on a React-based calendar that shows up, but is not as full-featured as FullCalendar. This is a feature with which I will continue to experiment. If I can't find a satisfactory 3rd-party solution, I will create my own calendar.

I also noticed that there's a JQuery-based navigaton toggler in the Bootstrap template that doesn't work. I commented it out for the time being.

_Update_: There is a package called [fullcalendar-reactwrapper](https://github.com/sanjeev07/fullcalendar-reactWrapper) that should work.

### React

Then of course there was the challenge of learning to use React itself. I think using React has two main challenges:
* Deciding which pieces of the UI become a component
* Deciding what information needs to live in state in the various components

It's possible that this app is complicated enough to need something like the Context API or even Redux, but for now state and props in the various components works fine.

### Other Lessons Learned

I used an agile methodology during development. Developing in this way enabled me to easily make adjustments and add pieces to both the front and back end as needed. However, I think better planning up front would be helpful. I did have simple mockups and some user stories. In future, however, I plan on creating those in conjunction with each other. I think doing so will provide a clearer development road map than what I had this time around.

Finally, I may try adding end-to-end features next time. This time I began with the back end, and I did indeed have a solid foundation upon which to build. Next time, however, I think going feature-by-feature on both the front and back end together might be a good way to build an app piece-by-piece.

### Things I Plan to Add Soon

* Improved security
* Front-end tests
* Audition form creation
* Assigning auditioners to roles
* Drag and drop in the calendar
* Event creation
* Production creation
* Play creation
* Announcements via email or SMS
* Ticketing
