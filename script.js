document.addEventListener('DOMContentLoaded', () => {
    fetch('items.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const items = xmlDoc.getElementsByTagName('item');
            const itemList = document.getElementById('item-list');

            for (let i = 0; i < items.length; i++) {
                const li = document.createElement('li');
                li.textContent = items[i].textContent;
                itemList.appendChild(li);
            }
        })
        .catch(error => console.error('Error loading XML:', error));
});