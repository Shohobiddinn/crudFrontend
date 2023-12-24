<template>
  <div class="side-nav">
    <nav class="navigate">
      <ul class="navigate_list">
        <li class="navigate_item">
          <RouterLink class="navigate_link" to="/about">{{
            navbarData[0]?.text
          }}</RouterLink>
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <RouterLink
            @click="activeFunc()"
            class="navigate_link"
            to="/connection"
            >{{ navbarData[1]?.text }}</RouterLink
          >
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <RouterLink to="/">
            <img class="navigate_img" :src="url + navbarFile[0]?.file" alt="photo" />
          </RouterLink>
        </li>

        <li class="navigate_item">
          <RouterLink class="navigate_link" to="/faq">{{
            navbarData[2]?.text
          }}</RouterLink>
        </li>
        <li class="navigate_item"><b>.</b></li>

        <li class="navigate_item">
          <RouterLink class="navigate_link" to="/videos">{{
            navbarData[3]?.text
          }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="home-sidebar_navbar">
      <div class="d-flex justify-content-between py-4">
        <RouterLink @click="activeFunc()" to="/">
          <img
            class="home-sidebar__img"
            :src="url + navbarFile[0]?.file"
            alt=""
            width="169"
            height="35"
          />
        </RouterLink>
        <button class="sidebar-btn" type="button" @click="openRight()">
          <i class="fa-solid fa-arrow-left text-white"></i>
        </button>
        <nav class="home-sidebar__nav">
          <button class="sidebar-btn" type="button" @click="openRight()">
            <i class="fa-solid fa-arrow-left text-white"></i>
          </button>
          <ul class="home-sidebar__list">
            <li class="home-sidebar__item">
              <RouterLink @click="activeFunc()" to="/">
                <img
                  class="home-sidebar__img"
                  :src="url + navbarFile[0]?.file"
                  alt=""
                />
              </RouterLink>
            </li>
            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/about"
                >{{ navbarData[0]?.text }}</RouterLink
              >
            </li>

            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/connection"
                >{{ navbarData[1]?.text }}</RouterLink
              >
            </li>

            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/faq"
                >{{ navbarData[2]?.text }}</RouterLink
              >
            </li>

            <li class="home-sidebar__item">
              <RouterLink
                @click="activeFunc()"
                class="home-sidebar__link"
                to="/videos"
                >{{ navbarData[3]?.text }}</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../server/api";
import baseurl from "../server/baseurl";
export default {
  name: "sidebar",
  data() {
    return {
      url :baseurl,
      isNavbarOpen: false,
      params: {
        id: 6,
      },
      fileData: {
        source_id: 6,
      },
      // responsive
      navbarData: [],
      navbarFile:[],
    };
  },
  methods: {
    activeFunc() {
      const item = document.querySelectorAll("a");
      item.classList.remove("active");
      item.classList.add("active");
      document
        .querySelector(".home-sidebar_navbar")
        .classList.remove("open-sidebar");
      this.isNavbarOpen = !this.isNavbarOpen;

      if (this.isNavbarOpen) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    },
    openRight() {
      document
        .querySelector(".home-sidebar_navbar")
        .classList.toggle("open-sidebar");
      this.isNavbarOpen = !this.isNavbarOpen;

      if (this.isNavbarOpen) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    },
    disableBodyScroll() {
      document.body.classList.add("no-scroll");
    },
    enableBodyScroll() {
      document.body.classList.remove("no-scroll");
    },
    // get funtction
    getNavber() {
      api
        .category_one(this.params)
        .then((res) => {
          this.navbarData = res.data.category_items;
        })
        .catch((err) => {});
    },
    getNavbarFile(){
      api.file_files_source(this.fileData).then((res)=>{
        this.navbarFile = res.data
      })
    },
  },
  created() {
    this.getNavber();
    this.getNavbarFile();
  },
};
</script>
<style></style>
