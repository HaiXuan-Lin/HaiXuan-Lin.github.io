---
title: "How to Set Up Overleaf Locally"
excerpt: "Discover how to set up and run your own local Overleaf instance, complete with installation steps, configuration tips, and troubleshooting guidance."
date: 2026-07-30
presence_type: "Tutorial"
---

# Reading in English

## Why a fork

The [official `overleaf/toolkit`](https://github.com/overleaf/toolkit) repo assumes Linux. On a Mac — especially Apple Silicon — running it out of the box hits two problems:

1. **Shell scripts break.** `bin/init` calls GNU-only `sed -i''` and `lib/shared-functions.sh` calls `sed -r` (GNU extended-regex flag). macOS ships BSD `sed`, which parses neither the same way, so config generation silently corrupts or errors out.
2. **The Docker image doesn't fit the machine.** `sharelatex/sharelatex` is only published for `linux/amd64` — on Apple Silicon `bin/up` fails with `no matching manifest for linux/arm64/v8`. And even once it runs (under emulation), the image only bundles a minimal `scheme-basic` TeX Live, so any `\usepackage` outside that small set fails with `File 'xxx.sty' not found`.

I forked the repo to fix the shell-portability bugs and to add a `--mac-texlive` option to `bin/init` that generates a `docker-compose.override.yml` handling both the architecture and the TeX Live problem — including reusing a MacTeX/TeX Live install you already have on disk, instead of downloading a full scheme again inside the container. My fork: **<https://github.com/HaiXuan-Lin/toolkit>**.

## Prerequisites

- `bash`, `docker` (Docker Desktop on macOS)
- Optional, but recommended for full package coverage: [MacTeX](https://www.tug.org/mactex/) installed locally (`bin/init` looks for it under `/usr/local/texlive/*/texmf-dist`)

## Getting the toolkit

```bash
git clone https://github.com/HaiXuan-Lin/toolkit.git ./overleaf-toolkit && cd overleaf-toolkit
```

## What the fork fixes in `bin/init` / `bin/up`

- `set_up_config_files` now uses `sed -i.bak ... && rm -f *.bak` instead of bare `sed -i''`, which works identically on GNU and BSD `sed`.
- `read_configuration` in `lib/shared-functions.sh` no longer shells out to `sed -r`; it parses the value with plain bash parameter expansion, so it works the same on macOS as on Linux.
- `bin/init` detects macOS (`uname -s == Darwin`) and, on a fresh install, automatically runs the new `--mac-texlive` setup below — no extra flag needed the first time.
- `bin/up` runs a preflight check (`check_mac_texmf_mount`) and prints a warning before starting containers if the expected local TeX Live path is missing or empty.

## One-time Docker Desktop settings (manual, can't be scripted)

Before running anything, in Docker Desktop:

1. **Settings → Resources → File sharing**: add `/usr/local/texlive` (the parent of your TeX Live install, e.g. the folder containing `/usr/local/texlive/2026`). Without this, Docker Desktop mounts an *empty* directory with no error — compiles fail the same way as before, with no obvious cause.
2. **Settings → General**: enable **"Use Rosetta for x86/amd64 emulation on Apple Silicon"**, so the emulated `linux/amd64` container runs close to native speed instead of slow QEMU emulation.

Apply & restart Docker Desktop.

## Getting local TeX Live for free (no reinstall)

On a fresh clone, just run:

```bash
bin/init
```

On macOS this automatically detects your architecture and any local TeX Live install, and writes `config/docker-compose.override.yml` for you. If you already ran `bin/init` before (so `config/` already exists), add the override with:

```bash
bin/init --mac-texlive
```

This won't touch an existing `config/docker-compose.override.yml` — delete it first if you want to regenerate it. What gets generated looks like:

```yaml
---
services:
    sharelatex:
        platform: linux/amd64
        environment:
            TEXMFHOME: "/opt/host-texmf"
            TEXMF: "{{}/var/www/.texlive2026/texmf-config,/var/lib/overleaf/tmp/texmf-var,!!/usr/local/texlive/texmf-local,!!/usr/local/texlive/2026/texmf-config,!!/usr/local/texlive/2026/texmf-var,!!/usr/local/texlive/2026/texmf-dist,$$TEXMFHOME}"
        volumes:
            - "/usr/local/texlive/2026/texmf-dist:/opt/host-texmf:ro"
```

- `platform: linux/amd64` is only written on Apple Silicon; Intel Macs run the image natively and skip this line.
- The `texmf-dist` mount, `TEXMFHOME`, and `TEXMF` are only written if a local TeX Live install is found. Only the plain-text package tree is mounted, read-only, into a path the container's own `scheme-basic` doesn't use.

This is the "白嫖" part: instead of `tlmgr install scheme-full` downloading several extra GB *inside* the container, you reuse the packages your Mac already has.

### Why there's a `TEXMF` line, not just `TEXMFHOME`

My first version only set `TEXMFHOME`. It worked, but I hadn't noticed that `TEXMFHOME` is searched *first* by kpathsea — before the container's own `texmf-dist`. That means every single lookup, including files the container already ships (`article.cls`, `amsmath.sty`, ...), was going through the slower host mount. I only caught this because a real compile that should've taken seconds was taking 40+ seconds; `kpsewhich article.cls` resolving to `/opt/host-texmf/...` instead of the container's own tree gave it away.

The fix is the `TEXMF` override: it's the same search list the container uses by default, with `$TEXMFHOME` moved to the *end* instead of the front. Now the container's own copy wins for anything it already has, and the host mount is only touched as a genuine fallback.

Two gotchas along the way, in case you hit them extending this yourself:

- You can't just append a random new path into `TEXMF` (e.g. `!!/opt/host-texmf`) — kpathsea only uses `ls-R` caching for trees listed in `TEXMFDBS`, and silently returns nothing for anything else. `TEXMFHOME` is the one tree in the default list that gets this treatment "for free", which is why it has to stay as `TEXMFHOME` and get *reordered*, rather than being replaced by a plain path.
- Write `$$TEXMFHOME`, not `$TEXMFHOME`, in the compose file. Docker Compose interpolates `$VAR` in compose files itself, and since `TEXMFHOME` isn't set in the shell running `docker compose`, a single `$` gets silently replaced with an empty string before the container ever sees it.

## Bringing it up

```bash
bin/up -d
```

Verify the container can see your local packages:

```bash
bin/docker-compose exec sharelatex kpsewhich setspace.sty
# should print: /opt/host-texmf/tex/latex/setspace/setspace.sty
```

If the mount is missing or empty, `bin/up` itself will print a warning pointing back at the two Docker Desktop settings above.

Then, in a browser:

1. Open <http://localhost/launchpad>, fill in email/password, click "Register".
2. Log in at <http://localhost/login>.
3. Create your first project at <http://localhost/project>.

## Does it actually work end-to-end?

Yes — tested with a document that deliberately mixes both sources: `amsmath` (in the container's own `scheme-basic`) plus `setspace` and `tikzducks` (only in the local MacTeX, and `tikzducks` drags in the whole `pgf`/`tikz`/`xcolor` stack on top). It compiled clean:

```
EXIT:0  ELAPSED:128s
-rw-r--r-- 1 www-data www-data 40656 Jul 31 15:18 test.pdf
```

The log confirms the split works as designed — `amsmath`, `article.cls`, `graphicx` resolved from the container's own `/usr/local/texlive/2026/texmf-dist`, while `setspace`, `tikzducks`, and all of `pgf`'s submodules resolved from the mounted `/opt/host-texmf`. Both sources contributing to the same compile, each package coming from wherever it actually lives.

## Performance, and a gotcha with no fix

Falling back to the host mount isn't free — every lookup crosses Docker Desktop's file-sharing boundary under Rosetta emulation. Rough numbers from testing:

- A minimal document needing only the container's own packages: **~16s** (this is mostly fixed Rosetta process-startup overhead, not our setup).
- Same document plus one package from the host mount (`setspace`): **~42s**.
- A document pulling in `tikzducks` (and therefore all of `pgf`/`tikz`): **~128s**.

None of that is a bug — it's the real cost of routing lookups through an emulated, cross-VM filesystem. What turns "slow" into "looks frozen forever," though, is this: **Community Edition's in-container compile mode has no enforced timeout at all.** `clsi.log` logs `"timeouts and sandboxing are not enabled with CommandRunner undefined"` on every single compile. Timeout/sandbox enforcement only exists behind Sandboxed Compiles, which needs Server Pro. So a big, slow document just spins in the UI indefinitely — there's nothing that will kill it and report a timeout for you.

If a compile seems permanently stuck, check for a runaway process and kill it manually:

```bash
bin/docker-compose exec sharelatex ps aux | grep -E 'pdflatex|lualatex|latexmk'
bin/docker-compose exec -u root sharelatex pkill -9 -f lualatex   # or whichever engine
```

## Switching between "container only" and "host fallback"

The choice isn't per-compile — it's a container-wide setting, made per-file automatically by `kpathsea` (container's own package first, host mount only if genuinely missing). To force **container-only** (e.g. to sanity-check whether a project still compiles without your local MacTeX, or to compare speed), comment out or delete the `environment:`/`volumes:` block in `config/docker-compose.override.yml` (leave `platform:` alone) and run `bin/up -d`. Add the block back and re-run `bin/up -d` to restore the fallback.

## Want a fully self-contained container instead?

If you'd rather not depend on this Mac at all — e.g. you're about to deploy to a server — the upstream approach still works and doesn't conflict with anything above:

```bash
bin/shell                    # shell into the sharelatex container
tlmgr install scheme-full    # downloads the full TeX Live, several GB
tlmgr path add
exit
docker commit sharelatex sharelatex/sharelatex:6.2.2-with-texlive-full
echo 6.2.2-with-texlive-full > config/version
bin/up -d
```

This bakes the packages into the image itself (several GB heavier, and you'll redo it on every upgrade), trading disk space for zero host dependency. See the upstream [Community Edition: Upgrading TexLive](https://github.com/overleaf/toolkit/blob/master/doc/ce-upgrading-texlive.md) doc for details.

## Limitations

- This ties compiles to *this Mac's* local TeX Live install. If you uninstall MacTeX, disable the File sharing setting, or move to a machine with no local install, compiles fall back to the container's `scheme-basic` and you're back to the original "file not found" errors.
- Compiles that need the host fallback are meaningfully slower (tens of seconds, not milliseconds) — see the performance section above.
- No compile timeout exists in this mode, structurally, regardless of anything in this fork — see above.
- For a self-contained setup that doesn't depend on the host at all, use the `tlmgr install scheme-full` + `docker commit` approach above instead.

---

# 中文阅读

## 为什么 fork

官方的 [`overleaf/toolkit`](https://github.com/overleaf/toolkit) 默认假设你在 Linux 上跑. 在 Mac 上（尤其是 Apple Silicon）, 原样使用会碰到两个问题：

1. **脚本本身跑不通. ** `bin/init` 里用的是 GNU 专属的 `sed -i''`, `lib/shared-functions.sh` 里用的是 `sed -r`（GNU 扩展正则参数）. macOS 自带的是 BSD `sed`, 对这两种写法的解析方式都不一样, 结果就是生成配置时静默出错或者内容被破坏. 
2. **镜像跟机器对不上. ** `sharelatex/sharelatex` 只发布了 `linux/amd64` 版本, 在 Apple Silicon 上直接 `bin/up` 会报 `no matching manifest for linux/arm64/v8`. 就算靠模拟跑起来了, 镜像里自带的也只是精简版 `scheme-basic` 的 TeX Live, 只要用到这个集合之外的宏包（比如 `\usepackage{setspace}`）, 编译就会报 `File 'xxx.sty' not found`. 

我 fork 了这个仓库, 修了这两处 shell 兼容性的 bug, 并且给 `bin/init` 加了一个 `--mac-texlive` 选项, 用来自动生成 `docker-compose.override.yml`, 同时解决架构和 TeX Live 精简版这两个问题——包括直接复用你本机已经装好的 MacTeX/TeX Live, 而不是在容器里重新下载一份完整版. 我的 fork 地址：**<https://github.com/HaiXuan-Lin/toolkit>**. 

## 前置条件

- `bash`、`docker`（macOS 上就是 Docker Desktop）
- 可选但推荐（为了获得完整的宏包覆盖）：本机装好 [MacTeX](https://www.tug.org/mactex/)（`bin/init` 会去 `/usr/local/texlive/*/texmf-dist` 路径下找它）

## 获取仓库

```bash
git clone https://github.com/HaiXuan-Lin/toolkit.git ./overleaf-toolkit && cd overleaf-toolkit
```

## fork 里对 `bin/init` / `bin/up` 具体修了什么

- `set_up_config_files` 现在用 `sed -i.bak ... && rm -f *.bak` 代替裸的 `sed -i''`, 这种写法在 GNU 和 BSD `sed` 上行为一致. 
- `lib/shared-functions.sh` 里的 `read_configuration` 不再依赖 `sed -r`, 改成用纯 bash 的参数展开来解析取值, macOS 和 Linux 上行为完全一致. 
- `bin/init` 会检测是否在 macOS 上（`uname -s == Darwin`）, 如果是全新安装, 会自动跑下面说的 `--mac-texlive` 设置, 第一次不需要额外加参数. 
- `bin/up` 会做一次预检查（`check_mac_texmf_mount`）, 如果预期的本地 TeX Live 路径缺失或为空, 会在启动容器前打印警告. 

## 需要手动做的一次性 Docker Desktop 设置（没法用脚本代劳）

跑任何命令之前, 先在 Docker Desktop 里：

1. **Settings → Resources → File sharing**：添加 `/usr/local/texlive`（也就是你 TeX Live 安装目录的上一级, 比如包含 `/usr/local/texlive/2026` 的那个文件夹）. 不加这一步的话, Docker Desktop 不会报错, 而是静默挂载一个空目录, 编译照样报"文件找不到", 看起来毫无头绪. 
2. **Settings → General**：勾选 **"Use Rosetta for x86/amd64 emulation on Apple Silicon"**, 这样被模拟的 `linux/amd64` 容器速度接近原生, 不会退化成很慢的 QEMU 模拟. 

改完之后 Apply 并重启 Docker Desktop. 

## 白嫖本地 TeX Live, 不用重新装

全新克隆的仓库, 直接跑：

```bash
bin/init
```

在 macOS 上, 这一步会自动检测你的芯片架构和本机的 TeX Live 安装, 并帮你写好 `config/docker-compose.override.yml`. 如果你之前已经跑过 `bin/init`（`config/` 目录已经存在）, 用这条命令补上：

```bash
bin/init --mac-texlive
```

这个命令不会覆盖已经存在的 `config/docker-compose.override.yml`——想重新生成的话, 需要先手动删掉它. 生成的内容大概长这样：

```yaml
---
services:
    sharelatex:
        platform: linux/amd64
        environment:
            TEXMFHOME: "/opt/host-texmf"
            TEXMF: "{{}/var/www/.texlive2026/texmf-config,/var/lib/overleaf/tmp/texmf-var,!!/usr/local/texlive/texmf-local,!!/usr/local/texlive/2026/texmf-config,!!/usr/local/texlive/2026/texmf-var,!!/usr/local/texlive/2026/texmf-dist,$$TEXMFHOME}"
        volumes:
            - "/usr/local/texlive/2026/texmf-dist:/opt/host-texmf:ro"
```

- `platform: linux/amd64` 只有在 Apple Silicon 上才会写；Intel Mac 本来就能原生跑这个镜像, 不会加这行. 
- `texmf-dist` 挂载、`TEXMFHOME`、`TEXMF` 只有检测到本机装了 TeX Live 才会写. 挂进去的只是纯文本的宏包树, 只读, 挂载到容器自带 `scheme-basic` 不会用到的路径. 

这就是"白嫖"的部分：不用 `tlmgr install scheme-full` 在容器里再下载好几个 GB, 而是直接复用你 Mac 本机已经有的宏包. 

### 为什么多了一行 `TEXMF`, 光有 `TEXMFHOME` 不够

我最初的版本只设了 `TEXMFHOME`, 当时看起来是好使的, 但没注意到 `kpathsea` 默认会**最先**搜 `TEXMFHOME`, 排在容器自带的 `texmf-dist` 之前. 也就是说每一次查找——包括 `article.cls`、`amsmath.sty` 这种容器本来就有的文件——都要先绕道去挂载的宿主机目录. 直到我发现一次编译莫名其妙要花 40 多秒（正常应该几秒钟）, 用 `kpsewhich article.cls` 一查发现路径解析成了 `/opt/host-texmf/...` 而不是容器自己的路径, 才揪出这个问题. 

解决办法就是这段 `TEXMF`：内容跟容器默认的搜索顺序一样, 只是把 `$TEXMFHOME` 挪到了**最后**. 这样容器自带的文件会优先命中自己的副本, 挂载的宿主机目录只在真正缺失时才被当作兜底. 

过程中踩了两个坑, 如果你想自己改这段配置可能会碰到：

- 不能直接把新路径塞进 `TEXMF`（比如写成 `!!/opt/host-texmf`）——`kpathsea` 只会对登记在 `TEXMFDBS` 里的树使用 `ls-R` 索引, 其他路径查了也是静默返回空. `TEXMFHOME` 恰好是默认列表里"自带这个待遇"的那一个, 所以只能保留 `TEXMFHOME` 这个变量名、把它挪位置, 不能直接换成一个裸路径. 
- compose 文件里要写 `$$TEXMFHOME`, 不能写 `$TEXMFHOME`. Docker Compose 自己会对 compose 文件里的 `$VAR` 做插值, 而运行 `docker compose` 的那个 shell 里根本没有 `TEXMFHOME` 这个变量, 结果就是还没传进容器, 一个 `$` 就被静默替换成了空字符串. 

## 启动

```bash
bin/up -d
```

确认容器能看到本地宏包：

```bash
bin/docker-compose exec sharelatex kpsewhich setspace.sty
# 应该输出：/opt/host-texmf/tex/latex/setspace/setspace.sty
```

如果挂载缺失或为空, `bin/up` 本身会打印警告, 提示回到上面那两项 Docker Desktop 设置. 

然后在浏览器里：

1. 打开 <http://localhost/launchpad>, 填邮箱和密码, 点 "Register". 
2. 在 <http://localhost/login> 登录. 
3. 在 <http://localhost/project> 创建你的第一个项目. 

## 真的端到端跑通了吗

跑通了——专门用一份故意混合两边来源的文档测过：`amsmath`（容器自带的 `scheme-basic`）加上 `setspace` 和 `tikzducks`（只有本地 MacTeX 才有, `tikzducks` 还会带出整套 `pgf`/`tikz`/`xcolor`）. 编译干净通过：

```
EXIT:0  ELAPSED:128s
-rw-r--r-- 1 www-data www-data 40656 Jul 31 15:18 test.pdf
```

日志确认了设计是按预期分工的——`amsmath`、`article.cls`、`graphicx` 从容器自己的 `/usr/local/texlive/2026/texmf-dist` 解析, `setspace`、`tikzducks` 以及 `pgf` 底下的所有子模块都从挂载的 `/opt/host-texmf` 解析. 两边同时给同一次编译提供文件, 每个包都从它实际所在的地方读取. 

## 性能表现, 以及一个没法修的坑

走宿主机兜底不是免费的——每次查找都要在 Rosetta 模拟下穿过 Docker Desktop 的文件共享边界. 实测大致数字：

- 只需要容器自带包的最简文档：约 **16 秒**（这大部分是 Rosetta 进程启动的固定开销, 跟我们这套配置没关系）. 
- 同一份文档加一个需要走宿主机的包（`setspace`）：约 **42 秒**. 
- 引入 `tikzducks`（连带整套 `pgf`/`tikz`）的文档：约 **128 秒**. 

这些都不是 bug——是查找要穿过一层模拟、跨虚拟机文件系统的真实代价. 但真正会把"慢"变成"看起来永久卡死"的, 是这个：**Community Edition 的 in-container 编译模式压根没有超时机制.** `clsi.log` 里每次编译都会记一条 `"timeouts and sandboxing are not enabled with CommandRunner undefined"`. 超时/沙箱只有在用 Sandboxed Compiles（需要 Server Pro）时才会启用. 所以一篇又大又慢的文档就会在界面里一直转圈——没有任何机制会替你把它杀掉、报个超时. 

如果感觉编译永久卡住了, 手动查一下有没有失控进程, 杀掉：

```bash
bin/docker-compose exec sharelatex ps aux | grep -E 'pdflatex|lualatex|latexmk'
bin/docker-compose exec -u root sharelatex pkill -9 -f lualatex   # 换成实际用的引擎
```

## 在"只用容器"和"本地兜底"之间切换

这个选择不是按次编译决定的——是容器级别的整体设置, 具体到每个文件由 `kpathsea` 自动判断（容器自带的优先, 缺失才走宿主机挂载）. 如果想强制**只用容器自带的**（比如想确认某个项目脱离本地 MacTeX 是否还能编译, 或者对比一下速度）, 把 `config/docker-compose.override.yml` 里 `environment:`/`volumes:` 那两段注释掉或删掉（`platform:` 留着不动）, 跑一次 `bin/up -d`. 想恢复兜底的话, 把那两段加回来, 再 `bin/up -d` 一次就行. 

## 想要容器里也是一份完整独立的呢

如果你不想依赖这台 Mac（比如打算部署到服务器上）, 上游的方法照样能用, 跟上面这套也不冲突：

```bash
bin/shell                    # 进入 sharelatex 容器
tlmgr install scheme-full    # 下载完整 TeX Live, 好几个 GB
tlmgr path add
exit
docker commit sharelatex sharelatex/sharelatex:6.2.2-with-texlive-full
echo 6.2.2-with-texlive-full > config/version
bin/up -d
```

这样是把宏包直接烤进镜像本身（体积会重几个 GB, 而且每次升级都要重做一遍）, 用磁盘空间换取完全不依赖宿主机. 细节参考上游 [Community Edition: Upgrading TexLive](https://github.com/overleaf/toolkit/blob/master/doc/ce-upgrading-texlive.md) 文档. 

## 局限性

- 这套方案会把编译依赖绑定在**这台 Mac 本机**的 TeX Live 安装上. 如果卸载 MacTeX、关掉 File sharing 设置, 或者换到一台没装本地 TeX Live 的机器, 编译就会退回到容器自带的 `scheme-basic`, 又会碰到最初的"文件找不到"错误. 
- 需要走宿主机兜底的编译明显更慢（几十秒级别, 不是毫秒级）——见上面的性能小节. 
- 这个模式下没有编译超时, 是结构性的限制, 跟这个 fork 改了什么无关——见上面. 
- 如果想要一套完全不依赖宿主机、自包含的方案, 用上面 `tlmgr install scheme-full` + `docker commit` 的方法. 
