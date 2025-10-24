import { ProjectAchievementCheckIcon, ProjectSatisfiedClientsIcon, ProjectTeamMembersIcon } from '@/icons';

// Project achievements data
export const projectAchievements = [
  {
    icon: ProjectAchievementCheckIcon,
    number: 60,
    suffix: '%',
    label: 'Project Completed',
    bgColor: 'bg-ns-yellow',
    speed: 2000,
    interval: 280,
    rooms: 2,
    space: 12,
  },
  {
    icon: ProjectTeamMembersIcon,
    number: 25,
    suffix: '%',
    label: 'Team Members',
    bgColor: 'bg-ns-cyan',
    speed: 2000,
    interval: 280,
    rooms: 2,
    space: 12,
  },
  {
    icon: ProjectSatisfiedClientsIcon,
    number: 250,
    suffix: '+',
    label: 'Satisfied Clients',
    bgColor: 'bg-ns-red',
    speed: 1500,
    interval: 280,
    rooms: 3,
    space: 12,
  },
];

// Company achievements data
export const companyAchievements = [
  {
    icon: ProjectAchievementCheckIcon,
    number: 95,
    suffix: '%',
    label: 'Success Rate',
    bgColor: 'bg-green-500',
    speed: 1800,
    interval: 250,
    rooms: 2,
    space: 10,
  },
  {
    icon: ProjectTeamMembersIcon,
    number: 50,
    suffix: '+',
    label: 'Expert Developers',
    bgColor: 'bg-blue-500',
    speed: 2000,
    interval: 300,
    rooms: 2,
    space: 15,
  },
  {
    icon: ProjectSatisfiedClientsIcon,
    number: 1000,
    suffix: '+',
    label: 'Happy Customers',
    bgColor: 'bg-purple-500',
    speed: 1200,
    interval: 200,
    rooms: 4,
    space: 8,
  },
];

// Marketing achievements data
export const businessAchievements = [
  {
    icon: ProjectAchievementCheckIcon,
    number: 100,
    suffix: '+ ',
    label: 'Countries',
    bgColor: 'bg-ns-yellow',
    speed: 1600,
    interval: 220,
    rooms: 2,
    space: 10,
  },
  {
    icon: ProjectTeamMembersIcon,
    number: 50,
    suffix: 'M+',
    label: 'Peoples',
    bgColor: 'bg-ns-cyan',
    speed: 2500,
    interval: 350,
    rooms: 2,
    space: 12,
  },
  {
    icon: ProjectSatisfiedClientsIcon,
    number: 50,
    suffix: 'K+',
    label: 'Orders Processed',
    bgColor: 'bg-ns-red',
    speed: 1400,
    interval: 180,
    rooms: 2,
    space: 12,
  },
];
