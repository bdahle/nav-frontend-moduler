import React from "react";

/* eslint-disable max-len */

export const CheckIcon = (props) => {
  const { fill = "#38a161", ...rest } = props;
  return (
    <svg
      version="1.1"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
      {...rest}
    >
      {rest.title && <title>{rest.title}</title>}
      <path
        d="M23.854,5.396l-3.5-3.5c-0.195-0.195-0.512-0.195-0.707,0L7.5,14.043l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707,0
                l-3.5,3.5c-0.195,0.195-0.195,0.512,0,0.707l7,7C7.244,22.201,7.372,22.25,7.5,22.25s0.256-0.049,0.354-0.146l16-16
                C24.049,5.908,24.049,5.592,23.854,5.396z"
      />
    </svg>
  );
};

export const CrossIcon = (props) => {
  const { fill = "#C30000", ...rest } = props;
  return (
    <svg
      version="1.1"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      {rest.title && <title>{rest.title}</title>}
      <path
        d="M17.207,12.01l6.658-6.634c0.096-0.093,0.149-0.22,0.149-0.353c0-0.133-0.053-0.26-0.146-0.354L19.375,0.16
                c-0.092-0.094-0.221-0.147-0.352-0.147h-0.002c-0.133,0-0.26,0.052-0.352,0.146l-6.66,6.634L5.375,0.134
                C5.283,0.04,5.154-0.013,5.023-0.014H5.021c-0.133,0-0.258,0.053-0.352,0.146L0.16,4.624c-0.195,0.194-0.195,0.511-0.002,0.707
                l6.635,6.659l-6.66,6.634c-0.195,0.194-0.195,0.511,0,0.707l4.49,4.509c0.094,0.094,0.221,0.146,0.354,0.146h0.002
                c0.131,0,0.258-0.052,0.352-0.146l6.66-6.634l6.633,6.659c0.098,0.099,0.227,0.148,0.355,0.148c0.127,0,0.254-0.049,0.352-0.146
                l4.51-4.491c0.195-0.194,0.195-0.511,0-0.707L17.207,12.01z"
      />
    </svg>
  );
};

export const NAVLogoDark = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`navLogo ${className}`}
    width="90"
    height="57"
    viewBox="0 0 269 169"
    focusable="false"
    aria-label="Nav logo mørk versjon"
    role="img"
  >
    <defs>
      <path d="M22.407 43.417V.687H.564v42.73h21.843z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#262626"
        d="M125.31 168.942c-46.642 0-84.46-37.817-84.46-84.465C40.85 37.824 78.667 0 125.31 0c46.657 0 84.48 37.824 84.48 84.477 0 46.648-37.823 84.465-84.48 84.465zM0 121.359l17.265-42.73h16.589l-17.243 42.73zM213.044 121.359l17.044-42.73h9.044l-17.043 42.73z"
      />
      <g transform="translate(246 77.942)">
        <path fill="#262626" d="M.564 43.417L17.604.687h4.803L5.364 43.418z" />
      </g>
      <path
        fill="#FEFEFE"
        d="M197.36 78.63h-15.016s-1.035 0-1.4.914l-8.31 25.439-8.304-25.44c-.366-.913-1.407-.913-1.407-.913h-28.872c-.625 0-1.149.522-1.149 1.143v8.639c0-6.853-7.292-9.782-11.562-9.782-9.562 0-15.963 6.298-17.956 15.873-.108-6.352-.636-8.628-2.347-10.96-.786-1.141-1.922-2.101-3.159-2.895-2.547-1.492-4.834-2.018-9.749-2.018h-5.77s-1.044 0-1.412.914l-5.25 13.013V79.773c0-.621-.52-1.143-1.145-1.143H61.198s-1.03 0-1.406.914l-5.459 13.53s-.545 1.354.701 1.354h5.133v25.784c0 .64.504 1.147 1.147 1.147h13.238c.624 0 1.144-.507 1.144-1.147V94.428h5.16c2.961 0 3.588.08 4.74.618.694.262 1.32.792 1.66 1.403.698 1.314.873 2.892.873 7.545v16.218c0 .64.514 1.147 1.15 1.147h12.687s1.434 0 2.001-1.416l2.812-6.95c3.74 5.237 9.893 8.366 17.541 8.366h1.671s1.443 0 2.014-1.416l4.897-12.128v12.397c0 .64.524 1.147 1.15 1.147h12.951s1.43 0 2.003-1.416c0 0 5.18-12.861 5.2-12.958h.008c.2-1.07-1.153-1.07-1.153-1.07h-4.623V83.847l14.545 36.096c.568 1.416 2 1.416 2 1.416h15.301s1.44 0 2.008-1.416l16.125-39.93c.558-1.383-1.057-1.383-1.057-1.383zm-64.458 27.285h-8.7c-3.463 0-6.28-2.804-6.28-6.271 0-3.461 2.817-6.283 6.28-6.283h2.433c3.454 0 6.267 2.822 6.267 6.283v6.27z"
      />
    </g>
  </svg>
);
export const NAVLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="navLogo"
    width="90"
    height="57"
    viewBox="0 0 269 169"
    focusable="false"
  >
    <defs>
      <path d="M22.407 43.417V.687H.564v42.73h21.843z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#C30000"
        d="M125.31 168.942c-46.642 0-84.46-37.817-84.46-84.465C40.85 37.824 78.667 0 125.31 0c46.657 0 84.48 37.824 84.48 84.477 0 46.648-37.823 84.465-84.48 84.465zM0 121.359l17.265-42.73h16.589l-17.243 42.73zM213.044 121.359l17.044-42.73h9.044l-17.043 42.73z"
      />
      <g transform="translate(246 77.942)">
        <path fill="#C30000" d="M.564 43.417L17.604.687h4.803L5.364 43.418z" />
      </g>
      <path
        fill="#FEFEFE"
        d="M197.36 78.63h-15.016s-1.035 0-1.4.914l-8.31 25.439-8.304-25.44c-.366-.913-1.407-.913-1.407-.913h-28.872c-.625 0-1.149.522-1.149 1.143v8.639c0-6.853-7.292-9.782-11.562-9.782-9.562 0-15.963 6.298-17.956 15.873-.108-6.352-.636-8.628-2.347-10.96-.786-1.141-1.922-2.101-3.159-2.895-2.547-1.492-4.834-2.018-9.749-2.018h-5.77s-1.044 0-1.412.914l-5.25 13.013V79.773c0-.621-.52-1.143-1.145-1.143H61.198s-1.03 0-1.406.914l-5.459 13.53s-.545 1.354.701 1.354h5.133v25.784c0 .64.504 1.147 1.147 1.147h13.238c.624 0 1.144-.507 1.144-1.147V94.428h5.16c2.961 0 3.588.08 4.74.618.694.262 1.32.792 1.66 1.403.698 1.314.873 2.892.873 7.545v16.218c0 .64.514 1.147 1.15 1.147h12.687s1.434 0 2.001-1.416l2.812-6.95c3.74 5.237 9.893 8.366 17.541 8.366h1.671s1.443 0 2.014-1.416l4.897-12.128v12.397c0 .64.524 1.147 1.15 1.147h12.951s1.43 0 2.003-1.416c0 0 5.18-12.861 5.2-12.958h.008c.2-1.07-1.153-1.07-1.153-1.07h-4.623V83.847l14.545 36.096c.568 1.416 2 1.416 2 1.416h15.301s1.44 0 2.008-1.416l16.125-39.93c.558-1.383-1.057-1.383-1.057-1.383zm-64.458 27.285h-8.7c-3.463 0-6.28-2.804-6.28-6.271 0-3.461 2.817-6.283 6.28-6.283h2.433c3.454 0 6.267 2.822 6.267 6.283v6.27z"
      />
    </g>
  </svg>
);

export const NAVLogoWhite = ({ ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 269 169"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    {...props}
  >
    <path d="M0 121.359L17.265 78.6299H33.854L16.611 121.359H0Z" fill="white" />
    <path
      d="M213.044 121.359L230.088 78.6299H239.132L222.089 121.359H213.044Z"
      fill="white"
    />
    <path
      d="M246.563 121.359L263.604 78.6299H268.407L251.364 121.359H246.563Z"
      fill="white"
    />
    <path
      d="M197.36 78.6299H182.344C182.344 78.6299 181.309 78.6299 180.943 79.5439L172.633 104.983L164.33 79.5439C163.964 78.6299 162.923 78.6299 162.923 78.6299H134.051C133.426 78.6299 132.902 79.1519 132.902 79.7729V88.4119C132.902 81.5589 125.61 78.6299 121.34 78.6299C111.778 78.6299 105.377 84.9279 103.384 94.5029C103.276 88.1509 102.748 85.8749 101.037 83.5439C100.251 82.4019 99.1154 81.4419 97.8784 80.6479C95.3314 79.1559 93.0444 78.6299 88.1294 78.6299H82.3584C82.3584 78.6299 81.3154 78.6299 80.9474 79.5439L75.6964 92.5569V79.7729C75.6964 79.1519 75.1764 78.6299 74.5524 78.6299H61.1984C61.1984 78.6299 60.1674 78.6299 59.7924 79.5439L54.3334 93.0749C54.3334 93.0749 53.7884 94.4279 55.0344 94.4279H60.1674V120.212C60.1674 120.852 60.6714 121.359 61.3144 121.359H74.5524C75.1764 121.359 75.6964 120.852 75.6964 120.212V94.4279H80.8564C83.8174 94.4279 84.4444 94.5089 85.5964 95.0459C86.2904 95.3079 86.9154 95.8379 87.2564 96.4489C87.9544 97.7629 88.1294 99.3409 88.1294 103.994V120.212C88.1294 120.852 88.6434 121.359 89.2784 121.359H101.966C101.966 121.359 103.4 121.359 103.967 119.943L106.779 112.993C110.518 118.23 116.672 121.359 124.32 121.359H125.991C125.991 121.359 127.434 121.359 128.005 119.943L132.902 107.815V120.212C132.902 120.852 133.426 121.359 134.051 121.359H147.003C147.003 121.359 148.432 121.359 149.006 119.943C149.006 119.943 154.186 107.082 154.206 106.985H154.214C154.413 105.915 153.061 105.915 153.061 105.915H148.438V83.8469L162.983 119.943C163.551 121.359 164.983 121.359 164.983 121.359H180.284C180.284 121.359 181.724 121.359 182.292 119.943L198.417 80.0139C198.975 78.6299 197.36 78.6299 197.36 78.6299ZM132.902 105.915H124.202C120.739 105.915 117.922 103.111 117.922 99.6438C117.922 96.1828 120.739 93.3608 124.202 93.3608H126.635C130.089 93.3608 132.902 96.1828 132.902 99.6438V105.915ZM125.309 168.942C78.6681 168.942 40.8491 131.125 40.8491 84.477C40.8491 37.824 78.6681 0 125.309 0C171.967 0 209.79 37.824 209.79 84.477C209.79 131.125 171.967 168.942 125.309 168.942Z"
      fill="white"
    />
  </svg>
);

export const NAVLogoCircle = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 168.9 168.9"
    focusable="false"
  >
    <path
      fill="#C30000"
      d="M84.5,168.9C37.8,168.9,0,131.1,0,84.5C0,37.8,37.8,0,84.5,0c46.7,0,84.5,37.8,84.5,84.5
            C168.9,131.1,131.1,168.9,84.5,168.9L84.5,168.9z"
    />
    <path
      fill="#FEFEFE"
      d="M156.5,78.6h-15c0,0-1,0-1.4,0.9l-8.3,25.4l-8.3-25.4c-0.4-0.9-1.4-0.9-1.4-0.9H93.2c-0.6,0-1.1,0.5-1.1,1.1
            v8.6c0-6.9-7.3-9.8-11.6-9.8c-9.6,0-16,6.3-18,15.9c-0.1-6.4-0.6-8.6-2.3-11c-0.8-1.1-1.9-2.1-3.2-2.9c-2.5-1.5-4.8-2-9.7-2h-5.8
            c0,0-1,0-1.4,0.9l-5.2,13V79.8c0-0.6-0.5-1.1-1.1-1.1H20.3c0,0-1,0-1.4,0.9l-5.5,13.5c0,0-0.5,1.4,0.7,1.4h5.1v25.8
            c0,0.6,0.5,1.1,1.1,1.1h13.2c0.6,0,1.1-0.5,1.1-1.1V94.4H40c3,0,3.6,0.1,4.7,0.6c0.7,0.3,1.3,0.8,1.7,1.4c0.7,1.3,0.9,2.9,0.9,7.5
            v16.2c0,0.6,0.5,1.1,1.2,1.1h12.7c0,0,1.4,0,2-1.4l2.8-6.9c3.7,5.2,9.9,8.4,17.5,8.4h1.7c0,0,1.4,0,2-1.4l4.9-12.1v12.4
            c0,0.6,0.5,1.1,1.1,1.1h13c0,0,1.4,0,2-1.4c0,0,5.2-12.9,5.2-13h0c0.2-1.1-1.2-1.1-1.2-1.1h-4.6V83.8l14.5,36.1c0.6,1.4,2,1.4,2,1.4
            h15.3c0,0,1.4,0,2-1.4L157.6,80C158.1,78.6,156.5,78.6,156.5,78.6L156.5,78.6z M92.1,105.9h-8.7c-3.5,0-6.3-2.8-6.3-6.3
            c0-3.5,2.8-6.3,6.3-6.3h2.4c3.5,0,6.3,2.8,6.3,6.3V105.9L92.1,105.9z"
    />
  </svg>
);

export const TypoIcon = (props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 76.4 47.8"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        d="M0,46.9L14.7,0h12.7l14.7,46.9H30.9L28,35.8H13.7l-2.9,11.2H0z M17,23.2l-1.2,4.3h10l-1.1-4.3c-0.7-2.4-1.3-4.8-1.9-7.5
                c-0.6-2.6-1.2-5.2-1.9-7.6h-0.3c-0.6,2.5-1.2,5.1-1.8,7.7C18.3,18.3,17.7,20.8,17,23.2z"
      />
      <path
        d="M56.4,47.8c-1.6,0-3.1-0.3-4.4-0.8c-1.3-0.6-2.4-1.3-3.3-2.3c-0.9-1-1.6-2.1-2.1-3.4C46,40,45.7,38.5,45.7,37
                c0-3.7,1.6-6.7,4.8-8.8c3.2-2.1,8.3-3.5,15.3-4.2c-0.1-1.6-0.6-2.8-1.4-3.8c-0.8-0.9-2.2-1.4-4.2-1.4c-1.5,0-3.1,0.3-4.6,0.9
                c-1.5,0.6-3.1,1.4-4.9,2.4l-3.8-7c2.3-1.4,4.7-2.5,7.2-3.4c2.5-0.9,5.2-1.3,8-1.3c4.6,0,8.1,1.3,10.5,3.9c2.4,2.6,3.6,6.7,3.6,12.2
                v20.4h-8.6L67,43.3h-0.3c-1.5,1.3-3.1,2.4-4.8,3.3C60.2,47.4,58.4,47.8,56.4,47.8z M60,39.6c1.2,0,2.2-0.3,3.1-0.8
                c0.9-0.5,1.8-1.3,2.7-2.2v-6.3c-3.7,0.5-6.3,1.3-7.8,2.3c-1.4,1-2.2,2.2-2.2,3.6c0,1.2,0.4,2,1.1,2.6C57.7,39.3,58.7,39.6,60,39.6z
                "
      />
    </g>
  </svg>
);

export const ButtonIcon = (props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 145 47"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        style={{ fill: "#ffffff" }}
        d="M141,46H4c-1.7,0-3-1.3-3-3V4c0-1.7,1.3-3,3-3h137c1.6,0,3,1.3,3,3v39C144,44.7,142.6,46,141,46z"
      />
      <path
        style={{ fill: "#0067c5" }}
        d="M141,47H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h137c2.2,0,4,1.8,4,4v39C145,45.2,143.2,47,141,47z M4,2
                C2.9,2,2,2.9,2,4v39c0,1.1,0.9,2,2,2h137c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z"
      />
    </g>
    <g>
      <path
        style={{ fill: "#0067c5" }}
        d="M46.3,29.6V17.9h2.6v4.8H49l3.5-4.8h2.9l-3.5,4.7l4.2,7.1h-2.9l-2.9-5l-1.4,1.8v3.1H46.3z"
      />
      <path
        style={{ fill: "#0067c5" }}
        d="M57.3,29.6V17.9H60l3.1,5.8l1.2,2.6h0.1c-0.1-0.6-0.1-1.3-0.2-2.1C64,23.4,64,22.7,64,22v-4.1h2.5v11.7h-2.7
                l-3.1-5.9l-1.2-2.6h-0.1c0.1,0.6,0.1,1.3,0.2,2.1c0.1,0.7,0.1,1.5,0.1,2.2v4.2H57.3z"
      />
      <path
        style={{ fill: "#0067c5" }}
        d="M67.8,29.6l3.7-11.7h3.2l3.7,11.7h-2.8l-0.7-2.8h-3.6l-0.7,2.8H67.8z M72,23.7l-0.3,1.1h2.5L74,23.7
                c-0.2-0.6-0.3-1.2-0.5-1.9c-0.2-0.7-0.3-1.3-0.5-1.9H73c-0.1,0.6-0.3,1.3-0.4,1.9C72.4,22.5,72.2,23.1,72,23.7z"
      />
      <path
        style={{ fill: "#0067c5" }}
        d="M79.6,29.6V17.9h4c0.6,0,1.3,0.1,1.8,0.2c0.6,0.1,1.1,0.3,1.5,0.6s0.8,0.7,1,1.2s0.4,1.1,0.4,1.8
                c0,0.7-0.1,1.3-0.4,1.8c-0.2,0.5-0.6,0.9-1,1.2c-0.4,0.3-0.9,0.6-1.5,0.7s-1.1,0.2-1.8,0.2h-1.5v4H79.6z M82.2,23.5h1.3
                c1.4,0,2.2-0.6,2.2-1.9c0-0.6-0.2-1-0.6-1.3c-0.4-0.3-0.9-0.4-1.7-0.4h-1.2V23.5z"
      />
      <path
        style={{ fill: "#0067c5" }}
        d="M90.3,29.6V17.9h4c0.6,0,1.3,0.1,1.8,0.2s1.1,0.3,1.5,0.6s0.8,0.7,1,1.2S99,21,99,21.7c0,0.7-0.1,1.3-0.4,1.8
                c-0.2,0.5-0.6,0.9-1,1.2c-0.4,0.3-0.9,0.6-1.5,0.7c-0.6,0.2-1.1,0.2-1.8,0.2H93v4H90.3z M93,23.5h1.3c1.4,0,2.2-0.6,2.2-1.9
                c0-0.6-0.2-1-0.6-1.3c-0.4-0.3-0.9-0.4-1.7-0.4H93V23.5z"
      />
    </g>
  </svg>
);

export const VeilederIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 93" focusable="false">
    <path
      fill="#e7e5e2"
      d="M14 50.7C15 52.3 17.9 81 26.5 81S39 51.8 39 50.3c-13.2-7.6-25 .4-25 .4z"
    />
    <path
      fill="#5c4378"
      d="M38.7 50.2c6 2.9 15.3 10.9 15.3 18.3V93H0V68.5c0-7.1 8.5-14.8 14.5-18-.3.2-.5.3-.5.3 1 1.7 3.8 9.2 12.4 9.2C35 60 39 51.9 39 50.4c-.1-.1-.2-.2-.3-.2z"
    />
    <path
      fill="#d2242a"
      d="M46.7 76H31.2c-.7 0-1.3-.6-1.2-1.3v-8.5c0-.7.6-1.3 1.3-1.3h15.5c.7 0 1.3.6 1.3 1.3v8.5c-.1.7-.7 1.3-1.4 1.3"
    />
    <path
      fill="#fff"
      d="M42.9 71c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c2.1 0 3.8 1.7 3.8 3.8m-8.7 1.7h-.7l.8-1.9h.7l-.8 1.9zm9.3 0H43l.8-1.9h.5l-.8 1.9zm1.2 0h-.2l.8-1.9h.2l-.8 1.9z"
    />
    <path
      fill="#c52d35"
      d="M36.2 72.7h.6s.1 0 .1-.1v-1.8s0-.1-.1-.1h-.6s-.1 0-.1.1l-.2.6v.1h.2l.1 1.2c0-.1 0 0 0 0"
    />
    <path
      fill="#c52d35"
      d="M37.5 72.7h.6s.1 0 .1-.1v-1.8s0-.1-.1-.1h-.9s-.1 0-.1.1l-.2.6-.1.1h.5c.1 0 .2.1.2.2v1c-.1-.1-.1 0 0 0m2.6-1.9h-.6s-.1 0-.1.1v1.8s0 .1.1.1h.6s.1 0 .1-.1l.2-.6V72h-.2l-.1-1.2"
    />
    <path
      fill="#c52d35"
      d="M37.7 72.7h.4s.1 0 .1-.1l.2-.6v-.1h-.2c0 .1-.5.8-.5.8zm3.9-1.9h.7s.1 0 0 .1l-.7 1.8H41l.6-1.9"
    />
    <path
      fill="#c52d35"
      d="M40.8 70.8h-1c-.1 0 .3.1.3.1l.7 1.7s0 .1.1.1h.6l-.7-1.9m-1.3.6v.4s-.1-.4-.3-.4c-.3 0-.3.2-.3.3 0 .1.1.3.2.3h.5l-.3.7H39c-.2 0-.9-.3-.9-.9 0-.6.5-1 .9-1 .2-.1.5.2.5.6 0-.1 0-.1 0 0z"
    />
    <path
      fill="#5a1f57"
      d="M39.9 66.7h-1.6c-.1 0-.2-.1-.2-.2v-.3c0-.1.1-.2.2-.2h1.6c.1 0 .2.1.2.2v.3c0 .2-.1.2-.2.2"
    />
    <path fill="#c2b5cf" d="M38.7 66.5h.9V64h-.9v2.5z" />
    <path
      fill="#e7e5e2"
      d="M47.2 35.3C44.7 45.6 36.6 53.1 27 53.1S9.3 45.6 6.8 35.3c-.2.1-.5.1-.8.1-1.1 0-2-.8-2-1.7v-7c0-1 .9-1.7 2-1.7h.2C7.7 13.1 16.4 4 27 4c10.6 0 19.3 9.1 20.8 21h.2c1.1 0 2 .8 2 1.7v7c0 1-.9 1.7-2 1.7-.3 0-.5 0-.8-.1z"
    />
    <path
      fill="#635e59"
      d="M19 27.6c-1.4.1-1.9-2-1.4-3.4.1-.3.6-1.5 1.4-1.5.8 0 1.2.7 1.3.8.6 1.4.3 4-1.3 4.1m16.2 0c1.4.1 1.9-2 1.4-3.4-.1-.3-.6-1.5-1.4-1.5-.8 0-1.2.7-1.3.8-.6 1.4-.3 4 1.3 4.1"
    />
    <path
      fill="#d1bfa3"
      d="M26.8 34.6c-.4 0-.7-.1-1-.2-.3-.1-.4-.4-.3-.7.1-.3.4-.4.7-.3.5.2 1.5.1 2.2-.4.7-.4 1.1-1 1.2-1.5.1-.4-.1-.9-.4-1.3-.2-.2-.8-.2-1.6-.1-.3 0-.5-.1-.6-.4 0-.3.1-.5.4-.6 1.2-.2 2.1 0 2.6.6.5.7.8 1.4.6 2.1-.1.8-.7 1.6-1.7 2.2-.6.3-1.4.6-2.1.6z"
    />
    <path
      fill="#593a32"
      d="M27.1 42.1h-.3c-5.3-.2-7.3-4.1-7.4-4.3-.1-.3 0-.6.2-.7.2-.1.6 0 .7.2.1.1 1.9 3.6 6.6 3.8 4.7.2 6.4-3.7 6.4-3.7.1-.3.4-.4.7-.3.3.1.4.4.3.7-.1 0-2.1 4.3-7.2 4.3z"
    />
    <path
      fill="#f6b873"
      d="M6.6 30.7c.1-.1.1-.2.1-.3v-2c-.1-5.6 1.8-8.1 3.4-10.1 0 0-1 4.3-.3 3.4 3.8-5 21.4-1.6 25-8.1.5 3.6-4.1 4.6-4.1 4.6 3.7.7 6.9-.8 7.7-2.5.3 1.4-.6 2.4-1.9 3.4 4.5-.9 4.6-4 4.6-4 .6 4.1 5.3 2.5 5.3 9.3v6c0 .3.2.6.5.6h.5c.3 0 .5-.3.5-.6V26c.3-15.6-8.5-26-20.6-26C15.9 0 5 10.4 5 24.1v6.3c0 .4.2.6.5.6h.6c.2 0 .3-.1.5-.3"
    />
    <path
      fill="#f6b873"
      d="M25.9 43.4c-4.4 0-8-1.4-8-3.2s3.6-3.2 8-3.2 8 1.4 8 3.2c0 1.8-3.6 3.2-8 3.2m.8-9.4c-2.9 0-4.7.7-8.8 2.1-12.7 4.6-11.6-14-11.6-14C3.4 46 18.6 52 26.5 52c8.1 0 24.1-8.1 21-30 0 0 .4 17.1-12.9 13.8-3.7-.9-5-1.8-7.9-1.8z"
    />
  </svg>
);

export const GithubLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32.58 31.77"
    focusable="false"
  >
    <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" />
  </svg>
);
export const GithubLogoEm = ({ ...props }) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32.58 31.77"
    focusable="false"
    {...props}
  >
    <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" />
  </svg>
);

export const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-16.000000, -20.000000)">
        <g transform="translate(16.000000, 20.000000)">
          <g>
            <path
              d="M12,0 C5.383,0 0,5.384 0,12 C0,18.616 5.383,24 12,24 C18.616,24 24,18.616 24,12 C24,5.384 18.616,0 12,0 Z"
              fill="#1C6937"
              fillRule="nonzero"
            />
            <path
              d="M9.63993168,14.4414307 L16.0998211,8.60231554 C16.4920344,8.24700834 17.1087604,8.26567481 17.4763929,8.64623502 C17.8442028,9.02697893 17.8231421,9.62435747 17.430152,9.98049024 L10.2805711,16.4435337 C10.0985537,16.6069711 9.8612111,16.6956522 9.61751913,16.6956522 C9.36153632,16.6956522 9.11545171,16.5990262 8.92853154,16.419824 L6.54589388,14.1121315 C6.16586146,13.7440529 6.16586146,13.1465019 6.54589388,12.7784232 C6.92592631,12.4103446 7.54288359,12.4103446 7.92291602,12.7784232 L9.63993168,14.4414307 Z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-16.000000, -20.000000)">
        <g transform="translate(16.000000, 20.000000)">
          <g strokeWidth="1" fillRule="evenodd" fill="#A13A28">
            <path
              d="M11.9989565,0 C5.39478261,0 0.0125217391,5.37182609 8.24610291e-16,11.976 C-0.00626086957,15.1815652 1.23547826,18.1972174 3.49773913,20.4688696 C5.76,22.7394783 8.77147826,23.9937391 11.9770435,24 L12,24 C18.6031304,24 23.9864348,18.6271304 24,12.021913 C24.0125217,5.40626087 18.6396522,0.0125217391 11.9989565,0 Z"
              fillRule="nonzero"
            />
          </g>
          <path
            d="M12,10.6512393 L15.3719018,7.27933749 C15.7443518,6.9068875 16.3482125,6.9068875 16.7206625,7.27933749 C17.0931125,7.65178748 17.0931125,8.25564822 16.7206625,8.62809821 L13.3487607,12 L16.7206625,15.3719018 C17.0931125,15.7443518 17.0931125,16.3482125 16.7206625,16.7206625 C16.3482125,17.0931125 15.7443518,17.0931125 15.3719018,16.7206625 L12,13.3487607 L8.62809821,16.7206625 C8.25564822,17.0931125 7.65178748,17.0931125 7.27933749,16.7206625 C6.9068875,16.3482125 6.9068875,15.7443518 7.27933749,15.3719018 L10.6512393,12 L7.27933749,8.62809821 C6.9068875,8.25564822 6.9068875,7.65178748 7.27933749,7.27933749 C7.65178748,6.9068875 8.25564822,6.9068875 8.62809821,7.27933749 L12,10.6512393 Z"
            fill="#FFFFFF"
            fillRule="nonzero"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const SketchLogo = () => (
  <svg
    viewBox="0 0 494 447"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-9.000000, -28.000000)">
        <g transform="translate(9.000000, 28.000000)">
          <g fill="#FFAE00">
            <polygon
              transform="translate(247.000000, 223.500000) rotate(-180.000000) translate(-247.000000, -223.500000) "
              points="247 5.68434189e-14 494 287 387 432 247 447 107 432 -2.84217094e-13 287"
            />
          </g>
          <g transform="translate(0.000000, 160.000000)" fill="#EC6C00">
            <polygon
              transform="translate(247.000000, 143.500000) rotate(-180.000000) translate(-247.000000, -143.500000) "
              points="247 1.13686838e-13 494 287 -5.68434189e-14 287"
            />
          </g>
          <g transform="translate(100.000000, 160.000000)" fill="#FFAE00">
            <polygon
              transform="translate(147.000000, 143.500000) rotate(-180.000000) translate(-147.000000, -143.500000) "
              points="147 0 294 287 2.84217094e-13 287"
            />
          </g>
          <g transform="translate(100.000000, 0.000000)" fill="#FFEFB4">
            <polygon
              transform="translate(147.000000, 80.000000) rotate(-180.000000) translate(-147.000000, -80.000000) "
              points="147 160 294 2.70983236e-12 5.68434189e-14 -5.68434189e-14"
            />
          </g>
          <g transform="translate(0.000000, 15.000000)" fill="#FFAE00">
            <polygon
              transform="translate(53.500000, 72.500000) rotate(-180.000000) translate(-53.500000, -72.500000) "
              points="-2.27373675e-13 145 55 72 107 2.72848411e-12 6 5.68434189e-14"
            />
          </g>
          <g
            transform="translate(440.500000, 87.500000) scale(-1, 1) translate(-440.500000, -87.500000) translate(387.000000, 15.000000)"
            fill="#FFAE00"
          >
            <polygon
              transform="translate(53.500000, 72.500000) rotate(-180.000000) translate(-53.500000, -72.500000) "
              points="-2.27373675e-13 145 55 72 107 2.72848411e-12 6 5.68434189e-14"
            />
          </g>
          <g transform="translate(100.000000, 0.000000)" fill="#FED305">
            <polygon
              transform="translate(73.500000, 80.000000) rotate(-180.000000) translate(-73.500000, -80.000000) "
              points="140 145 147 2.95585778e-12 2.27373675e-13 160"
            />
          </g>
          <g transform="translate(247.000000, 0.000000)" fill="#FED305">
            <polygon
              transform="translate(73.500000, 80.000000) scale(-1, 1) rotate(-180.000000) translate(-73.500000, -80.000000) "
              points="140 145 147 0 -1.42108547e-14 160"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const ZeplinLogo = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 41.6 32.7"
    focusable="false"
  >
    <g transform="translate(0.64018885)">
      <g transform="matrix(1.2117164,0,0,1.2117164,-46.63877,7.1317533)">
        <path fill="#F89920" d="M41.5,13.3l-3.6-4l11-4l1.7,4.7L41.5,13.3z" />
        <path fill="#FFBE22" d="M41.5,13.2l-0.2,5.4l11-4l-1.7-4.7L41.5,13.2z" />
        <path
          fill="#F0670A"
          d="M72,2.2c1.6,4.5-3.5,10.5-11.3,13.4c-7.9,2.9-15.6,1.5-17.3-3
                    L72,2.2z"
        />
        <path
          fill="#FFD00E"
          d="M72,2.2c-1.7-4.5-9.4-5.8-17.3-3c-7.9,2.9-12.9,8.8-11.3,13.4
                    L72,2.2z"
        />
        <path
          fill="#F89920"
          d="M72,2.2c1,3-4.5,7.8-12.3,10.6c-7.8,2.8-15.1,2.7-16.3-0.2
                    L72,2.2z"
        />
        <path
          fill="#FFBE22"
          d="M72,2.2c-1.2-3-8.4-3.1-16.3-0.2c-7.8,2.9-13.3,7.6-12.3,10.6
                    L72,2.2z"
        />
        <path
          fill="#F0670A"
          d="M58.8-1.9c-0.7-2.6-1.6-4-2.6-4c-1.9,0.1-2.5,6-1.9,13.6
                    c0.6,7.7,2.2,13.4,4.2,13.4c1.2,0,1.8-1.9,2.1-5.2c0-0.1-0.1,0-0.1-0.1c0,0,0-0.1-0.1-0.1l-0.3,0c-0.2,3.2-0.8,5-1.7,5
                    c-1.6,0-3.2-5.7-3.8-13c-0.6-7.3,0-13.1,1.5-13.2c0.7,0,1.5,1.3,2.2,3.7C58.5-1.8,58.8-1.9,58.8-1.9z"
        />
        <path
          fill="#F0670A"
          d="M49.6-3.7C48-2.8,50.4,2.7,54.7,9c4.4,6.3,8.6,10.5,10.3,9.5
                    c0.9-0.6,0.7-2.3-0.5-5c0-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.1,0.2-0.1,0.3c0,0,0,0,0,0c1.1,2.5,1.4,4.1,0.7,4.5
                    c-1.4,0.8-5.6-3.3-9.8-9.4c-4.1-6-6.5-11.4-5.3-12.2c0.7-0.4,2.3,0.6,4.4,2.7c0,0,0.2,0.2,0.2,0.2c0.1,0,0-0.1,0.1-0.2
                    c0.1-0.1,0.1-0.2,0-0.3c0,0,0,0,0,0C52.2-3.2,50.5-4.3,49.6-3.7L49.6-3.7z"
        />
      </g>
    </g>
  </svg>
);

export const W3CLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 154 103"
    focusable="false"
  >
    <rect x="0" y="0" width="154" height="103" fill="#1a5e9a" />
    <g transform="translate(0 12.5)">
      <g>
        <path
          fill="#FFFFFF"
          d="M100.383,38.538c-2.512-4.137-6.217-6.994-11.107-8.563l13.933-24V1.366H76.076h-9.584H66.2L52.548,47.757    L38.905,1.366h-9.886l4.52,15.153l-9.227,31.238L10.665,1.366H0.782L23.37,77.59h0.942l14.117-47.236L52.548,77.59h0.94    l19.341-65.265l0.909-1.547h15.917L76.467,33.545v4.518h3.772c4.836,0,8.373,1.475,10.636,4.426    c1.945,2.506,2.915,6.051,2.915,10.631c0,4.143-0.907,7.688-2.726,10.635c-1.819,2.951-4.047,4.42-6.683,4.42    c-2.506,0-4.692-0.829-6.547-2.491c-1.847-1.659-3.344-3.935-4.47-6.815l-7.722,3.193c1.566,4.77,3.986,8.547,7.247,11.34    c3.259,2.788,7.097,4.188,11.491,4.188c5.828,0,10.581-2.354,14.252-7.057c3.674-4.704,5.517-10.512,5.517-17.413    C104.15,47.537,102.889,42.673,100.383,38.538z"
        />
        <g>
          <path
            fill="#FFFFFF"
            d="M142.451,0.939l1.606,9.73l-5.677,10.841c0,0-2.176-4.603-5.783-7.148     c-3.045-2.145-5.034-2.611-8.131-1.969c-3.987,0.822-8.507,5.582-10.477,11.454c-2.363,7.028-2.383,10.427-2.462,13.552     c-0.133,5.002,0.655,7.963,0.655,7.963s-3.438-6.36-3.407-15.682c0.028-6.652,1.069-12.689,4.141-18.643     c2.713-5.229,6.742-8.372,10.316-8.744c3.692-0.384,6.616,1.398,8.875,3.325c2.366,2.021,4.756,6.446,4.756,6.446L142.451,0.939z     "
          />
          <path
            fill="#FFFFFF"
            d="M143.151,55.996c0,0-2.511,4.474-4.068,6.201c-1.563,1.722-4.351,4.765-7.799,6.281     c-3.454,1.517-5.258,1.806-8.671,1.479c-3.404-0.327-6.571-2.296-7.681-3.121c-1.106-0.822-3.936-3.248-5.537-5.5     c-1.604-2.262-4.109-6.777-4.109-6.777s1.392,4.527,2.27,6.447c0.502,1.104,2.048,4.482,4.239,7.427     c2.038,2.754,6.011,7.477,12.052,8.544c6.041,1.064,10.186-1.644,11.211-2.298c1.025-0.656,3.19-2.472,4.558-3.936     c1.431-1.526,2.782-3.477,3.536-4.645c0.552-0.856,1.439-2.59,1.439-2.59L143.151,55.996z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M149.896,2.222c0.654,0,0.957,0.184,0.957,0.639     c0,0.436-0.303,0.593-0.938,0.593h-0.593V2.222H149.896L149.896,2.222z M150.022,1.768h-1.401v3.72h0.7V3.901h0.691l0.758,1.586     h0.781l-0.828-1.697c0.537-0.108,0.848-0.473,0.848-1.002C151.571,2.113,151.061,1.768,150.022,1.768L150.022,1.768z      M152.781,3.718c0,0.758-0.291,1.46-0.828,1.978c-0.563,0.548-1.265,0.839-2.039,0.839c-0.729,0-1.447-0.3-1.986-0.847     c-0.537-0.548-0.836-1.249-0.836-1.996c0-0.749,0.311-1.478,0.865-2.042c0.52-0.53,1.22-0.813,1.983-0.813     c0.783,0,1.485,0.292,2.032,0.849C152.5,2.214,152.781,2.926,152.781,3.718L152.781,3.718z M149.932,0.411     c-0.885,0-1.676,0.316-2.276,0.929c-0.636,0.649-0.992,1.486-0.992,2.352c0,0.867,0.337,1.667,0.956,2.295     c0.628,0.639,1.44,0.983,2.312,0.983c0.856,0,1.684-0.344,2.331-0.973c0.62-0.601,0.956-1.403,0.956-2.305     c0-0.876-0.347-1.697-0.948-2.307C151.645,0.746,150.825,0.411,149.932,0.411L149.932,0.411z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const Cog = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
    <path d="M23.5 10h-2.854c-.2-.79-.454-1.667-.778-2.332L21.9 5.636a.498.498 0 0 0 0-.708l-2.83-2.826a.499.499 0 0 0-.707 0l-2.032 2.031c-.665-.324-1.542-.578-2.331-.777V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2.856c-.789.199-1.666.453-2.331.777L5.637 2.102a.499.499 0 0 0-.707 0L2.101 4.929a.5.5 0 0 0 0 .707l2.033 2.033c-.323.662-.578 1.54-.779 2.331H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2.855c.2.791.455 1.668.778 2.331L2.1 18.364a.5.5 0 0 0 0 .708L4.93 21.9c.188.188.52.188.707 0l2.032-2.032c.663.322 1.54.577 2.331.778V23.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-2.854c.791-.201 1.668-.456 2.331-.778l2.034 2.032a.5.5 0 0 0 .707 0l2.827-2.828a.499.499 0 0 0 0-.707l-2.032-2.033c.323-.663.578-1.54.778-2.331H23.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.501zM12 16c-2.205 0-4-1.795-4-4s1.795-4 4-4c2.206 0 4 1.795 4 4s-1.794 4-4 4z" />
  </svg>
);

export const LinkIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
  >
    <g>
      <path
        d="M6.5,22.8c-0.9,0-1.8-0.4-2.5-1L2.3,20c-1.4-1.4-1.4-3.6,0-5l4-4c0.9-0.9,2.6-0.9,3.5,0l0.1,0.1l-0.7,0.7l-0.1-0.1
                c-0.6-0.6-1.6-0.6-2.1,0l-4,4c-1,1-1,2.6,0,3.5L4.7,21C5.7,22,7.3,22,8.3,21l4-4c0.6-0.6,0.6-1.5,0-2.1l-0.1-0.1l0.7-0.7l0.1,0.1
                c1,1,1,2.6,0,3.5l-4,4C8.3,22.4,7.5,22.8,6.5,22.8z M8.5,16.2l-0.7-0.7l7.8-7.8l0.7,0.7L8.5,16.2z M16,13.7c-0.7,0-1.3-0.3-1.8-0.7
                l-0.1-0.1l0.7-0.7l0.1,0.1c0.6,0.6,1.6,0.6,2.1,0l4-4c1-1,1-2.6,0-3.5L19.3,3C18.3,2,16.7,2,15.7,3l-4,4c-0.6,0.6-0.6,1.5,0,2.1
                l0.1,0.1l-0.7,0.7l-0.1-0.1c-1-1-1-2.6,0-3.5l4-4C16.4,1,18.7,1,20,2.3L21.7,4c1.4,1.4,1.4,3.6,0,5l-4,4
                C17.3,13.4,16.7,13.7,16,13.7z"
      />
    </g>
  </svg>
);

export const FileIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
  >
    <g>
      <path
        d="M20.5,24h-17C3.2,24,3,23.8,3,23.5v-23C3,0.2,3.2,0,3.5,0h11c0,0,0,0,0,0c0.1,0,0.3,0.1,0.4,0.1l6,6
                C20.9,6.2,21,6.4,21,6.5c0,0,0,0,0,0v17C21,23.8,20.8,24,20.5,24z M4,23h16V7h-5.5C14.2,7,14,6.8,14,6.5V1H4V23z M15,6h4.3L15,1.7
                V6z"
      />
    </g>
  </svg>
);

export const CopyIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
  >
    <g stroke={color ? color : "#000"} fill="none">
      <path d="M20.5 20.5h-14v-20h8l6 6zM14.5.5v6h6M17.5 20.5v3h-14v-20h3" />
    </g>
  </svg>
);

export const FigmaIcon = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 57"
    focusable="false"
  >
    <g>
      <path
        fill="#1abcfe"
        d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
      />
      <path
        fill="#0acf83"
        d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
      />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path
        fill="#f24e1e"
        d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
      />
      <path
        fill="#a259ff"
        d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
      />
    </g>
  </svg>
);

export const Edit = (props) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.835 1.165a3.976 3.976 0 010 5.623L8.073 21.549.682 24 0 23.318l2.45-7.392L17.21 1.165a3.977 3.977 0 015.624 0zm-4.218 7.029l-2.811-2.812L4.188 17l-1.393 4.205 4.207-1.395L18.618 8.194zM21.43 2.57a1.989 1.989 0 00-2.703-.1l-.108.1-1.406 1.406 2.811 2.812 1.406-1.406a1.988 1.988 0 00.101-2.703l-.1-.109z"
        fill="#262626"
        focusable="false"
      />
    </svg>
  );
};
