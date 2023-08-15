const dropdownToggleModal = document.querySelector('.dropdown-toggle-modal');
const dropdownToggleFooter = document.querySelector('.dropdown-toggle-footer');

const dropdownContentModal = document.querySelector('.dropdown-content-modal');
const dropdownContentFooter = document.querySelector('.dropdown-content-footer');

const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdown = document.querySelector('.custom-dropdown');

const icon = document.querySelector('.icon-ctrl');
const iconModal = document.querySelector('.icon-ctrl-modal');


if (dropdownToggleModal)
  dropdownToggleModal.addEventListener('click', () => {
    // console.log(dropdownToggleModal)

    dropdownContentModal.style.display = 'block';
    iconModal.classList.add('active');

  });

if (dropdownToggleFooter)
  dropdownToggleFooter.addEventListener('click', () => {
   console.log(dropdownContentFooter)
    dropdownContentFooter.style.display = 'block';
    icon.classList.add('active');

  });

if (dropdownItems)
  dropdownItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()
      console.log('-h')
      if (e.target.getAttribute('data-local') === 'footer') {
        dropdownToggleFooter.value = item.textContent;
        dropdownContentFooter.style.display = 'none';
        icon.classList.remove('active');

      }
      if (e.target.getAttribute('data-local') === 'modal') {
        dropdownToggleModal.value = item.textContent;
        dropdownContentModal.style.display = 'none';
        iconModal.classList.remove('active');

      }
    });
  });
