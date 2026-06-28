<div align="center">

<img src="assets/icon.png" alt="Helios" width="120" height="120" />

# Helios

**The native macOS terminal built for running AI coding agents.**
**Sessions that outlive the app · a dashboard, not a tab bar · split panes · 500+ themes**

[![macOS](https://img.shields.io/badge/macOS-13.0+-000000?logo=apple&logoColor=white)](https://www.apple.com/macos/)
[![Apple Silicon](https://img.shields.io/badge/Apple_Silicon-arm64-000000?logo=apple&logoColor=white)](https://www.apple.com/mac/)
[![Swift](https://img.shields.io/badge/Swift-6.0-F05138?logo=swift&logoColor=white)](https://www.swift.org/)
[![Latest Release](https://img.shields.io/github/v/release/basionwang-bot/helios?label=latest&color=success&logo=github)](https://github.com/basionwang-bot/helios/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/basionwang-bot/helios/total?label=downloads&color=blue)](https://github.com/basionwang-bot/helios/releases)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#-license)

🌍 **English** · [简体中文](./README.zh-CN.md)

### 🌐 [helios website →](https://basionwang-bot.github.io/helios/) · 📦 [Download Helios.app →](https://github.com/basionwang-bot/helios/releases/latest)

Unzip, drag to Applications, **double-click to open** · signed &amp; notarized · no Homebrew, no dependencies

<img src="assets/hero.png" width="880" alt="Helios — two agents side by side in split panes" />

</div>

---

## What is Helios

Running one AI agent in a terminal is easy. Running **five** — across different projects, each on its own branch, some looping for an hour — is where a normal terminal falls apart. Tabs tell you nothing at a glance, one crash takes every agent down with it, and you end up babysitting windows instead of working.

**Helios is built for that workflow.** Your agents run in sessions that live in a launchd-backed daemon — *outside* the window. Quit Helios, crash it, log out and back in, even reboot, and they come back. The sidebar reads like a dashboard, so a single colored dot tells you which agent is busy, which is done, and which one is waiting on you.

> Swift 6 · AppKit · libghostty (GPU-rendered terminal core) · daemon-backed sessions · macOS 13+ · Apple Silicon · MIT

---

## ✨ Highlights

- **🛰 Sessions that never die.** Every session runs in a background daemon, not the
  window. Quit it, crash it, relaunch it — the agents keep running. The daemon
  writes each conversation to disk and replays it on the next start, so even a
  hard kill or a reboot brings your transcripts back.

- **👀 A dashboard, not a tab bar.** Every project and the live state of its agents,
  shown with one colored dot: **🟡 busy**, **🟢 done**, **🔴 needs your answer**.

- **🔲 Split panes.** Watch up to four sessions side by side in one window (`⌘D`).

- **📁 One folder, one project.** Add a project folder once and it stays pinned —
  with its git branch and a roll-up of how many agents are running inside.

- **🌿 Worktree sessions.** Spin up a git worktree *and* a session in it in one step,
  so multiple agents work the same repo on separate branches.

- **🔌 Sessions MCP.** A bundled Model Context Protocol server lets one agent drive
  another — read its output, type a prompt, even answer its menus.

- **⚡ Quick presets · 🔔 notifications · ⌘K palette · 🎨 500+ live themes.**

<div align="center">
<img src="assets/settings.png" width="380" alt="Settings — themes &amp; appearance" />&nbsp;&nbsp;
<img src="assets/popover.png" width="380" alt="Menu-bar roster" />
</div>

---

## 🚀 Install

> **Requirements:** Apple Silicon Mac · macOS 13 (Ventura) or later.

1. Download **`Helios.app.zip`** from the [latest release](https://github.com/basionwang-bot/helios/releases/latest).
2. Unzip and drag **Helios** to `/Applications`.
3. Double-click to open. The app is **signed with a Developer ID and notarized by Apple**, so it launches with no Gatekeeper warning.

That's it — no Homebrew, no dependencies. Everything the terminal needs is inside the app bundle.

---

## ⌨️ Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `⌘N` | New session (pick a folder) |
| `⌘⇧N` | New worktree session |
| `⌘D` | Split — another session in a new pane (up to 4) |
| `⌘K` | Command palette (fuzzy-jump to anything) |
| `⌘1`…`⌘9` | Jump to the Nth session |
| `⌘\` | Toggle the sidebar |
| `⌘,` | Settings (theme, font, line-height, cursor, opacity) |

**Mouse:** hover a project → **＋** to start a session or pick a preset · right-click a session to rename / pin / close · drag to reorder within a project.

---

## 🏗 How it works

```
┌──────────────┐   control plane (NDJSON / Unix socket)   ┌──────────────┐
│  Helios.app  │ ◀──────────────────────────────────────▶ │   heliosd    │
│  (AppKit +   │                                           │  (daemon)    │
│  libghostty) │ ◀──────────── pty bytes ────────────────▶ │  owns every  │
└──────────────┘                                           │  pty/session │
        ▲          Sessions MCP (stdio JSON-RPC)           └──────────────┘
        └───────────────────  helios-mcp  ────────────────────────┘
```

- **`heliosd`** — a launchd-managed daemon that owns every pty, holds scrollback,
  persists transcripts to disk, derives each session's activity, and broadcasts
  the roster. This is the process that lets sessions outlive the GUI.
- **Helios.app** — AppKit shell; each terminal pane is a libghostty surface bridged
  to a daemon session, so closing the window never kills an agent.
- **`helios-mcp`** — the Sessions MCP server.

---

## 🛡 Official source

Helios is designed, built, and maintained by **[Basion Wang (@basionwang-bot)](https://github.com/basionwang-bot)**. The only safe place to download it is the **[GitHub Releases](https://github.com/basionwang-bot/helios/releases)** page of this repository. Builds from anywhere else are not guaranteed to be safe.

---

## 📄 License

[MIT]. Helios embeds libghostty (the terminal core of [Ghostty](https://ghostty.org)), also MIT.

---

<div align="center">

Made with ✦ on a MacBook · terminals that never die

© 2026 [Basion Wang](https://github.com/basionwang-bot). All rights reserved.

</div>
