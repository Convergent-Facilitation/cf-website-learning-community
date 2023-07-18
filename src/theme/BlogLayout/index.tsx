/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import GcalEvents from '@site/src/components/Events';
import { useLocation } from 'react-router-dom';


import type {Props} from '@theme/BlogLayout';

export default function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  // Get the current location
  const location = useLocation();
  // Check if the current path matches '/events'
  const isEventsRoute = location.pathname === '/events';

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {isEventsRoute &&
              <>

              <GcalEvents />

              </>
            }
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
}
