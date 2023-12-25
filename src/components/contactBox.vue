<template>
  <div class="contact">
    <div class="title-box">
      <img src="/src/assets/images/slash.svg" alt="" />
      <h3 class="contact_title">{{ connetcData[6]?.text }}</h3>
    </div>
    <div class="">
      <div class="contact_box row mx-auto flex-wrap">
        <div
          class="contact_social-networks social col-12 col-md-6 col-xl-3 text-center align-items-center"
        >
          <div class="social_box mx-md-auto">
            <p class="social_title">{{ connetcData[5]?.text }}</p>
            <i class="fa-solid fa-house"></i>
          </div>
          <div class="social_box">
            <p class="social_title">{{ connetcData[4]?.text }}</p>
            <a class="social_phone" :href="connetcData[3]?.text">{{
              connetcData[3]?.text
            }}</a>
          </div>
          <div class="social_box">
            <p class="social_title">{{ connetcData[2]?.text }}</p>
            <a class="social_phone" :href="connetcData[1]?.text">{{
              connetcData[1]?.text
            }}</a>
          </div>
        </div>
        <div
          class="contact_wrap col-12 col-md-6 col-xl-4 d-none d-md-block d-xl-none"
        >
          <form class="contact_form" @submit.prevent="send()">
            <input
              type="text"
              class="name_input form_input"
              placeholder="Ism familiyangiz"
              v-model="body.name"
              required
            />
            <input
              type="text"
              class="phone_input form_input"
              placeholder="Telefon raqamingiz"
              v-model="body.phone"
              required
            />
            <button class="form_btn" type="submit">Yuborish</button>
          </form>
        </div>
        <div class="contact_location col-12 col-xl-5">
          <p class="social_title">{{ connetcData[0]?.text }}</p>
          <!-- <iframe
            :src="connectMap[0]?.text"
            width="600"
            height="230"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
         -->
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5467.365048122903!2d71.77863359999843!3d40.39067024599543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1703476889532!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div
          class="contact_wrap col-12 col-md-6 col-xl-4 d-block d-md-none d-xl-block"
        >
          <form class="contact_form" @submit.prevent="send()">
            <input
              type="text"
              class="name_input form_input w-100"
              placeholder="Ism familiyangiz"
              v-model="body.name"
              required
            />
            <input
              type="text"
              class="phone_input form_input w-100"
              placeholder="Telefon raqamingiz"
              v-model="body.phone"
              required
            />
            <button class="form_btn" type="submit">Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../server/api";
export default {
  data() {
    return {
      body: {
        name: "",
        phone: "",
      },
      params: {
        id: 5,
      },
      mapParams: {
        id: 11,
      },
      connetcData: [],
      connectMap:[]
    };
  },
  methods: {
    send() {
      var token = "6146035802:AAGAtq5EKYTQqgXW3Ffd7ca0aTDg1K_ewus";
      var chat_id = 1989961079;
      var url = `https://api.telegram.org/bot${token}/sendMessage`;
      let message = "";
      message += `<b>Yangi mijoz:</b>\n<b>Ismi: </b>${this.body.name}\n`;
      message += `<b>Telefon raqami: </b>${this.body.phone}\n`;

      axios
        .post(url, {
          chat_id: chat_id,
          parse_mode: "html",
          text: message,
        })
        .then((res) => {
          alert("Jo'natildi");
        });
    },
    // get function
    getConnect() {
      api.category_one(this.params).then((res) => {
        this.connetcData = res.data.category_items;
      });
    },
    getMap() {
      api.category_one(this.mapParams).then((res) => {
        this.connectMap = res.data.category_items;
      });
    },
  },
  created() {
    this.getConnect();
    this.getMap();
  },
};
</script>
<style></style>
