<template>
  <div id="app-body">
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/header'
// import Footer from './components/footer'

export default {
  name: 'App',
  // components: {Header, Footer},
  data() {
    return {}
  }
}
</script>

<style>
/* #f3f2f2c3 */
#app-body {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "albb-semiBold";
  font-weight: 600;
  src: url("//at.alicdn.com/wf/webfont/1fknE4osmHdv/zlBoNE271lEEjeJ0nThYB.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/1fknE4osmHdv/WMDm0Dq_P4t1lS-Di5EI8.woff") format("woff");
  font-display: swap;
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "albb-light";
  font-weight: 300;
  src: url("//at.alicdn.com/wf/webfont/1fknE4osmHdv/yj1XU2sZ4CSAqKY4OHo3Q.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/1fknE4osmHdv/uyO5tohW-SS3cpGwYiBG_.woff") format("woff");
  font-display: swap;
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "almm-bold";
  font-weight: 700;
  src: url("~@/assets/woff/almm/Alimama_ShuHeiTi_Bold.ttf") format("truetype"),
  url("~@/assets/woff/almm/xeNhgvWpBa7NUHnrx4jG_.woff") format("woff2"),
  url("~@/assets/woff/almm/xeNhgvWpBa7NUHnrx4jG_.woff") format("woff");
  font-display: swap;
}


/*@font-face {*/
/*  font-family: "almm-Bold";*/
/*  font-weight: 700;*/
/*  src: url("//at.alicdn.com/wf/webfont/1fknE4osmHdv/HN-2Koy5mrc5xaWiUwnpQ.woff2") format("woff2"),*/
/*  url("//at.alicdn.com/wf/webfont/1fknE4osmHdv/hKZ5Vr1gFZDN2KcVaWxrR.woff") format("woff");*/
/*  font-display: swap;*/
/*}*/

.stop-select {
  -webkit-user-drag: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/* 设置默认字体 */
body,
button, input, select, textarea {
  font: 12px/1.3 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
  color: #333;
}

:root {
  --white: hsla(0, 0%, 100%, 1);
  --white_a3: hsla(0, 0%, 100%, 0.03);
  --white_a8: hsla(0, 0%, 100%, 0.08);
  --white_a12: hsla(0, 0%, 100%, 0.12);
  --white_a70: hsla(0, 0%, 100%, 0.7);
  --cultured: hsla(220, 20%, 97%, 1);
  --lavender-web: hsla(233, 52%, 94%, 1);
  --raisin-black: hsla(216, 14%, 14%, 1);
  --blue-crayola: hsla(219, 72%, 56%, 1);
  --black: rgb(0, 0, 0);
  --youth-green: rgb(112, 200, 152);
  --youth-green-2: rgb(98, 217, 151);
  --youth-green-3: rgb(52, 183, 110);
  --bg-green: rgb(229, 243, 229);
  --blackish-green: rgb(40, 72, 64);
  --blue-purple: rgb(153, 180, 222);
  --deongaree: rgb(56, 80, 216);
  --youth-blue: rgb(199, 206, 232);
  --youth-blue-dark: rgb(111, 135, 213);
  --youth-blue-purple: rgb(98, 125, 211);
  --dark-pink: hsl(358, 91%, 70%);
  --light-raisin-black: rgb(79, 79, 100);
  --more-raisin-black: rgb(61, 61, 65);
  --light-gray: hsla(0, 0%, 79%, 1);
  --youth-blue-2: rgb(215, 223, 250);


  --ff-almm: 'almm-bold', almm-bold;
  --ff-albb-semibold: 'albb-semiBold', albb-semibold;
  --ff-albb-light: 'albb-light', albb-light;

  --fs-1: calc(2.0rem + 1.38vw);
  --fs-2: calc(1.9rem + .66vw);
  --fs-3: 1.8rem;
  --fs-3-5: 1.4rem;
  --fs-4: 1.3rem;
  --fs-5: 1.1rem;
  --fs-6: 1.0rem;
  --fs-7: 0.85rem;
  --fs-8: 0.7rem;
  --fs-9: 0.6rem;

  --fw-800: 800;
  --fw-700: 700;
  --fw-600: 600;
  --fw-500: 500;
  --fw-400: 400;
  --fw-300: 300;

  /*spacing*/
  --section-padding: 90px;

  /*shadow*/
  --shadow-1: 0 0 20px hsla(216, 14%, 14%, 0.05);
  --shadow-2: 0 0 0 0.05rem hsla(214, 88%, 27%, 0.08), 0 0 1.25rem hsla(216, 14%, 14%, 0.06);
  --shadow-3: 0 0 1.25rem hsla(216, 14%, 14%, 0.04);
  --shadow-4: 0 0 1.25rem hsla(226, 18%, 18%, 0.05);
  --shadow-5: 0.5rem 0.5rem 1.25rem hsla(250, 20%, 20%, 0.06);
  --shadow-6: 0.7rem 0.8rem 1.35rem hsla(270, 25%, 25%, 0.07), 0 0 1.25rem hsla(216, 14%, 14%, 0.06);

  /*border radius*/
  --radius-circle: 50%;
  --radius-pill-2: 200px;
  --radius-pill: 100px;
  --radius-50: 50px;
  --radius-40: 40px;
  --radius-30: 30px;
  --radius-20: 20px;
  --radius-10: 10px;
  --radius-8: 8px;
  --radius-6: 6px;

  /* 变化过程动画 */
  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --transition-3: 0.3s ease-in-out;
}


</style>
