<template>
  <div id="map" class="map"></div>
</template>

<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-language/v0.9.2/mapbox-gl-language.js'></script>

<script>
import MapboxLanguage from "@mapbox/mapbox-gl-language";

export default {
  data() {
    return {};
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoibGlqaWFuZ2ppYW5namlhbmciLCJhIjoiY2s2b2czbmltMG14cDNkbXpldjhkd3c3ZiJ9.zBaMzJo2X2UVPyFTtd5hEQ";
      var map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v10",
        center: [120.2, 30.26],
        zoom: 7,
        logoPosition:'top-left',
        default: false,
        
      });

      map.addControl(new MapboxLanguage({ defaultLanguage: "zh" }));

    },
  },
};
</script>

<style scoped>
.map{
    width: 100%;
    height: 100%;
}
</style>