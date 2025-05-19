const { createApp } = Vue;
createApp({
  data() {
    return {
      age: 30,
      links: ["one", "two", "three"],
      names: [
        { name: "hassan", salary: 150000 },
        { name: "zizo", salary: 20000 },
        { name: "ahmed", salary: 3051000 },
      ],
      products: [
        { title: "pro One", price: 150, imgs: "1.png" },
        { title: "pro Two", price: 200, imgs: "5.png" },
        { title: "pro Three", price: 100, imgs: "8.png" },
      ],
      colors: ["red", "green", "blue"],
    };
  },
}).mount("#app");
