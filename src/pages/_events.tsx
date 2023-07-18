import GcalEvents from '@site/src/components/Events';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState } from 'react';


export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main className="container text--center">
       <GcalEvents/>
      </main>
    </Layout>
  );
}

