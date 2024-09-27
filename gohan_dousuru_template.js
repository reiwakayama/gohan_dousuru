const tiles = document.querySelectorAll('.tile');
const selectedItemsInput = document.getElementById('selected_items');
const mainSelect = document.getElementById('main');
const sideSelect = document.getElementById('side');
const soupSelect = document.getElementById('soup');
const dateInput = document.getElementById('date');

const options = {
    main: {
        "ピーマン": [],
        "キャベツ": [],
        "玉ねぎ": [],
        "人参": [],
        "セロリ": [],
        "レタス": [],
    },
    side: {
        "ピーマン": [],
        "キャベツ": [],
        "玉ねぎ": [],
        "人参": [],
        "セロリ": [],
        "レタス": [],
    },
    soup: {
        "ピーマン": [],
        "キャベツ": [],
        "玉ねぎ": [],
        "人参": [],
        "セロリ": [],
        "レタス": [],
    },
};

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tile.classList.toggle('selected');
        updateSelectedItems();
    });
});

function updateSelectedItems() {
    const selectedValues = Array.from(tiles)
        .filter(tile => tile.classList.contains('selected'))
        .map(tile => tile.getAttribute('data-value'));

    selectedItemsInput.value = selectedValues.join(',');
    highlightOptions(selectedValues);
}

function highlightOptions(selectedValues) {
    // Highlight only the relevant options
    selectedValues.forEach(value => {
        highlightSelectOptions(mainSelect, options.main[value]);
        highlightSelectOptions(sideSelect, options.side[value]);
        highlightSelectOptions(soupSelect, options.soup[value]);
    });
}

function highlightSelectOptions(selectElement, itemsToHighlight) {
    Array.from(selectElement.options).forEach(option => {
        if (itemsToHighlight && itemsToHighlight.includes(option.value)) {
            option.style.backgroundColor = '#e6ffe6'; // Highlight
        }
    });
}

function setDefaultDate() {
    const today = new Date();
    const options = { timeZone: 'Asia/Hong_Kong', year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-CA', options);
    const [year, month, day] = formatter.format(today).split('-');
    dateInput.value = `${year}-${month}-${day}`;
}

setDefaultDate();
