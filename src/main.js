import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import './style.css'
import Glide, { Controls, Breakpoints, Autoplay, Swipe } from '@glidejs/glide/dist/glide.modular.esm'


// const carouselEl = document.querySelector('#carousel');

  // let html = `<div class="glide__track container overflow-visible" data-glide-el="track">
  // <ul class="glide__slides">`;

  // for (let index = 1; index < 6; index++) {
  //       html +=
  //       `
  //       <li class="glide__slide glide__slide_carousel container">
  //       <div class="carousel__item relative">                   
  //       <picture class="carousel__item-img w-full">
  //         <source media="(max-width: 1279px)" srcset="carousel_mobile_jpg.jpg" />
  //         <source media="(min-width: 1280px)" srcset="carousel_desktop_jpg.jpg" />
  //         <img  src="carousel_desktop_jpg.jpg" class="object-contain" alt="Сезон подготовки к новогодним продажам открыт!" />
  //       </picture>       
  //       <div class="absolute inset-0 z-10">
  //       <div class="carousel__content flex flex-col xl:gap-4">
  //           <h3 class="carousel__title">Сезон подготовки к новогодним продажам открыт${index}</h3>
  //           <div class="carousel__text">
  //             <ul>                
  //                 <li>Искусственные елки</li>
  //                 <li>Гирлянды</li>
  //                 <li>Игрушки и украшения</li>
  //                 <li>Пиротехника</li>
  //                 <li>Новогодние подарки</li>
  //             </ul>
  //           </div>   
  //           <div class="carousel__action">
  //             <a href="" class="carousel__action-button">
  //               Перейти к каталогу
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     </li>       
  //       `;
  // }
  // html += `</ul>
  // </div>
  // <div class="glide__bullets" data-glide-el="controls[nav]">
  // </div>
  // `;
  // carouselEl.innerHTML = html;




// const catalogEl = document.querySelector('#catalog');

//   let htmlCatalog = `<div class="glide__track container overflow-visible" data-glide-el="track">
//   <ul class="glide__slides container">`;

//   for (let index = 0; index < 10; index++) {
//     htmlCatalog +=
//         `
//         <li class="glide__slide">
//                 <div class="catalog__item pb-4">
//                   <div class="catalog__item-imgbox relative mb-2">
//                     <picture class="catalog__item-img block">
//                       <source media="(max-width: 1279px)" srcset="/img/elka_mob.jpg" width="180" height="240" />
//                       <source media="(min-width: 1280px)" srcset="/img/elka_deskt.jpg" width="302" height="402" />
//                       <img class="object-cover" src="/img/elka_deskt.jpg" alt="Ель комбинированная “Уральская снежная” (ПВХ + РЕ)" />
//                     </picture>
//                       <span class="catalog__item-status p-1 absolute top-2 left-2  xl:top-4 xl:left-4">В наличии</span>                  
//                       <svg class="catalog__item-bookmark absolute top-2 right-2 xl:top-4 xl:right-4 xl:w-8" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M14.8125 0.875C13.145 0.875 11.5445 1.65125 10.5 2.87792C9.45538 1.65125 7.85496 0.875 6.18746 0.875C3.23579 0.875 0.916626 3.19417 0.916626 6.14583C0.916626 9.76833 4.17496 12.72 9.11038 17.205L10.5 18.4604L11.8895 17.1954C16.825 12.72 20.0833 9.76833 20.0833 6.14583C20.0833 3.19417 17.7641 0.875 14.8125 0.875ZM10.5958 15.7771L10.5 15.8729L10.4041 15.7771C5.84246 11.6467 2.83329 8.91542 2.83329 6.14583C2.83329 4.22917 4.27079 2.79167 6.18746 2.79167C7.66329 2.79167 9.10079 3.74042 9.60871 5.05333H11.4008C11.8991 3.74042 13.3366 2.79167 14.8125 2.79167C16.7291 2.79167 18.1666 4.22917 18.1666 6.14583C18.1666 8.91542 15.1575 11.6467 10.5958 15.7771Z" fill="#808080"/>
//                     </svg>                  
//                   </div>
//                   <div class="catalog__item-info px-4">
//                     <h5 class="catalog__item-title mb-2 xl:mb-3">Ель комбинированная “Уральская снежная” (ПВХ + РЕ)</h5>
//                     <div class="catalog__item-price mb-2">
//                       999 999 р.
//                     </div>
//                     <div class="catalog__item-params pb-3">
//                       <div class="catalog__item-params-title">Высота:</div>
//                       <div class="catalog__item-params-options flex flex-wrap">
//                         <span class="catalog__item-params-options-item">60 см</span>
//                         <span class="catalog__item-params-options-item">90 см</span>
//                         <span class="catalog__item-params-options-item">120 см</span>
//                         <span class="catalog__item-params-options-item">150 см</span>
//                         <span class="catalog__item-params-options-item">180 см</span>
//                         <span class="catalog__item-params-options-item">210 см</span>
//                         <span class="catalog__item-params-options-item catalog__item-params-options-item_active">240 см</span>
//                         <span class="catalog__item-params-options-item">270 см</span>
//                       </div>
//                     </div>
//                     <div class="catalog__item-footer xl:flex  xl:justify-between xl:items-center">
//                       <div class="catalog__item-price hidden xl:block">
//                         999 999 р.
//                       </div>
//                       <button class="catalog__item-button flex justify-center w-full gap-2 xl:w-auto">
//                         <svg class="catalog__item-button-ico" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <g clip-path="url(#clip0_301_273)">
//                           <path d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z" stroke="#2A5CF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                           <path d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z" fill="#2A5CF6" stroke="#2A5CF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                           <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5" stroke="#2A5CF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                           </g>
//                           <defs>
//                           <clipPath id="clip0_301_273">
//                           <rect width="18" height="18" fill="white"/>
//                           </clipPath>
//                           </defs>
//                         </svg>
//                         <span class="hidden xl:inline">В корзину</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//       </li>       
//         `;
//   }
//   htmlCatalog += `</ul>
//   </div>
//   <div class="glide__arrows hidden xl:block" data-glide-el="controls">
//     <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
//     <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M2.66665 0L0.31665 2.35L7.94998 10L0.31665 17.65L2.66665 20L12.6666 10L2.66665 0Z" fill="#282828"/>
//     </svg>
//     </button>
//     <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
//       <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M2.66665 0L0.31665 2.35L7.94998 10L0.31665 17.65L2.66665 20L12.6666 10L2.66665 0Z" fill="#282828"/>
//       </svg>
//     </button>
//   </div>
//   `;
  // catalogEl.innerHTML = htmlCatalog;


document.addEventListener("DOMContentLoaded", function() {

  const carouselItem = document.querySelector('#carouselItemTemplate');
  const carouselEl = document.querySelector('#carousel .glide__slides');
  for (let index = 0; index < 6; index++) {    
    let li = carouselItem.content.cloneNode(true).querySelector('li');
    carouselEl.append(li);    
  }


  const catalogItem = document.querySelector('#catalogItemTemplate');
  const catalogEl = document.querySelector('#catalog .glide__slides');
  for (let index = 0; index < 6; index++) {    
    let li = catalogItem.content.cloneNode(true).querySelector('li');
    catalogEl.append(li);    
  }

  
  document.querySelectorAll('.catalog__item-params-options-item').forEach(
    el => el.addEventListener("click", (e) => { e.target.classList.toggle('catalog__item-params-options-item_active')})
  );

  document.querySelector('#footerInput').addEventListener("focusin", (event) => {
    document.querySelector('.footer__form-group').classList.add('footer__form-group_active')
  });

  document.querySelector('#footerInput').addEventListener("focusout", (event) => {
    document.querySelector('.footer__form-group').classList.remove('footer__form-group_active')
  });

  document.querySelectorAll('.footer__menu-title').forEach(
    el => el.addEventListener("click", (e) => { 
      const contentId = el.getAttribute("data-footer-menu-id"); 
      e.target.classList.toggle('footer__menu-title_active');
      document.querySelector(`#${contentId}`).classList.toggle('footer__menu-list_active')

    })
  );

  document.querySelectorAll('.cabinet-menu__link').forEach(
    el => el.addEventListener("click", (e) => { 
      e.preventDefault();
      e.target.classList.toggle('cabinet-menu__link_active')
    })
  );
});


window.addEventListener('load', function () {
  const autoBullets = function (Glide, Components, Events) {
    return {
        mount() {
            var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
            var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
            
            this._n =
                Components.Html.root.querySelectorAll(NAV_SELECTOR);
  
            //Automatically create bullets
            const totalSlides = Components.Html.slides.length;
            const bulletWrapper =
                Components.Html.root.querySelector(NAV_SELECTOR);
            if (bulletWrapper) {
                const fragment = document.createDocumentFragment();
                for (var index = 0; index < totalSlides; index++) {
                    var button = document.createElement('button');
                    button.className = 'glide__bullet';
                    button.setAttribute('data-glide-dir', '=' + index);
                    fragment.appendChild(button);
                }
                bulletWrapper.innerHTML = '';
                bulletWrapper.appendChild(fragment);
            }
  
            this._c =
                Components.Html.root.querySelectorAll(
                    CONTROLS_SELECTOR
                );
  
            Components.Controls.addBindings();
        }
    };
  };
  
  const glideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 32,
    autoplay: 4000,
    focusAt: 0,
    breakpoints: {
      1279: {        
        gap: 11
      }
    }    
  }
  
  new Glide('#carousel', glideOptions).mount({ Controls, Breakpoints, Autoplay, Swipe,  AutoBullets: autoBullets })
  
  const glideOptions2 = {
    type: 'slider',
    startAt: 0,
    gap: 24,
    perView: 4 ,
    breakpoints: {
      1279: {
        perView: 1,
        gap: 12
      }
    }
  }

  new Glide('#catalog', glideOptions2).mount({ Controls, Breakpoints, Autoplay, Swipe,  AutoBullets: autoBullets })
});


