function defaultValues() {
    const commission = document.getElementById('commission');
    const currency = document.getElementById('currency');
    commission.style.display = 'none';
    currency.style.display = 'flex';
}

function passTable(id) {
    if ( id == 'currency'){
        currency.style.display = 'none';
        commission.style.display = 'flex';
    }else if (id == 'commission') {
        commission.style.display = 'none';
        currency.style.display = 'flex';
    }
}