# 首页欢迎区

此目录包含欢迎区的模板、动效、交互和图形源文件。Jekyll 将其作为 output: false 的内部集合读取，通过 _layouts/default.html 嵌入首页；这些模板和辅助文件不会生成独立网页。无需额外插件或前端依赖。

## 选择欢迎图

在 _pages/about.md 顶部设置：

    debut: true
    debut_diagram: random

debut 控制是否启用欢迎区；debut_diagram 控制选图：

| 值 | 欢迎图 |
| --- | --- |
| yoneda | Yoneda Lemma |
| pentagon | Pentagon Axiom（五边形公理） |
| hexagon | Hexagon Axiom（六边形公理的编织图） |
| yang-baxter | Yang–Baxter Equation |
| random | 每次加载首页时，从上述四幅图中随机选一幅 |
| custom | 使用 welcome.html 顶部的自定义 SVG 配置 |

当前默认设为 random；不填写此键时使用 yoneda。
同一页面内滚动、进入正文、回到欢迎区都不会重新抽取图形。

## 更换交换图或 SVG

1. 将新的 SVG 放入 diagrams/。
2. 将 _pages/about.md 中的 debut_diagram 设为 custom，并编辑 welcome.html 顶部的配置：

       diagram: diagrams/your-diagram.svg
       attribution: "— Your attribution"
       description: "Describe the diagram for screen readers."

3. 重新构建网站。

也可以在 welcome.html 的 diagrams 列表中新增一个带独立 id、svg 路径、
attribution、description 和 width 的条目；新条目自动加入随机选图范围。

SVG 应带有 viewBox，且不依赖外部字体。单色图建议使用 currentColor 作为填充和描边颜色，自动适配明暗主题。原本带颜色的 SVG 会保留颜色。SVG 会内嵌到首页，建议使用专属 ID，避免与页面中的其他图形冲突。空 attribution 会隐藏署名，不保留其间距。

## 从 LaTeX 生成 SVG

本机安装 LuaLaTeX 和 dvisvgm 后，在仓库根目录运行：

    python3 _debut/build-diagram.py

也可编译新的 standalone 图：

    python3 _debut/build-diagram.py _debut/diagrams/another-diagram.tex

脚本将字体转为路径，适配单色主题并为 SVG 的 ID 添加 debut-文件名- 前缀，避免多幅图共存时的 ID 冲突。编织图的白色遮挡也会替换为网站当前底色，适配深色主题。所有中间编译文件写入临时目录，只在 diagrams/ 保留源文件和 SVG。网站构建直接使用已提交的 SVG，访客和 GitHub Pages 均无需安装 LaTeX。

## 显示和交互

- 仅首页 _pages/about.md 开启 debut: true；改成 false 即可关闭。
- 首次进入时依次淡入交换图、署名和下箭头，箭头随后轻柔呼吸。
- 欢迎区底色、公式颜色跟随网站当前主题，与个人主页保持一致。
- 点击箭头或向下滚动进入正常主页，顶部导航随之出现。
- 进入正文后，本标签页记住访问状态，返回或刷新首页直接展示正文；欢迎区仍保留在上方，可向上滚动返回。
- 指向正文锚点的链接直接进入对应位置；欢迎区仍可向上滚动访问。
- 系统要求减少动态效果时显示静态首屏，并取消平滑滚动。
- JavaScript 不可用时直接显示原来的主页。

## 文件

这里的 JavaScript 会内嵌到页面中。Docker 和生产环境会压缩 HTML 并移除换行，
因此请使用 /* … */ 块注释，避免使用依赖换行结束的单行注释。

可针对构建后的 HTML 检查启动脚本，覆盖 HTML 压缩后的实际执行情况：

    node _debut/check-rendered.js _site/index.html

- welcome.html：交换图路径、署名、无障碍描述和欢迎区结构。
- select-diagram.js：固定或随机选图，每次首页加载只选择一次。
- debut.css：布局、响应式样式及动画时间。
- boot.js：首次访问判断，在首屏绘制前执行。
- debut.js：滚动、导航显隐和键盘交互。
- check-rendered.js：检查压缩后的脚本是否真正启用欢迎区。
- head.html / script.html：供默认布局插入的内部片段。
- diagrams/：SVG 和可选的 LaTeX 源文件。
