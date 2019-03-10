---
next: /3-VSCode/
---

# 开发工具

## git

`git`：版本控制系统，安装：

- `sudo apt install git`

配置 `git` 使用代理：

```bash
git config --global http.proxy 'socks5://127.0.0.1:$端口号'
git config --global https.proxy 'socks5://127.0.0.1:$端口号'
```

其中 `$端口号` 为所使用的代理在本地的监听端口，一般默认为 1080 端口。

取消 `git` 代理：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

为了方便使用，可以将上面两个命令设置为 `alias`，即别名。在 `.zshrc` 中添加如下内容：

```bash
alias fuckgit="git config --global http.proxy 'socks5://127.0.0.1:1080' && git config --global https.proxy 'socks5://127.0.0.1:1080'"
alias unfuckgit="git config --global --unset http.proxy && git config --global --unset https.proxy"
```

然后执行 `source .zshrc` 加载配置文件。

## ssh
