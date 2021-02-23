<template>
  <div id="mountNode">
<el-progress type="dashboard" :percentage="percentage" :color="colors" :width=70 style="color:#fff"></el-progress>

  </div>
</template>
<script>
export default {
  data() {
 return {
        percentage: 0,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#5cb87a', percentage: 100}
        ]
      };
  },
  created() {
    setInterval(() => {
      this.percentage += 7;
      if(this.percentage >= 100) {
        this.percentage = 100;
      }
    }, 90);
  }
};
</script>
<style scoped>
#mountNode {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>