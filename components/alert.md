?> 强提示一般用作醒目的提示用户，多数用在成功、失败、注意事项等强烈的提示，此处强提示是文字提示，因为博客系统多数以内容为主很少涉及流程与交互，如需JS提示可参考 `弹层提示` 插件。

### 文字提示

用文字的方式进行强提示，**注意**，此文字提示并非Js弹层提示，要做区分。

#### 标题提示

> 用标题的方式提示，一般在博客系统中主要是用来分割内容和列表的，比如，上面标题提示，下面就是文章列表，具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-title-tips.html)

```html
<div class="title-tips"><span>标题</span></div>
```

### 警告提示

警告提示一般常用到的无非只有两种，一种成功，一种错误（失败提示）至于其他的提示，在博客系统内很少见，如有需要后续再增加。

#### 成功提示

> 默认成功提示，无强提示文字，具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-alert-1.html)

```html
<div class="alert-success">
    默认成功提示
</div>
```

> 带有强提示的成功提示，具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-alert-2.html)

```html
<div class="alert-success">
    <strong>温馨提示</strong>
    <p>
        恭喜道友，成功的泡了一个妞！
    </p>
</div>
```

#### 失败提示

> 默认失败提示，无强提示文字，具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-alert-3.html)

```html
<div class="alert-error">
    错误警告提示
</div>
```

> 带有强提示文字的失败提示，具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-alert-4.html)

```html
<div class="alert-error">
    <strong>警告提示</strong>
    <p>
        道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！道友，您泡的那名妞已有主，请道友自重！
    </p>
</div>
```

验证版本：version 1.0.1
最后更新：2022-02-03

---
