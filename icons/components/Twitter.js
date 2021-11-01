import * as React from 'react';

function SvgTwitter(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#twitter_svg__clip0_54:169)">
        <path
          fill="currentColor"
          d="M7.55 21.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A9.999 9.999 0 0024 4.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 002.165-2.723A9.897 9.897 0 0120.213 3.8a4.93 4.93 0 00-8.394 4.49A13.985 13.985 0 011.673 3.15a4.93 4.93 0 001.523 6.57 4.93 4.93 0 01-2.23-.614v.06a4.922 4.922 0 003.95 4.829 4.893 4.893 0 01-2.221.084 4.933 4.933 0 004.597 3.422A9.875 9.875 0 010 19.538a13.969 13.969 0 007.55 2.212z"
        />
      </g>
      <defs>
        <clipPath id="twitter_svg__clip0_54:169">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgTwitter;