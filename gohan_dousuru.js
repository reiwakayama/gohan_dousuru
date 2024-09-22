const tiles = document.querySelectorAll('.tile');
const selectedItemsInput = document.getElementById('selected_items');

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
}
