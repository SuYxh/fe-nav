import type { NavData } from './index';

const data: NavData =   {
  title: 'Node 相关',
  items: [
    {
      icon: '/icons/nodejs.svg',
      title: 'Node.js',
      desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
      link: 'https://nodejs.org/zh-cn'
    },
    {
      icon: 'https://expressjs.com/images/favicon.png',
      title: 'Express',
      desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
      link: 'https://expressjs.com'
    },
    {
      icon: '/icons/koa.svg',
      title: 'Koa',
      desc: '基于 Node.js 平台的下一代 web 开发框架',
      link: 'https://koajs.com'
    },
    {
      icon: 'https://www.eggjs.org/favicon.png',
      title: 'Egg',
      desc: '为企业级框架和应用而生',
      link: 'https://www.eggjs.org/zh-CN'
    },
    {
      icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
      title: 'Nest.js 中文文档',
      desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
      link: 'https://docs.nestjs.cn'
    }
  ]
}

export default data