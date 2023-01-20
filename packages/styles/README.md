# 看见音乐 CSS 公共样式库

一般情况下，成体系的网站设计规范，大多会有 [原子设计（Atomic Design）](https://atomicdesign.bradfrost.com/table-of-contents/) 的影子。

这个项目，专注于把看见音乐下各个子项目的设计规范，拆解成基础的 CSS 资源，方便项目引用。

## 典型场景
星球发行和看见音乐，共用公司主品牌蓝色 `#0040FF`，但是具体到页面、组件，不同时期的版本又有明显自定义区别。

每个项目中都独立设定一遍色值的话，会给维护带来很多困难，也很容易出错。

另外类似 [Barlow Condensed](https://f2e.seemusic.xyz/resource/barlow-condensed.html) 这样的字体实现，如果没有公共调用方式，则后来者去寻求字体实现方案会耗费大量时间。

## 边界

### 内涵（包含什么）
* 最底层的色彩变量
* 公共字体调用
* 通用公共样式，如排版规范，包含文字颜色、字体、字号、行高等
* 仅对上述内容进行 **CSS 变量映射** 后，提供给其他组件调用的公共配置样式文件，如 `ElementPlus` 的自带色彩覆盖

### 外延（不包含什么）

* 业务组件样式，如页头、页脚。这些应该交由组件库实现（组件库可以引用这里的基础配置）
* 复合组件样式，视作同业务组件
* 页面级样式
* 第三方组件/组件库的自定义样式，如 [Swiper](https://swiperjs.com/vue)、[ElementPlus](https://github.com/element-plus/element-plus)，这些应该创建独立的子项目维护，并且需要有完整的预览

### 切分基本原则
一般情况下，组件/组件库之类，需要提供完整的样式预览，不会放在此项目内。

比如 `ElementPlus` 自定义皮肤，此项目中允许以 theme 的形式提供基础 **变量配置文件**，如

```
@import "../colors/seemusic.scss";

:root {
  --el-color-primary: var(--seemusic-primary);
  --el-text-color-regular: var(--seemusic-text-normal);

  --el-disabled-bg-color: var(--seemusic-bg-disabled);
  --el-disabled-border-color: var(--seemusic-border-disabled);
  --el-disabled-text-color: var(--seemusic-text-disabled);

  --el-color-danger: var(--seemusic-danger);
}

```

但是具体到某个组件（比如 `ElButton`）的样式覆写，必须放到独立的项目中，因为要提供 storybook 预览。
