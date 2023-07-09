import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}



export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};

  interface DemoAppState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}
 const [state, setState] = useState<DemoAppState>({
    weekendsVisible: true,
    currentEvents: [],
  })

    return (
          <Layout title={tagline} description={description}>

 {/*  {this.renderSidebar()}*/}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[googleCalendarPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
//               plugins={[ googleCalendarPlugin ]}
            googleCalendarApiKey= {customFields.googleCalendarApiKey}
  events= {{
    googleCalendarId: 'community-calendar@convergentfacilitation.org'
  }}
            headerToolbar={{
              left: 'title',
              center: 'prev,next today',
              right: 'listMonth,dayGridMonth'
            }}
            initialView='listMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={this.state.weekendsVisible}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={this.handleDateSelect}
//             eventContent={renderEventContent} // custom render function
//             eventClick={this.handleEventClick}
//             eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />

      </div>
          </Layout>
    )
  }/*

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event: EventApi) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start!, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}/**/
// render(
//   <Calendar
//     calendarID="en.orthodox_christianity%23holiday%40group.v.calendar.google.com"
//     apiKey="AIzaSyAunY2R4utMXaWe1uAxIRdcRsbUlI8yhL8"
//   />,
//   document.getElementById('root'),
// );

// const API_KEY = "123456";
// let calendars = [
//   { calendarId: "community-calendar@convergentfacilitation.org",
//     color: "#B241D1"
//   },
//   {
//     calendarId: "Y09opmkrjova8h5k5k46fedmo88%40group.calendar.google.com",
//     color: "#B241D1", //optional, specify color of calendar 2 events
//   },
// ];
//
// let styles = {
//   //you can use object styles (no import required)
//   calendar: {
//     view: "list",
//     borderWidth: "3px", //make outer edge of calendar thicker
//     margin: "100px",
//   },
//
//
//   //you can also use emotion's string styles
//   today: css`
//     /* highlight today by making the text red and giving it a red border */
