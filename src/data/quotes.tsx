/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/frederic-laloux.jpg'),
    name: 'Frederic Laloux',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: 'Author of "Reinventing Organisations"',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
        There is a belief in our culture that we have to choose between collaboration and efficiency. It’s one or the other. Convergent Facilitation shows that there is an efficient path—perhaps the only truly efficient one—that gets everyone’s needs met.
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/joanna-macy.jpg'),
    name: 'Joanna Macy',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: 'Root teacher of the "Work That Reconnects", activist',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
       Convergent Facilitation will steer us away from wasting time and accelerate our work for the Great Turning.
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/aaron-goggans.jpg'),
    name: 'Aaron Goggans',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: 'Writer, facilitator, and organizer with the Movement for Black Lives',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
        Convergent Facilitation is a vision of democracy that is something other than a six-hour meeting after which we are too tired to implement any decision. It opens a path towards a democratic praxis where we all take responsibility for the whole and make decisions that meet the needs of everyone.
      </Translate>
    ),
  },
];

export default QUOTES;
