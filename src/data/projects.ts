import qaWatchdogImage from '~/assets/images/qa-watchdog.png';
import rawDumpToolImage from '~/assets/images/raw-dump-tool.jpeg';
import serverMonitorImage from '~/assets/images/WhatMyServerDoing.png';

export const projects = [
  {
    slug: 'whatmyserverdoing',
    title: 'WhatMyServerDoing',
    description:
      'A cross-platform server monitoring tool built with Tauri and Go, enabling real-time monitoring of multiple server resources through an elegant interface.',
    image: serverMonitorImage,
    publishDate: new Date('2025-04-29'),
    github: 'https://github.com/neerajlovecyber/WhatMyServerDoing',
  },
  {
    slug: 'raw-dump-tool',
    title: 'Raw Dump Tool',
    description:
      'A Python-based GUI Memory Dumping Forensics Tool for digital investigators, featuring encryption, tamper detection, and comprehensive analysis capabilities.',
    image: rawDumpToolImage,
    publishDate: new Date('2025-04-29'),
    github: 'https://github.com/neerajlovecyber/RawDumpTool',
  },
  {
    slug: 'qa-watchdog',
    title: 'QA WatchDog',
    description:
      'QA WatchDog is a Python-based tool created by Neeraj Singh, designed to streamline and simplify the QA testing process.',
    image: qaWatchdogImage,
    publishDate: new Date('2025-04-29'),
    github: 'https://github.com/neerajlovecyber/qa-watchdog',
  },
];

export const featuredProjects = projects.slice(0, 3);