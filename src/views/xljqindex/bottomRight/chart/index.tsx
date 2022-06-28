// @ts-nocheck
import { defineComponent, reactive, onMounted } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      category: ['张博线', '新泰线', '张东线'],
      lineData: [7, 7, 5], //查清的
      barData: [4, 2, 3], //未查清
      rateData: [], //总数
    });

    // methods
    const setData = () => {
      for (let i = 0; i < cdata.barData.length - 0; i++) {
        const rate = cdata.barData[i] + cdata.lineData[i];
        cdata.rateData.push(rate.toFixed(2));
      }
    };

    // 生命周期
    onMounted(() => {
      setData();
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
