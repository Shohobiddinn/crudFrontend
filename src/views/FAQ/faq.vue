<template>
  <div class="faq">
    <div class="container-c">
      <sidebar />
      <div class="title-box">
        <img src="/src/assets/images/slash.svg" alt="" />
        <h3 class="contact_title">{{ faqData[0]?.text }}</h3>
      </div>
      <div class="faq_box">
        <div class="faq_item item1">
          <p class="faq_question">
            {{ faqData[12]?.text }}
          </p>
          <p class="faq_answer">
			{{ faqData[11]?.text }}
          </p>
        </div>
        <div class="faq_item item2">
          <p class="faq_question">
			{{ faqData[10]?.text }}
          </p>
          <p class="faq_answer">
			{{ faqData[9]?.text }}
          </p>
        </div>
        <div class="faq_item item3">
          <p class="faq_question">
			{{ faqData[8]?.text }}
          </p>
          <p class="faq_answer">
			{{ faqData[7]?.text }}
          </p>
        </div>
        <div class="faq_item item4">
          <p class="faq_question">
			{{ faqData[6]?.text }}
          </p>
          <p class="faq_answer">{{ faqData[5]?.text }}</p>
        </div>
        <div class="faq_item item5">
          <p class="faq_question">
			{{ faqData[4]?.text }}
          </p>
          <p class="faq_answer">
			{{ faqData[3]?.text }}
          </p>
        </div>
        <div class="faq_item item6">
          <p class="faq_question">
			{{ faqData[2]?.text }}
          </p>
          <p class="faq_answer">
			{{ faqData[1]?.text }}
          </p>
        </div>
      </div>
      <ContactBox />
    </div>
  </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue";
import ContactBox from "../../components/contactBox.vue";
import api from "../../server/api";
export default {
  data() {
    return {
      params: {
        id: 8,
      },
      faqData: [],
    };
  },
  components: {
    sidebar,
    ContactBox,
  },
  methods: {
    getFaq() {
      api.category_one(this.params).then((res) => {
        this.faqData = res.data.category_items;
      });
    },
  },
  created() {
    this.getFaq();
  },
};
</script>
<style></style>
