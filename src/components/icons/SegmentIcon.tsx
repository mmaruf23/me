import React from 'react';
type SegmentIconProps = {
  width?: number;
  height?: number;
  className?: string;
};
const SegmentIcon = ({
  width = 24,
  height = 24,
  className = '',
}: SegmentIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={`${height}px`}
      viewBox="0 -960 960 960"
      width={`${width}px`}
      fill="currentColor"
    >
      <path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z" />
    </svg>
  );
};

export default SegmentIcon;
