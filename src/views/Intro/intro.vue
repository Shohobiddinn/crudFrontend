<template>
  <div class="home-pc">
    <sidebar />
    <div class="hero">
      <div class="container">
        <div class="hero__box" v-if="show">
          <h3
            class="hero__title title1"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            {{ bannerText1 }} <span>{{ bannerText2 }}</span> {{ bannerText3 }}
          </h3>
        </div>
        <div class="hero__box" v-else>
          <h3
            class="hero__title title2 hero__title--bottom"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {{ introData[6]?.text }}
          </h3>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="container">
        <div class="intro_top">
          <div class="intro_top_title">{{ introData[5]?.text }}</div>
          <router-link to="/home">
            <div class="intro_top_content">
              <div class="intro_top_content_title">
                {{ introData[4]?.text }}
              </div>
              <div class="intro_top_content_icon">
                <svg
                  width="25"
                  height="44"
                  viewBox="0 0 25 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H3.87931L25 22L3.87931 44H0L21.1207 22L0 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </router-link>
        </div>
        <div class="intro_bottom">
          <div class="content">
            <router-link to="/home" class="content_link">
              <div class="content_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <g filter="url(#filter0_f_6_159)">
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#0085FF"
                    />
                  </g>
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#0085FF"
                  />
                  <defs>
                    <filter
                      id="filter0_f_6_159"
                      x="0.247059"
                      y="0.247059"
                      width="103.576"
                      height="103.576"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.3765"
                        result="effect1_foregroundBlur_6_159"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="content_title">{{ introData[3]?.text }}</div>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #0085ff 0%, #0085ff 100%);
                  box-shadow: 0 0 30px #0085ff;
                "
              ></div>
            </router-link>
          </div>
          <div class="content">
            <router-link to="/home" class="content_link">
              <div class="content_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <g filter="url(#filter0_f_6_159)">
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#FFB800"
                    />
                  </g>
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#FFB800"
                  />
                  <defs>
                    <filter
                      id="filter0_f_6_159"
                      x="0.247059"
                      y="0.247059"
                      width="103.576"
                      height="103.576"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.3765"
                        result="effect1_foregroundBlur_6_159"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="content_title">{{ introData[2]?.text }}</div>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #ffb800 0%, #ffb800 100%);
                  box-shadow: 0 0 30px #ffb800;
                "
              ></div>
            </router-link>
          </div>
          <div class="content">
            <router-link to="/home" class="content_link">
              <div class="content_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <g filter="url(#filter0_f_6_159)">
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#00FF47"
                    />
                  </g>
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#00FF47"
                  />
                  <defs>
                    <filter
                      id="filter0_f_6_159"
                      x="0.247059"
                      y="0.247059"
                      width="103.576"
                      height="103.576"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.3765"
                        result="effect1_foregroundBlur_6_159"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="content_title">{{ introData[1]?.text }}</div>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #00ff47 0%, #00ff47 100%);
                  box-shadow: 0 0 30px #00ff47;
                "
              ></div>
            </router-link>
          </div>
          <div class="content">
            <router-link to="/home" class="content_link">
              <div class="content_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <g filter="url(#filter0_f_6_159)">
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#AD00FF"
                    />
                  </g>
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#AD00FF"
                  />
                  <defs>
                    <filter
                      id="filter0_f_6_159"
                      x="0.247059"
                      y="0.247059"
                      width="103.576"
                      height="103.576"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.3765"
                        result="effect1_foregroundBlur_6_159"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="content_title">{{ introData[0]?.text }}</div>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #ad00ff 0%, #ad00ff 100%);
                  box-shadow: 0 0 30px #ad00ff;
                "
              ></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-mb">
    <div class="home-left">
      <div class="hero-ft">
        <button class="hero-ft__btn" type="button" @click="openLeft()">
          <i class="fa-solid fa-arrow-right text-white"></i>
        </button>
        <div class="hero-ft__box">
          <h3 class="hero-ft__title">
            {{ introData[5]?.text }}
          </h3>
          <div class="content d-flex flex-column">
            <router-link to="/home" class="content_link">
              <span>
                <i
                  class="fa-solid fa-circle-dot fa-xl"
                  style="color: #0085ff; box-shadow: 0px 0px 25px #0085ff"
                ></i>
              </span>
              <h4 class="content_title">{{ introData[3]?.text }}</h4>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #0085ff 0%, #0085ff 100%);
                  box-shadow: 0 0 30px #0085ff;
                "
              ></div>
            </router-link>
          </div>
          <div class="content d-flex flex-column">
            <router-link to="/home" class="content_link">
              <span>
                <i
                  class="fa-solid fa-circle-dot fa-xl"
                  style="color: #ffb800; box-shadow: 0px 0px 25px #ffb800"
                ></i>
              </span>
              <h4 class="content_title">{{ introData[2]?.text }}</h4>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #ffb800 0%, #ffb800 100%);
                  box-shadow: 0 0 30px #0085ff;
                "
              ></div>
            </router-link>
          </div>
          <div class="content d-flex flex-column">
            <router-link to="/home" class="content_link">
              <span>
                <i
                  class="fa-solid fa-circle-dot fa-xl"
                  style="color: #00ff47; box-shadow: 0px 0px 25px #00ff47"
                ></i>
              </span>
              <h4 class="content_title">{{ introData[1]?.text }}</h4>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #00ff47 0%, #00ff47 100%);
                  box-shadow: 0 0 30px #00ff47;
                "
              ></div>
            </router-link>
          </div>
          <div class="content d-flex flex-column">
            <router-link to="/home" class="content_link">
              <span>
                <i
                  class="fa-solid fa-circle-dot fa-xl"
                  style="color: #ad00ff; box-shadow: 0px 0px 25px #ad00ff"
                ></i>
              </span>
              <h4 class="content_title">{{ introData[0]?.text }}</h4>
              <div
                class="content_show"
                style="
                  background: linear-gradient(180deg, #ad00ff 0%, #ad00ff 100%);
                  box-shadow: 0 0 30px #ad00ff;
                "
              ></div>
            </router-link>
          </div>
          <router-link to="/">
            <div class="d-flex align-items-center">
              <div class="hero-ft__bottom">
                {{ introData[4]?.text }}
              </div>
              <div class="intro_top_content_icon">
                <svg
                  width="25"
                  height="44"
                  viewBox="0 0 25 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H3.87931L25 22L3.87931 44H0L21.1207 22L0 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <img
      class="crud-logo"
      src="../../assets/images/Crud.svg"
      width="169"
      height="20"
      alt=""
    />
    <div class="">
      <div class="hero-mb__box" v-if="show">
        <h3
          class="hero-mb__title title1"
          data-aos="fade-down"
          data-aos-duration="500"
        >
        {{ bannerText1 }} <span>{{ bannerText2 }}</span> {{ bannerText3 }}
        </h3>
  
      </div>
      <div class="hero-mb__box" v-else>
 
        <h3
          class="hero-mb__title title2 hero-mb__title--bottom"
          data-aos="fade-up"
          data-aos-duration="500"
        >
        {{ introData[6]?.text }}
        </h3>
      </div>
    </div>
    <div class="home-sidebar">
      <nav class="home-sidebar__nav">
        <button class="home-sidebar__btn" type="button" @click="openRight()">
          <i class="fa-solid fa-arrow-left text-white"></i>
        </button>
        <ul class="home-sidebar__list">
          <li class="home-sidebar__item">
            <RouterLink @click="activeFunc()" to="/">
              <img
                class="home-sidebar__img"
                src="../../assets/images/Crud.svg"
                alt=""
              />
            </RouterLink>
          </li>
          <li class="home-sidebar__item">
            <RouterLink
              @click="activeFunc()"
              class="home-sidebar__link"
              to="/about"
              >Biz haqimizda</RouterLink
            >
          </li>

          <li class="home-sidebar__item">
            <RouterLink
              @click="activeFunc()"
              class="home-sidebar__link"
              to="/connection"
              >Aloqa uchun</RouterLink
            >
          </li>

          <li class="home-sidebar__item">
            <RouterLink
              @click="activeFunc()"
              class="home-sidebar__link"
              to="/faq"
              >FAQ</RouterLink
            >
          </li>

          <li class="home-sidebar__item">
            <RouterLink
              @click="activeFunc()"
              class="home-sidebar__link"
              to="/videos"
              >Video qo'llanmalar</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import sidebar from "../../components/sidebar.vue";
import api from "../../server/api";
export default {
  name: "Intro",
  data() {
    return {
      show: true,
      text: [
        {
          title: "Biznesingizga <span>oson</span> yechim topamiz",
        },
        {
          title: "Ishingizni osonlashtiramiz",
        },
      ],
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
      params: {
        id: 7,
      },
      introData: [],
    };
  },
  components: { sidebar },
  computed: {
    bannerText1() {
      const arr = this.introData[7]?.text.split(" ");
      return arr?.slice(0, 1).join(" ");
    },
    bannerText2() {
      const arr = this.introData[7]?.text.split(" ");
      return arr?.slice(1, 2).join(" ");
    },
    bannerText3() {
      const arr = this.introData[7]?.text.split(" ");
      return arr?.slice(2).join(" ");
    },
  },
  methods: {
    showTitle() {
      setInterval(() => {
        this.show = !this.show;
      }, 2000);
    },
    openRight() {
      document.querySelector(".home-sidebar").classList.toggle("open_sidebar");
    },
    openLeft() {
      document.querySelector(".home-left").classList.toggle("open-menu");
    },
    // get function
    gatIntro() {
      api.category_one(this.params).then((res) => {
        this.introData = res.data.category_items;
      });
    },
  },
  created() {
    this.showTitle();
    this.gatIntro();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
