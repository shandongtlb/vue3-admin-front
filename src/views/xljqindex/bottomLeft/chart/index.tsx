// @ts-nocheck
import { defineComponent, reactive, onMounted } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      category: ['胶济线', '蓝烟线', '胶黄线', '胶新线', '珠烟线', '胶济客专', '海青线', '龙烟线'],
      lineData: [10, 7, 2, 2, 2, 2, 0, 0],
      barData: [0, 2, 0, 0, 0, 0, 1, 1],
      rateData: [],
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
