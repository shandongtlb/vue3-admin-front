// @ts-nocheck
import { defineComponent, onUnmounted, reactive } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      xData: ['沿线村民', '流浪汉', '公职人员', '三倌在册', '精神病在册', '其他'],
      seriesData: [
        { value: 10, name: '沿线村民' },
        { value: 5, name: '流浪汉' },
        { value: 15, name: '公职人员' },
        { value: 25, name: '三倌在册' },
        { value: 20, name: '精神病在册' },
        { value: 35, name: '其他' },
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
