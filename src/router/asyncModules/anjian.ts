/**
 * anjian module
 */
export default {
  'views/anjian/home': () => import('@/views/anjian/home/nengli-radar.vue'),
  'views/anjian/demo': () => import('@/views/anjian/home/huizong.vue'),
  'views/anjian/demo1': () => import('@/views/anjian/home/jingqingtongji.vue'),
  'views/anjian/demo2': () => import('@/views/anjian/home/huanbi.vue'),
  'views/anjian/index': () => import('@/views/anjian/home/index.vue'),
};
