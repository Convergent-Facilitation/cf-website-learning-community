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
        <>
          <FullCalendar
//             plugins={[googleCalendarPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              plugins={[ googleCalendarPlugin, listPlugin]}
            googleCalendarApiKey= {customFields.googleCalendarApiKey}
  events= {{
    googleCalendarId: 'community-calendar@convergentfacilitation.org'
  }}
            headerToolbar={{
              left: 'today',
              right: 'prev,next',
              center: 'title'
            }}
            initialView='listMonth'
        	contentHeight='auto'
			buttonText={{
		      today: 'This Month' // Set custom text for 'today' button
    		}}
          />
		
		<p>Learn more: <a href='how-to-engage/platforms-and-co-creation/schedule-events-through-hylo'>Schedule events through Hylo</a> & <a href='how-to-engage/platforms-and-co-creation/receive-calendar-invites'>Receive Calendar Invites</a>.</p>
      </>
    )
  }


