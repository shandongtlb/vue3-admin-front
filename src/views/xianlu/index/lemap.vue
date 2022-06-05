<template>
  <div class="leaflet">
    <div class="container">
      <div id="map" class="map"></div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  export default defineComponent({
    name: 'AMap',
    data() {
      return {
        map: '',
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        this.map = L.map('map', {
          center: [36.79107, 117.86078], // 地图中心
          zoom: 14, //缩放比列
          zoomControl: true, //禁用 + - 按钮
          doubleClickZoom: true, // 禁用双击放大
          attributionControl: true, // 移除右下角leaflet标识
        });
        // eslint-disable-next-line no-unused-vars

        L.tileLayer('http://localhost:9090/{z}/{x}/{y}.png', {
          minZoom: 3,
          maxZoom: 16,
          //detectRetina: true,
        }).addTo(this.map);

        //this.map.removeLayer(name); // 移除图层
      },
    },
  });
</script>

<style scoped>
  .leaflet {
    width: 100%;
    height: 730px;
  }
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    left: 50.1%;
    top: 350px;
    transform: translate3d(-50%, -50%, 0);
  }
  .map {
    width: 100%;
    height: calc(100%);
    z-index: 1;
  }
</style>
