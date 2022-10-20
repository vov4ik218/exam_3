
$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger,.nav').toggleClass('active');
        $('.burger span').toggleClass('hide');
        $('.burger::before').toggleClass('rotate');
    })
})

//--------------------------MOVE-BLOCK-------------------------------------//

// const iconsStatic = document.querySelector('#icons-off');
// const iconsInNav = document.querySelector('#list');

// function moveBlockIcons() {
//     iconsInNav.after(iconsStatic);
//     iconsStatic.style.paddingTop = '15px';
// }
// function disableMoveBlockIcons() {
//     iconsInNav.after();
//     iconsStatic.style.paddingTop = '0';
// }
// if (window.screen.availWidth <= 768) {
//     moveBlockIcons();
// }
// else disableMoveBlockIcons();

//---------------SCROLL----------------------//---------------------

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

let links = document.querySelectorAll('.list__link');

for (let link of links) {
    link.addEventListener('click', () => {
        if (link.textContent === 'Wave NFTs') { 
            scrollTo(waveInfo);
        }
        if (link.textContent === 'Stories') {
            scrollTo(stories);
        }
        if (link.textContent === 'Contact') {
            scrollTo(discord);
        }
    })
}



//------------------------GALLERY-----//////-------------------------------
const showMoreBtn = document.querySelector('#show-more');
const galleryLenght = document.querySelectorAll('.gallery-grid__item').length;
let itemsUl;
if (window.screen.availWidth <= 639) {
    itemsUl = 1;
}
if (window.screen.availWidth > 639 && window.screen.availWidth <= 959) {
    itemsUl = 2;
}
if (window.screen.availWidth > 959) {
    itemsUl = 3;
}

let itemPlus = itemsUl;

showMoreBtn.addEventListener('click', () => {
    itemsUl += itemPlus;

    let array = Array.from(document.querySelector('.gallery-grid').children);
    let visibilityItems = array.slice(0, itemsUl);

    visibilityItems.forEach(ul => ul.classList.add('gallery-grid__visibil'));

    if (visibilityItems.length === galleryLenght) {
        showMoreBtn.style.display = 'none';
    }
});


//-----------------------TABS----------------------//---------------------------
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active-tab')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active-tab');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active-tab');
            });

            currentBtn.classList.add('active-tab');
            currentTab.classList.add('active-tab');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

//----------------ANIMATION---------//----------------

let animItems = document.querySelectorAll('.anime-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anime-active');
            } else {
                if (!animItem.classList.contains('anime-no-hide')) {
                    animItem.classList.remove('anime-active');
                }

            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);

}