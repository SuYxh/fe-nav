import type { NavData } from './index';

const data: NavData = {
  title: '前端学习资料',
  items: [
    {
      icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
      title: 'MDN | Web 开发者指南',
      desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
      link: 'https://developer.mozilla.org/zh-CN'
    },
    {
      icon: 'https://static.runoob.com/images/favicon.ico',
      title: '菜鸟教程',
      desc: '学的不仅是技术，更是梦想！',
      link: 'https://www.runoob.com'
    },
    {
      icon: '/icons/es6.svg',
      title: 'ES6 入门教程',
      desc: '阮一峰的网络日志',
      link: 'http://es6.ruanyifeng.com'
    }
  ]
}

export default data