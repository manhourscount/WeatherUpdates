document.addEventListener("DOMContentLoaded", () => {
  const provincialDropdown = document.getElementById("provincialDropdown");
  const toggleLayoutBtn = document.getElementById("toggleLayoutBtn");
  const workspaceGrid = document.getElementById("workspaceGrid");
  const alertBanners = document.querySelectorAll(".output-zone .alert-banner");
  const clearConditionCard = document.getElementById("clearConditionCard");
  const syncTracker = document.getElementById("syncTracker");

  // Simulate passive satellite data syncing status feedback
  setTimeout(() => {
    if (syncTracker) {
      syncTracker.textContent = "● Live Loop Synced (Himawari-9)";
      syncTracker.style.background = "#e6f4ea";
      syncTracker.style.color = "#137333";
    }
  }, 2500);

  // 1. Swap Window Panels Layout Handler
  toggleLayoutBtn.addEventListener("click", () => {
    workspaceGrid.classList.toggle("swapped");
  });

  // 2. Dynamic PAGASA Framework Rainfall Sector Filter Tracker Logic
  provincialDropdown.addEventListener("change", (e) => {
    const selectedProvince = e.target.value;

    // View All Status Condition: Reset view and keep the green card hidden
    if (selectedProvince === "ALL") {
      alertBanners.forEach(banner => {
        if (banner.id === "clearConditionCard") {
          banner.classList.add("hidden");
        } else {
          banner.classList.remove("hidden");
        }
      });
      return;
    }

    let sectorMatched = false;

    alertBanners.forEach(banner => {
      // Exclude processing on the green card item during the data tracking loop
      if (banner.id === "clearConditionCard") return;

      const activeSectorsAttr = banner.getAttribute("data-sector") || "";
      
      // Split comma separated list items into pure comparable arrays
      const sectorsList = activeSectorsAttr.split(",").map(item => item.trim());

      if (sectorsList.includes(selectedProvince)) {
        banner.classList.remove("hidden");
        sectorMatched = true;
      } else {
        banner.classList.add("hidden");
      }
    });

    // 3. Fallback Trigger Rule: If no active hazards match, display the green status block
    if (!sectorMatched) {
      clearConditionCard.classList.remove("hidden");
    } else {
      clearConditionCard.classList.add("hidden");
    }
  });
});
