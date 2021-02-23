<template>
  <!-- 数字滚动组件 -->
  <div id="numberScrolling">
    <div class="view" v-for="(item, index) in number" :key="index">
      <template v-if="item.n != ','">
        <ul class="num" :style="item.top" ref="scro">
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </template>
      <template v-if="item.n == ','">
        <ul class="num" style="top:2000px; transition:none">
          <li v-html="a" style="position:absolute;top:-2000px"></li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {
      number: [],

      a:','
    };
  },
  watch: {
    num() {
      // this.$refs.scro.forEach((item) => (item.style.transition = `top 1s`));
  
      this.splitNum();
    },
  },
  methods: {
    formatter(number) {
      const numbers = number.toString().split("").reverse();
      const segs = [];

      while (numbers.length) segs.push(numbers.splice(0, 3).join(""));

      return segs.join(",").split("").reverse().join("");
    },
    splitNum() {
      this.number = [];
      console.log(this.formatter(this.num));
      let s = this.formatter(this.num).toString();
      for (let i = 0; i < s.length; i++) {
        this.number.push({
          num: s[i],
          top: `top:null`,
        });
      }
      setTimeout(() => {
        this.number.forEach((item) => {
          if(item.num === ',') {
            this.$set(item,'n',',');
             this.$set(item, "top", `top:0`);
            return;
          }
          const top = -item.num * 40;
          this.$set(item, "top", `top:${top}px`);
        });
      }, 0);
      console.log(this.number);
    },
  },
  created() {
    this.splitNum();
  },
};
</script>

<style lang="less" scoped>
#numberScrolling {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;

  .view {
    width: 25px;
    height: 40px;
    margin: 0 5px;
    overflow: hidden;
    position: relative;
    background-color: transparent;

    .num {
      padding: 0;
      margin: 0;
      list-style: none;
      color: #fff;
      width: 100%;
      position: absolute;
      top: 0;
      transition: top 1.5s;
      z-index: 888;
      border: none;
      li {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        text-align: center;
        background: #1f2a45;
              border: none !important ;  

        line-height: 40px;
        font-size: 35px;
        font-weight: 600;
        text-shadow: 0 0 4px rgba(255,255,255,.7);
        // font-family: "zt3";
      }
    }
  }
}
.width {
  width: 10px !important;
}
.dh {
  width: 40px;
  // left: -85px;
  // transform: translatex(-18px);
}
@font-face {
  font-family: "zt3";
  src: url("../assets/zt3.ttf");
}
</style>