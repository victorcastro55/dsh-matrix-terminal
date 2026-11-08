window.__ModuleLoader__.load({
  id: 'dsh-matrix-terminal',
  factory(require) {
    const React = require('react');

    /** One monospaced voice for the whole app: a terminal has no second typeface. */
    const MONO =
      '"JetBrains Mono", "IBM Plex Mono", "DejaVu Sans Mono", "Liberation Mono", "Fira Code", "SF Mono", Menlo, Consolas, monospace';

    /** Phosphor palette: greens carry the structure, red and amber are the only alarms. */
    const P = {
      void: '#040a06',
      ink1: '#061009',
      ink2: '#0a1a10',
      ink3: '#0e2415',
      ink4: '#123020',
      text: '#b7f7cd',
      text2: '#7ed9a4',
      text3: '#4fa276',
      text4: '#468a66',
      text5: '#24503a',
      glow: '#00ff41',
      mint: '#00e5a0',
      spring: '#38ff8f',
      amber: '#ffc34d',
      red: '#ff5e5e',
    };

    /** Every token is a terminal palette: the same values in both schemes, because terminals have one look. */
    const both = (value) => ({ light: value, dark: value });

    const TOKENS = {
      // Surfaces, darkest to lightest.
      '--dsw-alias-bg-base': both(P.void),
      '--dsw-alias-bg-layer-1': both(P.ink1),
      '--dsw-alias-bg-layer-2': both(P.ink2),
      '--dsw-alias-bg-layer-3': both(P.ink3),
      '--dsw-alias-bg-overlay': both(P.ink1),
      '--dsw-alias-bg-mask-1': both('rgba(0, 6, 2, 0.74)'),
      '--dsw-alias-bg-mask-2': both('rgba(0, 6, 2, 0.42)'),
      '--dsw-alias-bg-mask-3': both('rgba(0, 6, 2, 0.82)'),
      '--dsw-alias-bg-mask-photo': both('rgba(0, 5, 2, 0.94)'),
      '--dsw-alias-bg-mask-drop': both('rgba(2, 14, 7, 0.78)'),
      '--dsw-alias-bg-module-platform': both(P.ink1),
      '--dsw-alias-bg-multi-select': both(P.ink2),
      '--dsw-alias-bg-skeleton': both('rgba(0, 255, 65, 0.07)'),
      '--dsw-alias-bg-document-preview': both(P.void),
      '--dsw-alias-bg-document-selection': both('rgba(0, 255, 65, 0.22)'),
      '--dsw-alias-label-document-preview': both(P.text2),

      // Text ramp: bright phosphor down to nearly burned-out.
      '--dsw-alias-label-primary': both(P.text),
      '--dsw-alias-label-secondary': both(P.text2),
      '--dsw-alias-label-tertiary': both(P.text3),
      '--dsw-alias-label-caption': both(P.text4),
      '--dsw-alias-label-dimmed': both(P.text5),
      '--dsw-alias-label-primary-dimmed': both(P.text2),
      '--dsw-alias-label-primary-bluish': both(P.text),
      '--dsw-alias-label-primary-inverted': both(P.void),
      '--dsw-alias-label-primary-foreground': both('#02180b'),
      '--dsw-alias-label-shimmer': both('rgba(183, 247, 205, 0.35)'),
      '--dsw-alias-label-deep-diving': both(P.text2),
      '--dsw-alias-label-deep-diving-shimmer': both('rgba(0, 255, 65, 0.40)'),

      // Hairlines: crisp green rules instead of soft grey borders.
      '--dsw-alias-border-l1': both('rgba(0, 255, 65, 0.12)'),
      '--dsw-alias-border-l2': both('rgba(0, 255, 65, 0.20)'),
      '--dsw-alias-border-l2-darkmode-thin': both('rgba(0, 255, 65, 0.16)'),
      '--dsw-alias-border-l3': both('rgba(0, 255, 65, 0.28)'),
      '--dsw-alias-border-l4': both('rgba(0, 255, 65, 0.40)'),
      '--dsw-alias-border-inverted': both('rgba(0, 255, 65, 0.10)'),
      '--dsw-alias-border-inverted2': both('rgba(0, 255, 65, 0.14)'),

      // Brand and buttons.
      '--dsw-alias-brand-primary': both(P.glow),
      '--dsw-alias-brand-primary-new-colorprimary-new-color': both(P.glow),
      '--dsw-alias-brand-primary-invert': both(P.void),
      '--dsw-alias-brand-primary-soft': both('rgba(0, 255, 65, 0.12)'),
      '--dsw-alias-brand-text': both(P.glow),
      '--dsw-alias-button-primary-fill': both(P.glow),
      '--dsw-alias-button-primary-hover': both('#6dff9a'),
      '--dsw-alias-button-primary-dimmed': both(P.ink4),
      '--dsw-alias-button-elevated-fill': both(P.ink2),
      '--dsw-alias-button-floating-fill': both(P.ink2),
      '--dsw-alias-button-floating-hover': both(P.ink3),
      '--dsw-alias-button-contrast-fill': both(P.text),
      '--dsw-alias-button-ghost-active-fill': both(P.ink3),
      '--dsw-alias-button-ghost-active-hover': both(P.ink4),
      '--dsw-alias-button-ghost-active-border': both('rgba(0, 255, 65, 0.45)'),
      '--dsw-alias-button-info-fill': both(P.mint),
      '--dsw-alias-button-info-hover': both('#5cffbe'),
      '--dsw-alias-button-tool-bar-fill': both('rgba(0, 255, 65, 0.10)'),
      '--dsw-alias-button-tool-bar-hover': both('rgba(0, 255, 65, 0.18)'),
      '--dsw-alias-button-tool-bar-fill-invisible': both('rgba(0, 255, 65, 0.06)'),

      // Interaction washes.
      '--dsw-alias-interactive-bg-hover': both('rgba(0, 255, 65, 0.08)'),
      '--dsw-alias-interactive-bg-active': both('rgba(0, 255, 65, 0.15)'),
      '--dsw-alias-interactive-bg-hover-accent': both('rgba(0, 255, 65, 0.18)'),
      '--dsw-alias-interactive-bg-hover-solid': both(P.ink2),
      '--dsw-alias-interactive-bg-hover-danger': both('rgba(255, 94, 94, 0.14)'),

      // States.
      '--dsw-alias-state-business-primary': both(P.glow),
      '--dsw-alias-state-business-tertiary': both(P.ink3),
      '--dsw-alias-state-error-primary': both(P.red),
      '--dsw-alias-state-error-secondary': both('#ff8f8f'),
      '--dsw-alias-state-success-primary': both(P.spring),
      '--dsw-alias-state-success-secondary': both('#7dffb2'),
      '--dsw-alias-state-success-tertiary': both('#0a2a17'),
      '--dsw-alias-state-warn-primary': both(P.amber),
      '--dsw-alias-state-warn-secondary': both('#ffd88a'),
      '--dsw-alias-state-warn-tertiary': both('#2a2010'),
      '--dsw-alias-state-warn-label': both(P.amber),
      '--dsw-alias-state-idle-primary': both('#2f6b4c'),
      '--dsw-alias-switch-thumb': both(P.glow),
      '--dsw-alias-link': both(P.mint),
      '--dsw-focus-ring-color': both(P.glow),

      // Frame chrome.
      '--dsw-specific-sidebar-fill': both('#030806'),
      '--dsw-specific-sidebar-nav-item-active': both('rgba(0, 255, 65, 0.14)'),
      '--dsw-specific-sidebar-nav-item-hover': both('rgba(0, 255, 65, 0.07)'),
      '--dsw-specific-sidebar-nav-item-active-accent': both(P.glow),
      '--dsw-specific-input-major': both(P.ink1),
      '--dsw-specific-login-input': both(P.void),
      '--dsw-specific-selector': both(P.ink2),
      '--dsw-specific-tip': both(P.ink2),
      '--dsw-specific-bubble': both(P.ink3),
      '--dsw-specific-bubble-highlight': both(P.ink4),
      '--dsw-menu-surface-fill': both('rgba(4, 14, 8, 0.93)'),
      '--dsw-specific-menu': both('rgba(4, 14, 8, 0.93)'),
      '--dsw-alias-menu-group-header-fill': both('rgba(6, 20, 11, 0.97)'),
      '--dsw-alias-menu-icon': both(P.text2),
      '--dsw-alias-toast-bg': both(P.ink3),
      '--dsw-alias-toast-label': both(P.text),
      '--dsw-alias-tooltip-bg': both(P.ink3),
      '--dsw-alias-tooltip-key-bg': both('rgba(0, 255, 65, 0.16)'),

      // Markdown, code, diffs.
      '--dsw-alias-markdown-code-block': both('#04120a'),
      '--dsw-alias-markdown-code-block-banner': both(P.ink2),
      '--dsw-alias-markdown-inline-code': both('#0d2a18'),
      '--dsw-alias-markdown-tag': both(P.ink2),
      '--dsw-alias-markdown-citation': both(P.ink3),
      '--dsw-alias-markdown-placeholder': both(P.ink2),
      '--dsw-alias-markdown-code-segment-selected': both(P.ink3),
      '--dsw-alias-markdown-code-segment-unselected': both(P.ink1),
      '--dsw-alias-turn-trigger-bg': both(P.ink1),
      '--dsw-alias-turn-trigger-bg-hover': both(P.ink2),
      '--dsw-alias-code-diff-added': both('rgba(0, 255, 65, 0.10)'),
      '--dsw-alias-code-diff-deleted': both('rgba(255, 94, 94, 0.10)'),
      '--dsw-alias-file-diff-added-bg': both('#06210f'),
      '--dsw-alias-file-diff-added-gutter': both('#041708'),
      '--dsw-alias-file-diff-added-marker': both('#00e05a'),
      '--dsw-alias-file-diff-deleted-bg': both('#2a0f0f'),
      '--dsw-alias-file-diff-deleted-gutter': both('#1c0a0a'),
      '--dsw-alias-file-diff-deleted-marker': both(P.red),

      // Scrollbars.
      '--dsw-alias-scrollbar-bg-l1': both('rgba(0, 255, 65, 0.20)'),
      '--dsw-alias-scrollbar-bg-l2': both('rgba(0, 255, 65, 0.26)'),
      '--dsw-alias-scrollbar-hover-l1': both('rgba(0, 255, 65, 0.42)'),
      '--dsw-alias-scrollbar-hover-l2': both('rgba(0, 255, 65, 0.52)'),

      // Geometry and type: no rounded corners, one monospace voice.
      '--dsw-radius-xs': both('0px'),
      '--dsw-radius-sm': both('0px'),
      '--dsw-radius-md': both('0px'),
      '--dsw-radius-lg': both('0px'),
      '--dsw-radius-xl': both('0px'),
      '--dsw-radius-panel': both('0px'),
      '--dsw-font-family': both(MONO),
      '--dsw-font-family-brand': both(MONO),
      '--ds-font-family-code': both(MONO),
      '--dsh-font-family-terminal': both(MONO),
    };

    const CSS = `
/* Matrix Terminal: the glass, the beam, and the prompt line. */
html { color-scheme: dark !important; }

body {
  caret-color: #00ff41;
  font-variant-ligatures: none;
}

::selection { background: rgba(0, 255, 65, 0.28); color: #eafff2; }

/* Scanlines: one dark row every three pixels, over everything. */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.30) 0px,
    rgba(0, 0, 0, 0.30) 1px,
    rgba(0, 0, 0, 0) 1px,
    rgba(0, 0, 0, 0) 3px
  );
  opacity: 0.45;
}

/* Phosphor bloom from the top and a soft vignette at the edges. */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 2147482999;
  pointer-events: none;
  background:
    radial-gradient(130% 70% at 50% -20%, rgba(0, 255, 65, 0.07), rgba(0, 0, 0, 0) 60%),
    radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);
}

/* Square scrollbars to match the rest of the geometry. */
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb:hover { border-radius: 0; }

/* The session hover card hard-codes a neutral grey; keep it on the glass. */
body * { --dsw-hovercard-bg: #0b2416 !important; }

h1, h2, h3, h4, h5, h6 { text-shadow: 0 0 18px rgba(0, 255, 65, 0.16); }

/* Mono-green syntax theme: one hue, separated by luminance. */
body,
body[data-ds-dark-theme] {
  --shiki-foreground: #b7f7cd;
  --shiki-background: #04120a;
  --shiki-token-constant: #9dffb4;
  --shiki-token-string: #d2ffe0;
  --shiki-token-string-expression: #c4ffd6;
  --shiki-token-comment: #3f7a58;
  --shiki-token-keyword: #00ff41;
  --shiki-token-parameter: #7fffb0;
  --shiki-token-function: #5aff9b;
  --shiki-token-punctuation: #4e9b6c;
  --shiki-token-link: #00e5a0;
}

/* The prompt line under the composer: harness@matrix:~$ <session> _. */
.mtx-prompt {
  box-sizing: border-box;
  display: flex;
  align-items: baseline;
  gap: 0;
  width: 100%;
  padding: 2px 6px 0;
  font-family: var(--dsw-font-family);
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0;
  white-space: pre;
  user-select: text;
}
.mtx-prompt-host { color: var(--dsw-alias-label-tertiary); }
.mtx-prompt-glyph { color: var(--dsw-alias-brand-primary); }
.mtx-prompt-id { color: var(--dsw-alias-label-caption); }
.mtx-prompt-balance {
  margin-left: auto;
  padding-left: 16px;
  color: var(--dsw-alias-state-success-primary);
}
.mtx-prompt-cursor {
  color: var(--dsw-alias-brand-primary);
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.55);
  animation: mtx-blink 1.15s steps(1, end) infinite;
}
@keyframes mtx-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .mtx-prompt-cursor { animation: none; }
}

/* The chat reads as a transcript: prompts, answers and outcomes, nothing else.
   Prompts include user text, slash commands and steering messages; outcomes
   include turn errors and the output-cap notice. */
[data-chat-flow-kind="tool-call"],
[data-chat-flow-kind="turn-process"],
[data-chat-flow-kind="system-prompt"],
[data-chat-flow-kind="context"],
[data-chat-flow-kind="compaction"],
[data-chat-flow-kind="manual-compaction"],
[data-chat-flow-kind="model-retry"],
[data-chat-flow-kind="turn-trigger"],
[data-chat-flow-kind="workflow-run"],
[data-chat-flow-kind="unknown"] {
  display: none !important;
}

/* The work panel: thinking above, the work log below, one column. */
.mtx-log {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--dsw-alias-bg-base);
  font-family: var(--dsw-font-family);
}
.mtx-pane {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.mtx-pane-think { flex: 0 0 var(--mtx-think-size, 44%); min-height: 84px; }
.mtx-pane-work { flex: 1 1 auto; border-top: 1px solid var(--dsw-alias-border-l2); }
.mtx-log-head {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-bottom: 1px solid var(--dsw-alias-border-l1);
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.04em;
}
.mtx-log-count { margin-left: auto; color: var(--dsw-alias-label-caption); }
.mtx-log-live { color: var(--dsw-alias-brand-primary); }
.mtx-log-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 4px 0 16px;
}
.mtx-log-empty { padding: 10px; color: var(--dsw-alias-label-caption); font-size: 11px; line-height: 16px; }
.mtx-log-row {
  display: flex;
  gap: 8px;
  padding: 1px 10px;
  font-size: 11px;
  line-height: 17px;
  white-space: nowrap;
}
.mtx-log-row[data-error] { background: rgba(255, 94, 94, 0.06); }
.mtx-log-time { flex: none; color: var(--dsw-alias-label-dimmed); }
.mtx-log-tag { flex: none; color: var(--dsw-alias-label-secondary); }
.mtx-log-subject {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsw-alias-label-primary);
}
.mtx-log-tail { flex: none; margin-left: auto; padding-left: 8px; color: var(--dsw-alias-label-caption); }
.mtx-log-row[data-state="running"] .mtx-log-tail,
.mtx-log-row[data-state="queued"] .mtx-log-tail { color: var(--dsw-alias-brand-primary); }
.mtx-log-row[data-state="error"] .mtx-log-tail { color: var(--dsw-alias-state-error-primary); }

/* Thinking rows: the model's own words, dimmer than the answer and never clipped. */
.mtx-think-row {
  padding: 6px 10px 10px;
  border-bottom: 1px dashed rgba(0, 255, 65, 0.10);
}
.mtx-think-meta {
  display: flex;
  gap: 8px;
  color: var(--dsw-alias-label-caption);
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.04em;
}
.mtx-think-row[data-live] .mtx-think-meta { color: var(--dsw-alias-brand-primary); }
.mtx-think-text {
  margin: 4px 0 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 16px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

/* Pulse: two fields of neural current, one for reasoning and one for tool work.
   Each field is idle until its own signal goes live, so the column says what is
   happening without reading the log. */
.mtx-pulse {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--dsw-alias-bg-base);
  font-family: var(--dsw-font-family);
}
.mtx-pulse-field {
  flex: 1 1 50%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 12px 4px;
}
.mtx-pulse-field[data-tone="think"] { --mtx-pulse-ink: var(--dsw-alias-state-success-primary); }
.mtx-pulse-field[data-tone="work"] { --mtx-pulse-ink: var(--dsw-alias-state-warn-primary); }
.mtx-pulse-field + .mtx-pulse-field { border-top: 1px solid var(--dsw-alias-border-l2); }
.mtx-pulse-head {
  flex: none;
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.mtx-pulse-label { color: var(--dsw-alias-label-secondary); }
.mtx-pulse-state { color: var(--dsw-alias-label-dimmed); }
.mtx-pulse-field[data-live] .mtx-pulse-state {
  color: var(--mtx-pulse-ink);
  text-shadow: 0 0 10px var(--mtx-pulse-ink);
}
.mtx-pulse-count { margin-left: auto; color: var(--dsw-alias-label-caption); letter-spacing: 0.04em; }
.mtx-pulse-svg { flex: 1 1 auto; width: 100%; min-height: 0; overflow: visible; }
.mtx-pulse-svg line {
  stroke: var(--mtx-pulse-ink);
  stroke-opacity: 0.14;
  stroke-width: 0.5;
  stroke-dasharray: 2 7;
}
/* Motion is gated on visibility: a field that is hidden or scrolled out of the
   column keeps its shape and stops animating. */
.mtx-pulse-svg .mtx-pulse-nodes circle {
  fill: var(--mtx-pulse-ink);
  fill-opacity: 0.28;
  transform-box: fill-box;
  transform-origin: center;
}
.mtx-pulse-field[data-animate] .mtx-pulse-svg .mtx-pulse-nodes circle {
  /* Every node drifts on its own clock: orbiting is what makes the field read as
     alive rather than as a diagram. Per-node values arrive as custom properties. */
  animation-name: var(--mtx-drift, mtx-drift-a);
  animation-duration: var(--mtx-drift-dur, 17s);
  animation-delay: var(--mtx-drift-delay, 0s);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.mtx-pulse-core { fill: var(--mtx-pulse-ink); fill-opacity: 0.35; }
.mtx-pulse-halo {
  fill: none;
  stroke: var(--mtx-pulse-ink);
  stroke-width: 0.6;
  stroke-opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
}
.mtx-pulse-field[data-animate][data-live] .mtx-pulse-svg line {
  stroke-opacity: 0.45;
  animation-name: mtx-flow;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
/* Live adds the flash as a second animation, so the drift keeps running. */
.mtx-pulse-field[data-animate][data-live] .mtx-pulse-svg .mtx-pulse-nodes circle {
  animation-name: var(--mtx-drift, mtx-drift-a), mtx-node;
  animation-duration: var(--mtx-drift-dur, 17s), 1.6s;
  animation-delay: var(--mtx-drift-delay, 0s), var(--mtx-flash-delay, 0s);
}
.mtx-pulse-field[data-live] .mtx-pulse-core {
  fill-opacity: 0.9;
  filter: drop-shadow(0 0 5px var(--mtx-pulse-ink));
}
.mtx-pulse-field[data-animate][data-live] .mtx-pulse-halo { animation: mtx-halo 2.2s ease-out infinite; }
.mtx-pulse-foot {
  flex: none;
  color: var(--dsw-alias-label-caption);
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.06em;
}
@keyframes mtx-flow {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -18; }
}
@keyframes mtx-node {
  0%, 100% { fill-opacity: 0.28; }
  50% { fill-opacity: 1; }
}
/* Three drift paths, in user units of the 200x120 field box. */
@keyframes mtx-drift-a {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(3.6px, -4.4px) scale(1.14); }
}
@keyframes mtx-drift-b {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-4.2px, 3.2px) scale(0.86); }
}
@keyframes mtx-drift-c {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(2.9px, 3.6px) scale(1.1); }
  66% { transform: translate(-3.4px, -2.5px) scale(0.9); }
}
@keyframes mtx-halo {
  0% { stroke-opacity: 0.42; transform: scale(0.55); }
  100% { stroke-opacity: 0; transform: scale(1.6); }
}
/* Sound: a transport and a cava-style spectrum, drawn on a canvas because bars
   change every frame and DOM nodes would only add work. */
.mtx-sound {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  min-height: 0;
  padding: 10px 12px 8px;
  background: var(--dsw-alias-bg-base);
  font-family: var(--dsw-font-family);
}
.mtx-sound-head {
  flex: none;
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dsw-alias-label-secondary);
}
.mtx-sound-name {
  margin-left: auto;
  max-width: 62%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsw-alias-label-caption);
  letter-spacing: 0;
  text-transform: none;
}
/* Pattern: an editor, a piece list, and the same bars, reading Strudel's output. */
.mtx-pattern {
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  min-height: 0;
  padding: 10px 12px 8px;
  background: var(--dsw-alias-bg-base);
  font-family: var(--dsw-font-family);
}
.mtx-pattern-head {
  flex: none;
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dsw-alias-label-secondary);
}
.mtx-pattern-state { color: var(--dsw-alias-label-dimmed); letter-spacing: 0.04em; }
.mtx-pattern-state[data-state="playing"] { color: var(--dsw-alias-brand-primary); text-shadow: 0 0 10px var(--dsw-alias-brand-primary); }
.mtx-pattern-state[data-state="error"] { color: var(--dsw-alias-state-error-primary); }
.mtx-pattern-name {
  margin-left: auto;
  max-width: 42%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0;
  text-transform: none;
  color: var(--dsw-alias-label-caption);
}
.mtx-pattern-canvas { flex: 0 0 auto; width: 100%; height: 84px; display: block; }
.mtx-pattern-list {
  flex: 0 1 auto;
  max-height: 26%;
  min-height: 0;
  overflow: auto;
  border-top: 1px solid var(--dsw-alias-border-l1);
  border-bottom: 1px solid var(--dsw-alias-border-l1);
}
.mtx-pattern-row { display: flex; align-items: center; gap: 4px; }
.mtx-pattern-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
  padding: 2px 4px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-family: inherit;
  font-size: 11px;
  line-height: 17px;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mtx-pattern-item:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.mtx-pattern-item[data-active] { background: var(--dsw-alias-interactive-bg-active); color: var(--dsw-alias-brand-primary); }
.mtx-pattern-tag { margin-left: auto; color: var(--dsw-alias-label-dimmed); font-size: 10px; letter-spacing: 0.06em; }
.mtx-pattern-x {
  flex: none;
  width: 20px;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-dimmed);
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
}
.mtx-pattern-x:hover { color: var(--dsw-alias-state-error-primary); }
.mtx-pattern-code {
  flex: 1 1 auto;
  min-height: 90px;
  resize: none;
  padding: 6px 8px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 0;
  background: var(--dsw-alias-markdown-code-block);
  color: var(--dsw-alias-label-primary);
  font-family: var(--dsw-font-family);
  font-size: 11px;
  line-height: 16px;
  tab-size: 2;
}
.mtx-pattern-code:focus { outline: 1px solid var(--dsw-alias-brand-primary); outline-offset: -1px; }
.mtx-pattern-input {
  flex: 1 1 auto;
  min-width: 0;
  padding: 2px 6px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-family: inherit;
  font-size: 11px;
  line-height: 16px;
}
.mtx-pattern-error {
  flex: none;
  max-height: 72px;
  overflow: auto;
  color: var(--dsw-alias-state-error-primary);
  font-size: 11px;
  line-height: 15px;
  white-space: pre-wrap;
}
.mtx-pattern-note { flex: none; color: var(--dsw-alias-label-dimmed); font-size: 10px; line-height: 14px; }
.mtx-sound-refresh {
  flex: none;
  padding: 0 6px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-family: inherit;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
}
.mtx-sound-refresh:hover {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-brand-primary);
}
.mtx-sound-list {
  flex: 0 1 34%;
  min-height: 0;
  overflow: auto;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.mtx-sound-track {
  display: flex;
  align-items: baseline;
  gap: 8px;
  width: 100%;
  padding: 2px 4px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-family: inherit;
  font-size: 11px;
  line-height: 17px;
  text-align: left;
  cursor: pointer;
}
.mtx-sound-track:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.mtx-sound-track[data-active] {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-brand-primary);
}
.mtx-sound-track-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mtx-sound-track-size {
  flex: none;
  margin-left: auto;
  color: var(--dsw-alias-label-dimmed);
  font-variant-numeric: tabular-nums;
}
.mtx-sound-note {
  flex: none;
  color: var(--dsw-alias-label-caption);
  font-size: 11px;
  line-height: 16px;
}
.mtx-sound-drop[data-hidden] { display: none; }
.mtx-sound-canvas {
  flex: 1 1 auto;
  width: 100%;
  min-height: 140px;
  display: block;
}
.mtx-sound-drop {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border: 1px dashed var(--dsw-alias-border-l3);
  color: var(--dsw-alias-label-caption);
  font-size: 11px;
  line-height: 16px;
}
.mtx-sound-drop[data-over] {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary);
}
.mtx-sound-row {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  line-height: 16px;
}
.mtx-sound-btn {
  flex: none;
  padding: 2px 8px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-family: inherit;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
}
.mtx-sound-btn:hover:not(:disabled) {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-brand-primary);
}
.mtx-sound-btn:disabled { opacity: 0.45; cursor: default; }
.mtx-sound-time { flex: none; color: var(--dsw-alias-label-caption); font-variant-numeric: tabular-nums; }
.mtx-sound-seek {
  flex: 1 1 auto;
  min-width: 60px;
  height: 2px;
  appearance: none;
  background: var(--dsw-alias-border-l3);
  cursor: pointer;
}
.mtx-sound-seek::-webkit-slider-thumb,
.mtx-sound-vol::-webkit-slider-thumb {
  appearance: none;
  width: 7px;
  height: 12px;
  background: var(--dsw-alias-brand-primary);
}
.mtx-sound-vol {
  flex: none;
  width: 64px;
  height: 2px;
  appearance: none;
  background: var(--dsw-alias-border-l3);
  cursor: pointer;
}
@media (prefers-reduced-motion: reduce) {
  .mtx-pulse-field[data-animate] .mtx-pulse-svg .mtx-pulse-nodes circle,
  .mtx-pulse-field[data-live] .mtx-pulse-svg line,
  .mtx-pulse-field[data-live] .mtx-pulse-svg .mtx-pulse-nodes circle,
  .mtx-pulse-field[data-live] .mtx-pulse-halo { animation: none; }
  .mtx-pulse-field[data-live] .mtx-pulse-svg line { stroke-opacity: 0.6; }
  .mtx-pulse-field[data-live] .mtx-pulse-svg .mtx-pulse-nodes circle { fill-opacity: 0.8; }
}
`;

    /** Dictionary namespace owned by this plugin. */
    const NS = 'matrixTerminal';

    const en = {
      'prompt.label': 'Terminal prompt: harness@matrix',
      'balance.label': 'Balance',
      'tab.title': 'Work log',
      'guide.description': 'Reasoning and tool activity for this session.',
      'think.title': 'Thinking',
      'think.empty': 'No reasoning yet in this session.',
      'think.label': 'Reasoning: model thinking for this session',
      'log.title': 'Work log',
      'log.empty': 'No work yet in this session.',
      'log.label': 'Work log: tool calls and process rows for this session',
      'pulse.title': 'Pulse',
      'pulse.guide.description': 'Live fields for thinking and tool work.',
      'pulse.think': 'Thinking',
      'pulse.work': 'Working',
      'pulse.live': 'live',
      'pulse.idle': 'idle',
      'pulse.steps': 'steps',
      'pulse.events': 'events',
      'pulse.app': 'Activity: thinking and tool work for this session',
      'sound.title': 'Sound',
      'sound.guide.description': 'Play an audio file with a spectrum analyzer.',
      'sound.drop': 'Drop an audio file here',
      'sound.choose': 'Choose file',
      'sound.empty': 'No track',
      'sound.play': 'Play',
      'sound.pause': 'Pause',
      'sound.volume': 'Volume',
      'sound.visual': 'Spectrum of the playing audio',
      'sound.library.missing': 'No folder at',
      'sound.library.empty': 'No audio files in this folder.',
      'sound.refresh': 'Rescan folder',
      'pattern.title': 'Pattern',
      'pattern.guide.description': 'Live-code music with Strudel, in the pane.',
      'pattern.visual': 'Spectrum of the Strudel engine output',
      'pattern.code': 'Strudel pattern',
      'pattern.run': 'Run',
      'pattern.stop': 'Stop',
      'pattern.save': 'Save',
      'pattern.saveAs': 'Save as',
      'pattern.delete': 'Delete',
      'pattern.builtin': 'built in',
      'pattern.saved': 'saved',
      'pattern.loading': 'loading engine',
      'pattern.playing': 'playing',
      'pattern.error': 'engine error',
      'pattern.idle': 'idle',
      'pattern.engine': 'Strudel 1.3.0 is fetched from esm.sh the first time you press Run; the bars are its real output.',
    };
    const zh = {
      'prompt.label': '终端提示符：harness@matrix',
      'balance.label': '余额',
      'tab.title': '工作日志',
      'guide.description': '本次会话的推理与工具活动。',
      'think.title': '思考',
      'think.empty': '本次会话尚无推理内容。',
      'think.label': '推理：本次会话的模型思考',
      'log.title': '工作日志',
      'log.empty': '本次会话尚无工作记录。',
      'log.label': '工作日志：本次会话的工具调用与过程行',
      'pulse.title': '脉冲',
      'pulse.guide.description': '思考与工具活动的实时视图。',
      'pulse.think': '思考',
      'pulse.work': '工作',
      'pulse.live': '进行中',
      'pulse.idle': '空闲',
      'pulse.steps': '步',
      'pulse.events': '条',
      'pulse.app': '活动：本次会话的思考与工具活动',
      'sound.title': '声音',
      'sound.guide.description': '播放音频文件并显示频谱。',
      'sound.drop': '把音频文件拖到这里',
      'sound.choose': '选择文件',
      'sound.empty': '没有曲目',
      'sound.play': '播放',
      'sound.pause': '暂停',
      'sound.volume': '音量',
      'sound.visual': '正在播放音频的频谱',
      'sound.library.missing': '未找到文件夹：',
      'sound.library.empty': '该文件夹中没有音频文件。',
      'sound.refresh': '重新扫描文件夹',
      'pattern.title': '节奏',
      'pattern.guide.description': '在侧栏里用 Strudel 现场编写音乐。',
      'pattern.visual': 'Strudel 引擎输出的频谱',
      'pattern.code': 'Strudel 代码',
      'pattern.run': '运行',
      'pattern.stop': '停止',
      'pattern.save': '保存',
      'pattern.saveAs': '另存为',
      'pattern.delete': '删除',
      'pattern.builtin': '内置',
      'pattern.saved': '已存',
      'pattern.loading': '正在加载引擎',
      'pattern.playing': '播放中',
      'pattern.error': '引擎错误',
      'pattern.idle': '空闲',
      'pattern.engine': '首次运行时会从 esm.sh 获取 Strudel 1.3.0；频谱来自它的真实输出。',
    };

    /** Right-Sidebar page type and body identity for the work log. */
    const LOG_ID = 'matrix-terminal-work-log';
    const LOG_KIND = 'matrix-work-log';

    /** Right-Sidebar page type and body identity for the activity fields. */
    const PULSE_ID = 'matrix-terminal-pulse';
    const PULSE_KIND = 'matrix-pulse';

    /** Right-Sidebar page type and body identity for the sound pane. */
    const SOUND_ID = 'matrix-terminal-sound';
    const SOUND_KIND = 'matrix-sound';

    /** Right-Sidebar page type and body identity for the pattern pane. */
    const PATTERN_ID = 'matrix-terminal-pattern';
    const PATTERN_KIND = 'matrix-pattern';

    // #region work-log helpers
    /** Trim to one line and a fixed width for a log cell. */
    function clip(text, max) {
      const flat = String(text).replace(/\s+/g, ' ').trim();
      return flat.length > max ? flat.slice(0, max - 1) + '\u2026' : flat;
    }

    /** Local wall clock for a log row; the panel is a tail, so seconds are enough. */
    function clockOf(time) {
      const date = new Date(typeof time === 'number' ? time : Date.now());
      const pad = (value) => String(value).padStart(2, '0');
      return pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
    }

    /** Argument fields worth showing first, in the order a terminal would print them. */
    const SUBJECT_FIELDS = [
      'command',
      'path',
      'file_path',
      'pattern',
      'query',
      'url',
      'prompt',
      'description',
      'skill',
      'name',
      'action',
    ];

    /**
     * The shortest honest description of one tool call: its most identifying
     * argument, or the raw argument text while it is still streaming.
     * @param block - running or settled tool call block.
     * @returns the subject text, possibly empty.
     */
    function toolSubject(block) {
      if (block === null || typeof block !== 'object') return '';
      const raw =
        typeof block.argsRaw === 'string'
          ? block.argsRaw
          : block.call !== null && typeof block.call === 'object' && typeof block.call.argsRaw === 'string'
            ? block.call.argsRaw
            : '';
      if (raw.trim() === '') return '';
      let args;
      try {
        args = JSON.parse(raw);
      } catch {
        // Still-streaming arguments: show the first value so the row reads like the call.
        const partial = /^\s*\{\s*"([^"]+)"\s*:\s*"?([^"]*)/.exec(raw);
        if (partial !== null && partial[2] !== '') return clip(partial[2], 64);
        return clip(raw.replace(/^[{[("\s]+/, ''), 64);
      }
      if (args === null || typeof args !== 'object') return clip(raw, 64);
      for (const field of SUBJECT_FIELDS) {
        const value = args[field];
        if (typeof value === 'string' && value.trim() !== '') return clip(value, 64);
        if (Array.isArray(value) && value.length > 0) return clip(value.join(' '), 64);
      }
      const entries = Object.entries(args);
      if (entries.length === 0) return '';
      const [key, value] = entries[0];
      return clip(key + '=' + (typeof value === 'string' ? value : JSON.stringify(value)), 64);
    }

    /** One settled tool row: outcome, duration, and the call's own identity. */
    function toolRow(node) {
      const block = node.data && typeof node.data === 'object' ? node.data.root : undefined;
      if (block === null || block === undefined) return null;
      const name = typeof block.name === 'string' && block.name !== '' ? block.name : 'tool';
      const subject = toolSubject(block);
      const settled = block.kind === 'tool-result';
      const error = settled && block.isError === true;
      const started = settled ? block.callTime : undefined;
      const took =
        typeof started === 'number' && typeof block.time === 'number' ? Math.max(0, block.time - started) : undefined;
      return {
        key: String(node.anchorSeq) + ':' + (block.callId || name),
        time: typeof block.time === 'number' ? block.time : undefined,
        tag: name,
        subject,
        state: settled ? (error ? 'error' : 'ok') : block.phase === 'preparing' ? 'queued' : 'running',
        tail:
          took === undefined
            ? settled
              ? error
                ? 'error'
                : 'ok'
              : block.phase === 'preparing'
                ? 'queued'
                : 'running'
            : (error ? 'error ' : 'ok ') + (took >= 1000 ? (took / 1000).toFixed(1) + 's' : took + 'ms'),
      };
    }

    /** A process row the chat no longer prints, reduced to its wire tag and best-known detail. */
    function processRow(node) {
      const data = node.data !== null && typeof node.data === 'object' ? node.data : {};
      let subject = '';
      if (typeof data.message === 'string') subject = clip(data.message, 72);
      else if (data.command !== null && typeof data.command === 'object') {
        const command = data.command;
        const name = typeof command.name === 'string' ? command.name : '';
        const args = typeof command.args === 'string' ? command.args : '';
        subject = clip(('/' + name + ' ' + args).trim(), 72);
      } else if (typeof data.retryState === 'string') subject = data.retryState;
      return {
        key: String(node.anchorSeq) + ':' + node.kind,
        time: typeof node.time === 'number' ? node.time : undefined,
        tag: String(node.kind),
        subject,
        state: node.kind === 'turn-error' ? 'error' : 'ok',
        tail: '',
      };
    }

    /** Rows the chat already prints: prompts, answers, their action row, and typed commands. */
    const LOG_SKIP = new Set([
      'user',
      'assistant-step',
      'turn-tail',
      'command',
      'command-input',
      'steering',
      'question-reply',
    ]);

    /**
     * Project the Chat order into log rows.
     * @param snapshot - current Chat snapshot.
     * @returns rows in conversation order, newest last.
     */
    function buildWorkRows(snapshot) {
      const rows = [];
      if (snapshot === undefined || snapshot === null) return rows;
      const order = Array.isArray(snapshot.order) ? snapshot.order : [];
      const nodes = snapshot.nodes;
      if (nodes === undefined || typeof nodes.get !== 'function') return rows;
      for (const key of order) {
        const node = nodes.get(key);
        if (node === undefined || node === null || LOG_SKIP.has(node.kind)) continue;
        const row = node.kind === 'tool-call' ? toolRow(node) : processRow(node);
        if (row !== null) rows.push(row);
      }
      return rows;
    }

    /**
     * Project the Chat order into reasoning entries: one per Step that thought,
     * with that Step's reasoning blocks joined in order.
     * @param snapshot - current Chat snapshot.
     * @returns reasoning entries in conversation order, newest last.
     */
    function buildThinkingRows(snapshot) {
      const rows = [];
      if (snapshot === undefined || snapshot === null) return rows;
      const order = Array.isArray(snapshot.order) ? snapshot.order : [];
      const nodes = snapshot.nodes;
      if (nodes === undefined || typeof nodes.get !== 'function') return rows;
      for (const key of order) {
        const node = nodes.get(key);
        if (node === undefined || node === null || node.kind !== 'assistant-step') continue;
        const data = node.data;
        if (data === null || typeof data !== 'object' || !Array.isArray(data.blocks)) continue;
        const parts = [];
        for (const block of data.blocks) {
          if (block === null || typeof block !== 'object' || block.kind !== 'reasoning') continue;
          if (typeof block.text !== 'string' || block.text.trim() === '') continue;
          parts.push(block.text);
        }
        if (parts.length === 0) continue;
        rows.push({
          key: key + ':thinking',
          turn: typeof data.turn === 'number' ? data.turn : undefined,
          step: typeof data.step === 'number' ? data.step : undefined,
          time: typeof data.time === 'number' ? data.time : undefined,
          live: data.status === 'running',
          text: parts.join('\n\n'),
        });
      }
      return rows;
    }

    /**
     * Keep one scroller pinned to its newest row while the reader stays at the
     * tail, and release it as soon as they scroll away.
     * @param revision - value whose change triggers a pin check.
     * @returns the scroller ref and its scroll handler.
     */
    function useTailPinned(revision) {
      const scroller = React.useRef(null);
      const pinned = React.useRef(true);
      React.useEffect(() => {
        const element = scroller.current;
        if (element === null || !pinned.current) return;
        element.scrollTop = element.scrollHeight;
      }, [revision]);
      const onScroll = React.useCallback(() => {
        const element = scroller.current;
        if (element === null) return;
        pinned.current = element.scrollHeight - element.scrollTop - element.clientHeight < 24;
      }, []);
      return { scroller, onScroll };
    }
    // #endregion

    /**
     * One panel head: title, a live marker, and the row count.
     * @param props - title, count, and whether the newest row is still running.
     * @returns the head row.
     */
    function paneHead(props) {
      return React.createElement(
        'div',
        { className: 'mtx-log-head' },
        React.createElement('span', null, props.title),
        props.live ? React.createElement('span', { className: 'mtx-log-live' }, '\u25cf live') : null,
        React.createElement('span', { className: 'mtx-log-count' }, String(props.count)),
      );
    }

    /**
     * The work panel: reasoning above, the work log below, each following its
     * own tail. Both panes read the one Chat snapshot the tab is given.
     * @param props - Chat standard props and copy.
     * @returns the two-pane column.
     */
    function WorkLogTab(props) {
      const snapshot = props.useChat((value) => value);
      const t = props.t;
      const rows = React.useMemo(() => buildWorkRows(snapshot), [snapshot]);
      const thoughts = React.useMemo(() => buildThinkingRows(snapshot), [snapshot]);
      const think = useTailPinned(thoughts.length);
      const work = useTailPinned(rows.length);
      const lastRow = rows.length === 0 ? undefined : rows[rows.length - 1];
      const workLive = lastRow !== undefined && (lastRow.state === 'running' || lastRow.state === 'queued');
      const lastThought = thoughts.length === 0 ? undefined : thoughts[thoughts.length - 1];
      const thinkLive = lastThought !== undefined && lastThought.live;
      return React.createElement(
        'div',
        { className: 'mtx-log' },
        React.createElement(
          'div',
          { className: 'mtx-pane mtx-pane-think', role: 'log', 'aria-label': t('think.label') },
          paneHead({ title: t('think.title'), count: thoughts.length, live: thinkLive }),
          React.createElement(
            'div',
            { className: 'mtx-log-body', ref: think.scroller, onScroll: think.onScroll },
            thoughts.length === 0
              ? React.createElement('p', { className: 'mtx-log-empty' }, t('think.empty'))
              : thoughts.map((thought) =>
                  React.createElement(
                    'div',
                    {
                      className: 'mtx-think-row',
                      key: thought.key,
                      'data-live': thought.live || undefined,
                    },
                    React.createElement(
                      'div',
                      { className: 'mtx-think-meta' },
                      React.createElement(
                        'span',
                        null,
                        't'
                          + (thought.turn === undefined ? '?' : String(thought.turn))
                          + '.s'
                          + (thought.step === undefined ? '?' : String(thought.step)),
                      ),
                      React.createElement('span', null, clockOf(thought.time)),
                    ),
                    React.createElement('div', { className: 'mtx-think-text' }, thought.text),
                  ),
                ),
          ),
        ),
        React.createElement(
          'div',
          { className: 'mtx-pane mtx-pane-work', role: 'log', 'aria-label': t('log.label') },
          paneHead({ title: t('log.title'), count: rows.length, live: workLive }),
          React.createElement(
            'div',
            { className: 'mtx-log-body', ref: work.scroller, onScroll: work.onScroll },
            rows.length === 0
              ? React.createElement('p', { className: 'mtx-log-empty' }, t('log.empty'))
              : rows.map((row) =>
                  React.createElement(
                    'div',
                    { className: 'mtx-log-row', key: row.key, 'data-state': row.state, 'data-error': row.state === 'error' || undefined },
                    React.createElement('span', { className: 'mtx-log-time' }, clockOf(row.time)),
                    React.createElement('span', { className: 'mtx-log-tag' }, row.tag),
                    React.createElement('span', { className: 'mtx-log-subject' }, row.subject),
                    React.createElement('span', { className: 'mtx-log-tail' }, row.tail),
                  ),
                ),
          ),
        ),
      );
    }

    /** The tab chip's own copy, re-read on every locale change. */
    function WorkLogTabTitle(props) {
      return React.createElement('span', null, props.t('tab.title'));
    }

    /**
     * The Start page's card glyph: a prompt caret and a block cursor, drawn on
     * `currentColor` so the card picks its own ink.
     * @param props - rendered size and class.
     * @returns the terminal glyph.
     */
    function TerminalGlyph(props) {
      const size = props !== null && typeof props === 'object' && typeof props.size === 'number' ? props.size : 16;
      return React.createElement(
        'svg',
        {
          viewBox: '0 0 16 16',
          width: size,
          height: size,
          fill: 'none',
          className: props === null || typeof props !== 'object' ? undefined : props.className,
          'aria-hidden': 'true',
        },
        React.createElement('path', {
          d: 'M2.5 4.5L6 8l-3.5 3.5',
          stroke: 'currentColor',
          strokeWidth: 1.6,
          strokeLinecap: 'square',
        }),
        React.createElement('rect', { x: 8, y: 10, width: 5.5, height: 1.8, fill: 'currentColor' }),
      );
    }

    /**
     * The Start page's glyph for the activity fields: a core with three spokes
     * and three fired nodes, on `currentColor`.
     * @param props - rendered size and class.
     * @returns the neuron glyph.
     */
    function PulseGlyph(props) {
      const size = props !== null && typeof props === 'object' && typeof props.size === 'number' ? props.size : 16;
      return React.createElement(
        'svg',
        {
          viewBox: '0 0 16 16',
          width: size,
          height: size,
          fill: 'none',
          className: props === null || typeof props !== 'object' ? undefined : props.className,
          'aria-hidden': 'true',
        },
        React.createElement('circle', { cx: 8, cy: 8, r: 2.2, fill: 'currentColor' }),
        React.createElement('path', {
          d: 'M8 2.6v2.2M8 11.2v2.2M3.2 8h2.2M10.6 8h2.2M4.9 4.9l1.5 1.5M9.6 9.6l1.5 1.5M11.1 4.9L9.6 6.4M6.4 9.6l-1.5 1.5',
          stroke: 'currentColor',
          strokeWidth: 1.1,
          strokeLinecap: 'square',
        }),
      );
    }

    /**
     * One field of the lattice: a static constellation whose current and nodes
     * animate only while that signal is live. Laid out on a 120-unit box.
     */
    const NEURAL = (() => {
      // The field box is wide and shallow (200x120). Rings are stretched on x so
      // the constellation fills the column instead of sitting in a square island.
      const CX = 100;
      const CY = 60;
      const STRETCH = 1.62;
      const FLATTEN = 0.92;
      const nodes = [];
      for (const ring of [
        { count: 7, radius: 26 },
        { count: 6, radius: 40 },
        { count: 5, radius: 54 },
      ]) {
        for (let index = 0; index < ring.count; index += 1) {
          const step = (Math.PI * 2 * index) / ring.count;
          const drift = (nodes.length % 2 === 0 ? 1 : -1) * 0.15;
          const seat = nodes.length;
          nodes.push({
            x: CX + Math.cos(step + drift) * ring.radius * STRETCH,
            y: CY + Math.sin(step + drift) * ring.radius * FLATTEN,
            r: seat % 3 === 0 ? 2.4 : 1.7,
            delay: (seat * 0.11) % 1.4,
            // Three drift paths on three clocks, desynchronised by a negative delay
            // so no two neighbours ever move together.
            drift: ['mtx-drift-a', 'mtx-drift-b', 'mtx-drift-c'][seat % 3],
            driftDuration: 7 + (seat % 4) * 2.5 + 's',
            driftDelay: '-' + ((seat * 1.7) % 11).toFixed(1) + 's',
          });
        }
      }
      const edges = nodes.map((node, index) => ({
        x1: CX,
        y1: CY,
        x2: node.x,
        y2: node.y,
        delay: (index * 0.13) % 1.2,
        dur: 1 + (index % 4) * 0.22,
      }));
      for (let index = 0; index < nodes.length; index += 3) {
        const next = nodes[(index + 1) % nodes.length];
        edges.push({
          x1: nodes[index].x,
          y1: nodes[index].y,
          x2: next.x,
          y2: next.y,
          delay: (index * 0.05) % 1,
          dur: 1.7,
        });
      }
      return { nodes, edges, cx: CX, cy: CY };
    })();

    /** How long a finished tool call keeps the working field lit, in ms. */
    const WORK_TRAIL_MS = 2500;

    /**
     * Whether each signal is live right now, and how much it has produced.
     * A tool call that settles in 40ms would otherwise never be seen, so the
     * working field holds its light for a short trail after the last finish.
     * @param snapshot - current Chat snapshot.
     * @param now - wall clock at this render, so the trail can expire.
     * @returns live flags, counts and the newest item behind each field.
     */
    function pulseOf(snapshot, now) {
      const thoughts = buildThinkingRows(snapshot);
      const rows = buildWorkRows(snapshot);
      const lastThought = thoughts.length === 0 ? undefined : thoughts[thoughts.length - 1];
      const lastRow = rows.length === 0 ? undefined : rows[rows.length - 1];
      const running = rows.filter((row) => row.state === 'running' || row.state === 'queued').length;
      // The newest item each field is working on, so the pane says what, not only that.
      const thinkDetail =
        lastThought === undefined
          ? ''
          : (lastThought.turn === undefined ? 't?' : 't' + String(lastThought.turn)) +
            '.' +
            (lastThought.step === undefined ? 's?' : 's' + String(lastThought.step));
      const workDetail =
        lastRow === undefined ? '' : clip(lastRow.tag + (lastRow.subject === '' ? '' : ' ' + lastRow.subject), 52);
      let lastFinish;
      for (const row of rows) {
        if (row.state !== 'ok' && row.state !== 'error') continue;
        if (typeof row.time !== 'number') continue;
        if (lastFinish === undefined || row.time > lastFinish) lastFinish = row.time;
      }
      const workRecent = lastFinish !== undefined && now - lastFinish < WORK_TRAIL_MS;
      return {
        thinkLive: lastThought !== undefined && lastThought.live === true,
        workLive: running > 0 || workRecent,
        workRecent,
        steps: thoughts.length,
        events: rows.length,
        thinkDetail,
        workDetail,
      };
    }

    /**
     * One activity field: head, lattice, and a one-line count.
     * @param props - tone, copy, live flag and foot text.
     * @returns the field.
     */
    function ActivityField(props) {
      const tone = props.tone;
      // Animate only while the field is on screen: the pane stays mounted when the
      // reader switches tabs, and a hidden lattice has no business drawing frames.
      const frame = React.useRef(null);
      const [onScreen, setOnScreen] = React.useState(true);
      React.useEffect(() => {
        const element = frame.current;
        if (element === null || typeof IntersectionObserver !== 'function') return undefined;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) setOnScreen(entry.isIntersecting);
          },
          { threshold: 0 },
        );
        observer.observe(element);
        return () => observer.disconnect();
      }, []);
      return React.createElement(
        'div',
        {
          className: 'mtx-pulse-field',
          ref: frame,
          'data-tone': tone,
          'data-animate': onScreen ? 'true' : undefined,
          'data-live': props.live ? 'true' : undefined,
          'aria-label': props.label + ': ' + (props.live ? props.liveLabel : props.idleLabel),
        },
        React.createElement(
          'div',
          { className: 'mtx-pulse-head' },
          React.createElement('span', { className: 'mtx-pulse-label' }, props.label),
          React.createElement('span', { className: 'mtx-pulse-state' }, props.live ? props.liveLabel : props.idleLabel),
          React.createElement('span', { className: 'mtx-pulse-count' }, props.count),
        ),
        React.createElement(
          'svg',
          { className: 'mtx-pulse-svg', viewBox: '0 0 200 120', preserveAspectRatio: 'xMidYMid meet', 'aria-hidden': 'true' },
          React.createElement(
            'g',
            null,
            NEURAL.edges.map((edge, index) =>
              React.createElement('line', {
                key: 'e' + String(index),
                x1: edge.x1,
                y1: edge.y1,
                x2: edge.x2,
                y2: edge.y2,
                style: { animationDelay: String(edge.delay) + 's', animationDuration: String(edge.dur) + 's' },
              }),
            ),
          ),
          React.createElement('circle', { className: 'mtx-pulse-halo', cx: NEURAL.cx, cy: NEURAL.cy, r: 10 }),
          React.createElement('circle', { className: 'mtx-pulse-core', cx: NEURAL.cx, cy: NEURAL.cy, r: 4 }),
          React.createElement(
            'g',
            { className: 'mtx-pulse-nodes' },
            NEURAL.nodes.map((node, index) =>
              React.createElement('circle', {
                key: 'n' + String(index),
                cx: node.x,
                cy: node.y,
                r: node.r,
                style: {
                  '--mtx-drift': node.drift,
                  '--mtx-drift-dur': node.driftDuration,
                  '--mtx-drift-delay': node.driftDelay,
                  '--mtx-flash-delay': String(node.delay) + 's',
                },
              }),
            ),
          ),
        ),
        React.createElement('div', { className: 'mtx-pulse-foot' }, props.detail),
      );
    }

    /**
     * The activity page: one live field for reasoning, one for tool work.
     * @param props - Chat standard props and copy.
     * @returns the two fields.
     */
    function PulseTab(props) {
      const snapshot = props.useChat((value) => value);
      const t = props.t;
      const [, pulseRender] = React.useState(0);
      const state = React.useMemo(() => pulseOf(snapshot, Date.now()), [snapshot]);
      // While a finished call is still glowing, tick so the trail can expire.
      React.useEffect(() => {
        if (!state.workRecent) return undefined;
        const timer = setInterval(() => pulseRender((count) => count + 1), 600);
        return () => clearInterval(timer);
      }, [state.workRecent]);
      const liveLabel = t('pulse.live');
      const idleLabel = t('pulse.idle');
      return React.createElement(
        'div',
        { className: 'mtx-pulse', role: 'group', 'aria-label': t('pulse.app') },
        React.createElement(ActivityField, {
          tone: 'think',
          label: t('pulse.think'),
          live: state.thinkLive,
          liveLabel,
          idleLabel,
          count: String(state.steps),
          detail: state.thinkDetail === '' ? t('pulse.steps') + ' ' + String(state.steps) : state.thinkDetail,
        }),
        React.createElement(ActivityField, {
          tone: 'work',
          label: t('pulse.work'),
          live: state.workLive,
          liveLabel,
          idleLabel,
          count: String(state.events),
          detail: state.workDetail === '' ? t('pulse.events') + ' ' + String(state.events) : state.workDetail,
        }),
      );
    }

    /** The pulse chip's own copy, re-read on every locale change. */
    function PulseTabTitle(props) {
      return React.createElement('span', null, props.t('pulse.title'));
    }

    /** One-decimal file size for a listing row. */
    function formatBytes(bytes) {
      if (!Number.isFinite(bytes) || bytes <= 0) return '';
      const megabytes = bytes / (1024 * 1024);
      if (megabytes >= 1) return megabytes.toFixed(1) + 'M';
      return Math.max(1, Math.round(bytes / 1024)) + 'K';
    }

    /** mm:ss for a transport readout. */
    function trackClock(seconds) {
      if (!Number.isFinite(seconds) || seconds <= 0) return '0:00';
      const whole = Math.floor(seconds);
      const minutes = Math.floor(whole / 60);
      const rest = whole % 60;
      return String(minutes) + ':' + (rest < 10 ? '0' : '') + String(rest);
    }

    /**
     * The sound page: one dropped or chosen audio file, a transport, and a
     * cava-style spectrum over it. The bars live on a canvas because they change
     * every frame; sixty DOM nodes per second would be the expensive way to draw
     * the same picture. Analysis needs a same-document source, so a blob from a
     * dropped file is the only input this page accepts.
     */
    function SoundTab(props) {
      const t = props.t;
      const shell = React.useRef(null);
      const audio = React.useRef(null);
      const canvas = React.useRef(null);
      const fileInput = React.useRef(null);
      const graph = React.useRef(null);
      const screenRef = React.useRef(true);
      const [name, setName] = React.useState('');
      const [playing, setPlaying] = React.useState(false);
      const [time, setTime] = React.useState(0);
      const [duration, setDuration] = React.useState(0);
      const [volume, setVolume] = React.useState(0.8);
      const [over, setOver] = React.useState(false);
      const [tracks, setTracks] = React.useState([]);
      const [active, setActive] = React.useState(-1);
      const [library, setLibrary] = React.useState('loading');
      const [libraryRoot, setLibraryRoot] = React.useState('');
      // Handlers registered once need the current list, index and player.
      const live = React.useRef({ tracks: [], active: -1, play: () => {} });

      // Draw only while on screen; the audio keeps playing either way.
      React.useEffect(() => {
        const element = shell.current;
        if (element === null || typeof IntersectionObserver !== 'function') return undefined;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) screenRef.current = entry.isIntersecting;
          },
          { threshold: 0 },
        );
        observer.observe(element);
        return () => observer.disconnect();
      }, []);

      React.useEffect(() => {
        const element = audio.current;
        if (element === null) return undefined;
        const onTime = () => setTime(element.currentTime);
        const onMeta = () => setDuration(Number.isFinite(element.duration) ? element.duration : 0);
        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        const onEnded = () => {
          setPlaying(false);
          const current = live.current;
          if (current.tracks.length > 1 && current.active >= 0) current.play((current.active + 1) % current.tracks.length);
        };
        element.volume = volume;
        element.addEventListener('timeupdate', onTime);
        element.addEventListener('loadedmetadata', onMeta);
        element.addEventListener('durationchange', onMeta);
        element.addEventListener('play', onPlay);
        element.addEventListener('pause', onPause);
        element.addEventListener('ended', onEnded);
        return () => {
          element.removeEventListener('timeupdate', onTime);
          element.removeEventListener('loadedmetadata', onMeta);
          element.removeEventListener('durationchange', onMeta);
          element.removeEventListener('play', onPlay);
          element.removeEventListener('pause', onPause);
          element.removeEventListener('ended', onEnded);
        };
      }, []);

      React.useEffect(() => {
        const element = audio.current;
        if (element !== null) element.volume = volume;
      }, [volume]);

      const readLibrary = React.useCallback(async (force) => {
        try {
          const response = await fetch(LIBRARY_ROUTE + (force ? '?refresh=1' : ''), {
            headers: { accept: 'application/json' },
          });
          if (!response.ok) {
            setLibrary('absent');
            return;
          }
          const body = await response.json();
          if (body === null || typeof body !== 'object') {
            setLibrary('absent');
            return;
          }
          setLibraryRoot(typeof body.root === 'string' ? body.root : '');
          if (body.ok !== true) {
            setLibrary('missing');
            setTracks([]);
            return;
          }
          const listing = Array.isArray(body.tracks) ? body.tracks.filter((item) => item !== null && typeof item === 'object' && typeof item.name === 'string') : [];
          setTracks(listing);
          setLibrary(listing.length === 0 ? 'empty' : 'ok');
        } catch {
          // No companion installed: the pane stays a drop target.
          setLibrary('absent');
        }
      }, []);

      React.useEffect(() => {
        readLibrary(false);
      }, [readLibrary]);

      /**
       * Play one library track through the same element the spectrum reads.
       * @param index - position in the library listing.
       */
      const playTrack = (index) => {
        const element = audio.current;
        const track = tracks[index];
        if (element === null || track === undefined) return;
        const node = graphOf();
        if (node !== null && node.context.state === 'suspended') {
          node.context.resume().catch(() => {});
        }
        element.src = LIBRARY_TRACK_ROUTE + '?name=' + encodeURIComponent(track.name);
        element.load();
        setName(track.name.replace(/\.[^.]+$/, ''));
        setTime(0);
        setDuration(0);
        setActive(index);
        element.play().catch(() => {});
      };

      live.current = { tracks, active, play: playTrack };

      // The analyzer: one AudioContext per pane, created on the first play so the
      // browser's autoplay rule is satisfied by the click itself.
      const graphOf = () => {
        const element = audio.current;
        if (element === null) return null;
        if (graph.current !== null) return graph.current;
        const Ctor = window.AudioContext ?? window.webkitAudioContext;
        if (Ctor === undefined) return null;
        try {
          const context = new Ctor();
          const source = context.createMediaElementSource(element);
          const analyser = context.createAnalyser();
          analyser.fftSize = 1024;
          analyser.smoothingTimeConstant = 0.82;
          source.connect(analyser);
          analyser.connect(context.destination);
          graph.current = { context, analyser, bins: new Uint8Array(analyser.frequencyBinCount) };
          return graph.current;
        } catch {
          return null;
        }
      };

      React.useEffect(() => {
        const tag = canvas.current;
        if (tag === null) return undefined;
        const style = getComputedStyle(tag);
        const ink = style.getPropertyValue('--dsw-alias-brand-primary').trim() || '#00ff41';
        const inkSoft = style.getPropertyValue('--dsw-alias-state-success-primary').trim() || '#38ff8f';
        const peaks = [];
        let frame = 0;
        const draw = () => {
          frame = window.requestAnimationFrame(draw);
          if (!screenRef.current) return;
          const width = tag.clientWidth;
          const height = tag.clientHeight;
          if (width === 0 || height === 0) return;
          const ratio = Math.min(window.devicePixelRatio || 1, 2);
          if (tag.width !== Math.round(width * ratio) || tag.height !== Math.round(height * ratio)) {
            tag.width = Math.round(width * ratio);
            tag.height = Math.round(height * ratio);
          }
          const painter = tag.getContext('2d');
          if (painter === null) return;
          painter.setTransform(ratio, 0, 0, ratio, 0, 0);
          painter.clearRect(0, 0, width, height);
          const count = Math.max(20, Math.min(56, Math.floor(width / 14)));
          const gap = 2;
          const barWidth = Math.max(1, (width - gap * (count - 1)) / count);
          const span = height - 8;
          const node = graph.current;
          const levels = new Array(count).fill(0);
          if (node !== null) {
            node.analyser.getByteFrequencyData(node.bins);
            const bins = node.bins.length;
            for (let index = 0; index < count; index += 1) {
              // Logarithmic bands: an analyzer that treats octaves evenly leaves the
              // low half empty and the top half a wall.
              const low = Math.floor(Math.pow(bins, index / count));
              const high = Math.max(low + 1, Math.floor(Math.pow(bins, (index + 1) / count)));
              let top = 0;
              for (let bin = low; bin < high && bin < bins; bin += 1) top = Math.max(top, node.bins[bin]);
              levels[index] = top / 255;
            }
          }
          for (let index = 0; index < count; index += 1) {
            const level = levels[index];
            const x = index * (barWidth + gap);
            const barHeight = Math.max(1, level * span);
            const peak = Math.max(level, (peaks[index] ?? level) - 0.012);
            peaks[index] = peak;
            // A floor under every bar, so silence still reads as an analyzer.
            painter.fillStyle = ink;
            painter.globalAlpha = 0.12;
            painter.fillRect(x, height - 2, barWidth, 2);
            painter.fillStyle = index % 4 === 0 ? inkSoft : ink;
            painter.globalAlpha = 0.32 + level * 0.62;
            painter.fillRect(x, height - barHeight, barWidth, barHeight);
            if (peak > 0.03) {
              painter.globalAlpha = 0.85;
              painter.fillRect(x, height - Math.max(2, peak * span) - 2, barWidth, 1);
            }
          }
          painter.globalAlpha = 0.2;
          painter.fillStyle = ink;
          painter.fillRect(0, height - 1, width, 1);
          painter.globalAlpha = 1;
        };
        draw();
        return () => window.cancelAnimationFrame(frame);
      }, []);

      const load = (file) => {
        if (file === null || file === undefined) return;
        const element = audio.current;
        if (element === null) return;
        if (typeof element.src === 'string' && element.src.startsWith('blob:')) URL.revokeObjectURL(element.src);
        element.src = URL.createObjectURL(file);
        element.load();
        setName(file.name.replace(/\.[^.]+$/, ''));
        setTime(0);
        setDuration(0);
        setActive(-1);
      };

      const toggle = async () => {
        const element = audio.current;
        if (element === null || element.src === '') return;
        const node = graphOf();
        if (node !== null && node.context.state === 'suspended') {
          try {
            await node.context.resume();
          } catch {
            // A refused resume leaves the transport where it was.
          }
        }
        try {
          if (element.paused) await element.play();
          else element.pause();
        } catch {
          // Playback refused by the browser; the button stays a play button.
        }
      };

      return React.createElement(
        'div',
        {
          className: 'mtx-sound',
          ref: shell,
          onDragOver: (event) => {
            event.preventDefault();
            setOver(true);
          },
          onDragLeave: () => setOver(false),
          onDrop: (event) => {
            event.preventDefault();
            setOver(false);
            const files = event.dataTransfer === null ? undefined : event.dataTransfer.files;
            load(files === undefined ? undefined : files[0]);
          },
        },
        React.createElement(
          'div',
          { className: 'mtx-sound-head' },
          React.createElement('span', null, t('sound.title')),
          library === 'absent' || library === 'loading'
            ? null
            : React.createElement(
                'button',
                {
                  className: 'mtx-sound-refresh',
                  type: 'button',
                  title: t('sound.refresh'),
                  'aria-label': t('sound.refresh'),
                  onClick: () => readLibrary(true),
                },
                '\u21bb',
              ),
          React.createElement('span', { className: 'mtx-sound-name' }, name === '' ? t('sound.empty') : name),
        ),
        React.createElement('canvas', {
          className: 'mtx-sound-canvas',
          ref: canvas,
          role: 'img',
          'aria-label': t('sound.visual'),
        }),
        tracks.length === 0
          ? null
          : React.createElement(
              'div',
              { className: 'mtx-sound-list', role: 'list' },
              tracks.map((track, index) =>
                React.createElement(
                  'button',
                  {
                    key: track.name,
                    type: 'button',
                    role: 'listitem',
                    className: 'mtx-sound-track',
                    'data-active': index === active ? 'true' : undefined,
                    onClick: () => playTrack(index),
                    title: track.name,
                  },
                  React.createElement('span', { className: 'mtx-sound-track-name' }, track.name.replace(/\.[^.]+$/, '')),
                  React.createElement('span', { className: 'mtx-sound-track-size' }, formatBytes(track.size)),
                ),
              ),
            ),
        library === 'missing' || library === 'empty'
          ? React.createElement(
              'div',
              { className: 'mtx-sound-note' },
              library === 'missing' ? t('sound.library.missing') + ' ' + libraryRoot : t('sound.library.empty'),
            )
          : null,
        React.createElement(
          'div',
          { className: 'mtx-sound-drop', 'data-over': over ? 'true' : undefined, 'data-hidden': tracks.length > 0 ? 'true' : undefined },
          React.createElement('span', null, t('sound.drop')),
          React.createElement(
            'button',
            { className: 'mtx-sound-btn', type: 'button', onClick: () => fileInput.current?.click() },
            t('sound.choose'),
          ),
          React.createElement('input', {
            ref: fileInput,
            type: 'file',
            accept: 'audio/*',
            style: { display: 'none' },
            onChange: (event) => {
              const files = event.target.files;
              load(files === null ? undefined : files[0]);
              event.target.value = '';
            },
          }),
        ),
        React.createElement(
          'div',
          { className: 'mtx-sound-row' },
          React.createElement(
            'button',
            {
              className: 'mtx-sound-btn',
              type: 'button',
              disabled: name === '',
              onClick: toggle,
              'aria-label': playing ? t('sound.pause') : t('sound.play'),
            },
            playing ? '\u2016\u2016' : '\u25b6',
          ),
          React.createElement('span', { className: 'mtx-sound-time' }, trackClock(time)),
          React.createElement('input', {
            className: 'mtx-sound-seek',
            type: 'range',
            min: 0,
            max: 1,
            step: 0.001,
            value: duration > 0 ? Math.min(1, time / duration) : 0,
            disabled: duration <= 0,
            'aria-label': t('sound.title'),
            onChange: (event) => {
              const element = audio.current;
              if (element !== null && duration > 0) element.currentTime = Number(event.target.value) * duration;
            },
          }),
          React.createElement('span', { className: 'mtx-sound-time' }, trackClock(duration)),
          React.createElement('input', {
            className: 'mtx-sound-vol',
            type: 'range',
            min: 0,
            max: 1,
            step: 0.01,
            value: volume,
            'aria-label': t('sound.volume'),
            onChange: (event) => setVolume(Number(event.target.value)),
          }),
        ),
        React.createElement('audio', { ref: audio, preload: 'metadata' }),
      );
    }

    /** The sound chip's own copy, re-read on every locale change. */
    function SoundTabTitle(props) {
      return React.createElement('span', null, props.t('sound.title'));
    }

    /**
     * The sound page's Start-card glyph: four bars at uneven heights, on
     * `currentColor`.
     * @param props - rendered size and class.
     * @returns the spectrum glyph.
     */
    function SoundGlyph(props) {
      const size = props !== null && typeof props === 'object' && typeof props.size === 'number' ? props.size : 16;
      return React.createElement(
        'svg',
        {
          viewBox: '0 0 16 16',
          width: size,
          height: size,
          fill: 'none',
          className: props === null || typeof props !== 'object' ? undefined : props.className,
          'aria-hidden': 'true',
        },
        React.createElement('rect', { x: 2, y: 6, width: 1.8, height: 7, fill: 'currentColor' }),
        React.createElement('rect', { x: 5.8, y: 3, width: 1.8, height: 10, fill: 'currentColor' }),
        React.createElement('rect', { x: 9.6, y: 5, width: 1.8, height: 8, fill: 'currentColor' }),
        React.createElement('rect', { x: 13.4, y: 8, width: 1.4, height: 5, fill: 'currentColor' }),
      );
    }

    /** Built-in patterns. Each is plain Strudel code, shown in the editor and run as written. */
    const PATTERNS = [
      {
        name: 'Aurora Drift',
        code: `setcpm(52/4)

stack(
  note("<[c3,eb3,g3] [ab2,c3,eb3] [f2,ab2,c3] [g2,bb2,d3]>")
    .s("sawtooth")
    .attack(2).release(4)
    .lpf(sine.range(600, 1400).slow(16))
    .gain(0.22)
    .room(0.85),
  note("<c2 ab1 f1 g1>").s("sine").attack(1.5).release(3).gain(0.32),
  note("<c4 eb4 g4 bb4 f4 ab4 d4 g4>".fast(2))
    .s("triangle")
    .attack(0.01).decay(0.2).sustain(0)
    .delay(0.35).room(0.5)
    .gain(0.16)
)`,
      },
      {
        name: 'Cold Start',
        code: `setcpm(96/4)

stack(
  s("bd ~ bd ~").gain(0.9),
  s("~ ~ sd ~").gain(0.6).room(0.25),
  s("hh*8").gain(0.28).pan(sine.range(0.3, 0.7).fast(2)),
  note("<a2 a2 f2 g2>").s("sawtooth").lpf(520).gain(0.3),
  note("<a4 c5 e5 g5>".fast(4)).s("triangle").attack(0.005).release(0.15).gain(0.1).delay(0.3)
)`,
      },
      {
        name: 'Night City Run',
        code: `setcpm(128/4)

stack(
  s("bd*4").gain("1 0.85 0.9 0.85"),
  s("~ sd ~ sd").gain(0.8).room(0.3),
  s("hh*16").gain("1 0.45 0.7 0.45").pan(sine.range(0.35, 0.65)),
  note("<c2 c2 eb2 g1 c2 c2 bb1 g1>")
    .s("sawtooth")
    .lpf(sine.range(280, 1600).fast(4))
    .shape(0.35)
    .decay(0.18).sustain(0)
    .gain(0.45),
  note("<[c4,eb4,g4] [ab3,c4,eb4] [f3,ab3,c4] [g3,bb3,d4]>")
    .s("sawtooth")
    .attack(0.8).release(1.5)
    .lpf(900).gain(0.12)
    .room(0.7),
  note("<c5 eb5 g5 f5 eb5 d5 c5 bb4>")
    .struct("x ~ x x ~ x ~ x")
    .s("square")
    .decay(0.12).sustain(0)
    .delay(0.28).room(0.4)
    .gain(0.22)
)`,
      },
      {
        name: 'Hyperdrive',
        code: `setcpm(140/4)

stack(
  s("bd*4").gain(0.95),
  s("~ cp ~ cp").gain(0.55).room(0.2),
  s("hh*16").gain("1 0.3 0.6 0.3"),
  note("<c2 c2 c2 c2>").struct("~ x ~ x").s("sawtooth").lpf(420).gain(0.4),
  note("<c1 c1 ab1 g1>").s("sine").gain(0.22),
  note("<[c4,eb4,g4] [bb3,d4,f4] [ab3,c4,eb4] [g3,bb3,d4]>")
    .struct("x ~ ~ x ~ x ~ ~")
    .s("sawtooth").lpf(2400).attack(0.01).release(0.1).gain(0.16),
  note("<c5 eb5 g5 bb5 ab5 g5 eb5 c5>".fast(2))
    .s("square").lpf(3000).decay(0.08).sustain(0)
    .delay(0.22).room(0.45).gain(0.12)
)`,
      },
      {
        name: 'Hyperdrive Extended',
        code: `setcpm(140/4)

// A two-minute arc: 70 cycles at 140 BPM, then it loops back to the intro.
const kick  = s("bd*4").gain(0.95)
const clap  = s("~ cp ~ cp").gain(0.55).room(0.2)
const hats  = s("hh*16").gain("1 0.3 0.6 0.3")
const bass  = note("<c2 c2 c2 c2>").struct("~ x ~ x").s("sawtooth").lpf(420).gain(0.4)
const sub   = note("<c1 c1 ab1 g1>").s("sine").gain(0.22)
const stabs = note("<[c4,eb4,g4] [bb3,d4,f4] [ab3,c4,eb4] [g3,bb3,d4]>")
  .struct("x ~ ~ x ~ x ~ ~").s("sawtooth").lpf(2400).attack(0.01).release(0.1).gain(0.16)
const arp   = note("<c5 eb5 g5 bb5 ab5 g5 eb5 c5>".fast(2))
  .s("square").lpf(3000).decay(0.08).sustain(0).delay(0.22).room(0.45).gain(0.12)
const pad   = note("<[c4,eb4,g4] [ab3,c4,eb4] [f3,ab3,c4] [g3,bb3,d4]>")
  .s("sawtooth").attack(1).release(2).lpf(900).room(0.8).gain(0.1)
const roll  = s("sd*8").gain("0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9")

arrange(
  [10, stack(pad, arp)],
  [4, stack(pad, arp, kick)],
  [4, stack(pad, arp, kick, hats, roll)],
  [16, stack(kick, clap, hats, bass, sub, stabs, arp)],
  [8, stack(pad, stabs.slow(2), arp, sub)],
  [20, stack(kick, clap, hats, bass, sub, stabs, arp, pad)],
  [8, stack(pad, arp.slow(2))]
)`,
      },
      {
        name: 'Euclidean',
        code: `setcpm(72/4)

stack(
  s("bd(3,8)").gain(0.85),
  s("hh(5,16)").gain(0.26).pan(sine.range(0.2, 0.8)),
  note("c2 eb2 g2 bb2".euclid(5, 8)).s("sawtooth").lpf(700).gain(0.22),
  note("c5".euclid(3, 16)).s("triangle").attack(0.005).release(0.4).room(0.6).gain(0.1)
)`,
      },
    ];

    /** Where a saved pattern lives; the pane owns this key and nothing else touches it. */
    const PATTERN_STORE = 'dsh-matrix-terminal:patterns';
    /** Versioned engine build: a pinned URL, so an upstream release cannot change this pane. */
    const STRUDEL_URL = 'https://esm.sh/@strudel/web@1.3.0';

    /** Read the patterns this reader saved, dropping anything malformed. */
    function readSavedPatterns() {
      try {
        const raw = window.localStorage.getItem(PATTERN_STORE);
        if (raw === null) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((item) => item !== null && typeof item === 'object' && typeof item.name === 'string' && typeof item.code === 'string');
      } catch {
        return [];
      }
    }

    /** Write the saved patterns, silently doing nothing when storage refuses. */
    function writeSavedPatterns(list) {
      try {
        window.localStorage.setItem(PATTERN_STORE, JSON.stringify(list));
      } catch {
        // Private mode and quota failures leave the list in memory only.
      }
    }

    /**
     * The Strudel engine, loaded once per page and shared by every mount.
     *
     * Its output is diverted into an analyser by intercepting connections to a
     * destination node: the engine builds its own AudioContext and connects to
     * `context.destination` when it plays, so the only way to measure it without
     * reimplementing it is to stand in front of that connection. The interception
     * is scoped to the context that owns the destination, so the sound page's own
     * graph is untouched.
     */
    const strudelEngine = {
      module: null,
      pending: null,
      graphs: new Map(),
      patched: false,
      /** Load and initialise the engine, or return the one already running. */
      async load() {
        if (this.module !== null) return this.module;
        if (this.pending !== null) return this.pending;
        this.pending = (async () => {
          if (!this.patched) {
            this.patched = true;
            const graphs = this.graphs;
            const connect = AudioNode.prototype.connect;
            AudioNode.prototype.connect = function patchedConnect(target, ...rest) {
              if (target instanceof AudioDestinationNode) {
                const context = target.context;
                let graph = graphs.get(context);
                if (graph === undefined) {
                  try {
                    const analyser = context.createAnalyser();
                    analyser.fftSize = 1024;
                    analyser.smoothingTimeConstant = 0.82;
                    connect.call(analyser, target);
                    graph = { analyser, bins: new Uint8Array(analyser.frequencyBinCount) };
                  } catch {
                    graph = null;
                  }
                  graphs.set(context, graph);
                }
                if (graph !== undefined && graph !== null) {
                  connect.call(this, graph.analyser, ...rest);
                  return target;
                }
              }
              return connect.call(this, target, ...rest);
            };
          }
          const module = await import(STRUDEL_URL);
          // Strudel ships synths only; the drum banks are a sample map fetched
          // once, then each hit pulls its own wav. A failure here must not take
          // the engine with it: synths still play.
          // initStrudel returns the promise of its own prebake. Awaiting it is the
          // difference between drums on the first bar and drums a few seconds late:
          // evaluating against a half-initialised engine plays the synths and drops
          // every sample hit until the map arrives.
          await module.initStrudel({
            prebake: async () => {
              try {
                await module.samples('github:tidalcycles/dirt-samples');
              } catch {
                // Offline: every s("bd") is silent, the rest of the pattern is not.
              }
            },
          });
          this.module = module;
          return module;
        })();
        try {
          return await this.pending;
        } finally {
          this.pending = null;
        }
      },
      /** The first analyser the engine's output reached, if it has played anything. */
      analyser() {
        for (const graph of this.graphs.values()) {
          if (graph !== undefined && graph !== null) return graph;
        }
        return null;
      },
    };

    /**
     * The pattern page: a Strudel editor, a list of pieces, and the same cava bars
     * the sound page draws — here reading the engine's own output.
     */
    function PatternTab(props) {
      const t = props.t;
      const shell = React.useRef(null);
      const canvas = React.useRef(null);
      const screenRef = React.useRef(true);
      const [status, setStatus] = React.useState('idle');
      const [error, setError] = React.useState('');
      const [code, setCode] = React.useState(PATTERNS[0].code);
      const [label, setLabel] = React.useState(PATTERNS[0].name);
      const [saved, setSaved] = React.useState(readSavedPatterns);
      const [draftName, setDraftName] = React.useState('');
      const [activeName, setActiveName] = React.useState(PATTERNS[0].name);

      React.useEffect(() => {
        const element = shell.current;
        if (element === null || typeof IntersectionObserver !== 'function') return undefined;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) screenRef.current = entry.isIntersecting;
          },
          { threshold: 0 },
        );
        observer.observe(element);
        return () => observer.disconnect();
      }, []);

      // The bars: the same picture as the sound page, from whichever analyser the
      // engine reached. With no analyser yet it draws the floor and nothing else.
      React.useEffect(() => {
        const tag = canvas.current;
        if (tag === null) return undefined;
        const style = getComputedStyle(tag);
        const ink = style.getPropertyValue('--dsw-alias-brand-primary').trim() || '#00ff41';
        const inkSoft = style.getPropertyValue('--dsw-alias-state-success-primary').trim() || '#38ff8f';
        const peaks = [];
        let frame = 0;
        const draw = () => {
          frame = window.requestAnimationFrame(draw);
          if (!screenRef.current) return;
          const width = tag.clientWidth;
          const height = tag.clientHeight;
          if (width === 0 || height === 0) return;
          const ratio = Math.min(window.devicePixelRatio || 1, 2);
          if (tag.width !== Math.round(width * ratio) || tag.height !== Math.round(height * ratio)) {
            tag.width = Math.round(width * ratio);
            tag.height = Math.round(height * ratio);
          }
          const painter = tag.getContext('2d');
          if (painter === null) return;
          painter.setTransform(ratio, 0, 0, ratio, 0, 0);
          painter.clearRect(0, 0, width, height);
          const count = Math.max(20, Math.min(56, Math.floor(width / 14)));
          const gap = 2;
          const barWidth = Math.max(1, (width - gap * (count - 1)) / count);
          const span = height - 8;
          const graph = strudelEngine.analyser();
          const levels = new Array(count).fill(0);
          if (graph !== null) {
            graph.analyser.getByteFrequencyData(graph.bins);
            const bins = graph.bins.length;
            for (let index = 0; index < count; index += 1) {
              const low = Math.floor(Math.pow(bins, index / count));
              const high = Math.max(low + 1, Math.floor(Math.pow(bins, (index + 1) / count)));
              let top = 0;
              for (let bin = low; bin < high && bin < bins; bin += 1) top = Math.max(top, graph.bins[bin]);
              levels[index] = top / 255;
            }
          }
          for (let index = 0; index < count; index += 1) {
            const level = levels[index];
            const x = index * (barWidth + gap);
            const barHeight = Math.max(1, level * span);
            const peak = Math.max(level, (peaks[index] ?? level) - 0.012);
            peaks[index] = peak;
            painter.fillStyle = ink;
            painter.globalAlpha = 0.12;
            painter.fillRect(x, height - 2, barWidth, 2);
            painter.fillStyle = index % 4 === 0 ? inkSoft : ink;
            painter.globalAlpha = 0.32 + level * 0.62;
            painter.fillRect(x, height - barHeight, barWidth, barHeight);
            if (peak > 0.03) {
              painter.globalAlpha = 0.85;
              painter.fillRect(x, height - Math.max(2, peak * span) - 2, barWidth, 1);
            }
          }
          painter.globalAlpha = 0.2;
          painter.fillStyle = ink;
          painter.fillRect(0, height - 1, width, 1);
          painter.globalAlpha = 1;
        };
        draw();
        return () => window.cancelAnimationFrame(frame);
      }, []);

      const run = async () => {
        setStatus('loading');
        setError('');
        try {
          const module = await strudelEngine.load();
          module.evaluate(code);
          setStatus('playing');
          setActiveName(label);
        } catch (failure) {
          setStatus('error');
          setError(failure !== null && typeof failure === 'object' && typeof failure.message === 'string' ? failure.message : String(failure));
        }
      };

      const stop = () => {
        const module = strudelEngine.module;
        try {
          if (module !== null) module.hush();
        } catch {
          // A refused hush leaves the engine playing; the status still reads idle.
        }
        setStatus('idle');
      };

      const pick = (name, text) => {
        setLabel(name);
        setCode(text);
        setActiveName(name);
      };

      const saveDraft = () => {
        const name = draftName.trim() === '' ? label + ' (copy)' : draftName.trim();
        const next = [...saved.filter((item) => item.name !== name), { name, code }];
        setSaved(next);
        writeSavedPatterns(next);
        setLabel(name);
        setDraftName('');
      };

      const removeSaved = (name) => {
        const next = saved.filter((item) => item.name !== name);
        setSaved(next);
        writeSavedPatterns(next);
      };

      const statusText =
        status === 'loading'
          ? t('pattern.loading')
          : status === 'playing'
            ? t('pattern.playing')
            : status === 'error'
              ? t('pattern.error')
              : t('pattern.idle');

      return React.createElement(
        'div',
        { className: 'mtx-pattern', ref: shell },
        React.createElement(
          'div',
          { className: 'mtx-pattern-head' },
          React.createElement('span', null, t('pattern.title')),
          React.createElement('span', { className: 'mtx-pattern-state', 'data-state': status }, statusText),
          React.createElement('span', { className: 'mtx-pattern-name' }, activeName),
        ),
        React.createElement('canvas', { className: 'mtx-pattern-canvas', ref: canvas, role: 'img', 'aria-label': t('pattern.visual') }),
        React.createElement(
          'div',
          { className: 'mtx-pattern-list', role: 'list' },
          PATTERNS.map((item) =>
            React.createElement(
              'button',
              {
                key: 'builtin:' + item.name,
                type: 'button',
                role: 'listitem',
                className: 'mtx-pattern-item',
                'data-active': item.name === label ? 'true' : undefined,
                onClick: () => pick(item.name, item.code),
              },
              item.name,
              React.createElement('span', { className: 'mtx-pattern-tag' }, t('pattern.builtin')),
            ),
          ),
          saved.map((item) =>
            React.createElement(
              'div',
              { key: 'saved:' + item.name, className: 'mtx-pattern-row' },
              React.createElement(
                'button',
                {
                  type: 'button',
                  role: 'listitem',
                  className: 'mtx-pattern-item',
                  'data-active': item.name === label ? 'true' : undefined,
                  onClick: () => pick(item.name, item.code),
                },
                item.name,
                React.createElement('span', { className: 'mtx-pattern-tag' }, t('pattern.saved')),
              ),
              React.createElement(
                'button',
                {
                  type: 'button',
                  className: 'mtx-pattern-x',
                  title: t('pattern.delete'),
                  'aria-label': t('pattern.delete') + ' ' + item.name,
                  onClick: () => removeSaved(item.name),
                },
                '\u00d7',
              ),
            ),
          ),
        ),
        React.createElement('textarea', {
          className: 'mtx-pattern-code',
          value: code,
          spellCheck: false,
          'aria-label': t('pattern.code'),
          onChange: (event) => setCode(event.target.value),
        }),
        status === 'error' && error !== ''
          ? React.createElement('div', { className: 'mtx-pattern-error' }, error)
          : null,
        React.createElement(
          'div',
          { className: 'mtx-pattern-row' },
          React.createElement(
            'button',
            { type: 'button', className: 'mtx-sound-btn', onClick: run, disabled: status === 'loading' },
            t('pattern.run'),
          ),
          React.createElement('button', { type: 'button', className: 'mtx-sound-btn', onClick: stop }, t('pattern.stop')),
          React.createElement('input', {
            className: 'mtx-pattern-input',
            type: 'text',
            value: draftName,
            placeholder: t('pattern.saveAs'),
            'aria-label': t('pattern.saveAs'),
            onChange: (event) => setDraftName(event.target.value),
          }),
          React.createElement('button', { type: 'button', className: 'mtx-sound-btn', onClick: saveDraft }, t('pattern.save')),
        ),
        React.createElement('div', { className: 'mtx-pattern-note' }, t('pattern.engine')),
      );
    }

    /** The pattern chip's own copy, re-read on every locale change. */
    function PatternTabTitle(props) {
      return React.createElement('span', null, props.t('pattern.title'));
    }

    /**
     * The pattern page's Start-card glyph: a five-step staircase, on `currentColor`.
     * @param props - rendered size and class.
     * @returns the step glyph.
     */
    function PatternGlyph(props) {
      const size = props !== null && typeof props === 'object' && typeof props.size === 'number' ? props.size : 16;
      return React.createElement(
        'svg',
        {
          viewBox: '0 0 16 16',
          width: size,
          height: size,
          fill: 'none',
          className: props === null || typeof props !== 'object' ? undefined : props.className,
          'aria-hidden': 'true',
        },
        React.createElement('path', {
          d: 'M2 12h2V9h2V6h2V3h2v9h2',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          strokeLinecap: 'square',
          strokeLinejoin: 'miter',
        }),
      );
    }

    /**
     * Balance route served by the companion Host row
     * (`dsh-matrix-terminal-balance`); absent routes simply read as no balance.
     */
    const BALANCE_ROUTE = '/api/matrix-terminal.balance';

    /** Library listing and track routes served by the optional library companion. */
    const LIBRARY_ROUTE = '/api/matrix-terminal.library';
    const LIBRARY_TRACK_ROUTE = '/api/matrix-terminal.library/track';

    /**
     * Format one wallet the way the Platform's own web UI does: two decimals,
     * grouped thousands, a received balance under one cent shown as `<$0.01`.
     * Truncation is decimal, not floating point, so the cents never drift.
     */
    function formatMoney(amount, symbol) {
      const raw = String(amount).trim();
      const value = Number(raw);
      if (!Number.isFinite(value)) return symbol + raw;
      if (value === 0) return symbol + '0.00';
      const negative = value < 0;
      const magnitude = negative ? raw.replace(/^-/, '') : raw;
      if (negative && value > -0.01) return '-' + symbol + '0.01';
      if (!negative && value < 0.01) return '<' + symbol + '0.01';
      const parts = magnitude.split('.');
      const whole = parts[0] === '' ? '0' : parts[0];
      const fraction = (parts[1] === undefined ? '' : parts[1]) + '00';
      const grouped = whole.replace(/\B(?=(\d{3})+$)/g, ',');
      return (negative ? '-' : '') + symbol + grouped + '.' + fraction.slice(0, 2);
    }

    /**
     * The account balance the prompt line shows. One read per mount and per
     * window focus; an absent route, a signed-out key, or a failed read keeps
     * the last known amount and never invents one.
     */
    function createBalanceSeat() {
      const listeners = new Set();
      let state = { text: '' };
      let reading = false;

      const publish = (text) => {
        if (text === '' || text === state.text) return;
        state = { text };
        for (const listener of listeners) listener();
      };

      const read = async () => {
        if (reading) return;
        reading = true;
        try {
          const response = await fetch(BALANCE_ROUTE, { headers: { accept: 'application/json' } });
          if (!response.ok) return;
          const body = await response.json();
          if (body === null || typeof body !== 'object' || body.ok !== true) return;
          if (!Array.isArray(body.wallets)) return;
          const text = body.wallets
            .filter((wallet) => wallet !== null && typeof wallet === 'object' && typeof wallet.total === 'string')
            .map((wallet) => formatMoney(wallet.total, wallet.currency === 'CNY' ? '\u00a5' : '$'))
            .join(' + ');
          publish(text);
        } catch {
          // No route and no balance: the prompt line simply ends at the cursor.
        } finally {
          reading = false;
        }
      };

      return {
        read,
        get: () => state,
        subscribe(listener) {
          listeners.add(listener);
          return () => listeners.delete(listener);
        },
      };
    }

    /** The prompt line: host, path, session, cursor, and the account balance. */
    function PromptLine(props) {
      const ctx = props.ctx;
      const t = props.t;
      const balance = props.balance;
      const [, bump] = React.useState(0);
      React.useEffect(() => ctx.locale.subscribe(() => bump((n) => n + 1)), [ctx]);
      React.useEffect(() => balance.subscribe(() => bump((n) => n + 1)), [balance]);
      // Session ids arrive as `session-<uuid>`; the prompt wants the discriminator, not the word.
      const rawId = typeof props.sessionId === 'string' ? props.sessionId : '';
      const id = rawId === '' ? '' : rawId.replace(/^session-/, '').slice(0, 8);
      const amount = balance.get().text;
      const label =
        amount === ''
          ? t('prompt.label')
          : t('prompt.label') + ' \u00b7 ' + t('balance.label') + ' ' + amount;
      return React.createElement(
        'div',
        { className: 'mtx-prompt', role: 'note', 'aria-label': label },
        React.createElement('span', { className: 'mtx-prompt-host' }, 'harness@matrix'),
        React.createElement('span', { className: 'mtx-prompt-glyph' }, ':~$'),
        id === '' ? null : React.createElement('span', { className: 'mtx-prompt-id' }, ' ' + id),
        React.createElement('span', { className: 'mtx-prompt-cursor', 'aria-hidden': 'true' }, ' \u2588'),
        amount === ''
          ? null
          : React.createElement('span', { className: 'mtx-prompt-balance' }, amount),
      );
    }

    return {
      inject: ['slots', 'theme', 'locale'],
      apply(ctx) {
        const t = ctx.locale.bind(NS);
        ctx.effect(() => ctx.locale.register(NS, 'en', en), 'matrix-terminal: en dictionary');
        ctx.effect(() => ctx.locale.register(NS, 'zh', zh), 'matrix-terminal: zh dictionary');

        // Palette, geometry and type as a token layer over the active theme.
        ctx.effect(
          () => ctx.theme.overrideTokens('dsh-matrix-terminal', TOKENS),
          'matrix-terminal: token layer',
        );

        // Glass, beam and prompt-line rules that tokens cannot express.
        ctx.effect(() => {
          const tag = document.createElement('style');
          tag.dataset.plugin = 'dsh-matrix-terminal';
          tag.textContent = CSS;
          document.head.appendChild(tag);
          return () => tag.remove();
        }, 'matrix-terminal: stylesheet');

        // Account balance for the prompt line. The route comes from the
        // companion Host row; without it the line ends at the cursor.
        const balance = createBalanceSeat();
        balance.read();
        ctx.effect(() => {
          let last = 0;
          const onVisible = () => {
            if (document.visibilityState === 'hidden') return;
            const now = Date.now();
            if (now - last < 20000) return;
            last = now;
            balance.read();
          };
          window.addEventListener('focus', onVisible);
          document.addEventListener('visibilitychange', onVisible);
          return () => {
            window.removeEventListener('focus', onVisible);
            document.removeEventListener('visibilitychange', onVisible);
          };
        }, 'matrix-terminal: balance refresh');

        ctx.effect(
          () =>
            ctx.slots.inject('conversation.composer.dock', () =>
              ctx.slots.register(
                {
                  name: 'conversation.composer.dock',
                  id: 'matrix-terminal-prompt',
                  order: 5,
                },
                (props) => React.createElement(PromptLine, { ...props, ctx, t, balance }),
              ),
            ),
          'matrix-terminal: prompt line',
        );

        // The right column's two pages: the work log, which prints the rows the
        // chat no longer shows, and the activity fields, which say what is running
        // right now. Both are optional, so a composition without the Right Sidebar
        // keeps the skin and loses only these pages.
        ctx.effect(
          () =>
            ctx.inject(['slots', 'sidebarRightTabs', 'sidebarRight'], (scope) => {
              // One shape for both pages: a type with a Start-page card, a body,
              // and a chip title. The log also reveals itself once per Session.
              const panes = [
                {
                  id: LOG_ID,
                  kind: LOG_KIND,
                  label: 'work log',
                  titleKey: 'tab.title',
                  card: { id: 'work-log', order: 40, descriptionKey: 'guide.description', icon: TerminalGlyph },
                  body: WorkLogTab,
                  chip: WorkLogTabTitle,
                },
                {
                  id: PULSE_ID,
                  kind: PULSE_KIND,
                  label: 'activity fields',
                  titleKey: 'pulse.title',
                  card: { id: 'pulse', order: 41, descriptionKey: 'pulse.guide.description', icon: PulseGlyph },
                  body: PulseTab,
                  chip: PulseTabTitle,
                },
                {
                  id: SOUND_ID,
                  kind: SOUND_KIND,
                  label: 'sound',
                  titleKey: 'sound.title',
                  card: { id: 'sound', order: 42, descriptionKey: 'sound.guide.description', icon: SoundGlyph },
                  body: SoundTab,
                  chip: SoundTabTitle,
                },
                {
                  id: PATTERN_ID,
                  kind: PATTERN_KIND,
                  label: 'pattern',
                  titleKey: 'pattern.title',
                  card: { id: 'pattern', order: 43, descriptionKey: 'pattern.guide.description', icon: PatternGlyph },
                  body: PatternTab,
                  chip: PatternTabTitle,
                },
              ];
              for (const pane of panes) {
                scope.effect(
                  () =>
                    scope.sidebarRightTabs.register({
                      id: pane.id,
                      kind: pane.kind,
                      priority: 'extension',
                      keepMounted: true,
                      title: () => t(pane.titleKey),
                      // The Start page renders one card per contributed entry;
                      // picking a card opens that kind in the Start tab's place.
                      guide: [
                        {
                          id: pane.card.id,
                          order: pane.card.order,
                          title: () => t(pane.titleKey),
                          description: () => t(pane.card.descriptionKey),
                          icon: pane.card.icon,
                        },
                      ],
                    }),
                  'matrix-terminal: ' + pane.label + ' type',
                );

                scope.effect(
                  () =>
                    scope.slots.inject('sidebar.right.pane.tab', () =>
                      scope.slots.register(
                        { name: 'sidebar.right.pane.tab', key: pane.id, locale: NS },
                        pane.body,
                      ),
                    ),
                  'matrix-terminal: ' + pane.label + ' body',
                );

                scope.effect(
                  () =>
                    scope.slots.inject('sidebar.right.pane.tab.title', () =>
                      scope.slots.register(
                        { name: 'sidebar.right.pane.tab.title', key: pane.id, locale: NS },
                        pane.chip,
                      ),
                    ),
                  'matrix-terminal: ' + pane.label + ' title',
                );
              }

              // Open the log once per Session; a tab the reader closes stays closed
              // until they move to another Session.
              const opened = new Set();
              const mountedOf = (column) => {
                const source = column.mounted;
                if (source === undefined || source === null) return undefined;
                try {
                  const value = typeof source.getSnapshot === 'function' ? source.getSnapshot() : source.get();
                  return typeof value === 'string' ? value : undefined;
                } catch {
                  return undefined;
                }
              };
              /**
               * Open the log tab for the mounted Session. A Session's tab store
               * is minted a moment after the column mounts, so the first call can
               * throw or read as unadopted; report success so the caller can retry,
               * and remember the Session once the tab is really there.
               * @returns true when the tab exists or was opened.
               */
              const open = () => {
                const column = scope.sidebarRight;
                const sessionId = mountedOf(column);
                if (sessionId === undefined) return false;
                if (opened.has(sessionId)) return true;
                try {
                  const tabs = column.tabsIn(sessionId);
                  if (Array.isArray(tabs) && tabs.some((tab) => tab !== null && tab.kind === LOG_KIND)) {
                    opened.add(sessionId);
                    return true;
                  }
                  column.openTab(LOG_KIND);
                  opened.add(sessionId);
                  return true;
                } catch {
                  return false;
                }
              };
              scope.effect(() => {
                // Bounded retry: the store arrives within a few hundred ms, and a
                // Session that never adopts simply leaves the log closed.
                let timer;
                let tries = 0;
                const tick = () => {
                  if (open() || (tries += 1) >= 40) return;
                  timer = setTimeout(tick, 150);
                };
                timer = setTimeout(tick, 80);
                const source = scope.sidebarRight.mounted;
                const unsubscribe =
                  source !== undefined && typeof source.subscribe === 'function'
                    ? source.subscribe(() => {
                        if (!open()) tick();
                      })
                    : () => {};
                return () => {
                  clearTimeout(timer);
                  unsubscribe();
                };
              }, 'matrix-terminal: reveal work log');
            }),
          'matrix-terminal: right column pages',
        );
      },
    };
  },
});
