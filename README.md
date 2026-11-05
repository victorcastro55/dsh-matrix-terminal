# dsh-matrix-terminal

A phosphor-green terminal skin for the [DeepSeek Harness](https://github.com/deepseek-ai) Web UI.

One monospace voice, square edges, scanlines over the glass, a blinking prompt line under the
composer, and a chat that reads as a transcript: prompts and answers on the left, everything the
harness did behind them moved into a right-side work log.

![The skin in a session: chat on the left, thinking and work log on the right, terminal prompt under the composer](docs/overview.png)

```
harness@matrix:~$ 3f7c1a08 █                              <$0.01
```

(The screenshots were taken without the companion balance plugin, so the prompt line ends at the
cursor.)

## What it changes

**Design tokens.** All 123 `--dsw-*` tokens the Web UI reads are overridden: surfaces, text ramp,
hairlines, brand, buttons, interaction washes, states, menus, markdown and code blocks, diffs,
scrollbars, plus the geometry (`0px` radii everywhere) and the type family. Nothing paints a
hard-coded colour on top of a token.

**Chrome the tokens cannot express** — one injected stylesheet:

- `body::after` — a scanline overlay, one dark row every three pixels, pointer-transparent.
- `body::before` — a soft phosphor bloom from the top and a vignette at the edges.
- A mono-green Shiki theme, so code blocks stay legible in one hue separated by luminance.
- Heading text-shadow, square scrollbars, a green caret and selection.

**The prompt line.** A `conversation.composer.dock` slot under the composer:
`harness@matrix:~$`, the first eight characters of the session id, a blinking block cursor, and —
if the companion balance plugin is installed — the account balance right-aligned.

![The prompt line: harness@matrix:~$, the session discriminator, and a blinking block cursor](docs/prompt-line.png)

**The transcript.** Process rows the chat would otherwise print inline (tool calls, turn process,
system prompts, context, compaction, retries, workflow runs) are hidden from the flow and projected
into the work log instead. What stays in the chat is what a terminal transcript keeps: what you
typed, what the model answered, and how the turn ended.

**The work log.** A right-sidebar page type with two panes: reasoning above (one entry per step that
thought), the work log below (one row per tool call or process event, with clock, tag, subject and
duration). Each pane follows its own tail and releases as soon as you scroll away. The log opens
itself once per session; close it and it stays closed until you move to another session.

## Requirements

- DeepSeek Harness `0.2.1-rc.5` or a compatible release, Web profile.
- The work log needs the right sidebar. Without it the skin still applies; only the log is lost.
- Dark only, deliberately. A terminal has one look.

## Install

```sh
dsh plugin --profile web add dsh-matrix-terminal
```

Restart `dsh web` (or let the profile reload) and the skin is on.

To also get the balance on the prompt line, install the companion:

```sh
dsh plugin --profile web add dsh-matrix-terminal-balance
```

### From source

Without npm, install straight from the repository:

```sh
dsh plugin --profile web add github:victorcastro55/dsh-matrix-terminal
```

Or from a clone, if you want to edit it live:

```sh
git clone https://github.com/victorcastro55/dsh-matrix-terminal.git
dsh plugin --profile web add link:"$PWD/dsh-matrix-terminal"
```

## Uninstall

```sh
dsh plugin --profile web remove dsh-matrix-terminal
```

The token layer, the stylesheet and the work-log tab are all registered inside the plugin's own
effect scope, so nothing is left behind: removing the package restores the stock Web UI on restart.

## How it works

Two halves, one package. `index.js` is the host half and does nothing — the skin is pure client,
which keeps it working on a read-only or remote host. `client.js` is a Client module that:

1. registers an `en` / `zh` locale namespace,
2. pushes the palette through `ctx.theme.overrideTokens('dsh-matrix-terminal', …)`, so it layers
   over whichever theme is active rather than replacing the theme system,
3. appends its stylesheet with a `data-plugin` marker and removes it on dispose,
4. registers the prompt-line slot,
5. injects `sidebarRightTabs` / `sidebarRight` optionally, and only then registers the work-log tab.

No network calls, no telemetry, no data leaves the page. The only outbound request in the family
belongs to the companion balance plugin, which runs in the host process and never exposes the key.

## Locale

English and Simplified Chinese ship in `locale/`. The `meta` block is what the plugin list shows;
the runtime strings live in the module's own dictionaries.

## License

MIT. Not affiliated with DeepSeek; no assets from the Harness are redistributed here.
