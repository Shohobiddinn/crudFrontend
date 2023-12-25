<template>
  <div class="about">
    <div class="container-c">
      <sidebar />
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">{{ aboutTitleData[2]?.text }}</h3>
      </div>
      <div class="about_box">
        <VideoPlayer
          :src="url + aboutFileData[0]?.file"
          :controls="true"
          :fullscreen="true"
          :responsive="true"
          style="width: 100%; background-color: inherit; object-fit: cover"
        />
      </div>
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">{{ aboutTitleData[1]?.text }}</h3>
      </div>
      <div class="video_carusel">
        <swiper
          class="current_users_swiper"
          :slidesPerView="4"
          :spaceBetween="30"
          :cssMode="true"
          :mousewheel="true"
          :keyboard="true"
          :direction="horizontal"
          :loop="true"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          :breakpoints="{
            '200': {
              slidesPerView: 1,
            },
            '400': {
              slidesPerView: 2,
            },
            '600': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '800': {
              slidesPerView: 3,
            },
            '1020': {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }"
        >
          <swiper-slide
            class="current_users_swiper_slide"
            v-for="item in aboutFileSwiperData"
            :key="item.id"
          >
            <VideoPlayer
              :src="url + item?.file"
              :controls="true"
              :fullscreen="true"
              :responsive="true"
              style="width: 100%; background-color: inherit; object-fit: cover"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">{{ aboutTitleData[0]?.text }}</h3>
      </div>
      <div class="client-box">
        <swiper
          class="swiper"
          :slidesPerView="4"
          :spaceBetween="30"
          :cssMode="true"
          :mousewheel="true"
          :keyboard="true"
          :direction="horizontal"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }"
          :modules="modules"
          :breakpoints="{
            '200': {
              slidesPerView: 1,
            },
            '400': {
              slidesPerView: 2,
            },
            '600': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '800': {
              slidesPerView: 3,
            },
            '1020': {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }"
        >
          <swiper-slide
            class="swiper_slide"
            v-for="item in swiperImages1"
            :key="item"
          >
            <img :src="url + item?.file" alt="photo" />
          </swiper-slide>
        </swiper>

        <swiper
          class="swiper"
          :slidesPerView="4"
          :spaceBetween="30"
          :cssMode="true"
          :mousewheel="true"
          :keyboard="true"
          :direction="horizontal"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          :breakpoints="{
            '200': {
              slidesPerView: 1,
            },
            '400': {
              slidesPerView: 2,
            },
            '600': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '800': {
              slidesPerView: 3,
            },
            '1020': {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }"
        >
          <swiper-slide
            class="swiper_slide"
            v-for="item in swiperImages2"
            :key="item"
          >
            <img :src="url + item?.file" alt="photo" />
          </swiper-slide>
        </swiper>
      </div>
      <contactBox />
    </div>
  </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue";
import contactBox from "../../components/contactBox.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import api from "../../server/api";
import baseurl from "../../server/baseurl";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
export default {
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  components: {
    VideoPlayer,
    sidebar,
    contactBox,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      url: baseurl,
      breakPoints: {
        280: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },

        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      // get params
      aboutFileParams: {
        source_id: 11,
      },
      aboutFileSwiperParams: {
        source_id: 12,
      },
      about_swiper_images1_params: {
        source_id: 13,
      },
      about_swiper_images2_params: {
        source_id: 14,
      },
      aboutParams: {
        id: 10,
      },
      // response data
      aboutFileData: [],
      aboutFileSwiperData: [],
      swiperImages1: [],
      swiperImages2: [],
      aboutTitleData: [],
    };
  },
  methods: {
    getAboutFile() {
      api
        .file_files_source(this.aboutFileParams)
        .then((res) => {
          this.aboutFileData = res.data;
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
    getAboutSwiperFile() {
      api
        .file_files_source(this.aboutFileSwiperParams)
        .then((res) => {
          this.aboutFileSwiperData = res.data;
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
    getSwiperImages1() {
      api.file_files_source(this.about_swiper_images1_params).then((res) => {
        this.swiperImages1 = res.data;
      });
    },
    getSwiperImages2() {
      api.file_files_source(this.about_swiper_images2_params).then((res) => {
        this.swiperImages2 = res.data;
      });
    },
    getCategory() {
      api.category_one(this.aboutParams).then((res) => {
        this.aboutTitleData = res.data?.category_items;
      });
    },
  },
  created() {
    this.getAboutFile();
    this.getAboutSwiperFile();
    this.getSwiperImages1();
    this.getCategory();
    this.getSwiperImages2();
  },
};
</script>
<style></style>
