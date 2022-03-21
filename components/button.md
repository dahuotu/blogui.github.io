?> 按钮作为表单中不可或缺的控件在博客系统中使用的也是最多的组件，这里仅提供最基本最常用的按钮。

### 普通按钮

> 纯文字的普通按钮。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-button.html)

```html
<button class="button">普通按钮</button>
```

### 图标按钮

> 按钮上带有图标的按钮。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-button.html)

```html
<button class="button"><i class="icon-search"></i>搜索</button>
```

### 功能按钮

功能按钮即博客中最常见的功能类型的按钮，这里只提供最常见和最基础的按钮（下载、复制、点赞、分享、赞赏、联系）。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-button.html)

> 下载按钮

```html
<button class="button"><i class="iconfont icon-download"></i>下载</button>
```

> 复制按钮

```html
<button class="button"><i class="iconfont icon-copy"></i>复制</button>
```

> 点赞按钮

```html
<button class="button"><i class="iconfont icon-zan"></i>点赞</button>
```

> 分享按钮

```html
<button class="button"><i class="iconfont icon-share"></i>分享</button>
```

> 赞赏按钮

```html
<button class="button"><i class="iconfont icon-zanshang"></i>赞赏</button>
```

> 联系按钮

```html
<button class="button"><i class="iconfont icon-user"></i>联系</button>
```

### 按钮尺寸

按钮的尺寸一般分为特小、普通、超大、自适应这4种，合理的运用会给博客页面增添几分色彩。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-button.html)

> 特小按钮

```html
<button class="button button-small">特小按钮</button>
```

> 普通按钮

```html
<button class="button">普通按钮</button>
```

> 超大按钮

```html
<button class="button button-big">超大按钮</button>
```

> 自适应按钮

```html
<button class="button button-block">宽度自适应</button>
```

### 按钮状态

按钮的一般状态主要分两种，启用状态和禁用状态，默认启用状态，特定条件下才会使用禁用状态，即禁止点击操作。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-button.html)

> 禁用状态，使用button自带的 `disabled` 属性即可。

```html
<!--html5 button标签方式-->
<button class="button" disabled="disabled"><i class="iconfont icon-download"></i>下载</button>
<!--html4 input方式-->
<input class="button" type="button" disabled="disabled" value="下载" />
```

最后更新：2022-03-03

---
