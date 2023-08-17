/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};



const FEATURES: FeatureItem[] = [

  {
    title: translate({
      message: 'Dig Deep',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/dig_deep.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        How often in our daily lives do we manage to talk about things 
        that matter a lot and not end up in an argument? In a CF process, 
        we have rich and complex conversations and we stay together</Translate>
    ),
  },
  {
    title: translate({
      message: 'Resolve the Crisis of Imagination',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/crisis_imagination.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        By connecting to why others want something and co-holding everyone's needs in the process people shift in what is important to them.

      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Experience Community',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/experience_community.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Get to experience that there is a world beyond either/or, in which someone has to give up on what
        is important to them so that others can get what they want—we are creating win-win situation through integration.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Resolve Complex Puzzles Together',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_team_work_k-80-m.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Power differences easily interfere with collaboration. Convergent Facilitation directly
        engages with them instead of avoiding them.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "Build Confidence",
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_world_re_768g.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Focusing on hearing every need, not every voice,
        Convergent Facilitation it a powerful tool to create co-held decision from small to very large groups.
      </Translate>
    ),
  },
];

// export type FeatureItem = {
//   title: string;
//   image: {
//     src: string;
//     width: number;
//     height: number;
//   };
//   text: string;
// };


// const FEATURES: FeatureItem[] = [
//   {
//     title: 'Inviting dissent',
//     image: {
//       src: '/img/undraw_faq_re_31cw.svg',
//       width: 1137,
//       height: 776.59,
//     },
//     text: 'Rather than pressing for agreement, we are encouraging participants to bring their concerns to create a resilient decision that everyone is willing to follow.',
//   },
// ];
// export default function MyComponent() {
//   return (
//     <>
//       {FEATURES.map((feature) => (
//         <div key={feature.title}>
//           <h3>{feature.title}</h3>
//           <img src={feature.image.src} width={feature.image.width} height={feature.image.height} />
//           <p>{feature.text}</p>
//         </div>
//       ))}
//     </>
//   );
// }

export default FEATURES;
