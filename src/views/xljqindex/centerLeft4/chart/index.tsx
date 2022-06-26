// @ts-nocheck
import { defineComponent, onUnmounted, reactive } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const intervalInstance = null;
    const cdata = reactive({
      xData: ['0-18', '18-60', '60以上'],
      seriesData: [
        { value: 10, name: '0-18' },
        { value: 5, name: '18-60' },
        { value: 15, name: '60以上' },
      ],
    });

    onUnmounted(() => {
      clearInterval(intervalInstance);
    });
    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      );
    };
  },
});
