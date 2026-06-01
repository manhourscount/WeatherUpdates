/**
 * PHILIPPINE WEATHER BULLETIN - CENTRAL CONFIGURATION MODULE
 * Edit object properties directly below to cleanly add or map dynamic engine items.
 */
const WEATHER_DATA_REGISTRY = {
    telemetryMetrics: [
        { label: "Max Current Rate", value: "24.5 mm/h", sub: "Subic Bay Station (Zambales)", isAlert: true },
        { label: "Regional Average", value: "11.2 mm/h", sub: "Luzon Central Network", isAlert: false },
        { label: "Reporting Stations", value: "14 / 14", sub: "Active Core Grid", isAlert: false }
    ],
    topographyCharts: [
        { province: "Zambales", value: 68, percentage: 82, statusClass: "level-danger" },
        { province: "Bataan", value: 55, percentage: 74, statusClass: "level-danger" },
        { province: "Metro Manila", value: 32, percentage: 48, statusClass: "level-warning" },
        { province: "Pampanga", value: 24, percentage: 39, statusClass: "level-warning" }
    ],
    pagasaAlerts: [
        {
            id: "redAlert",
            colorClass: "color-red",
            title: "🔴 RED WARNING",
            pill: "Evacuate",
            body: "<strong>Torrential Rain (&gt;30mm/h):</strong> Severe, life-threatening floods are expected in low-lying communities.",
            meta: [
                "Initiate immediate forced evacuation procedures.",
                "Coordinate directly with your localized disaster units."
            ],
            sectors: [] // Keep empty array to simulate an alert with no sectors active
        },
        {
            id: "orangeAlert",
            colorClass: "color-orange",
            title: "🟠 ORANGE WARNING",
            pill: "Prepare",
            body: "<strong>Intense Rain (15-30mm/h):</strong> Continuous downpours threaten flooding across major waterways and valleys.",
            meta: [
                "Be on alert for sudden flash flooding anomalies.",
                "Prepare primary survival equipment and clear drainage pipelines."
            ],
            sectors: ["Zambales", "Bataan", "Cavite", "Batangas", "Occidental Mindoro"]
        },
        {
            id: "yellowAlert",
            colorClass: "color-yellow",
            title: "🟡 YELLOW WARNING",
            pill: "Monitor",
            body: "<strong>Heavy Rain (7.5-15mm/h):</strong> Sustained rains introduce low-elevation road flooding and pooling risks.",
            meta: [
                "Track weather models for NCR and outlying provinces closely.",
                "Expect low visibility and localized traffic stalls."
            ],
            sectors: ["Metro Manila", "Pangasinan", "Tarlac", "Pampanga", "Bulacan"]
        }
    ],
    clearConditionsFallback: {
        title: "🟢 NORMAL CONDITION STATUS",
        pill: "Clear Sector",
        body: "<strong>No Active Warnings:</strong> Atmospheric variables remain stable within safe operational parameters for this regional sector.",
        meta: [
            "Normal outdoor baseline workflows can proceed.",
            "Continue normal daily operations while observing routine local forecasts."
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Dom Elements
    const provincialDropdown = document.getElementById("provincialDropdown");
    const workspaceGrid = document.getElementById("workspaceGrid");
    const toggleLayoutBtn = document.getElementById("toggleLayoutBtn");
    
    const telemetryContainer = document.getElementById("telemetryMetricsContainer");
    const barChartContainer = document.getElementById("barChartContainer");
    const outputContainer = document.getElementById("outputContainer");

    // 1. INITIAL BUILD AND RENDER PHASE
    function initializeDashboard() {
        // Build Telemetry Nodes
        telemetryContainer.innerHTML = WEATHER_DATA_REGISTRY.telemetryMetrics.map(node => `
            <div class="metric-node ${node.isAlert ? 'highlight-alert' : ''}">
                <span class="node-label">${node.label}</span>
                <span class="node-value">${node.value}</span>
                <span class="node-sub">${node.sub}</span>
            </div>
        `).join('');

        // Build Cumulative Bar Charts
        barChartContainer.innerHTML = WEATHER_DATA_REGISTRY.topographyCharts.map(row => `
            <div class="chart-row" data-chart-province="${row.province}">
                <span class="chart-label">${row.province}</span>
                <div class="chart-track"><div class="chart-fill ${row.statusClass}" style="width: ${row.percentage}%;"></div></div>
                <span class="chart-val">${row.value}mm</span>
            </div>
        `).join('');

        // Build PAGASA Alerts UI
        let alertHTML = WEATHER_DATA_REGISTRY.pagasaAlerts.map(alert => {
            const hasSectors = alert.sectors.length > 0;
            const targetBoxContent = hasSectors 
                ? alert.sectors.map(prov => {
                    const extraClass = prov === "Metro Manila" ? "highlight-ncr" : (alert.colorClass === "color-orange" ? "alert-high-risk" : "");
                    return `<span class="province-badge ${extraClass}" data-province="${prov}">${prov === "Metro Manila" ? "Metro Manila (NCR)" : prov}</span>`;
                  }).join('')
                : `<div class="target-box empty-notice">No regions currently under ${alert.title.split(' ')[1]} status.</div>`;

            return `
                <div class="alert-banner ${alert.colorClass}" data-sectors="${alert.sectors.join(',')}">
                    <div class="banner-header">
                        <span>${alert.title}</span>
                        <span class="badge-pill">${alert.pill}</span>
                    </div>
                    <div class="banner-body-text">${alert.body}</div>
                    <ul class="meta-list">
                        ${alert.meta.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <div class="target-box">${targetBoxContent}</div>
                </div>
            `;
        }).join('');

        // Embed Dynamic Green Fallback Component
        const greenFallback = WEATHER_DATA_REGISTRY.clearConditionsFallback;
        alertHTML += `
            <div id="clearConditionCard" class="alert-banner color-green hidden">
                <div class="banner-header">
                    <span>${greenFallback.title}</span>
                    <span class="badge-pill">${greenFallback.pill}</span>
                </div>
                <div class="banner-body-text">${greenFallback.body}</div>
                <ul class="meta-list">
                    ${greenFallback.meta.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;

        outputContainer.innerHTML = alertHTML;
    }

    initializeDashboard();

    // Re-cache dynamic structural nodes following assembly phase
    const clearConditionCard = document.getElementById("clearConditionCard");
    const alertBanners = document.querySelectorAll(".alert-banner:not(#clearConditionCard)");
    const chartRows = document.querySelectorAll(".chart-row");

    // 2. DYNAMIC REGIONAL FILTERING ENGINE
    provincialDropdown.addEventListener("change", (e) => {
        const selectedProvince = e.target.value;
        let visibleAlertsCount = 0;

        // Clear active badge highlighting states
        document.querySelectorAll(".province-badge").forEach(badge => {
            badge.classList.remove("active-filter");
        });

        if (selectedProvince === "ALL") {
            // Restore visibility to standard structural elements
            alertBanners.forEach(banner => banner.classList.remove("hidden"));
            chartRows.forEach(row => row.classList.remove("hidden"));
            clearConditionCard.classList.add("hidden");
            return;
        }

        // Filter and Highlight Alerts
        alertBanners.forEach(banner => {
            const sectorsData = banner.getAttribute("data-sectors") || "";
            const sectorArray = sectorsData.split(",").filter(s => s.length > 0);

            if (sectorArray.includes(selectedProvince)) {
                banner.classList.remove("hidden");
                visibleAlertsCount++;

                const matchingBadge = banner.querySelector(`[data-province="${selectedProvince}"]`);
                if (matchingBadge) {
                    matchingBadge.classList.add("active-filter");
                }
            } else {
                banner.classList.add("hidden");
            }
        });

        // Filter 3-Hour Cumulative Volume Chart metrics dynamically
        chartRows.forEach(row => {
            const chartProvince = row.getAttribute("data-chart-province");
            if (chartProvince === selectedProvince) {
                row.classList.remove("hidden");
            } else {
                row.classList.add("hidden");
            }
        });

        // Toggle clean environment fallback state card
        if (visibleAlertsCount === 0) {
            clearConditionCard.classList.remove("hidden");
        } else {
            clearConditionCard.classList.add("hidden");
        }
    });

    // 3. VIEWPORT WINDOW PANEL FLIPPER ACTION
    toggleLayoutBtn.addEventListener("click", () => {
        workspaceGrid.classList.toggle("flipped");
    });
});
