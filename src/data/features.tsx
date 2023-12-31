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
      src: '/img/dig_deep_blue_dot_creature_small.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        How often in our daily lives do we manage to talk about things 
        that matter a lot and not end up in an argument? In a Convergent Facilitation process, 
        we have rich and complex conversations and we stay together.</Translate>
    ),
  },
  {
    title: translate({
      message: 'Resolve the Crisis of Imagination',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/resolve_crisis_imagination_green_creature.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        How often do we experience hope that another world is indeed possible? Convergent Facilitation reconnects us with our innate and time immemorial capacity to resolve complex problems in partnership with life.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Connect and Experience Togetherness',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/experience_community.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        We meet for several meetings, engage in deep conversation, laugh and listen to each other intently, hold difficult dilemmas together and sometimes even tie bounds of friendship with people we never knew we could have a conversation with.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Resolve Complex Puzzles Together',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/solve_complex_puzzle_little_creatures.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Convergent Facilitation is rigourous, can take time and asks for significant commitment on the part of participants and facilitators. When we land on a solution that works for everyone however, there can be immense satisfaction to have resolved a complex puzzle together.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "Build Confidence",
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/build_confidence_yellow_creatures.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        When we experience that our contribution is important regardless where we are placed on the “map of power”, we regain confidence in our ability to influence decisions that impact us, and in humanity’s capacity to manage its affairs for the benefits of the whole.
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
