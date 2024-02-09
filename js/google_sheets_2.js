const scriptURL_2 = 'https://script.google.com/macros/s/AKfycby1LN0BOehKYOg-kuOI15E_PYUmRraxSNN7VEbOuDRocDVJO6cfWCzrJ6CnCw9dQiyo3Q/exec'


const form_2 = document.forms['contact-form-2']

form_2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL_2, { method: 'POST', body: new FormData(form_2) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})