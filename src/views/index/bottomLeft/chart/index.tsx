// @ts-nocheck
import { defineComponent, reactive, onMounted } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      category: [
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
      ],
      lineData: [
        18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 56061, 62677, 59521,
        67560, 18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 36097, 39867,
        44715, 48444, 50415, 50061, 32677, 49521, 32808,
      ],
      barData: [
        4600, 5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200, 24450, 25250, 33300,
        4600, 5000, 5500, 6500, 7500, 8500, 9900, 22500, 14000, 21500, 8500, 9900, 12500, 14000,
        21500, 23200, 24450, 25250, 7500,
      ],
      rateData: [],
    });

    // methods
    const setData = () => {
      for (let i = 0; i < cdata.barData.length - 1; i++) {
        const rate = cdata.barData[i] / cdata.lineData[i];
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
