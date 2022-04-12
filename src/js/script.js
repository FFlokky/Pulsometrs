const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive:{
        768:{
            nav: true
        },
        992:{
            nav: false
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev')
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next')
});

const tabsNav  = document.querySelectorAll('.catalog__tab');
const tabsItem = document.querySelectorAll('.catalog__content');

tabsNav.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener('click', function(){
        let currentNav = item;
        let tabId = currentNav.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        
        tabsNav.forEach(function(item){
            item.classList.remove('catalog__tab_active');
        });
        tabsItem.forEach(function(item){
            item.classList.remove('catalog__content_active');
        });

        currentNav.classList.add('catalog__tab_active');
        currentTab.classList.add('catalog__content_active');

    });
};

const tabsLink = document.querySelectorAll('.catalog-item__link');

function onLinkClick(item){
    item.addEventListener('click', function(){
        let currentLink = item;

        currentLink.classList.add('catalog-item__link_active');
    });
};
tabsLink.forEach(onLinkClick);


