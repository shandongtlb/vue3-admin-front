// @ts-nocheck
import { defineComponent, reactive } from 'vue';
import Draw from './draw';

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive([
      {
        // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
        name: '青岛市',
        value: 10,
        elseData: {
          // 这里放置地图 tooltip 里想显示的数据
        },
      },
    ]);

    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      );
    };
  },
});
