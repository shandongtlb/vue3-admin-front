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
        '邹平所',
        '章丘北所',
        '淄博北所',
        '潍坊北所',
        '烟台南所',
        '淄博所',
        '潍坊所',
        '青岛所',
        '青岛北所',
        '莱阳所',
        '莱西所',
        '平度所',
        '机场所',
        '胶州北所',
        '即墨北所',
        '威海所',
        '即墨北所',
        '滨州所',
        '东营所',
        '东营南所',
        '临淄北所',
        '高密所',
        '高密北所',
        '烟台南所',
        '荣成所',
        '青岛西所',
        '潍坊东所',
        '阳信所',
        '博兴所',
        '平度所',
        '青州市所',
        '青州市北所',
        '董家口南所',
      ],
      lineData: [
        18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 56061, 62677, 59521,
        67560, 18092, 20728, 24045, 39867, 44715, 48444, 50415, 56061, 48444, 50415, 36097, 39867,
        44715, 48444, 39867, 44715, 48444, 50415, 56061,
      ],
      barData: [
        4600, 5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200, 24450, 25250, 33300,
        4600, 5000, 5500, 6500, 7500, 8500, 9900, 22500, 14000, 21500, 8500, 9900, 12500, 14000,
        21500, 14000, 21500, 8500, 9900, 4533,
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
