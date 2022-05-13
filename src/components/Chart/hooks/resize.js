import { ref } from 'vue';
import { debounce } from '@/utils/timefix';

export default function chartResize() {
  const sidebarEl = ref(null);
  const resizeHandler = ref(null);

  const sidebarResizeHandler = (e) => {
    if (e.propertyName === 'width') {
      resizeHandler.value();
    }
  };

  const initListener = (chart) => {
    resizeHandler.value = debounce(() => {
      resize(chart);
    }, 100);
    window.addEventListener('resize', resizeHandler.value);

    sidebarEl.value = document.getElementsByClassName('ant-layout-sider')[0];
    sidebarEl.value && sidebarEl.value.addEventListener('transitionend', sidebarResizeHandler);
  };

  const destroyListener = () => {
    window.removeEventListener('resize', resizeHandler.value);
    resizeHandler.value = null;

    sidebarEl.value && sidebarEl.value.removeEventListener('transitionend', sidebarResizeHandler);
  };

  const resize = (chart) => {
    chart && chart.resize();
  };

  return {
    sidebarEl,
    resizeHandler,
    initListener,
    sidebarResizeHandler,
    destroyListener,
    resize,
  };
}
