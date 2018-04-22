import React from 'react'
import { css } from 'react-emotion'

const arrow1 = css`
fill:transparent;
stroke:#fff;
stroke-width:2px;
stroke-dasharray:10;
`
const arrow2 = css`
stroke:#fff;
stroke-width:2px;
fill:transparent;
`
const arrow3 = css`
fill:orange;
opacity: 0.8;
`
const arrow4 = css`
fill:green;
`
const text = css`

text-align:center;
color:#fff;
font-family:'Kalam';
font-size:30px;
font-weight:bold;
`
const parent = css`
display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
`
const container = css`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
`

const spinningArrowsContainer = css`
/* padding-top:6vh; */
`

const SpinningArrows = () => (
  <div className={spinningArrowsContainer}>
    <div className={container}>
      <div className={parent}>
        <div className={text}>
          Design<br />
          Build<br />
          Test<br />
          Release
        </div>
      </div>
    </div>

    <svg version="1.2" viewBox="0 0 577 577" xmlns="http://www.w3.org/2000/svg">
      <desc>Spinning Arrows</desc>
      <g>
        <g id="spinningArrows">
          <desc>Spinning Arrows</desc>
          <path className={arrow1} d="m275.76 95.253v38.955l116.23-67.104-116.23-67.104v39.283c-69.728 2.266-134.6 34.249-178.99 88.56l43.305 35.392c33.719-41.259 82.814-65.742 135.68-67.982z" />
          <path className={arrow2} d="m537.18 275.76c-2.268-69.73-34.25-134.6-88.562-178.99l-35.391 43.305c41.258 33.719 65.74 82.814 67.979 135.68h-38.951l67.104 116.23 67.105-116.23z" />
          <path className={arrow3} d="m300.71 481.21v-38.951l-116.23 67.104 116.23 67.105v-39.285c69.73-2.268 134.6-34.25 178.99-88.562l-43.304-35.392c-33.719 41.258-82.815 65.741-135.68 67.981z" />
          <path className={arrow4} d="m95.255 300.7h38.953l-67.102-116.23-67.105 116.23h39.284c2.267 69.729 34.249 134.6 88.56 178.99l35.392-43.305c-41.259-33.718-65.742-82.814-67.982-135.68z" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 288.5 288.5"
            to="360 288.5 288.5"
            dur="15s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  </div>
)


export default SpinningArrows
