/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import BlogSidebar from '@theme/BlogSidebar'
import GcalEvents from '@site/src/components/Events'
import { useLocation } from 'react-router-dom'
import { HeroBanner, VideoContainer } from '@site/src/pages/_index.tsx'
import styles from '@site/src/pages/styles.module.css'
import Heading from '@theme/Heading'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

import type { Props } from '@theme/BlogLayout'

export default function BlogLayout (props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props
  const hasSidebar = sidebar && sidebar.items.length > 0

  // Get the current location
  const location = useLocation()
  // Check if the current path matches '/events'
  const isEventsRoute = location.pathname === '/'

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
            {isEventsRoute &&
              <>
			<HeroBanner/>
<div className={styles.section}>

            <h1 id='offerings'> Upcoming Offerings by CF Providers</h1>
</div>
              </>
            }
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {isEventsRoute &&
              <>
              </>
            }
            {children}
            {isEventsRoute &&
              <>

              </>
            }
          </main>
        </div>
            {isEventsRoute &&
              <>

<div className={styles.section}>
            <h1 id='events-overview'> Events Overview including Community-Created Events</h1>
<p>This calendar is co-created by the community—find out how: <a href='how-to-engage/platforms-and-co-creation/co-create-on-hylo'>Co-Create on Hylo</a>. Learn how you can receive email invites for new events: <a href='how-to-engage/platforms-and-co-creation/receive-calendar-invites'>Receive Calendar Invites</a>.</p>

<div className="gcal-events">
            <GcalEvents />
</div>
</div>
<div className={styles.section}>
<div className={styles.section}>
            <Heading as="h1"> Our Global Co-Creation Community on Hylo</Heading>

<p>Below you see how our global community is distributed (updated Sep 2023). Explore the live map here: <a href='https://www.hylo.com/groups/convergent-facilitation/map?sortBy=updated&hide=discussion&hide=request&hide=offer&hide=resource&hide=project&hide=event&hide=group'>Hylo/Convergent Facilitation Group/Map</a>. If you are not part of our collaborative community space on Hylo find out how to join here: <a href='/how-to-engage/platforms-and-co-creation/co-create-on-hylo'>Co-Create on Hylo</a>.</p>
          <img
            alt="map of locations of community members"
            src="/img/hylo-community-map.webp"
          />

</div>
</div>
<div className={styles.section}>
            <Heading as="h1"> Hear from Lisa on why bother Learning Convergent Facilitation</Heading>
<div className="video-container">

            <LiteYouTubeEmbed
              id="mDuspgB5Ko0"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Convergent Facilitation Teaser"
              poster="maxresdefault"
              webp
            />
</div>
</div>
              </>
            }
      </div>
    </Layout>
  )
}
