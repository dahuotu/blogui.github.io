?> 头像/LOGO在博客系统中很常用的一种，一般在介绍博主或站长信息时使用到，也有在突出站点LOGO时用到。多数情况下头像和LOGO都是正方形，头像为圆形。

### 方形头像

> 方形头像为默认头像，使用 `.face` 样式添加到图片标签上即可。头像/LOGO大小由 `<img />` 标签的 `width` 和 `height` 控制，BlogUi这里不再做限制。如果需要给头像增加边框，只需要在 `.face` 样式后添加 `空格` + `.face-border` 样式即可。

**注意：**这里的图片无论是否为正方形、长方形、圆形， `.face` 都会做处理，不会出现拉升，变形等情况。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-face.html)

```html
<!--50像素大小的头像-->
<img class="face" width="50" height="50" src="..." alt="..." />
<!--100像素大小的头像-->
<img class="face" width="100" height="100" src="..." alt="..." />
<!--150像素大小并且带有白色边框的头像-->
<img class="face face-border" width="150" height="150" src="..." alt="..." />
```

### 圆形头像

> 圆形头像，使用 `.face-round` 样式添加到图片标签上即可。头像/LOGO大小同样是由 `<img />` 标签的 `width` 和 `height` 控制，BlogUi这里不再做限制。如果需要给头像增加边框，只需要在 `.face` 样式后添加 `空格` + `.face-border` 样式即可。

**注意：**这里的图片无论是否为正方形、长方形、圆形， `.face` 都会做处理，不会出现拉升，变形等情况。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-face.html)

```html
<!--50像素大小的头像-->
<img class="face-round" width="50" height="50" src="..." alt="..." />
<!--100像素大小的头像-->
<img class="face-round" width="100" height="100" src="..." alt="..." />
<!--150像素大小并且带有白色边框的头像-->
<img class="face-round face-border" width="150" height="150" src="..." alt="..." />
```

最后更新：2022-02-03

---
