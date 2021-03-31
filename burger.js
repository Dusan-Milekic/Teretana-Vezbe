



const animacija = () => {
    const navigation = document.getElementById('nav');
    const burger = document.querySelector('.burger-menu');

    const burger1 = document.getElementById('burger1');
    const burger2 = document.getElementById('burger2');
    const burger3 = document.getElementById('burger3');


    function dole() {
        navigation.classList.toggle('nav-active');
        burger1.classList.toggle('burger1-active');
        burger2.classList.toggle('burger2-active');
        burger3.classList.toggle('burger3-active');
    }

    burger.addEventListener('click', dole);
}


animacija();