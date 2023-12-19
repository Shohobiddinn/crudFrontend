<template>
  <div class="about">
    <div class="container-c">
      <sidebar />
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">Biz haqimizda</h3>
      </div>
      <div class="about_box">
        <VideoPlayer
          src="/src/assets/images/video.mp4"
          :controls="true"
          :fullscreen="true"
          :responsive="true"
          style="width: 100%; background-color: inherit; object-fit: cover"
        />
      </div>
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">Mijozlarimiz fikrlari</h3>
      </div>
      <div class="video_carusel">
        <carousel
          :items-to-show="4"
          :wrap-around="true"
          :breakpoints="breakPoints"
        >
          <slide v-for="item in fileData" :key="item.id">
            <VideoPlayer
              src="/src/assets/images/video.mp4"
              :controls="true"
              :fullscreen="true"
              :responsive="true"
              style="width: 100%; background-color: inherit; object-fit: cover"
            />
          </slide>
        </carousel>
      </div>
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">Bizning mijozlarimiz</h3>
      </div>
      <div class="client-box">
        <carousel
          :items-to-show="5"
          :autoplay="1500"
          :wrap-around="true"
          :breakpoints="breakPoints"
        >
          <slide v-for="slide in images" :key="slide">
            <a class="client_link" href="">
              <img class="client__img" :src="slide" alt="" />
            </a>
          </slide>
        </carousel>
        <carousel
          :items-to-show="5"
          :autoplay="1500"
          :wrap-around="true"
          :breakpoints="breakPoints"
        >
          <slide v-for="slide in images" :key="slide">
            <a class="client_link" href="">
              <img class="client__img" :src="slide" alt="" />
            </a>
          </slide>
        </carousel>
      </div>
      <contactBox />
    </div>
  </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue";
import parvoz from "../../assets/images/parvoz.png";
import ideal from "../../assets/images/ideal.png";
import ecoBonu from "../../assets/images/eco-bonu.png";
import dehqon from "../../assets/images/dehqon-uz.png";
import effectiveEngineering from "../../assets/images/effective-engineering.png";
import contactBox from "../../components/contactBox.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import api from "../../server/api";
export default {
  components: {
    VideoPlayer,
    Carousel,
    Slide,
    sidebar,
    contactBox,
  },
  data() {
    return {
      images: [parvoz, ideal, dehqon, ecoBonu, effectiveEngineering],
      videoOptions: {
        fullscreen: true,
        responsive: true,
        autoplay: false,
        controls: true,

        sources: {
          src: "/src/assets/images/video.mp4",
          type: "video/mp4",
        },
      },
      breakPoints: {
        320: {
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
      fileParams: {
        source_id: 1,
      },
      fileData: [],
    };
  },
  methods: {
    getFile() {
      api
        .file_files_source(this.fileParams)
        .then((res) => {
          this.fileData = res.data;
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
  },
  created() {
    this.getFile();
  },
};
</script>
<style></style>
