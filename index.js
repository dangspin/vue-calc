var app = new Vue({
  el: "#calculator",
  data: {
    message: ""
  },
  methods:{
    clear() {
      this.message = "";
    }
  }
})
