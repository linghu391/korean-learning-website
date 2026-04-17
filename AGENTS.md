# TRAE Agent 开发规范
 
 
本文件定义了 TRAE 在协助开发过程中的行为准则与约束条件。所有操作必须优先遵循以下规范。
 
 
---
 
 
## 1. 依赖下载与安装规范
 
 
### 问题背景
TRAEs 下载 npm、pip 等依赖时默认使用国外官方源，国内连接速度慢、易中断，导致编程流程卡住。
 
 
### 强制要求
- **优先使用国内镜像源**：执行所有安装、下载操作时，必须优先搜索并使用国内镜像源
- **自动回退机制**：仅在国内镜像源失败时，才回退至官方源
- **常用源配置**：
  - npm: 淘宝镜像 ` `https://registry.npmmirror.com` ` 或腾讯云 ` `https://mirrors.cloud.tencent.com/npm/` `
  - pip: 清华镜像 ` `https://pypi.tuna.tsinghua.edu.cn/simple` ` 或阿里云 ` `https://mirrors.aliyun.com/pypi/simple/` `
  - Docker: 阿里云或 DaoCloud 镜像
 
 
---
 
 
## 2. 项目初始化规范
 
 
### 问题背景
初始化 Vue 3 等项目时，终端默认包含交互选项，但 TRAE 无法自动交互，导致操作停滞且无法检测状态。
 
 
### 强制要求
- **使用无交互模式**：进行项目初始化等需终端交互的操作时，必须优先使用无交互模式命令
- **Vue 3 项目初始化示例**：
  ```bash
  # 正确方式（无交互）
  npm create vite@latest <DIRECTORY> -- --no-interactive --template <TEMPLATE>
  # 或
  create-vite <DIRECTORY> --no-interactive --template <TEMPLATE>