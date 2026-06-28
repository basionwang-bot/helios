/* Helios landing — i18n (EN/ZH), scroll reveal, nav condense, agent marquee. */

const I18N = {
  en: {
    "nav.features": "Features", "nav.mcp": "Sessions MCP", "nav.why": "Why Helios",
    "nav.download": "Download", "nav.cta": "Download for Mac",

    "hero.eyebrow": "Native macOS · Apple Silicon · free",
    "hero.title": 'The native macOS terminal for <span class="grad-text">AI&nbsp;coding agents</span>.',
    "hero.sub": "Run five agents at once without losing the thread. Sessions live outside the window, so quitting never kills them — and the sidebar reads like a dashboard. Native Swift, powered by libghostty.",
    "hero.ctaPrimary": "Download for Mac",
    "hero.ctaSecondary": "See how it works",
    "hero.note": "Free · no account · no telemetry · ~8&nbsp;MB · macOS 13 (Ventura) or later",

    "agents.label": "All your agents, in one place",

    "features.kicker": "FEATURES",
    "features.title": "Built for the way you actually run agents.",
    "features.sub": "Not a chat wrapper. A real terminal with a dashboard wrapped around it.",

    "f.persist.t": "Sessions that never die.",
    "f.persist.d": "Every session runs in a launchd-backed daemon, not the window. Quit it, crash it, relaunch it — your agents keep working. The daemon writes each conversation to disk and replays it on the next start, so even a hard kill or a reboot brings your transcripts back.",
    "f.persist.x1": "Survives quit", "f.persist.x2": "Survives reboot",

    "f.dash.t": "A dashboard, not a tab bar.",
    "f.dash.d": "One colored dot tells you the state of every agent — no reading logs to know what's happening.",
    "f.dash.busy": "Busy", "f.dash.done": "Done", "f.dash.need": "Needs you",

    "f.split.t": "Split panes.",
    "f.split.d": "Watch up to four sessions side by side in one window (<code>⌘D</code>).",
    "f.proj.t": "One folder, one project.",
    "f.proj.d": "Projects stay pinned with their git branch and a roll-up of running agents.",
    "f.wt.t": "Worktrees.",
    "f.wt.d": "Spin up a git worktree and a session in it, so agents share a repo on separate branches.",
    "f.preset.t": "Quick presets.",
    "f.preset.d": "Launch Claude, Codex, Gemini and friends with the right command in one click.",
    "f.notif.t": "It taps you.",
    "f.notif.d": "A notification and a Dock badge when an agent needs your answer or finishes.",
    "f.palette.t": "Command palette.",
    "f.palette.d": "Press <code>⌘K</code> to fuzzy-jump to any session, project, or action.",
    "f.theme.t": "500+ themes.",
    "f.theme.d": "Switch themes live with instant preview — no restart. Plus font, line-height, cursor and opacity. The window chrome stays seamless with whatever you pick.",

    "mcp.kicker": "SESSIONS MCP",
    "mcp.title": "One agent can drive another.",
    "mcp.body": "Helios ships a local Model Context Protocol server for session control. It gives any session a safe way to inspect and drive its siblings: read output, type a prompt, answer menus, even start and close whole sessions. That's how one orchestrator can run a fleet of agents while you stay out of the keystroke-by-keystroke loop.",
    "mcp.k1": "Read a sibling's output and reply on its behalf",
    "mcp.k2": "Hand off a task between harnesses",
    "mcp.k3": "Project-scoped and fully optional",

    "always.kicker": "ALWAYS RUNNING",
    "always.title": "Close the window. Your agents keep working.",
    "always.body": "Every session runs in its own hosted process, so it survives quitting the window. A menu-bar item keeps a live pulse on all of them — grouped by project, one click away. Pick one and Helios snaps the window back open, right to that session.",
    "always.k1": "Sessions persisted to disk — survive a reboot",
    "always.k2": "Menu-bar roster with live status",
    "always.k3": "Reattach instantly, right where you left off",

    "theme.kicker": "MAKE IT YOURS",
    "theme.title": "A terminal that looks the way you want.",
    "theme.body": "500+ built-in themes, switchable live with instant preview. Dial in the font, size, line-height, cursor style and window opacity — and the whole window chrome follows your theme so nothing looks bolted on.",
    "theme.k1": "Live theme switching, no restart",
    "theme.k2": "Full Unicode &amp; IME — type Chinese, Japanese, …",
    "theme.k3": "GPU-rendered, light on battery and RAM",

    "why.big": "The future of AI-assisted work isn't one model or one harness. It's many, working together.",
    "why.b1": "Claude for deep reasoning. Codex for code. Fast local models for the cheap, private work. And whatever lands next. Each is brilliant at something different, and betting everything on one is a bet you'll lose.",
    "why.b2": "Helios is the calm place that sits between them. Run every agent side by side, let Sessions MCP wire them together, and stop juggling windows and copy-pasting between tools. One terminal where every harness is a teammate — and they can actually talk to each other.",

    "dl.price": "Free.",
    "dl.sub": "No account. No telemetry. No cloud. Just a fast native app.",
    "dl.cta": "Download Helios for Mac",
    "dl.c1": "Native macOS app for Apple Silicon",
    "dl.c2": "Unlimited sessions, projects &amp; worktrees",
    "dl.c3": "Sessions MCP &amp; quick presets included",
    "dl.c4": "Local-only: no telemetry, no cloud, no account",
    "dl.c5": "Everything bundled — no Homebrew, no deps",
    "dl.c6": "macOS 13 (Ventura) or later",
    "dl.note": "Signed &amp; notarized by Apple — just double-click to open.",

    "faq.title": "Questions &amp; answers",
    "faq.q1": "Which agents does it work with?",
    "faq.a1": "Claude Code, Codex, Gemini, Amp, OpenCode, Cursor — and really any CLI. Each comes with one-tap presets and the right flags. Bring your own keys or logins; Helios just gives each tool a native home and orchestrates them.",
    "faq.q2": "Is it really native?",
    "faq.a2": "Yes. Real Swift and AppKit, with a libghostty terminal rendered on the GPU. No web view, no Chromium, so it stays fast and light on your battery and RAM.",
    "faq.q3": "Do sessions keep running if I close Helios?",
    "faq.a3": "Yes. The live terminal runs in a separate launchd-backed session host (the heliosd daemon) that owns the real terminal, while the app window is just an attachable client. Close or restart the app and Helios reconnects and replays the saved output. The daemon also persists each transcript to disk, so your conversation comes back even after a hard kill or a reboot.",
    "faq.q4": "What is Sessions MCP?",
    "faq.a4": "A local Model Context Protocol server bundled with Helios that lets one session safely inspect and drive its siblings — read output, send a prompt, answer menus, start or close sessions. It's how a single orchestrator agent can run a whole fleet. Scoped to your current project by default, and can be turned off entirely.",
    "faq.q5": "Why a terminal, and not a chat UI?",
    "faq.a5": "Because the terminal is where these agents actually live. Every provider ships their best work as a CLI and improves it constantly. Wrap a custom chat UI on top and you build a lowest-common-denominator layer that's always a step behind. Helios gives each CLI a first-class native home instead — plus the dashboard, auto-titling and one-tap launching around it.",
    "faq.q6": "Does it cost anything?",
    "faq.a6": "No — Helios is free. It will never add cloud services, accounts or telemetry. You bring your own agent keys and run everything locally on your Mac.",

    "foot.tag": "A native terminal for AI coding agents. Built for Mac. Terminals that never die.",
    "foot.product": "Product", "foot.more": "More",
    "foot.releases": "Releases", "foot.contact": "Contact",
    "foot.copy": "© 2026 Basion Wang · Built for Mac",
    "foot.powered": "Powered by libghostty · macOS 13+ · Apple Silicon",
  },

  zh: {
    "nav.features": "功能", "nav.mcp": "Sessions MCP", "nav.why": "为什么是 Helios",
    "nav.download": "下载", "nav.cta": "下载 Mac 版",

    "hero.eyebrow": "原生 macOS · Apple Silicon · 免费",
    "hero.title": '专为 <span class="grad-text">AI&nbsp;编程 agent</span> 打造的原生 macOS 终端。',
    "hero.sub": "同时跑五个 agent 也不乱。会话活在窗口之外,退出程序也杀不掉它们 —— 侧边栏像一块仪表盘。原生 Swift,由 libghostty 驱动。",
    "hero.ctaPrimary": "下载 Mac 版",
    "hero.ctaSecondary": "看看怎么用",
    "hero.note": "免费 · 无需账号 · 零遥测 · 约 8&nbsp;MB · 需 macOS 13 (Ventura) 及以上",

    "agents.label": "所有 agent,都在一处",

    "features.kicker": "功能",
    "features.title": "为你真实的 agent 工作流而生。",
    "features.sub": "不是套了层聊天皮,而是一个真终端,外面包了一块仪表盘。",

    "f.persist.t": "永不消失的会话。",
    "f.persist.d": "每个会话跑在 launchd 托管的守护进程里,而不是窗口里。退出、崩溃、重开 —— agent 照常运行。守护进程把每段对话写到磁盘,下次启动时回放,所以即使被强杀或重启电脑,你的对话也会回来。",
    "f.persist.x1": "退出不丢", "f.persist.x2": "重启不丢",

    "f.dash.t": "是仪表盘,不是标签栏。",
    "f.dash.d": "一个彩色圆点就告诉你每个 agent 的状态 —— 不用翻日志就知道在发生什么。",
    "f.dash.busy": "忙碌", "f.dash.done": "完成", "f.dash.need": "需要你",

    "f.split.t": "分屏。",
    "f.split.d": "一个窗口里最多并排看四个会话(<code>⌘D</code>)。",
    "f.proj.t": "一个文件夹,一个项目。",
    "f.proj.d": "项目常驻侧边栏,带着 git 分支和「几个 agent 在跑」的汇总。",
    "f.wt.t": "Worktree。",
    "f.wt.d": "一步创建 git worktree 并在其中开会话,多个 agent 在不同分支上共享同一个仓库。",
    "f.preset.t": "快捷预设。",
    "f.preset.d": "一键以正确的命令启动 Claude、Codex、Gemini 等。",
    "f.notif.t": "它来提醒你。",
    "f.notif.d": "agent 需要你回答或跑完时,弹通知 + 程序坞角标。",
    "f.palette.t": "命令面板。",
    "f.palette.d": "按 <code>⌘K</code> 模糊跳转到任意会话、项目或操作。",
    "f.theme.t": "500+ 主题。",
    "f.theme.d": "实时切换主题、即时预览,无需重启。还能调字体、行高、光标和透明度,窗口外观始终与主题无缝。",

    "mcp.kicker": "SESSIONS MCP",
    "mcp.title": "让一个 agent 驱动另一个。",
    "mcp.body": "Helios 内置一个本地的 Model Context Protocol 服务器用于会话控制。它让任意会话能安全地查看并驱动它的「兄弟」:读输出、替它输入、回答菜单,甚至开启和关闭整个会话。一个编排者就能指挥一支 agent 舰队,而你不必介入每一次按键。",
    "mcp.k1": "读取兄弟会话的输出并替它回复",
    "mcp.k2": "在不同 harness 之间交接任务",
    "mcp.k3": "默认限定在当前项目,且完全可关",

    "always.kicker": "始终在跑",
    "always.title": "关掉窗口,你的 agent 照常工作。",
    "always.body": "每个会话跑在自己独立的托管进程里,所以退出窗口也活着。菜单栏图标实时显示所有会话的脉搏 —— 按项目分组,一键直达。点一个,Helios 会把窗口弹回到那个会话。",
    "always.k1": "会话落盘 —— 重启也不丢",
    "always.k2": "菜单栏列表带实时状态",
    "always.k3": "瞬间重连,停在你离开的地方",

    "theme.kicker": "随你定制",
    "theme.title": "一个长成你喜欢样子的终端。",
    "theme.body": "内置 500+ 主题,实时切换、即时预览。调好字体、字号、行高、光标样式和窗口透明度 —— 整个窗口外观都跟着主题走,没有一处显得突兀。",
    "theme.k1": "实时切主题,无需重启",
    "theme.k2": "完整 Unicode 与输入法 —— 能打中文、日文……",
    "theme.k3": "GPU 渲染,省电省内存",

    "why.big": "AI 协作的未来不是某一个模型、某一个 harness,而是很多个一起协作。",
    "why.b1": "Claude 做深度推理,Codex 写代码,本地快模型干便宜又私密的活,还有接下来会出现的新东西。每个都各有所长,把全部押在一个上,是注定要输的赌注。",
    "why.b2": "Helios 就是它们之间那个从容的中枢。把每个 agent 并排跑起来,让 Sessions MCP 把它们串到一起,从此不用在窗口间来回切、在工具间复制粘贴。一个终端里,每个 harness 都是队友 —— 而且它们真的能互相对话。",

    "dl.price": "免费。",
    "dl.sub": "无需账号。零遥测。不上云。就是一个快的原生 app。",
    "dl.cta": "下载 Helios Mac 版",
    "dl.c1": "为 Apple Silicon 打造的原生 macOS app",
    "dl.c2": "无限会话、项目与 worktree",
    "dl.c3": "内置 Sessions MCP 与快捷预设",
    "dl.c4": "纯本地:零遥测、不上云、无账号",
    "dl.c5": "全部内置 —— 不需要 Homebrew,不需要任何依赖",
    "dl.c6": "需 macOS 13 (Ventura) 及以上",
    "dl.note": "已通过 Apple 签名与公证 —— 双击即可打开。",

    "faq.title": "常见问题",
    "faq.q1": "支持哪些 agent?",
    "faq.a1": "Claude Code、Codex、Gemini、Amp、OpenCode、Cursor —— 几乎任何 CLI。每个都有一键预设和正确的参数。用你自己的 key 或登录态,Helios 只负责给每个工具一个原生的家并编排它们。",
    "faq.q2": "真的是原生的吗?",
    "faq.a2": "是。纯 Swift 和 AppKit,终端用 libghostty 在 GPU 上渲染。没有 web view、没有 Chromium,所以又快又省电省内存。",
    "faq.q3": "关掉 Helios 后会话还在跑吗?",
    "faq.a3": "在。实时终端跑在一个独立的、由 launchd 托管的会话宿主(heliosd 守护进程)里,它持有真正的终端,而 app 窗口只是一个可附着的客户端。关掉或重启 app,Helios 会重新连上并回放已保存的输出。守护进程还会把每段转录落盘,所以哪怕被强杀或重启电脑,你的对话也会回来。",
    "faq.q4": "Sessions MCP 是什么?",
    "faq.a4": "随 Helios 一起的一个本地 Model Context Protocol 服务器,让一个会话能安全地查看并驱动它的「兄弟」 —— 读输出、发指令、回答菜单、开启或关闭会话。一个编排者 agent 就能指挥一整支舰队。默认限定在当前项目,也可完全关闭。",
    "faq.q5": "为什么是终端,而不是聊天界面?",
    "faq.a5": "因为这些 agent 本来就活在终端里。每家厂商都把最好的能力做成 CLI 并持续打磨。一旦在上面套个自定义聊天 UI,你就建了一层总是慢半拍的「最小公约数」。Helios 反过来给每个 CLI 一个一流的原生家 —— 外加仪表盘、自动命名和一键启动。",
    "faq.q6": "收费吗?",
    "faq.a6": "不收 —— Helios 是免费的。它永远不会加云服务、账号或遥测。你带上自己的 agent key,一切都在你的 Mac 上本地运行。",

    "foot.tag": "为 AI 编程 agent 打造的原生终端。专为 Mac。永不消失的会话。",
    "foot.product": "产品", "foot.more": "更多",
    "foot.releases": "发行版", "foot.contact": "联系",
    "foot.copy": "© 2026 Basion Wang · 专为 Mac 打造",
    "foot.powered": "由 libghostty 驱动 · macOS 13+ · Apple Silicon",
  },
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  try { localStorage.setItem("helios-lang", lang); } catch (e) {}
}

function initLang() {
  let lang = "en";
  try { lang = localStorage.getItem("helios-lang"); } catch (e) {}
  if (!lang) lang = (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  applyLang(lang);
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(e => io.observe(e));
}

function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

function initMarquee() {
  const agents = ["Claude Code", "Codex", "Gemini", "Amp", "OpenCode", "Cursor", "Copilot", "Pi", "+ any CLI"];
  const track = document.getElementById("marquee");
  if (!track) return;
  const make = () => agents.map(a => `<span class="chip">${a}</span>`).join("");
  track.innerHTML = make() + make(); // duplicate for seamless loop
}

initLang();
initReveal();
initNav();
initMarquee();
