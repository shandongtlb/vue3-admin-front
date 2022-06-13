import { ModuleInfo } from './index.d';

// 星期
export const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

// 主题名称与副标题名称
export const title = '公安处治安大数据分析系统';
export const subtitle = ['案件分析', '疫情防控', '基础工作'];

export const moduleInfo: ModuleInfo = [
  // 中间的几个模块
  {
    name: '案件类型分析',
    icon: 'icon-chart-bar',
  },
  {
    name: '地图数据',
    icon: 'icon-tongji4',
  },
  {
    name: '线路警情分析',
    icon: 'icon-align-left',
  },
  {
    name: '任务完成排行榜',
    icon: 'icon-zhibiao2',
  },
  // 底部两个模块
  {
    name: '案件数量统计图',
    icon: 'icon-vector',
  },
  {
    name: '工单修复以及满意度统计图',
    icon: 'icon-fenxi7',
  },
];
