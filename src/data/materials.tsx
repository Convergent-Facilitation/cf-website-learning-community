/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';
import materials from './materials.json'
import tags from './predefinedMaterialTags.json'

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
const Users: User[] = materials;


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

export const Tags: {[type in TagType]: Tag} = tags

const colorPalette = ['#696969','#a0522d','#808000','#483d8b','#008000','#008b8b','#4682b4',    '#9acd32','#00008b','#8fbc8f','#800080','#b03060','#ff4500','#ffa500',    '#ffff00','#7cfc00','#8a2be2','#dc143c','#00ffff','#f4a460','#0000ff',    '#da70d6','#ff00ff','#1e90ff','#f0e68c','#add8e6','#ff1493','#7b68ee',    '#98fb98','#ffc0cb']

Object.keys(tags).forEach((key, index) => {
   tags[key].color = colorPalette[index % colorPalette.length];
});

export const TagList = Object.keys(Tags) as TagType[]

function sortUsers () {
  let result = Users
  // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  result = sortBy(result, (user) => -new Date(user.date))
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'))
  return result
}

export const sortedUsers = sortUsers()

