// @ts-nocheck
import { defineComponent, onUnmounted, reactive } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      xData: ['抄近道', '顺线行走', '侵线放牧', '其他'],
      seriesData: [
        { value: 10, name: '抄近道' },
        { value: 5, name: '顺线行走' },
        { value: 15, name: '侵线放牧' },
        { value: 25, name: '其他' },
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
