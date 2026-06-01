:root {
    --bg-main: #0f172a;
    --card-bg: #1e293b;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --red: #ef4444;
    --orange: #f97316;
    --yellow: #eab308;
    --green: #22c55e;
    --border: #334155;
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    margin-bottom: 24px;
    border-bottom: 2px solid var(--border);
    padding-bottom: 16px;
}

header h1 { margin: 0 0 4px 0; font-size: 1.8rem; letter-spacing: 1px; }
header p { margin: 0; color: var(--text-muted); font-size: 0.95rem; }

.control-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card-bg);
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid var(--border);
}

.main-select {
    background: var(--bg-main);
    color: var(--text-main);
    border: 1px solid var(--border);
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.95rem;
}

.layout-btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
}

.layout-btn:hover { background: #2563eb; }

.workspace {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.workspace.flipped {
    direction: rtl;
}
.workspace.flipped > * {
    direction: ltr;
}

@media (max-width: 900px) {
    .workspace { grid-template-columns: 1fr; }
    .control-bar { flex-direction: column; gap: 12px; align-items: stretch; }
}

.card {
    background: var(--card-bg);
    border-radius: 8px;
    padding: 20px;
    border: 1px solid var(--border);
}

.card-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.card-header-flex h2 { font-size: 1.2rem; margin: 0; }

.sync-tag {
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 4px;
    background: #475569;
    font-weight: bold;
}

.state-active { background: #065f46; color: #34d399; }
.framework-badge { background: #1e3a8a; color: #93c5fd; }

/* TELEMETRY METRIC NODES */
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 12px;
    margin-bottom: 24px;
}

.metric-node {
    background: var(--bg-main);
    padding: 12px;
    border-radius: 6px;
    border: 1px solid var(--border);
}

.metric-node.highlight-alert {
    border-color: var(--orange);
}

.node-label { font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 4px; text-transform: uppercase; }
.node-value { font-size: 1.4rem; font-weight: bold; display: block; color: #fff; }
.node-sub { font-size: 0.7rem; color: var(--text-muted); display: block; margin-top: 4px; }

/* BAR CHART CORES */
.analytics-wrapper {
    background: var(--bg-main);
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 24px;
    border: 1px solid var(--border);
}

.synopsis-title { font-size: 0.95rem; margin: 0 0 14px 0; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;}

.chart-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
}

.chart-label { width: 95px; font-size: 0.8rem; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.chart-track { flex-grow: 1; background: #334155; height: 10px; border-radius: 4px; overflow: hidden; }
.chart-fill { height: 100%; border-radius: 4px; }
.chart-fill.level-danger { background: var(--orange); }
.chart-fill.level-warning { background: var(--yellow); }
.chart-val { font-size: 0.8rem; width: 45px; text-align: right; font-weight: bold; }

/* OVERRIDE FOR CHART ROWS */
.chart-row.hidden { display: none !important; }

/* RE-USED DOWNSTREAM MODULE PANELS */
.island-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.island-box { background: var(--bg-main); padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; }
.island-box h4 { margin: 0 0 6px 0; font-size: 0.85rem; }
.island-text { margin: 0; font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; }

.output-zone { display: flex; flex-direction: column; gap: 16px; }
.alert-banner { padding: 16px; border-radius: 6px; border-left: 5px solid transparent; background: #0f172a; }
.alert-banner.hidden { display: none !important; }

.color-red { border-left-color: var(--red); background: rgba(239, 68, 68, 0.08); }
.color-orange { border-left-color: var(--orange); background: rgba(249, 115, 22, 0.08); }
.color-yellow { border-left-color: var(--yellow); background: rgba(234, 179, 8, 0.08); }
.color-green { border-left-color: var(--green); background: rgba(34, 197, 94, 0.08); }

.banner-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 0.9rem; margin-bottom: 8px; }
.badge-pill { padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; text-transform: uppercase; background: rgba(255,255,255,0.15); }
.banner-body-text { font-size: 0.85rem; margin-bottom: 8px; line-height: 1.4; }
.meta-list { margin: 0; padding-left: 20px; font-size: 0.8rem; color: var(--text-muted); }
.meta-list li { margin-bottom: 4px; }

.target-box { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.05); }
.empty-notice { font-size: 0.75rem; color: var(--text-muted); font-style: italic; }
.province-badge { font-size: 0.75rem; background: #334155; padding: 2px 8px; border-radius: 4px; }
.province-badge.alert-high-risk { background: rgba(249, 115, 22, 0.25); color: #ffedd5; border: 1px solid rgba(249, 115, 22, 0.4); }
.province-badge.highlight-ncr { background: rgba(234, 179, 8, 0.25); color: #fef9c3; border: 1px solid rgba(234, 179, 8, 0.4); }
.province-badge.active-filter { outline: 2px solid #fff; outline-offset: 1px; }
