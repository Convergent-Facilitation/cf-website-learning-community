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

  const visibleRangeFunction = (currentDate) => {
    // Generate new dates for start and end
    let startDate = new Date();
    let endDate = new Date();

    startDate.setDate(startDate.getDate());
    // Adjust end date: three months into the future
    endDate.setMonth(endDate.getMonth() + 3);

    return { 
      start: startDate, 
      end: endDate
     };
  };

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
              left: '', //'today',
              center: 'title',
              right: '' //'prev,next',
            }}
            initialView='list'
        	contentHeight='auto'
            visibleRange={visibleRangeFunction}
			buttonText={{
		      today: 'This Month' // Set custom text for 'today' button
    		}}
          />
		
		<p>Learn how to <a href='how-to-engage/receive-calendar-invites'>receive calendar invites</a>.</p>
      </>
    )
  }


