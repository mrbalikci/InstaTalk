const scriptURL_3 = 'https://script.google.com/macros/s/AKfycbxTx6vy5vUNfeLJNPPYOp64d4a6kWuRxxw6umbMNFxH1P2o2sQiyz6XYOGXIVmeHLb2/exec'

const form_3= document.forms['contact-form-3']

form_3.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL_3, { method: 'POST', body: new FormData(form_3) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})