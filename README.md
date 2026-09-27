# qqbot

这是 ALX 可直接识别的 QQ bot 项目。使用本目录的 `alemon.config.yaml`，填写 QQ App ID 和 Secret 后，在 ALX 中添加本目录。新部署且配置不存在时，复制 `alemon.config.yaml.example` 为 `alemon.config.yaml`；不要覆盖已填写的配置。

默认读取项目目录的 `alemon.config.yaml`。原来的 `alemon.yaml` 不再作为默认配置；若 ALX 环境变量还设有 `FANTASYFINAL_QQ_CONFIG` 或 `CFG_PATH` 指向旧文件，请移除该设置，再保存并应用后台配置。

`index.js` 加载本目录已构建的 `lib/qq-gateway/index.js`。如果 `lib/` 缺失，入口会直接提示复制编译产物；不要让 ALX 用原生 Node 直接加载 TypeScript 源码。前台运行选择 `app` 脚本，后台运行使用 `./index.js` 并开启自动重启。配置中的 `login` 固定为 `qq-bot`。

QQ 进程只加载 `lib/qq-gateway`（源码对应 `src/qq-gateway`），不导入游戏数据库或游戏规则。通过环境变量 `FANTASYFINAL_CORE_URL` 访问 server 的 Core API；Core 令牌优先读取 `FANTASYFINAL_CORE_TOKEN` / `FANTASYFINAL_CORE_SERVICE_TOKEN`，未设置时读取本目录 `alemon.config.yaml` 中的 `FantasyFinal.coreApi.serviceToken`，必须与 server 配置相同。

Core 会在游戏本体内复用原版 Router 和 `response/*.ts` handler，回复同时携带 handler 生成的 `Format.value`、Markdown 回退正文和按钮 DTO。Gateway 会按原 Alemon Markdown 节点重建标题、引用、列表、代码、图片及命令按钮；`/菜单` 的 `base64://` 图片卡片也会按 `Image` 节点恢复。按钮统一手动输入（`autoEnter: false`），没有正文的按钮消息会自动补上 Markdown 正文，避免 QQ 返回 `40034011`。

Gateway 通过 Core 的 `/api/qqbot/v1/*` 调用游戏本体；旧的 `/internal/v1/qq/*` 由 server 保留兼容。QQ Gateway 只需要 Core URL 和 service token，不需要配置 MySQL 或 Redis。
