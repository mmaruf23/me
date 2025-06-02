import { IconProps } from '@/types/icon';
import React from 'react';

const SegmentIcon = ({ size = 24, className = '' }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      viewBox="0 -960 960 960"
      width={`${size}px`}
      fill="currentColor"
    >
      <path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z" />
    </svg>
  );
};

export default SegmentIcon;
