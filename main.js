const { createApp } = Vue;
createApp({
  data() {
    return {
      name: "Hassan",
      link: "https://github.com/Hassan-Abd-El-Aziz/vueOptionsApi",
      text: "",
      userName: "",
      age: "",
      one: 0,
      two: 0,
    };
  },
  methods: {
    tstFun() {
      console.log(`Hello ${this.name}`);
    },
    print() {
      console.log(`Hi zizo`);
    },
    addUser() {
      console.log(`Heloo ${this.userName} age is ${this.age}`);
    },
    computed: {
      oneinc() {
        console.log(this.one * 2);
      },
      twoinc() {
        console.log(`twoChanged`);
        this.two++;
      },
    },
  },
}).mount("#app");
