import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const BackArrow = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M7 15h20a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z" fill="#010101" />
    <Path
      d="m7.414 16 8.294 8.292a1.002 1.002 0 0 1-1.416 1.416l-9-9a.999.999 0 0 1 0-1.416l9-9a1.001 1.001 0 1 1 1.416 1.416L7.414 16Z"
      fill="#010101"
    />
  </Svg>
);

export const EyeIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#010101"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6Z"
      stroke="#010101"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EyeCloseIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m1 1 18 18M8.5 8.677a2 2 0 0 0 2.823 2.823"
      stroke="#010101"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.362 5.561C3.68 6.741 2.279 8.421 1 10.001c1.889 2.99 5.282 6 9 6 1.55 0 3.043-.524 4.395-1.35M10 4c4.008 0 6.701 3.158 9 6-.33.52-.69 1.022-1.078 1.5"
      stroke="#010101"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ErrorIcon = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.937 2.667C8.62 2.667 2.667 8.648 2.667 16S8.648 29.333 16 29.333 29.333 23.352 29.333 16 23.324 2.667 15.937 2.667Zm.063 24C10.119 26.667 5.333 21.88 5.333 16S10.09 5.333 15.937 5.333c5.918 0 10.73 4.786 10.73 10.667S21.88 26.667 16 26.667Z"
      fill="red"
    />
    <Path
      d="M14.667 9.333h2.666v9.334h-2.666V9.333Zm0 10.667h2.666v2.667h-2.666V20Z"
      fill="red"
    />
  </Svg>
);

export const LogoutIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
    width={24}
    height={24}
    {...props}>
    <Path
      d="m19.286 12-3-3m-4 3h7-7Zm7 0-3 3 3-3ZM19.286 6V5a2 2 0 0 0-2-2h-10a2.003 2.003 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
      style={{
        fill: 'none',
        fillRule: 'nonzero',
        stroke: '#010101',
        strokeWidth: 1,
      }}
    />
  </Svg>
);
