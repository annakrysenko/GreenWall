const form = document.getElementById('form');
const formFields = form.querySelectorAll('input');

const dropdown = document.getElementById('inputServices');

if(form)form.addEventListener('submit', function (event) {
  event.preventDefault();

  formFields.forEach(function (field) {
    field.value = '';
  });

  dropdown.value = '';
});
