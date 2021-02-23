<template>
  <div id="mountNode">
                   <dv-water-level-pond :config="config" style="width:150px;height:100px" />
  </div>
</template>
<script>

export default {
  data() {
 return {
     config: {
      data: [66]
       },
      };
  },

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