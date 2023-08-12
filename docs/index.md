---
layout: home
layoutClass: "m-home-layout"

hero:
  name: 大黄
  text: 前端常用网站
  tagline: 基于 VitePress 的个人前端导航
  image:
    src: /logo.png
    alt: 大黄
  actions:
    - text: Go -->
      link: /nav/
    - text: 关于我
      link: https://www.baidu.com
      theme: alt
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: https://www.baidu.com
    linkText: 前端常用知识
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: https://www.baidu.com
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: https://www.baidu.com
    linkText: 踩坑记录
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
