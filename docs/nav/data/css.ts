import type { NavData } from './index';

const data: NavData =  {
  title: 'CSS 相关',
  items: [
    {
      icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
      title: 'PostCSS',
      desc: '一个用 JavaScript 转换 CSS 的工具',
      link: 'https://postcss.org'
    },
    {
      icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      title: 'Sass',
      desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
      link: 'https://sass-lang.com'
    },
    {
      icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
      title: 'TailwindCSS 中文网',
      desc: '一个功能类优先的 CSS 框架',
      link: 'https://www.tailwindcss.cn'
    }
  ]
}

export default data