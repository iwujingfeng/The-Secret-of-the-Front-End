<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="88"
    height="20"
  >
    <linearGradient id="b" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"></stop>
      <stop offset="1" stop-opacity=".1"></stop>
    </linearGradient>
    <clipPath id="a">
      <rect width="88" height="20" rx="3" fill="#fff"></rect>
    </clipPath>
    <g clip-path="url(#a)">
      <path fill="#555" d="M0 0h37v20H0z"></path>
      <path fill="#4c1" d="M37 0h51v20H37z"></path>
      <path fill="url(#b)" d="M0 0h88v20H0z"></path>
    </g>
    <g
      fill="#fff"
      text-anchor="middle"
      font-family="DejaVu Sans,Verdana,Geneva,sans-serif"
      font-size="110"
    >
      <text
        x="195"
        y="150"
        fill="#010101"
        fill-opacity="0.3"
        transform="scale(.1)"
        textLength="270"
      >build</text>
      <text x="195" y="140" transform="scale(.1)" textLength="270">build</text>
      <text
        x="615"
        y="150"
        fill="#010101"
        fill-opacity="0.3"
        transform="scale(.1)"
        textLength="410"
      >passing</text>
      <text x="615" y="140" transform="scale(.1)" textLength="410">passing</text>
    </g>
  </svg>
</template>
<script>
export default {
  name: "Svg"
};
</script>