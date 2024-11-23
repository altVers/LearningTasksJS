const catElBig = document.querySelector('.cat--big');
const catElImg = document.querySelectorAll('.cat__image');
const catElImgBig = document.querySelector('.cat__image--big');

catElImg.forEach(element => {
    element.addEventListener('click', function () {
        let imgSrcAtribute = element.getAttribute('src')
        console.log(imgSrcAtribute);
        catElImgBig.setAttribute('src', imgSrcAtribute)
        catElBig.classList.add('active')
    }); 
});
