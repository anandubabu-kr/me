let images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
]
let currentImg = '/images/image-product-1.jpg';

let items=[]
function activateMenu() {
    let menu = document.getElementsByClassName('menu')[0]
    let closeButton = document.getElementsByClassName('close-button')[0]
    menu.classList.toggle('active')
    closeButton.classList.toggle('active')
}

function subtract() {
    let val = document.getElementById('count')
    let count = parseInt(val.value)
    if (count <= 1) return
    count -= 1
    val.value = count
}

function add() {
    let val = document.getElementById('count')
    let count = parseInt(val.value)
    if (count >= 10) return
    count += 1
    val.value = count
}

function activateCart() {
    let cartContainer = document.getElementsByClassName('cart-container')[0]
    cartContainer.classList.toggle('active')

}

function activeteLightBox() {
    let lightBox = document.getElementsByClassName('product__lightbox')[0];
    lightBox.classList.toggle('active')

}

function changeImg(sliderID, imgId) {
    currentImg = images[imgId - 1]
    document.getElementById(sliderID).src = currentImg
}

function imgNavigate(sliderId, action) {
    let slider = document.getElementById(sliderId);
    let imgId = parseInt(currentImg.match((/[0-9]/)))
    // let imgId=images.indexOf(currentImg)+1
    if (action == 'next') {
        if (imgId === images.length) {
            imgId = 1
        }
        currentImg = images[imgId - 1 + 1]
        console.log('url : ', currentImg, 'id now : ', imgId)
    }
    if (action == 'prev') {
        if (imgId === 1) {
            imgId = images.length
        }
        currentImg = images[imgId - 1 - 1]
        console.log('url : ', currentImg, 'id now : ', imgId)
    }
    // if()
    slider.src = currentImg
}

// console.log('/images/image-product-1.jpg'.match(/[0-9]/))