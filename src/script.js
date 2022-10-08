const getBtn = document.querySelector('#button');
const getChecked = document.querySelector('#agreement');
const getForms = document.querySelector('#forms');

getBtn.disabled = true;
getBtn.style.opacity = '50%';

function sendInformation () {
    getBtn.addEventListener('click', function () {
        
        // while(getForms.childNodes.length > 0){
        //     getForms.removeChild(getForms.firstChild);
        // }
        getForms.innerHTML = '';
        getForms.style.textAlign = 'center';
        getForms.style.fontSize = '30px';
        getForms.innerText = 'Formulário enviado com sucesso!'
    })
}


getChecked.addEventListener('click', () => {
    if(getBtn.disabled === true){
        getBtn.disabled = false;
        getBtn.style.opacity = '100%';
    }else {
        getBtn.disabled = true;
        getBtn.style.opacity = '50%';
    }
})

sendInformation();