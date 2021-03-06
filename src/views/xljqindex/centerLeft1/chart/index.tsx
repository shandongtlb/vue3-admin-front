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
      xData: ['抄近道', '挖野菜', '砍伐', '穿顶管', '抓蝎子', '看火车', '顺线行走', '其他'],
      seriesData: [
        { value: 10, name: '抄近道' },
        { value: 60, name: '挖野菜' },
        { value: 15, name: '砍伐' },
        { value: 25, name: '穿顶管' },
        { value: 60, name: '抓蝎子' },
        { value: 35, name: '看火车' },
        { value: 5, name: '顺线行走' },
        { value: 40, name: '其他' },
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
