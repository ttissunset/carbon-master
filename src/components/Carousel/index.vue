<template>
  <div class="carousel">
    <div class="swiper-container" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
              src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-drew-williams-3568521.jpg"
          />
        </div>
        <div class="swiper-slide">
<!--          <img-->
<!--              src="https://scpic.chinaz.net/files/pic/pic9/201706/bpic1767.jpg"-->
<!--          />-->
          <img
              src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-khoa-v%C3%B5-5192032.jpg"
          />
        </div>
        <div class="swiper-slide">
<!--          <img-->
<!--              src="https://images.pexels.com/photos/39553/industry-sunrise-clouds-fog-39553.jpeg?auto=compress&cs=tinysrgb&w=600"-->
<!--          />-->
          <img
              src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-pixabay-259239.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, {Navigation, Pagination, Scrollbar, Autoplay} from "swiper";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay])
export default {
  name: "Carousel",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true, //自动切换
      speed: 1500,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style>
.carousel {
  margin-top: 40px;
  margin-left: 30px;
  width: 580px;
  height: 530px;
  border-radius: 20px;
}

.swiper-container {
  width: 580px;
  height: 480px;
  border-radius: 20px;
}

.swiper-slide img {
  width: 580px;
  height: 530px;
}

/*@media (max-width: 1220px) {*/
/*  .carousel {*/
/*  margin-top: 40px;*/
/*  !*margin-left: 30px;*!*/
/*  width: 580px;*/
/*  height: 530px;*/
/*  border-radius: 20px;*/
/*}*/

/*.swiper-container {*/
/*  width: 500px;*/
/*  height: 480px;*/
/*  border-radius: 20px;*/
/*}*/

/*.swiper-slide img {*/
/*  width: 500px;*/
/*  height: 530px;*/
/*}*/
/*}*/
@media (max-width: 1220px) {
  .carousel {
    margin-top: 40px;
    margin-left: 1px;
    width: 480px;
    height: 530px;
    border-radius: 20px;
  }

  .swiper-container {
    width: 400px;
    height: 480px;
    border-radius: 20px;
    background-color: #9e3131;
  }

  .swiper-slide img {
    width: 500px;
    height: 530px;
  }
}

@media (max-width: 1050px) {
  .carousel {
    display: none;
    /*margin-top: 40px;*/
    /*margin-left: 1px;*/
    /*width: 480px;*/
    /*height: 530px;*/
    /*border-radius: 20px;*/
  }

  .swiper-container {
    width: 400px;
    height: 480px;
    border-radius: 20px;
    background-color: #9e3131;
  }

  .swiper-slide img {
    width: 500px;
    height: 530px;
  }
}

@media (max-width: 720px) {
  .carousel {
    margin-top: 40px;
    margin-left: 30px;
    width: 580px;
    height: 530px;
    border-radius: 20px;
    display: none;
  }

  .swiper-container {
    width: 400px;
    height: 480px;
    border-radius: 20px;
    background-color: #9e3131;
  }

  .swiper-slide img {
    width: 500px;
    height: 530px;
  }
}
</style>