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
          center: [36.798861, 117.680998], // 地图中心
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

        const DefaultIcon = L.icon({
          iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
          iconRetinaUrl: require('leaflet/dist/images/marker-icon.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        });
        L.Marker.prototype.options.icon = DefaultIcon;

        L.marker([36.798861, 117.680998]).addTo(this.map).bindPopup('上回村').openPopup();
        //this.map.removeLayer(name); // 移除图层
      },
    },
  });
</script>

<style scoped>
  .leaflet {
    width: 100%;
    height: 400px;
  }
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    left: 43.1%;
    top: 190px;
    transform: translate3d(-50%, -50%, 0);
  }
  .map {
    width: 116%;
    height: calc(100%);
    z-index: 1;
  }
</style>
