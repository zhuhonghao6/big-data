<template>
  <div id="map2" class="animate__animated animate__backInUp"></div>
</template>

<script>
import { Scene } from "@antv/l7";
import { CityLayer } from "@antv/l7-district";
import { Mapbox } from "@antv/l7-maps";
const colors = ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"];

export default {
  data() {
    return {
     
    };
  },
  methods: {
    async initMap() {
      const response = await fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/149b599d-21ef-4c24-812c-20deaee90e20.json"
      );
      console.log(response);
      const provinceData = await response.json();
      const data = Object.keys(provinceData).map((key) => {
        return {
          code: key,
          name: provinceData[key][0],
          pop: provinceData[key][2] * 1,
        };
      });

      const scene = new Scene({
        id: "map2",
        map: new Mapbox({
          center: [119.2825, 45.9],
          pitch: 0,
          autoFit: true,
          style: "blank",
          zoom: 7.3,
          minZoom: 7.3,
          maxZoom: 7.3,
        }),
      });
      scene.on("loaded", () => {
        new CityLayer(scene, {
          data,
          joinBy: ["adcode", "code"],
          adcode: ["330000", "330100"],
          depth: 3,
          label: {
            field: "NAME_CHN",
            textAllowOverlap: false,
          },
          fill: {
            color: { field: "pop", values: colors },
          },
          popup: {
            enable: true,
            Html: (props) => {
              return `<span>${props.NAME_CHN}:</span><span>${props.pop}</span>`;
            },
          },
        });
      });
    },
  },
  created() {
    // setTimeout(() => {
      this.isMap = true;
      this.initMap();
    // }, 1200);
  },
};
</script>

<style lang="less" scoped>
#map2 {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>