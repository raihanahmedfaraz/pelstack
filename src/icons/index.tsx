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

const XIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 12"
    fill="none"
    aria-hidden="true"
    className={cn('fill-secondary dark:fill-accent', className)}>
    <g clipPath="url(#clip0_928_12896)">
      <path d="M10.1161 0H11.9564L7.93583 5.08308L12.6657 12H8.96225L6.06156 7.80492L2.7425 12H0.901058L5.20148 6.56308L0.664062 0H4.46156L7.08353 3.83446L10.1161 0ZM9.47018 10.7815H10.4899L3.90746 1.15446H2.81316L9.47018 10.7815Z" />
    </g>
    <defs>
      <clipPath>
        <rect width={12} height={12} fill="white" transform="translate(0.664062)" />
      </clipPath>
    </defs>
  </svg>
);

export { CheckIcon, CalendarIcon, StopwatchIcon, FacebookIcon, DribbleIcon, GithubIcon, LinkedinIcon, XIcon };

const ProjectAchievementCheckIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
      stroke="#1A1A1C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 4L12 14.01L9 11.01" stroke="#1A1A1C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectTeamMembersIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 21.0009V19.0009C22.9993 18.1146 22.7044 17.2536 22.1614 16.5532C21.6184 15.8527 20.8581 15.3524 20 15.1309"
      stroke="#1A1A1C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke="#1A1A1C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809"
      stroke="#1A1A1C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke="#1A1A1C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectSatisfiedClientsIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
      stroke="#1A1A1C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { ProjectAchievementCheckIcon, ProjectTeamMembersIcon, ProjectSatisfiedClientsIcon };
