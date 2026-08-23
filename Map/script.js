const campusMap = document.getElementById('campusMap');

let zoomLevel = 1;


/* =========================================
   BLOCK → REPORT PAGE
   ========================================= */

document.querySelectorAll('.map-block').forEach((block) => {

    const openReportPage = () => {

        const blockName = block.dataset.block;

        if (!blockName) {
            console.error("Block name is missing.");
            return;
        }

        window.location.href =
            `../report.html?building=${encodeURIComponent(blockName)}`;
    };


    // Mouse click
    block.addEventListener('click', openReportPage);


    // Keyboard accessibility
    block.addEventListener('keydown', (event) => {

        if (event.key === 'Enter' || event.key === ' ') {

            event.preventDefault();

            openReportPage();
        }

    });

});


/* =========================================
   MAP ZOOM
   ========================================= */

function applyZoom() {

    if (!campusMap) return;

    campusMap.style.transform = `scale(${zoomLevel})`;
}


/* Zoom In */

const zoomIn = document.getElementById('zoomIn');

if (zoomIn) {

    zoomIn.addEventListener('click', () => {

        zoomLevel = Math.min(
            1.25,
            +(zoomLevel + 0.1).toFixed(2)
        );

        applyZoom();

    });

}


/* Zoom Out */

const zoomOut = document.getElementById('zoomOut');

if (zoomOut) {

    zoomOut.addEventListener('click', () => {

        zoomLevel = Math.max(
            0.9,
            +(zoomLevel - 0.1).toFixed(2)
        );

        applyZoom();

    });

}


/* Reset */

const resetView = document.getElementById('resetView');

if (resetView) {

    resetView.addEventListener('click', () => {

        zoomLevel = 1;

        applyZoom();

    });

}