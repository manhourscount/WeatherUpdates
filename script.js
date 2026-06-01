document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('provincialDropdown');
    const toggleLayoutBtn = document.getElementById('toggleLayoutBtn');
    const workspaceGrid = document.getElementById('workspaceGrid');
    const syncTracker = document.getElementById('syncTracker');
    const clearConditionCard = document.getElementById('clearConditionCard');
    const alertBanners = document.querySelectorAll('.alert-banner:not(#clearConditionCard)');

    // --- 1. Dropdown Target Filter Logic ---
    dropdown.addEventListener('change', function() {
        const selection = this.value;
        localStorage.setItem('activeWeatherProvince', selection);
        
        if (selection === 'ALL') {
            alertBanners.forEach(banner => banner.classList.remove('hidden'));
            clearConditionCard.classList.add('hidden');
            return;
        }

        let finalMatchFlag = false;

        alertBanners.forEach(banner => {
            const structuralSectors = banner.getAttribute('data-sector');
            if (structuralSectors && structuralSectors.toLowerCase().includes(selection.toLowerCase())) {
                banner.classList.remove('hidden');
                finalMatchFlag = true;
            } else {
                banner.classList.add('hidden');
            }
        });

        if (!finalMatchFlag) {
            clearConditionCard.classList.remove('hidden');
        } else {
            clearConditionCard.classList.add('hidden');
        }
    });

    // --- 2. Panel Axis Viewport Toggle Logic ---
    toggleLayoutBtn.addEventListener('click', () => {
        if (workspaceGrid.classList.contains('split-view')) {
            workspaceGrid.classList.remove('split-view');
            workspaceGrid.classList.add('reverse-view');
        } else {
            workspaceGrid.classList.remove('reverse-view');
            workspaceGrid.classList.add('split-view');
        }
    });

    // --- 3. Synchronized State Logger ---
    syncTracker.innerText = "🟢 Satellite Stream Online";

    // --- 4. Persistent App State Initializer ---
    const rememberedState = localStorage.getItem('activeWeatherProvince');
    if (rememberedState) {
        dropdown.value = rememberedState;
        dropdown.dispatchEvent(new Event('change'));
    }
});
