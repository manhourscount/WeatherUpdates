/* --- Global Reset & Variables --- */
:root {
  --bg-color: #f4f7f6;
  --card-bg: #ffffff;
  --text-dark: #2c3e50;
  --text-muted: #7f8c8d;
  --red-alert: #e74c3c;
  --orange-alert: #e67e22;
  --yellow-alert: #f1c40f;
  --green-safe: #2ecc71;
  --border-radius: 8px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-dark);
  padding: 20px;
  line-height: 1.6;
}

/* --- Header --- */
header {
  text-align: center;
  margin-bottom: 25px;
}

header h1 {
  font-size: 2rem;
  color: #1a3a5f;
  margin-bottom: 5px;
}

header p {
  color: var(--text-muted);
  font-size: 1rem;
}

/* --- Control Bar --- */
.control-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--card-bg);
  padding: 15px 20px;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  margin-bottom: 20px;
  gap: 15px;
  flex-wrap: wrap;
}

.selector-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.main-select {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  outline: none;
}

.layout-btn {
  padding: 8px 16px;
  background-color: #1a3a5f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.layout-btn:hover {
  background-color: #2980b9;
}

/* --- Workspace Split View --- */
.workspace {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Modifier class to swap columns dynamically via JavaScript */
.workspace.swapped {
  direction: rtl;
}
.workspace.swapped .card {
  direction: ltr; /* Keeps text direction normal inside cards */
}

/* --- Cards --- */
.card {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f0f2f5;
  padding-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.card-header-flex h2 {
  font-size: 1.25rem;
  color: #1a3a5f;
}

.sync-tag {
  font-size: 0.8rem;
  padding: 4px 8px;
  background: #e8f0fe;
  color: #1a73e8;
  border-radius: 4px;
  font-weight: bold;
}

.framework-badge {
  background: #e1f5fe;
  color: #0288d1;
}

/* --- Satellite Map Container --- */
.satellite-image-container iframe {
  width: 100%;
  height: 450px;
  border: none;
  border-radius: var(--border-radius);
}

/* --- Regional Synopses --- */
.synopsis-wrapper .synopsis-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.island-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.island-box {
  background: #f8f9fa;
  padding: 15px;
  border-left: 4px solid #1a3a5f;
  border-radius: 4px;
}

.island-box h4 {
  margin-bottom: 5px;
  font-size: 1rem;
}

.island-text {
  font-size: 0.85rem;
  color: #555;
}

/* --- Alert Banners --- */
.output-zone {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.alert-banner {
  padding: 15px;
  border-radius: var(--border-radius);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.banner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.badge-pill {
  font-size: 0.75rem;
  padding: 3px 8px;
  background: rgba(255,255,255,0.3);
  border-radius: 12px;
  text-transform: uppercase;
}

.banner-body-text {
  font-size: 0.95rem;
}

.meta-list {
  padding-left: 20px;
  font-size: 0.85rem;
}

/* Color Variant Blocks */
.color-red { background-color: var(--red-alert); }
.color-orange { background-color: var(--orange-alert); }
.color-yellow { background-color: var(--yellow-alert); color: #333; }
.color-yellow .badge-pill { background: rgba(0,0,0,0.1); }
.color-green { background-color: var(--green-safe); }

/* Badges for active target provinces */
.target-box {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
}

.province-badge {
  font-size: 0.8rem;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  font-weight: 500;
}

.color-yellow .province-badge {
  background: rgba(0, 0, 0, 0.08);
}

.province-badge.highlight-ncr {
  border: 1px dashed #333;
  font-weight: bold;
}

/* Utility Hidden Class */
.hidden {
  display: none !important;
}

/* --- External Links --- */
.links-flex {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.ext-btn {
  flex: 1;
  text-align: center;
  padding: 10px;
  background: #f1f2f6;
  color: #1a3a5f;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  transition: background 0.2s;
}

.ext-btn:hover {
  background: #e4e7eb;
}

/* --- Responsive Layout Adjustments --- */
@media (max-width: 900px) {
  .workspace {
    grid-template-columns: 1fr;
  }
  .workspace.swapped {
    direction: ltr; /* Keeps order normal stacked vertically */
  }
}

@media (max-width: 600px) {
  .island-grid {
    grid-template-columns: 1fr;
  }
  .control-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .selector-group {
    flex-direction: column;
    align-items: stretch;
  }
}
