!function(){!function(){var e={openModalHeroBtn:document.querySelector(".contact-us-btn-hero"),openModalBtn:document.querySelector(".contact-us-btn"),closeModalBtn:document.getElementById("close"),backdrop:document.querySelector(".backdrop"),openModalBurgerBtn:document.querySelector(".icon-menu"),closeModalBurgerBtn:document.getElementById("close-burger"),modalBurger:document.querySelector(".burger-menu"),burgerLinks:document.querySelectorAll(".burger-nav-list__item")};function t(){e.modalBurger.classList.toggle("is-hidden")}function n(t){e.backdrop.classList.toggle("is-hidden")}e.openModalHeroBtn&&e.openModalHeroBtn.addEventListener("click",n),e.openModalBtn&&e.openModalBtn.addEventListener("click",n),e.closeModalBtn&&e.closeModalBtn.addEventListener("click",n),e.backdrop&&e.backdrop.addEventListener("click",(function(e){return function(e){e.currentTarget===e.target&&n()}(e)})),e.closeModalBurgerBtn&&e.closeModalBurgerBtn.addEventListener("click",t),e.openModalBurgerBtn&&e.openModalBurgerBtn.addEventListener("click",t),e.burgerLinks.forEach((function(e){e&&e.addEventListener("click",(function(){t();var n=e.getAttribute("data-section");console.log(n),window.location.hash=n}))}))}();var e=document.querySelector(".dropdown-toggle-modal"),t=document.querySelector(".dropdown-toggle-footer"),n=document.querySelector(".dropdown-content-modal"),o=document.querySelector(".dropdown-content-footer"),l=document.querySelectorAll(".dropdown-item");document.querySelector(".custom-dropdown");e&&e.addEventListener("click",(function(){console.log(e),n.style.display="block"})),t&&t.addEventListener("click",(function(){console.log(o),o.style.display="block"})),l&&l.forEach((function(l){l.addEventListener("click",(function(r){"footer"===r.target.getAttribute("data-local")&&(t.value=l.textContent,o.style.display="none"),"modal"===r.target.getAttribute("data-local")&&(e.value=l.textContent,n.style.display="none")}))}));var r=document.getElementById("form"),a=r.querySelectorAll("input"),c=document.getElementById("inputServices");r&&r.addEventListener("submit",(function(e){e.preventDefault(),a.forEach((function(e){e.value=""})),c.value=""}));var d=document.querySelectorAll(".slide-link"),i=(document.querySelectorAll(".burger-slide-link"),document.querySelector(".wrapper-main")),s=document.querySelector(".page__pagination"),u=new Swiper(".page",{wrapperClass:"page__wrapper",slideClass:"page__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},watchOverflow:!0,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,pagination:{el:".page__pagination",type:"bullets",clickable:!0,bulletClass:"page__bullet",bulletActiveClass:"page__bullet_active"},scrollbar:{el:".page__scroll",dragClass:"page__drag-scroll",draggable:!0},init:!1,on:{init:function(){!function(){if(d.length>0){var e=function(e){var t=d[e];t.addEventListener("click",(function(n){g(),u.slideTo(e,800),t.classList.add("_active"),n.preventDefault()}))};d[u.realIndex].classList.add("_active");for(var t=0;t<d.length;t++)e(t)}}(),p()},slideChange:function(){g(),d[u.realIndex].classList.add("_active")},resize:function(){p()}}});function g(){var e=document.querySelector(".slide-link._active");e&&e.classList.remove("_active")}function p(){i.classList.contains("_free")&&(i.classList.remove("_free"),s.style.display="flex",u.params.freeMode=!1);for(var e=0;e<u.slides.length;e++){var t=u.slides[e].querySelector(".screen__content");if(t)if(t.offsetWidth<780){i.classList.add("_free"),s.style.display="none",u.params.freeMode=!0;break}}}u.init()}();
//# sourceMappingURL=index.7d38ba34.js.map