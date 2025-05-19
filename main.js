const { createApp } = Vue;
const dt = {
  age: 1,
};
const my_com = {
  template: `<h1>Heloo {{name}} </h1> <input type="text" v-model="name"/> <h1>{{dt.age}}</h1>
  <button @click="dt.age++">Click me</button>`,
  data() {
    return {
      name: "",
      dt,
    };
  },
  methods: {
    inc() {
      dt.age++;
    },
  },
};
const vue1 = createApp({
  data() {
    return {};
  },
  components: {
    my_com,
  },
}).mount("#app1");
const vue2 = createApp({
  data() {
    return {};
  },
  components: {
    my_com,
  },
}).mount("#app2");
