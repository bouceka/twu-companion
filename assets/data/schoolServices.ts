import { SchoolService } from '@/types';

export const SCHOOL_SERVICES: SchoolService[] = [
  {
    id: 1,
    title: 'Moodle',
    description: 'See your class resources and information.',
    icon: 'chalkboard',
    href: 'https://learn.twu.ca/',
  },
  {
    id: 2,
    title: 'Student Portal',
    description: 'Access your registration and account.',
    icon: 'right-to-bracket',
    iconVersion: 6,
    href: 'https://ics.twu.ca/ICS/My_Account/',
  },
  {
    id: 3,
    title: 'Service Hub',
    description: 'Ask all your questions',
    icon: 'question-circle',
    href: 'https://trinitywestern.teamdynamix.com/TDClient/1904/Portal/Requests/ServiceCatalog?CategoryID=18138&SIDs=11261/',
  },
  {
    id: 4,
    title: 'myTWU Email',
    description: 'Stay connected',
    icon: 'envelope',
    href: 'http://outlook.office.com/',
  },
];
