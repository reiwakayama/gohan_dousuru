const tiles = document.querySelectorAll('.tile');
const selectedItemsInput = document.getElementById('selected_items');
const mainSelect = document.getElementById('main');
const sideSelect = document.getElementById('side');
const soupSelect = document.getElementById('soup');
const dateInput = document.getElementById('date');

const options = {
    main: {
        "ピーマン": ["ピーマン肉詰め", "ガパオライス", "ファヒータ"],
        "キャベツ": ["ロールキャベツ", "焼うどん", "焼きそば"],
        "玉ねぎ": ["親子丼"],
        "人参": ["カレーライス", "焼うどん", "焼きそば"],
        "セロリ": ["フェジョアーダ"],
        "レタス": ["タコス"],
    },
    side: {
        "ピーマン": [],
        "キャベツ": [],
        "玉ねぎ": ["玉ねぎ焼き", "牛皿", "肉豆腐"],
        "人参": ["きんぴらごぼう"],
        "セロリ": [],
        "レタス": ["レタスと韓国のりのサラダ"],
    },
    soup: {
        "ピーマン": [],
        "キャベツ": [],
        "玉ねぎ": [],
        "人参": [],
        "セロリ": ["ミネストローネ"],
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
    highlightSelectOptions(mainSelect, selectedValues, 'main');
    highlightSelectOptions(sideSelect, selectedValues, 'side');
    highlightSelectOptions(soupSelect, selectedValues, 'soup');
}

function highlightSelectOptions(selectElement, selectedValues, category) {
    Array.from(selectElement.options).forEach(option => {
        let shouldHighlight = false;
        
        selectedValues.forEach(selectedValue => {
            if (options[category][selectedValue]?.includes(option.value)) {
                shouldHighlight = true;
            }
        });

        option.style.backgroundColor = shouldHighlight ? '#e6ffe6' : '';
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
