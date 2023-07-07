// FUNCIONES //

const menuItems = document.querySelectorAll('.menu');
menuItems.forEach(function(item) {
    item.addEventListener ('click' , function(e) {
        const currentItem = document.querySelector ('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    })

});