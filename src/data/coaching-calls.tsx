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



const Users_: User[] = [
{  
		title: 'Practice, Practice, Practice. Facilitated Role Plays with Lots of Support w/ Magda Baranska [31 Aug 2020]',  
		date: '2020-08-31',  
		description: "Magda will offer a session focused on practice using Facilitated role plays with lots of support. You will have an opportunity to sit in the facilitator chair and practice your skills related to holding a Convergent Facilitation process. Please bring your own situation(s) so we can work with real life examples. We will practice the whole process or certain phases depending on your preference. You will be able to dial the difficulty level to best serve your learning. And you will have lots of support. ",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-08-31-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-08-31-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'The Gift of Self, The Art of Transparent Facilitation w/ Verene Nicolas [29 Jul 2020]',  
		date: '2020-07-29',  
		description: "One of the key skills of CF is to be transparent about the choices we make as the process is unfolding. This builds trust as we model collaboration by involving people in when and how to transition from one step to the next. However, there are potential pitfalls when revealing what lives in us in any particular moment. In this session, we'll practice how to express transparently as well as explore when to be transparent or not.",  
		preview: require('./showcase/verene-nicolas-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-07-29-verene-nicolas',  
		source: 'resources/recordings-coaching-calls/2020-07-29-verene-nicolas',  
	    tags: ['verene'],  
	}, 
{  
		title: 'Outliers and engaging with dissent w/ Aya Caspi [28 Sep 2020]',  
		date: '2020-09-28',  
		description: "None",  
		preview: require('./showcase/aya-caspi-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-09-28-aya-caspi',  
		source: 'resources/recordings-coaching-calls/2020-09-28-aya-caspi',  
	    tags: [],  
	}, 
{  
		title: 'Following intuition while asking for and engaging with dissent w/ Magda Baranska [27 Aug 2020]',  
		date: '2020-08-27',  
		description: "Magda will offer a session focused on Following intuition while asking for and engaging with dissent. Facilitation is an art and requires reading the room very quickly and in detail. This is especially true when it comes to dissent, because often people feel either vulnerable or agitated while sharing a different perspective or concerns. In this session we will practice what it would be like to follow your intuition and how to follow it while facilitating. Please bring your own situation(s) so we can work with real life examples.",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-08-27-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-08-27-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Art of transparent facilitation w/ Verene Nicolas [25 Sep 2020]',  
		date: '2020-09-25',  
		description: "One of the key skills of CF is to be transparent about the choices we make as the process is unfolding. This builds trust as we model collaboration by involving people in when and how to transition from one step to the next. However, there are potential pitfalls when revealing what lives in us in any particular moment. In this session, we'll practice how to express transparently as well as explore when to be transparent or not.",  
		preview: require('./showcase/verene-nicolas-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-09-25-verene-nicolas',  
		source: 'resources/recordings-coaching-calls/2020-09-25-verene-nicolas',  
	    tags: ['verene'],  
	}, 
{  
		title: 'Challenges encountered during CF facilitation and Practice of Self-Connection w/ Verene Nicolas [25 Oct 2020]',  
		date: '2020-10-25',  
		description: "People who encounter specific challenges or have questions about how to navigate certain situations whilst facilitating a CF process will have a chance to explore those with me and the group. If we have time, we'll also practice how to discern what is alive in us when we facilitate and what and how to share it with the group to reach our purpose.",  
		preview: require('./showcase/verene-nicolas-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-10-25-verene-nicolas',  
		source: 'resources/recordings-coaching-calls/2020-10-25-verene-nicolas',  
	    tags: [],  
	}, 
{  
		title: 'Attending to power differences w/ Lisa Rothman [25 May 2020]',  
		date: '2020-05-25',  
		description: "On this call, Lisa discusses strategies for attending to power differences.  Participants listed all the ways they’ve seen power differences show up in meetings and practiced interrupting someone with lots of power to hear from other members of the group. ",  
		preview: require('./showcase/lisa-rothman-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-05-25-lisa-rothman',  
		source: 'resources/recordings-coaching-calls/2020-05-25-lisa-rothman',  
	    tags: [],  
	}, 
{  
		title: 'Practice - Facilitated Role Plays with Support w/ Magda Baranska [23 Nov 2020]',  
		date: '2020-11-23',  
		description: "You will have an opportunity to sit in the facilitator chair and practice your skills related to holding a Convergent Facilitation process. Please bring your own situation(s) so we can work with real life examples. We will practice the whole process or certain phases depending on your preference. You will be able to dial the difficulty level to best serve your learning. And you will have lots of support. ",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-11-23-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-11-23-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Practice - Facilitated Role Plays with Support w/ Magda Baranska [22 Oct 2020]',  
		date: '2020-10-22',  
		description: "You will have an opportunity to sit in the facilitator chair and practice your skills related to holding a Convergent Facilitation process. Please bring your own situation(s) so we can work with real life examples. We will practice the whole process or certain phases depending on your preference. You will be able to dial the difficulty level to best serve your learning. And you will have lots of support.",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-10-22-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-10-22-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Applying CF principles into daily work and life w/ Magda Baranska [20 Jul 2020]',  
		date: '2020-07-20',  
		description: "None",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-07-20-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-07-20-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Non-Controversial Essence w/ Paul Kahawatte [19 Nov 2020]',  
		date: '2020-11-19',  
		description: "In this session we will practice finding the Noncontroversial Essence, exploring and strengthening this ability that is at the core of CF. We will get into some of the nuances of working with NCEs.",  
		preview: require('./showcase/paul-kahawatte-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-11-19-paul-kahawatte',  
		source: 'resources/recordings-coaching-calls/2020-11-19-paul-kahawatte',  
	    tags: [],  
	}, 
{  
		title: 'Working with Controversy in Criteria Gathering w/ Paul Kahawatte [19 May 2020]',  
		date: '2020-05-19',  
		description: "On this call, Paul explores the Convergent Facilitation skill of finding the noncontroversial essence in what people say matters to them about a decision.",  
		preview: require('./showcase/paul-kahawatte-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-05-19-paul-kahawatte',  
		source: 'resources/recordings-coaching-calls/2020-05-19-paul-kahawatte',  
	    tags: [],  
	}, 
{  
		title: 'Practice - Facilitated Role Plays with Support w/ Lisa Rothman [17 Dec 2020]',  
		date: '2020-12-17',  
		description: "You will have an opportunity to sit in the facilitator chair and practice your skills related to holding a Convergent Facilitation process. Please bring your own situation(s) so we can work with real life examples. We will practice the whole process or certain phases depending on your preference. You will be able to dial the difficulty level to best serve your learning. And you will have lots of support. ",  
		preview: require('./showcase/lisa-rothman-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-12-17-lisa-rothman',  
		source: 'resources/recordings-coaching-calls/2020-12-17-lisa-rothman',  
	    tags: [],  
	}, 
{  
		title: 'Following intuition while asking for and engaging with dissent w/ Magda Baranska [17 Aug 2020]',  
		date: '2020-08-17',  
		description: "Magda will offer a session focused on Following intuition while asking for and engaging with dissent. Facilitation is an art and requires reading the room very quickly and in detail. This is especially true when it comes to dissent, because often people feel either vulnerable or agitated while sharing a different perspective or concerns. In this session we will practice what it would be like to follow your intuition and how to follow it while facilitating. Please bring your own situation(s) so we can work with real life examples.",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-08-17-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-08-17-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Noncontroversial essence w/ Magda Baranska [14 Sep 2020]',  
		date: '2020-09-14',  
		description: "Magda will be leading a practice session on finding the Noncontroversial Essence. She says, In my opinion Noncontroversial Essence is the essence of Convergent Facilitation, because in order to make a decision that everyone in a room is supporting, we usually need to name what people have in common. This is a chance to develop your capacity, flow, and confidence in this key part of Convergent Facilitation.",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-09-14-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-09-14-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Maximizing collaboration when time is tight w/ Lisa Rothman [14 Jul 2020]',  
		date: '2020-07-14',  
		description: "On this call, Lisa discusses strategies for maximizing collaboration when time is tight.  Topics discussed include how to let go of attachment to outcome in the face of time pressure, strategies for raising the threshold of willingness while lowering the stakes, how to check to see what the cost of having a majority vote if time runs out will be for the group, what to do when you can’t find the noncontroversial essence in the moment, and how to describe what Convergent Facilitation is so that a group has enough context to buy into the process.",  
		preview: require('./showcase/lisa-rothman-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-07-14-lisa-rothman',  
		source: 'resources/recordings-coaching-calls/2020-07-14-lisa-rothman',  
	    tags: [],  
	}, 
{  
		title: 'Thresholds of Willingness w/ Lisa Rothman [12 Oct 2020]',  
		date: '2020-10-12',  
		description: "Determining where to set the Threshold of Willingness is essential for maximizing creativity and conserving the group's energy and your own.  If it's too high for the context, you risk squelching input.  Too low, and resentment mounts and fatigue grows.  Lisa looks forward to in depth exploration and practice of this skill with you! ",  
		preview: require('./showcase/lisa-rothman-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-10-12-lisa-rothman',  
		source: 'resources/recordings-coaching-calls/2020-10-12-lisa-rothman',  
	    tags: [],  
	}, 
{  
		title: 'Thresholds w/ Verene Nicolas [12 Aug 2020]',  
		date: '2020-08-12',  
		description: "Verene will offer coaching on Thresholds. The capacity to both integrate dissent and discern willingness is one of the key skills that differentiates CF from other methods of collaborative decision making. It includes asking carefully crafted show-of-hands questions, according to a low to high threshold spectrum. In this session, we will practice when to lean towards a low, medium, or high threshold, as well as how to craft the questions themselves.  ",  
		preview: require('./showcase/verene-nicolas-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-08-12-verene-nicolas',  
		source: 'resources/recordings-coaching-calls/2020-08-12-verene-nicolas',  
	    tags: ['verene'],  
	}, 
{  
		title: 'Noncontroversial Essence w/ Emma Quayle [11 May 2020]',  
		date: '2020-05-11',  
		description: "GczuRuoZvYU",  
		preview: require('./showcase/generic-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-05-11-emma-quayle',  
		source: 'resources/recordings-coaching-calls/2020-05-11-emma-quayle',  
	    tags: [],  
	}, 
{  
		title: 'Growing your Convergent Facilitation skills through feedback w/ Roni Wiener [09 Nov 2020]',  
		date: '2020-11-09',  
		description: "How are you doing as a Convergent Facilitator? Are you aware of your strengths and challenges? What is your plan for growing your skills over time? In this session we'll play with different approaches to self-assessment and feedback so you can discover what works best for you. We'll also practice how to prioritize and integrate learnings so you can get the most out of future coaching calls and CF activities.",  
		preview: require('./showcase/roni-wiener-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-11-09-roni-wiener',  
		source: 'resources/recordings-coaching-calls/2020-11-09-roni-wiener',  
	    tags: [],  
	}, 
{  
		title: 'Open coaching call w/ Paul Kahawatte [07 Sep 2020]',  
		date: '2020-09-07',  
		description: "Paul will be leading a practice session on finding the Noncontroversial Essence. This is a chance to develop your capacity, flow, and confidence in a key part of Convergent Facilitation.",  
		preview: require('./showcase/paul-kahawatte-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-09-07-paul-kahawatte',  
		source: 'resources/recordings-coaching-calls/2020-09-07-paul-kahawatte',  
	    tags: [],  
	}, 
{  
		title: 'How to compensate for power differences interfering with collaboration w/ Aya Caspi [07 Dec 2020]',  
		date: '2020-12-07',  
		description: "In this session we will explore how to attend to power differences as CF facilitators so that real collaboration can happen at every phase of the process, resulting in a robust decision that includes all needs and truly works for all. ",  
		preview: require('./showcase/aya-caspi-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-12-07-aya-caspi',  
		source: 'resources/recordings-coaching-calls/2020-12-07-aya-caspi',  
	    tags: [],  
	}, 
{  
		title: 'Process Arc and non-linear application w/ Mariam Gafforio [06 May 2020]',  
		date: '2020-05-06',  
		description: "On this call, Mars explores the Convergenet Facilitation process arc and non-linear applications. While CF has distinct phases, in real life they often don’t unfold in order. Mars offers examples of how the process may flow and how to remain flexible when planning and facilitating. ",  
		preview: require('./showcase/mariam-gafforio-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-05-06-mariam-gafforio',  
		source: 'resources/recordings-coaching-calls/2020-05-06-mariam-gafforio',  
	    tags: [],  
	}, 
{  
		title: 'Noncontroversial essence w/ Aya Caspi [06 Jul 2020]',  
		date: '2020-07-06',  
		description: "Sometimes people have strategies that are diametrically opposed to each other. When does it make sense to find the noncontroversial essence underlying each of them and when does it make sense to find a noncontroversial essence that applies to both of them?",  
		preview: require('./showcase/aya-caspi-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-07-06-aya-caspi',  
		source: 'resources/recordings-coaching-calls/2020-07-06-aya-caspi',  
	    tags: [],  
	}, 
{  
		title: 'Noncontroversial essence w/ Neil Howard [05 Oct 2020]',  
		date: '2020-10-05',  
		description: "Sometimes people have strategies that are diametrically opposed to each other. When does it make sense to find the noncontroversial essence underlying each of them and when does it make sense to find a noncontroversial essence that applies to both of them?",  
		preview: require('./showcase/neil-howard-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-10-05-neil-howard',  
		source: 'resources/recordings-coaching-calls/2020-10-05-neil-howard',  
	    tags: [],  
	}, 
{  
		title: 'Practice - Facilitated Role Plays with Support w/ Magda Baranska [05 Nov 2020]',  
		date: '2020-11-05',  
		description: "You will have an opportunity to sit in the facilitator chair and practice your skills related to holding a Convergent Facilitation process. Please bring your own situation(s) so we can work with real life examples. We will practice the whole process or certain phases depending on your preference. You will be able to dial the difficulty level to best serve your learning. And you will have lots of support. ",  
		preview: require('./showcase/magda-baranska-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-11-05-magda-baranska',  
		source: 'resources/recordings-coaching-calls/2020-11-05-magda-baranska',  
	    tags: [],  
	}, 
{  
		title: 'Noncontroversial Essence w/ Neil Howard [03 Jun 2020]',  
		date: '2020-06-03',  
		description: "wOCw0A574a4",  
		preview: require('./showcase/neil-howard-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-06-03-neil-howard',  
		source: 'resources/recordings-coaching-calls/2020-06-03-neil-howard',  
	    tags: [],  
	}, 
{  
		title: 'Thresholds w/ Paul Kahawatte [03 Dec 2020]',  
		date: '2020-12-03',  
		description: "In this session we will look at and practice using a couple of the key variables within thresholds, and we may explore how to use thresholds in sequence.",  
		preview: require('./showcase/paul-kahawatte-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-12-03-paul-kahawatte',  
		source: 'resources/recordings-coaching-calls/2020-12-03-paul-kahawatte',  
	    tags: [],  
	}, 
{  
		title: 'Peer coaching w/ Roni Wiener [03 Aug 2020]',  
		date: '2020-08-03',  
		description: "Roni is inviting everyone to practice some peer coaching and feedback. This is a great opportunity to think about how you can help others collaborate more effectively and care for everyone's needs. Wouldn't it be wonderful to share and integrate CF principles with everyone in our lives?",  
		preview: require('./showcase/roni-wiener-cf-coaching-call.png'),  
		website: 'resources/recordings-coaching-calls/2020-08-03-roni-wiener',  
		source: 'resources/recordings-coaching-calls/2020-08-03-roni-wiener',  
	    tags: [],  
	}, 
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];


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
