const scriptURL = 'https://script.google.com/macros/s/AKfycbyi0BSjjHvXlqWF8v56uhAZz9Ed3VQdPcsZX03iWGF1pGCCaXB0gEBv3T9NkxVtwcU3WA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})