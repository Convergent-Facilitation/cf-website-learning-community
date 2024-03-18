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
import { InlineIcon, Icon } from '@iconify/react' // Import the entire Iconify library.

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
<div className="gcal-events">
            <GcalEvents />
</div>
</div>
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
<div className={styles.section}>
            <Heading as="h1"> Participate in our Learning Web on Hylo</Heading>

<p>
<a style={{fontSize: '20px'}} href="https://www.hylo.com/groups/convergent-facilitation" target="_blank">Open Hylo in a separate browser tab <InlineIcon icon="gg:external"/></a>
</p>

<iframe loading="lazy" scrolling="no" src="https://hylo.com/groups/convergent-facilitation/map?redirectToView=map&sortBy=updated&zoom=0.9704205019091244&center=0%252C13.432557291372511&hideDrawer=true" style={{ width: '100%', height: 'calc(80vh - 50px)', margin:0, padding:0, border:'none' }}></iframe>

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
