import { cn } from '@/utils/cn';
import { FC } from 'react';

interface ArrowIconProps {
  className?: string;
}

const CheckIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path
      d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
      className={cn('fill-white dark:fill-black', className)}
    />
  </svg>
);

const CalendarIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" className={cn('stroke-current', className)} />
    <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn('stroke-current', className)} />
    <path d="M7 11h10M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn('stroke-current', className)} />
  </svg>
);

const StopwatchIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M9 2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={cn('stroke-current', className)} />
    <path d="M12 7v5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn('stroke-current', className)} />
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" className={cn('stroke-current', className)} />
  </svg>
);

const FacebookIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.4-3.61 3.53-3.61 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.53.73-1.53 1.48v1.77h2.6l-.42 2.9h-2.18v7.03C18.34 21.2 22 17.06 22 12.07z" className={cn('fill-current', className)} />
  </svg>
);

const DribbleIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" className={cn('stroke-current', className)} strokeWidth={1.2} />
    <path d="M4 8s6 2 12 1" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" className={cn('stroke-current', className)} />
  </svg>
);

const GithubIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.338 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" className={cn('fill-current', className)} />
  </svg>
);

const LinkedinIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v12H0zM7 8h4.8v1.7h.1c.7-1.3 2.4-2.6 4.9-2.6C22.1 7.1 24 9.3 24 13.3V20h-5v-6.1c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4V20H7V8z" className={cn('fill-current', className)} />
  </svg>
);

export { CheckIcon, CalendarIcon, StopwatchIcon, FacebookIcon, DribbleIcon, GithubIcon, LinkedinIcon };

const ProjectAchievementCheckIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" className={cn('stroke-current', className)} strokeWidth={1.2} />
    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cn('stroke-current', className)} />
  </svg>
);

const ProjectTeamMembersIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" className={cn('fill-current', className)} />
    <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z" className={cn('fill-current', className)} />
  </svg>
);

const ProjectSatisfiedClientsIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" className={cn('stroke-current', className)} strokeWidth={1.2} />
    <path d="M8 14s1.5-2 4-2 4 2 4 2" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" className={cn('stroke-current', className)} />
    <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" className={cn('stroke-current', className)} />
  </svg>
);

export { ProjectAchievementCheckIcon, ProjectTeamMembersIcon, ProjectSatisfiedClientsIcon };
