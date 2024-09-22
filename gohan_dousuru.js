const tiles = document.querySelectorAll('.tile');
const selectedItemsInput = document.getElementById('selected_items');
const mainSelect = document.getElementById('main');
const sideSelect = document.getElementById('side'); 
const soupSelect = document.getElementById('soup'); 

const options = {
    "ピーマン": ["ピーマン肉詰め", "ガパオライス", "ファヒータ"],
    "キャベツ": ["ロールキャベツ", "焼うどん", "焼きそば"],
    "玉ねぎ": ["親子丼", "玉ねぎ焼き", "牛皿", "肉豆腐"],
    "人参": ["カレーライス", "焼うどん", "焼きそば", "きんぴらごぼう"],
    "セロリ": ["フェジョアーダ", "ミネストローネ"],
    "レタス": ["タコス", "レタスと韓国のりのサラダ"],
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
    mainSelect.innerHTML = '';
    sideSelect.innerHTML = '';
    soupSelect.innerHTML = '';

    Object.entries(options).forEach(([key, value]) => {
        value.forEach(option => {
            const mainOption = createOption(option, selectedValues.includes(key));
            const sideOption = createOption(option, selectedValues.includes(key));
            const soupOption = createOption(option, selectedValues.includes(key));

            mainSelect.appendChild(mainOption);
            sideSelect.appendChild(sideOption);
            soupSelect.appendChild(soupOption);
        });
    });
}

function createOption(optionText, highlight) {
    const option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;
    if (highlight) {
        option.classList.add('highlight');
    }
    return option;
}
