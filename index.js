var app = new Vue({
  el: "#calculator",
  data: {
    message: "",
    isFinished: false
  },
  methods:{
    clear() {
      this.message = "";
    },
    show(ele) {
      if (typeof(ele) === "string") {
        this.message = this.message + ele;
      } else {
        this.message = this.message + ele.toString();
      }
    },
    equal() {
      this.message = eval(this.message);
    },
    Sqrt() {
      try {
        var res = parseFloat(this.message);
        res = Math.sqrt(res);
      } catch(err) {
        this.message = err;
      }

      this.message = res.toString();
    }
  }
})
