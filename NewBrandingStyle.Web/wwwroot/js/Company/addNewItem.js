document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSendForm(e);
    })
})

const handleSendForm = async ({ target }) => {
    const name = target.querySelector('#Name').value;
    const description = target.querySelector('#Description').value;
    const isVisible = JSON.parse(target.querySelector('#IsVisible').checked);
    const alert = document.querySelector('#alert');

    const requestPayload = {
        Name: name,
        Description: description,
        IsVisible: isVisible
    };

    const response = await fetch('/api/CompanyAsync/AddNewItem', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload)
    });

    if (response.ok) {
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);

        target.reset();
        loadItems();
    }
}