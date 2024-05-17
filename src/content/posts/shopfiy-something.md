---
title: "记录Shopify开发遇到的环境问题"
author: ibucoin
description: "记录Shopify开发遇到的环境问题"
pubDatetime: 2024-05-17
featured: false
draft: false
ogImage: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags:
  - Shopify
---
在开发Shopify的过程当中，会遇到中国的网络问题。主要是会有几个问题：
## 安装过程的gfw问题
- node这边在拉取项目的时候，因为mac端的代理问题，cmd窗口是无法走代理的，所以cli安装的时候会出现错误。但是，一开始开发的时候，并不会把问题往这方面去想，导致我浪费了很多时间去查阅一些几乎没有的资料，最后在一个issue中看到有人说是gfw的问题。
- 和node这边的一样，但是是访问Shopify的接口会出问题，同样没有太多外国人遇到这个问题。
-
解决方案：
Windows端的话，可以用clash开tunnel来解决。而mac端就比较的麻烦，需要借助软件Proxifier来进行解决。通过Proxifier，我把node和cloudflared都走代理那边，这样的话，就可以正常的启动Shopify的开发环境。

## Cloudflared的问题
在这几天的开发过程中，遇到在Shopify中，无法访问页面的问题，会提示`Error forwarding web request` 的问题，页面并不能显示出来。起初我以为是我添加了代码导致出现错误，在经过一些调试语句的测试，发现根本没有进入到页面的初始化过程。
同样，在网上的话，你找不到太多和这个错误相关的内容。这边的话，需要理解一个重要的关键点：“同样的代码，为什么昨天可以运行，今天不能运行了呢？”。我尝试建立了一个新的项目，依旧还是会出现问题。在我找了1个多小时的解决方案的时候，中间尝试着把Proxifier重装和配置，认为有可能是网络问题后，我才思考到，有可能是Cloudflared出现问题。因为Shopify的本质是加载一个url到iframe来进行展示，当你的本地界面无法进行有效的转发，自然也就访问不到网页了。

解决方案：
更换成ngrok来进行本地代理转发
```
ngrok http 3000
pnpm dev --tunnel-url https://1ff3-103-151-172-34.ngrok-free.app:3000

就这样，手动的增加ngrok的转发，让本地可以跑
```
当然，一开始的问题也有可能会是网络导致tunnel没有生效，但是我并没有海外的服务器来尝试，所以不能准确的定位问题。