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

        L.marker([36.79107, 117.86078]).addTo(this.map).bindPopup('周村站').openPopup();
        L.marker([36.796958, 117.742712]).addTo(this.map).bindPopup('邹平站').openPopup();
        L.marker([36.767247, 117.917215]).addTo(this.map).bindPopup('周村东站').openPopup();
        L.marker([36.795783, 118.000257]).addTo(this.map).bindPopup('马尚站').openPopup();
        L.marker([36.78892, 118.057655]).addTo(this.map).bindPopup('淄博站').openPopup();
        L.marker([36.895439, 118.026388]).addTo(this.map).bindPopup('淄博北站').openPopup();
        //this.map.removeLayer(name); // 移除图层
      },
    },
  });
</script>

<style scoped>
  .leaflet {
    width: 100%;
    height: 600px;
  }
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    left: 50.1%;
    top: 300px;
    transform: translate3d(-50%, -50%, 0);
  }
  .map {
    width: 100%;
    height: calc(100%);
    z-index: 1;
  }
</style>
