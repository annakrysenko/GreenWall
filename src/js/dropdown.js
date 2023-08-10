const dropdownToggleModal = document.querySelector('.dropdown-toggle-modal');
const dropdownToggleFooter = document.querySelector('.dropdown-toggle-footer');

  const dropdownContentModal = document.querySelector('.dropdown-content-modal');
  const dropdownContentFooter = document.querySelector('.dropdown-content-footer');

  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const dropdown = document.querySelector('.custom-dropdown');


  if(dropdownToggleModal) dropdownToggleModal.addEventListener('click', () => {
    dropdownContentModal.style.display = 'block';

  })
  if(dropdownToggleFooter) dropdownToggleFooter.addEventListener('click', () => {
    dropdownContentFooter.style.display = 'block';

  })

  if(dropdownItems)dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if(e.target.getAttribute("data-local") === 'footer'){
        dropdownToggleFooter.value = item.textContent;
        dropdownContentFooter.style.display = 'none';

      }
      if(e.target.getAttribute("data-local") === 'modal'){
        dropdownToggleModal.value = item.textContent;
        dropdownContentModal.style.display = 'none';

      }
      

    });
  });