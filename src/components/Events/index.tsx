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
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}



export default function GcalEvents(): JSX.Element {
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


          <FullCalendar
//             plugins={[googleCalendarPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              plugins={[ googleCalendarPlugin, listPlugin]}
            googleCalendarApiKey= {customFields.googleCalendarApiKey}
  events= {{
    googleCalendarId: 'community-calendar@convergentfacilitation.org'
  }}
            headerToolbar={{
              left: 'title',
              center: 'prev,next',
              right: 'today'
            }}
            initialView='listMonth'
      // other view-specific options here

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
    )
  }


