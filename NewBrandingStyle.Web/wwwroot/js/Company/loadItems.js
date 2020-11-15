document.addEventListener('DOMContentLoaded', () => loadItems())

const loadItems = async () => {
    const wrapper = document.querySelector('#itemsWrapper');
    const destinationTable = document.querySelector('#itemsWrapper table tbody');
    destinationTable.innerHTML = "";

    const response = await fetch('/api/CompanyAsync/GetItems', {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const resJson = await response.json();

    resJson.forEach(item => {
        const tr = document.createElement('tr');
        const id = document.createElement('td');
        id.innerHTML = item.id;
        const name = document.createElement('td');
        name.innerHTML = item.name;
        const desc = document.createElement('td');
        desc.innerHTML = item.description;
        const isVisible = document.createElement('td');
        isVisible.innerHTML = item.isVisible;

        tr.append(id, name, desc, isVisible);
        destinationTable.appendChild(tr);
    });

    if (resJson.length > 0) {
        wrapper.classList.remove('hidden');
    } else {
        wrapper.classList.add('hidden');
    }

}