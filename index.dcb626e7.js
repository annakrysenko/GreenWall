!function(){!function(){var e={openModalBtn:document.querySelector(".contact-us-btn"),closeModalBtn:document.getElementById("close"),backdrop:document.querySelector(".backdrop")};function t(t){e.backdrop.classList.toggle("is-hidden")}e.openModalBtn&&e.openModalBtn.addEventListener("click",t),e.closeModalBtn&&e.closeModalBtn.addEventListener("click",t),e.backdrop&&e.backdrop.addEventListener("click",(function(e){return function(e){e.currentTarget===e.target&&t()}(e)}))}();var e=document.querySelector(".dropdown-toggle-modal"),t=document.querySelector(".dropdown-toggle-footer"),n=document.querySelector(".dropdown-content-modal"),o=document.querySelector(".dropdown-content-footer"),l=document.querySelectorAll(".dropdown-item");document.querySelector(".custom-dropdown");e&&e.addEventListener("click",(function(){n.style.display="block"})),t&&t.addEventListener("click",(function(){o.style.display="block"})),l&&l.forEach((function(l){l.addEventListener("click",(function(a){"footer"===a.target.getAttribute("data-local")&&(t.value=l.textContent,o.style.display="none"),"modal"===a.target.getAttribute("data-local")&&(e.value=l.textContent,n.style.display="none")}))}));var a=document.getElementById("form"),c=a.querySelectorAll("input"),r=document.getElementById("inputServices");a&&a.addEventListener("submit",(function(e){e.preventDefault(),c.forEach((function(e){e.value=""})),r.value=""}));var d=new Swiper(".page",{wrapperClass:"page__wrapper",slideClass:"page__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},watchOverflow:!0,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,pagination:{el:".page__pagination",type:"bullets",clickable:!0,bulletClass:"page__bullet",bulletActiveClass:"page__bullet_active"},scrollbar:{el:".page__scroll",dragClass:"page__drag-scroll",draggable:!0},init:!1,on:{init:function(){!function(){if(i.length>0){var e=function(e){var t=i[e];t.addEventListener("click",(function(n){s(),d.slideTo(e,800),t.classList.add("_active"),n.preventDefault()}))};i[d.realIndex].classList.add("_active");for(var t=0;t<i.length;t++)e(t)}}()},slideChange:function(){s(),i[d.realIndex].classList.add("_active")}}}),i=document.querySelectorAll(".slide-link");function s(){var e=document.querySelector(".slide-link._active");e&&e.classList.remove("_active")}d.init()}();
//# sourceMappingURL=index.dcb626e7.js.map
