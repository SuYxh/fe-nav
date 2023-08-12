import type { NavLink } from '../components/type'
import commonTools from './commonTools';
import aiTools from './aiTools';
import vueEcology from './vueEcology';
import reactEcology from './reactEcology';
import JavaScript from './JavaScript';
import css from './css';
import miniProgram from './miniProgram';
import node from './node';
import visual from './visual';
import build from './build';
import siteGenerator from './siteGenerator';
import icon from './icon';
import study from './study';
import community from './community';
import rest from './rest';

export type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  // 常用工具
  commonTools,
  // AI 导航
  aiTools,
  // Vue 生态
  vueEcology,
  // React 生态
  reactEcology,
  // JavaScript 框架类库
  JavaScript,
  // CSS 相关
  css,
  // 小程序相关
  miniProgram,
  // Node 相关
  node,
  // 可视化
  visual,
  // 编译&构建&打包
  build,
  // 站点生成器
  siteGenerator,
  // 图标库
  icon,
  // 前端学习资料
  study,
  // 社区
  community,
  // 摸鱼专用
  rest
]
