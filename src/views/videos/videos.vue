<template>
  <sidebar />
  <div class="videos">
    <div class="title-box">
      <img src="/src/assets/images/slash.svg" alt="" />
      <h3 class="contact_title">{{ videosTitleData[2]?.text }}</h3>
    </div>
	<h4 class="videos_title">{{ videosTitleData[1]?.text  }}</h4>
    <div class="videos_box">
      <VideoPlayer
        :src="url + videoQollanmaData[0]?.file"
        :controls="true"
        :fullscreen="true"
        :responsive="true"
        style="width: 100%"
      />
    </div>
    <div class="title-box">
      <img src="/src/assets/images/slash.svg" alt="" />
      <h3 class="contact_title">{{ videosTitleData[0]?.text }}</h3>
    </div>
    <div class="video_contents d-flex justify-content-center">
      <div class="content" v-for="item in videoQoshimchaData" :key="item.id">
        <VideoPlayer
          :src="url + item?.file"
          :controls="true"
          fullscreen="true"
          responsive="true"
          style="width: 100%"
        />
      </div>
    </div>
    <contactBox />
  </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue";
import contactBox from "../../components/contactBox.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import baseurl from "../../server/baseurl";
import api from "../../server/api";
export default {
  components: {
    VideoPlayer,
    contactBox,
    sidebar,
  },
  data() {
    return {
      url: baseurl,
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
      // get params
      videosParams: {
        id: 9,
      },
      videoData: {
        source_id: 9,
      },
      videosData: {
        source_id: 10,
      },
      // response data
      videosTitleData: [],
      videoQollanmaData: [],
      videoQoshimchaData: [],
    };
  },
  methods: {
    // get zaprosalar
    getVideosTitle() {
      api.category_one(this.videosParams).then((res) => {
        this.videosTitleData = res.data?.category_items;
        console.log(res.data);
      });
    },
    getVideoQollanma() {
      api.file_files_source(this.videoData).then((res) => {
        this.videoQollanmaData = res.data;
      });
    },
    getVideoQoshimcha() {
      api.file_files_source(this.videosData).then((res) => {
        this.videoQoshimchaData = res.data;
      });
    },
  },
  created() {
    this.getVideosTitle();
    this.getVideoQollanma();
    this.getVideoQoshimcha();
  },
};
</script>
<style></style>
