document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');
    const selectedItemsInput = document.getElementById('selected_items');
    const mainSelect = document.getElementById('main1');
    const sideSelect = document.getElementById('side1');
    const soupSelect = document.getElementById('soup1');
    const dateInput1 = document.getElementById('date1');
    const dateInput2 = document.getElementById('date2');
    const dateInput3 = document.getElementById('date3');

    const options = {
        main1: {
            'ピーマン': [/*PIMAN_MENUS_PLACEHOLDER*/],
            'キャベツ': [/*CABBAGE_MENUS_PLACEHOLDER*/],
            '玉ねぎ': [/*ONION_MENUS_PLACEHOLDER*/],
            '人参': [/*CARROT_MENUS_PLACEHOLDER*/],
            'セロリ': [/*CELERY_MENUS_PLACEHOLDER*/],
            'レタス': [/*LETTUCE_MENUS_PLACEHOLDER*/],
        },
        side1: {
            'ピーマン': [/*PIMAN_MENUS_PLACEHOLDER*/],
            'キャベツ': [/*CABBAGE_MENUS_PLACEHOLDER*/],
            '玉ねぎ': [/*ONION_MENUS_PLACEHOLDER*/],
            '人参': [/*CARROT_MENUS_PLACEHOLDER*/],
            'セロリ': [/*CELERY_MENUS_PLACEHOLDER*/],
            'レタス': [/*LETTUCE_MENUS_PLACEHOLDER*/],
        },
        soup1: {
            'ピーマン': [/*PIMAN_MENUS_PLACEHOLDER*/],
            'キャベツ': [/*CABBAGE_MENUS_PLACEHOLDER*/],
            '玉ねぎ': [/*ONION_MENUS_PLACEHOLDER*/],
            '人参': [/*CARROT_MENUS_PLACEHOLDER*/],
            'セロリ': [/*CELERY_MENUS_PLACEHOLDER*/],
            'レタス': [/*LETTUCE_MENUS_PLACEHOLDER*/],
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
        selectedValues.forEach(value => {
            highlightSelectOptions(mainSelect, options.main1[value]);
            highlightSelectOptions(sideSelect, options.side1[value]);
            highlightSelectOptions(soupSelect, options.soup1[value]);
        });
    }

    function highlightSelectOptions(selectElement, itemsToHighlight) {
        Array.from(selectElement.options).forEach(option => {
            if (itemsToHighlight && itemsToHighlight.includes(option.value)) {
                option.style.backgroundColor = '#ffe9ec';
            }
        });
    }

    function formatDate(date) {
        const options = { timeZone: 'Asia/Hong_Kong', year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-CA', options);
        const [year, month, day] = formatter.format(date).split('-');
        return `${year}-${month}-${day}`;
    }

    function setDefaultDates() {
        const today = new Date();
        dateInput1.value = formatDate(today);
        dateInput2.value = formatDate(new Date(today.getTime() + 24 * 60 * 60 * 1000));
        dateInput3.value = formatDate(new Date(today.getTime() + 48 * 60 * 60 * 1000));

        dateInput1.setAttribute('min', formatDate(today));
        dateInput2.setAttribute('min', formatDate(today));
        dateInput3.setAttribute('min', formatDate(today));

        const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dateInput1.setAttribute('max', formatDate(maxDate));
        dateInput2.setAttribute('max', formatDate(maxDate));
        dateInput3.setAttribute('max', formatDate(maxDate));
    }

    setDefaultDates();

    const selectElements = document.querySelectorAll('.dropdown');
    
    selectElements.forEach(selectElement => {
        selectElement.addEventListener('change', function() {
            const otherInput = this.nextElementSibling;
    
            if (this.value === 'その他') {
                otherInput.classList.remove('tw-hidden');
                otherInput.required = true;
            } else {
                otherInput.required = false;
                otherInput.value = '';
            }
        });
    });
});
