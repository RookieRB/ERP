<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <input type="checkbox" />
    <div class="btn"></div>
    <div class="tooltip">
      <svg></svg>
      <svg></svg>
      <svg></svg>
    </div>
    <svg></svg>
  </div>

  <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-01" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
      <path
          transform="translate(0 -2)"
          d="M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z"
      ></path>
      <ellipse ry="4.49" rx="4.52" cy="12.99" cx="13"></ellipse>
    </symbol>
    <symbol id="icon-02" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
      <line y2="9.42" x2="25" y1="12.58" x1="25"></line>
      <line y2="7.84" x2="21" y1="14.16" x1="21"></line>
      <line y2="6.26" x2="17" y1="15.74" x1="17"></line>
      <line y2="1" x2="13" y1="21" x1="13"></line>
      <line y2="4.68" x2="9" y1="17.32" x1="9"></line>
      <line y2="8.37" x2="5" y1="13.63" x1="5"></line>
      <line y2="10.47" x2="1" y1="11.53" x1="1"></line>
    </symbol>
    <symbol id="icon-03" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
      <polygon
          points="8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10"
      ></polygon>
      <circle r="3" cy="4" cx="8"></circle>
    </symbol>

    <symbol
        id="shape-01"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
          points="155.77 140.06 141.08 152.42 159.12 158.96 155.77 140.06"
          stroke="var(--shape-color-03)"
      ></polygon>
    </symbol>
    <symbol
        id="shape-02"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="var(--shape-color-02)">
        <line y2="152.29" x2="141.54" y1="146.73" x1="158.66"></line>
        <line y2="158.07" x2="152.88" y1="140.95" x1="147.32"></line>
      </g>
    </symbol>
    <symbol
        id="shape-03"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle
          r="13"
          cy="149.51"
          cx="150.1"
          stroke="var(--shape-color-01)"
      ></circle>
    </symbol>
    <symbol
        id="shape-04"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle r="4" cy="149.51" cx="150.1" fill="var(--shape-color-01)"></circle>
    </symbol>
    <symbol
        id="shape-05"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <rect
          transform="translate(40.44 -31.76) rotate(13.94)"
          height="18"
          width="18"
          y="140.51"
          x="141.1"
          stroke="var(--shape-color-03)"
      ></rect>
    </symbol>
    <symbol
        id="shape-06"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="var(--shape-color-02)">
        <line y2="146.24" x2="141.72" y1="152.78" x1="158.48"></line>
        <line y2="157.89" x2="146.83" y1="141.13" x1="153.37"></line>
      </g>
    </symbol>
    <symbol
        id="shape-07"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <rect
          transform="translate(-42.94 62.23) rotate(-20.56)"
          height="24"
          width="24"
          y="137.51"
          x="138.1"
          stroke="var(--shape-color-03)"
      ></rect>
    </symbol>

    <symbol
        id="shape-08"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle r="4" cy="149.51" cx="150.1" fill="var(--shape-color-01)"></circle>
    </symbol>
    <symbol
        id="shape-09"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle
          r="8"
          cy="149.51"
          cx="150.1"
          stroke="var(--shape-color-01)"
      ></circle>
    </symbol>
  </svg>
</template>

<style scoped lang="scss">
.wrapper {
  --background: #62abff;
  --icon-color: #414856;
  --shape-color-01: #b8cbee;
  --shape-color-02: #7691e8;
  --shape-color-03: #fdd053;
  --width: 90px;
  --height: 90px;
  --border-radius: var(--height);
  width: var(--width);
  height: var(--height);
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .btn {
  background: var(--background);
  width: var(--width);
  height: var(--height);
  position: relative;
  z-index: 3;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-animation: plus-animation-reverse 0.5s ease-out forwards;
  animation: plus-animation-reverse 0.5s ease-out forwards;
}
.wrapper .btn::before,
.wrapper .btn::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4px;
  background: #fff;
}
.wrapper .btn::before {
  width: 4px;
  height: 28px;
}
.wrapper .btn::after {
  width: 28px;
  height: 4px;
}
.wrapper .tooltip {
  width: 90px;
  height: 75px;
  border-radius: 70px;
  position: absolute;
  background: #fff;
  z-index: 2;
  padding: 0 15px;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  opacity: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: opacity 0.15s ease-in, top 0.15s ease-in, width 0.15s ease-in;
}
.wrapper .tooltip > svg {
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.wrapper .tooltip > svg .icon {
  fill: none;
  stroke: var(--icon-color);
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}
.wrapper .tooltip > svg:hover .icon {
  opacity: 1;
}
.wrapper .tooltip::after {
  content: "";
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  bottom: -8px;
  transform: rotate(45deg);
  z-index: 0;
}
.wrapper > svg {
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 1;
  transform: scale(0);
}
.wrapper > svg .shape {
  fill: none;
  stroke: none;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50% 20%;
}
.wrapper input {
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  cursor: pointer;
  position: absolute;
  z-index: 5;
  opacity: 0;
}
.wrapper input:checked ~ svg {
  -webkit-animation: pang-animation 1.2s ease-out forwards;
  animation: pang-animation 1.2s ease-out forwards;
}
.wrapper input:checked ~ svg .shape:nth-of-type(1) {
  transform: translate(25px, 30%) rotate(40deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(2) {
  transform: translate(-4px, 30%) rotate(80deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(3) {
  transform: translate(12px, 30%) rotate(120deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(4) {
  transform: translate(8px, 30%) rotate(160deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(5) {
  transform: translate(21px, 30%) rotate(200deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(6) {
  transform: translate(0px, 30%) rotate(240deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(7) {
  transform: translate(17px, 30%) rotate(280deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(8) {
  transform: translate(-3px, 30%) rotate(320deg);
}
.wrapper input:checked ~ svg .shape:nth-of-type(9) {
  transform: translate(25px, 30%) rotate(360deg);
}
.wrapper input:checked ~ .btn {
  -webkit-animation: plus-animation 0.5s ease-out forwards;
  animation: plus-animation 0.5s ease-out forwards;
}
.wrapper input:checked ~ .tooltip {
  width: 190px;
  height: 70px;
  -webkit-animation: stretch-animation 1s ease-out forwards 0.15s;
  animation: stretch-animation 1s ease-out forwards 0.15s;
  top: -90px;
  opacity: 1;
}

@-webkit-keyframes pang-animation {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}

@keyframes pang-animation {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}
@-webkit-keyframes plus-animation {
  0% {
    transform: rotate(0) scale(1);
  }
  20% {
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    transform: rotate(45deg) scale(0.95);
  }
}
@keyframes plus-animation {
  0% {
    transform: rotate(0) scale(1);
  }
  20% {
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    transform: rotate(45deg) scale(0.95);
  }
}
@-webkit-keyframes plus-animation-reverse {
  0% {
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    transform: rotate(-15deg);
  }
  55% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}
@keyframes plus-animation-reverse {
  0% {
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    transform: rotate(-15deg);
  }
  55% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}
@-webkit-keyframes stretch-animation {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1.1, 0.9);
  }
  30% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes stretch-animation {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1.1, 0.9);
  }
  30% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
}

.socials {
  position: fixed;
  display: block;
  left: 20px;
  bottom: 20px;
}
.socials > a {
  display: block;
  width: 30px;
  opacity: 0.2;
  transform: scale(var(--scale, 0.8));
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}
.socials > a:hover {
  --scale: 1;
}

</style>