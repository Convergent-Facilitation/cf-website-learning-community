/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';
import coachingCalls from './coachingCalls.json'

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  // For open-source sites, a link to the source code is required.
  // The source should be the *website's* source, not the project's source!
  | 'opensource'
  | 'product'
  // Feel free to add the 'design' tag as long as there's _some_ level of
  // CSS/swizzling.
  | 'design'
  // Site must have more than one locale.
  | 'i18n'
  | 'versioning'
  // Large sites are defined as those with > 200 pages, excluding versions.
  | 'large'
  | 'meta'
  | 'personal'
  | 'paul'
  | 'magda';

// Add sites to this list
// prettier-ignore
// 
const Users: User[] = coachingCalls;

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  introduction: {
    label: translate({message: 'Introducing CF'}),
    description: translate({
      message: 'Finding the best framing a group/community/organisation that CF would likely work well for them can be tough.',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  challenge: {
    label: translate({message: 'Challenge-based Coaching'}),
    description: translate({
      message: 'Someone from the community asked for a coaching in relation to a problem they encountered in the application of CF.',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  topic: {
    label: translate({message: 'Topic-based Coaching'}),
    description: translate({
      message:
        'The coach offered coaching call around a particular topic and people could bring their questions and challenges in releation to that.',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  nce: {
    label: translate({message: 'NCE'}),
    description: translate({
      message:
        'Noncontroversial Essence',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },

  thresholds: {
    label: translate({message: 'Threshold'}),
    description: translate({
      message:
        'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.versioning.description',
    }),
    color: '#fe6829',
  },

  dissent: {
    label: translate({message: 'Inviting Dissent'}),
    description: translate({
      message:
        'Very large Docusaurus sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },

  facilitation: {
    label: translate({message: 'Facilitation'}),
    description: translate({
      message: 'Docusaurus sites of Meta (formerly Facebook) projects',
      id: 'showcase.tag.meta.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  verene: {
    label: translate({message: 'Coach:Verene'}),
    description: translate({
      message: '',
      id: 'showcase.tag.verene.description',
    }),
    color: '#14cfc3',
  },

  paul: {
    label: translate({message: 'Coach:Paul'}),
    description: translate({
      message: '',
      id: 'showcase.tag.paul.description',
    }),
    color: '#ffcfc3',
  },
  magda: {
    label: translate({message: 'Coach:Magda'}),
    description: translate({
      message: '',
      id: 'showcase.tag.magda.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  //result = sortBy(result, (user) => user.title.toLowerCase());
  result = sortBy(result, (user) => - new Date(user.date));
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
