const refs = {
  nav: document.querySelector('.nav'),
  back: document.querySelector('.back'),

  homeBTN: document.querySelector('[data-section="HomeAnchor"]'),
  aboutUsBTN: document.querySelector('[data-section="AboutUsAnchor"]'),
  ServicesAnchorBTN: document.querySelector('[data-section="ServicesAnchor"]'),
  TeamBTN: document.querySelector('[data-section="TeamAnchor"]'),
  ContactsAnchorBTN: document.querySelector('[data-section="ContactsAnchor"]'),


  homeSection: document.getElementById('HomeAnchor'),
  aboutUsSection: document.getElementById('AboutUsAnchor'),
  ServicesAnchorSection: document.getElementById('ServicesAnchor'),
  ContactsAnchorSection: document.getElementById('ContactsAnchor'),
  TeamSection: document.getElementById('TeamAnchor'),

  // mobile menu
  burgerMenu: document.querySelector('.burger-menu'),
  burgerNav: document.querySelector('.burger-nav'),

  openModalBurgerBtn: document.querySelector('.icon-menu'),
  closeModalBurgerBtn: document.getElementById('closeBurger'),

  // header
  header: document.querySelector('.header'),
  logo: document.getElementById('logo'),
};


window.addEventListener('load', () => {
  const toScrollLocal = localStorage.getItem('scroll');
  if (
    (toScrollLocal &&
      document.location.pathname === '/index.html') ||
    document.location.pathname === '/'
  ) {
    const elementToScroll = switchForScroll(toScrollLocal);
    scrollTo(elementToScroll.offsetTop);
    localStorage.removeItem('scroll', '');
  }
});


if (refs.closeModalBurgerBtn) {
  refs.closeModalBurgerBtn.addEventListener('click', toggleModalBurger);
}
if (refs.openModalBurgerBtn) {
  refs.openModalBurgerBtn.addEventListener('click', toggleModalBurger);
}

function toggleModalBurger(e) {
  // e.stopPropagation()
  // console.log(e.target )
  if (e.currentTarget === e.target) {
    refs.burgerMenu.classList.toggle('is-hidden');
  }
}

if (refs.nav) {
  refs.nav.addEventListener('click', handleClick);
}

if (refs.burgerNav) {
  refs.burgerNav.addEventListener('click', handleClick);
}

function handleClick(e) {
  if (refs.burgerMenu) refs.burgerMenu.classList.add('is-hidden');

  console.log(document.location.pathname);
  console.log(e.target.nodeName);
  // e.stopImmediatePropagation()
  // e.Propagation()
  if (e.target.nodeName !== 'A') {
    return;
  }
  // if (document.location.pathname !== 'index.html' || document.location.pathname !== '/') {
  // //   localStorage.setItem('scroll', e.target.dataset.section);
  // console.log('not index')
  // document.location.pathname = '/index.html';
  // }
  if (
    document.location.pathname === '/index.html' ||
    document.location.pathname === '/'
  ) {
    const elementToScrollIndex = switchForScroll(e.target.dataset.section);
    console.log('elementToScrollIndex ==>', elementToScrollIndex);
    scrollTo(elementToScrollIndex.offsetTop);
  }
  else{
    localStorage.setItem('scroll', e.target.dataset.section);
    location.href = '/index.html';
  }
}

export function scrollTo(el) {
  window.scrollTo({
    left: 0,
    top: el - 40,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', () => {
  if (
    document.location.pathname === '/index.html' ||
    document.location.pathname === '/'
  ) {
    if (
      refs.homeSection.getBoundingClientRect().top < 100 &&
      refs.homeSection.getBoundingClientRect().bottom > 30
    ) {
      // refs.header.classList.remove('change');

      refs.homeBTN.classList.add('_active');
    } else {
      refs.homeBTN.classList.remove('_active');
    }

    if (
      refs.aboutUsSection.getBoundingClientRect().top < 50 &&
      refs.aboutUsSection.getBoundingClientRect().bottom > 100
    ) {
      // refs.header.classList.add('change');
      refs.aboutUsBTN.classList.add('_active');
    } else {
      refs.aboutUsBTN.classList.remove('_active');
      // refs.header.classList.remove('change')
    }

    if (
      refs.ServicesAnchorSection.getBoundingClientRect().top < 100 &&
      refs.ServicesAnchorSection.getBoundingClientRect().bottom > 100
      // refs.ServicesAnchorSection.getBoundingClientRect().height
    ) {
      refs.ServicesAnchorBTN.classList.add('_active');
      // refs.header.classList.add('change');
    } else {
      refs.ServicesAnchorBTN.classList.remove('_active');
    }
    if (
      refs.TeamSection.getBoundingClientRect().top < 100 &&
      refs.TeamSection.getBoundingClientRect().bottom > 100
      // refs.ServicesAnchorSection.getBoundingClientRect().height
    ) {
      refs.TeamBTN.classList.add('_active');
      // refs.header.classList.add('change');
    } else {
      refs.TeamBTN.classList.remove('_active');
    }

    if (document.documentElement.getBoundingClientRect().bottom < 900) {
      refs.ContactsAnchorBTN.classList.add('_active');
      // refs.header.classList.add('change');
    } else {
      refs.ContactsAnchorBTN.classList.remove('_active');
    }
  }
});

function switchForScroll(name) {
  console.log(name);
  let el;
  if (name === 'HomeAnchor') {
    el = refs.homeSection;
  } else if (name === 'AboutUsAnchor') {
    el = refs.aboutUsSection;
  } else if (name === 'ServicesAnchor') {
    el = refs.ServicesAnchorSection;
  } else if (name === 'ContactsAnchor') {
    el = refs.ContactsAnchorSection;
  } else if (name === 'TeamAnchor') {
    el = refs.TeamSection;
  } else if (name === 'ContactsAnchor') {
    el = refs.ContactsAnchorSection;
  }
  console.log(el);
  return el;
}
