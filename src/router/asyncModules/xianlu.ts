/**
 * anjian module
 */
export default {
  'views/xianlu/add': () => import('@/views/xianlu/luru.vue'),
  'views/xianlu/index': () => import('@/views/xianlu/index/index.vue'),
  'views/xianlu/chezhan': () => import('@/views/xianlu/chezhan/index.vue'),
  'views/xianlu/data': () => import('@/views/xianlu/data/index.vue'),
  'views/xianlu/roledata': () => import('@/views/system/permission/roledata/index.vue'),
  'views/xianlu/datainfo': () => import('@/views/xianlu/data/dataInfo.vue'),
};
