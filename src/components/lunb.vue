<template>
<div class="context">
<dv-scroll-ranking-board :config="config" style="width:100%;height:260px;"/>
</div>
</template>
<script>
export default {
  data() {
    return {
         config: {
data: [
    {
      name: '江干',
      value: 24840
    },
    {
      name: '余杭',
      value: 30955
    },
    {
      name: '拱墅',
      value: 13237
    },
    {
      name: '武林',
      value: 12052
    },
    {
      name: '钱塘',
      value: 11893
    },
    {
      name: '西湖',
      value: 13716
    },
    {
      name: '萧山',
      value: 24268
    },
        {
      name: '桐庐',
      value: 7459
    },
        {
      name: '滨江',
      value: 6113
    },
        {
      name: '富阳',
      value: 8242
    },
        {
      name: '淳安',
      value: 3655
    },
        {
      name: '建德',
      value: 3555
    },
           {
      name: '临安',
      value: 3832
    },
  ],
  rowNum:5
      },
    };
  },
};
</script>
<style scoped>

</style>