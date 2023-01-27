import { SeeMoreArrow as classes } from "../styles/";

function SeeMoreArrow() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.frame}
    >
      <g>
        <g className={classes.dark_blue_arrow} filter="url(#filter0_i_3_2)">
          <path d="M25.157 38.9297C24.9576 39.2091 24.5424 39.2091 24.343 38.9297L6.04506 13.2905C5.80886 12.9595 6.04545 12.5 6.45204 12.5L43.048 12.5C43.4546 12.5 43.6911 12.9595 43.4549 13.2905L25.157 38.9297Z" />
        </g>
        <g className={classes.light_blue_arrow} filter="url(#filter1_i_3_2)">
          <path d="M25.157 38.9297C24.9576 39.2091 24.5424 39.2091 24.343 38.9297L6.04506 13.2905C5.80886 12.9595 6.04545 12.5 6.45204 12.5L43.048 12.5C43.4546 12.5 43.6911 12.9595 43.4549 13.2905L25.157 38.9297Z" />
        </g>
        <g className={classes.blue_arrow} filter="url(#filter2_i_3_2)">
          <path d="M25.157 38.9297C24.9576 39.2091 24.5424 39.2091 24.343 38.9297L6.04506 13.2905C5.80886 12.9595 6.04545 12.5 6.45204 12.5L43.048 12.5C43.4546 12.5 43.6911 12.9595 43.4549 13.2905L25.157 38.9297Z" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_3_2"
          x="5.95116"
          y="11.5"
          width="37.5977"
          height="27.6393"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_2" />
        </filter>
        <filter
          id="filter1_i_3_2"
          x="5.95116"
          y="11.5"
          width="37.5977"
          height="27.6393"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_2" />
        </filter>
        <filter
          id="filter2_i_3_2"
          x="5.95116"
          y="11.5"
          width="37.5977"
          height="27.6393"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_2" />
        </filter>
      </defs>
    </svg>
  );
}

export default SeeMoreArrow;
