const button1 = document.querySelector('.btn-material1');
const button2 = document.querySelector('.btn-size2');
const button3 = document.querySelector('.btn-size3');

const buyButton = document.querySelector('.buy-button');
const cartButton = document.querySelector('.cart-button');

const price = document.querySelector('.total');

const errorLbl = document.querySelector('.error-label');

let material1 = false;
let size2 = false;
let size3 = false;

let buy = false;
let cart = false;

button1.addEventListener('click', () => {
    if(material1){
        button1.style.backgroundColor = '#3C3C3C';
        material1 = false;
    } else {
        button1.style.backgroundColor = '#6AC16A';
        material1 = true;
    }
    if ((material1 == true && size2 == true) || (material1 == true && size3 == true)) {
        buyButton.style.backgroundColor = '#6AC16A';
        cartButton.style.backgroundColor = '#3C3C3C';
        errorLbl.style.visibility = 'hidden';
        if (size2 == true){
            price.textContent = "Total: Rp 250.000";
        } else {
            price.textContent = "Total: Rp 270.000";
        }
    } else {
        buyButton.style.backgroundColor = '#D9D9D9';
        cartButton.style.backgroundColor = '#D9D9D9';
        errorLbl.textContent = "Please choose product material and product dimension first";
        errorLbl.style.color = 'red';
        errorLbl.style.marginLeft = '2.5vw';
        errorLbl.style.visibility = 'visible';
        price.textContent = "Total:-";
    }
});

button2.addEventListener('click', () => {
    if (size3 == true && size2 == false) {
        button3.style.backgroundColor = '#3C3C3C';
        size3 = false;
    }

    if(size2){
        button2.style.backgroundColor = '#3C3C3C';
        size2 = false;
    } else {
        button2.style.backgroundColor = '#6AC16A';
        size2 = true;
    }

    if ((material1 == true && size2 == true) || (material1 == true && size3 == true)) {
        buyButton.style.backgroundColor = '#6AC16A';
        cartButton.style.backgroundColor = '#3C3C3C';
        errorLbl.style.visibility = 'hidden';
        if (size2 == true){
            price.textContent = "Total: Rp 250.000";
        } else {
            price.textContent = "Total: Rp 270.000";
        }
    } else {
        buyButton.style.backgroundColor = '#D9D9D9';
        cartButton.style.backgroundColor = '#D9D9D9';
        errorLbl.textContent = "Please choose product material and product dimension first";
        errorLbl.style.color = 'red';
        errorLbl.style.marginLeft = '2.5vw';
        errorLbl.style.visibility = 'visible';
        price.textContent = "Total:-";
    }
});

button3.addEventListener('click', () => {
    if (size2 == true && size3 == false) {
        button2.style.backgroundColor = '#3C3C3C';
        size2 = false;
    }

    if(size3){
        button3.style.backgroundColor = '#3C3C3C';
        size3 = false;
    } else {
        button3.style.backgroundColor = '#6AC16A';
        size3 = true;
    }

    if ((material1 == true && size2 == true) || (material1 == true && size3 == true)) {
        buyButton.style.backgroundColor = '#6AC16A';
        cartButton.style.backgroundColor = '#3C3C3C';
        errorLbl.style.visibility = 'hidden';
        if (size2 == true){
            price.textContent = "Total: Rp 250.000";
        } else {
            price.textContent = "Total: Rp 270.000";
        }
    } else {
        buyButton.style.backgroundColor = '#D9D9D9';
        cartButton.style.backgroundColor = '#D9D9D9';
        errorLbl.textContent = "Please choose product material and product dimension first";
        errorLbl.style.color = 'red';
        errorLbl.style.marginLeft = '2.5vw';
        errorLbl.style.visibility = 'visible';
        price.textContent = "Total:-";
    }
});

cartButton.addEventListener('click', () => {
   if((material1 == true && size2 == true) || (material1 == true && size3 == true)) {
        errorLbl.textContent = "Success added to cart";
        errorLbl.style.color = '#6AC16A';
        errorLbl.style.visibility = 'visible';
        errorLbl.style.marginLeft = '12vw';
   }
});

