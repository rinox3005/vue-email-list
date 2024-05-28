"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Email API",
      emails: [],
      length: 10,
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      message: "Generate",
    };
  },
  //   mounted() {
  //     this.getEmails();
  //   },
  methods: {
    getEmails() {
      this.message = "Wait...";
      for (let i = 0; i < this.length; i++) {
        axios.get(this.url).then((response) => {
          this.emails.push(response.data.response);
        });
      }
    },
    clearList() {
      this.emails = [];
      this.message = "Generate";
    },
  },
}).mount("#app");
