---
title: "astro blog的搭建过程"
author: ibucoin
description: "astro blog的搭建过程"
pubDatetime: 2024-05-07
featured: false
draft: false
ogImage: "https://plus.unsplash.com/premium_photo-1665329006985-04f95dd59402?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags:
  - test
---

在astro布道师[**liruifeng**](liruifengv.com)的布道下，我用了2天的时间尝试着把自己以前的hugo博客转换成了astro，而现在的这个网站就是我之前的成果

###  尝试着又转换一次blog
我并不是一个爱写文章的人，经历过从Wordpress->Jekyll->hugo的搭建历程。每一次，我都是重新开始写文章，然后过没几天就放弃掉了。我的大部分思考都写在了notion里面，而大部分文章实际上也没有太多的价值。 但是，这次我想尝试着写一点点技术类的文章，尝试着打造一个自己的标签，让自己可以被更多的人看到。

###  astro的架构
我使用了liruifeng的blog的整体架构，配色和卡片结构参考了[衛斯理](https://imwsl.com/) 的博客。在导航板块中，我添加了博客和标签的页面，首页添加了最新显示博文的功能。
在使用astro的过程当中，我能感觉才astro的优势在于写起来很舒服。在写astro的过程中，你可以充分的将需要的东西组件化，和写Vue很像。而astro又把文章通过`getCollection`来进行相关的读取，也就是我们在写整体的时候，不需要考虑怎样动态化的读取文章，最耗费时间的其实是在写Css上面。

对于astro，我还并不是太熟悉，但是我会把它作为写简单网站的第一个首选。