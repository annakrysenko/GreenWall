import { nanoid } from 'nanoid'

const formFooterEl = document.getElementById('formFooter');
if(formFooterEl) formFooterEl.addEventListener('submit', handleSubmit);

const formModalEl = document.getElementById('formModal');
if(formModalEl) formModalEl.addEventListener('submit', handleSubmitModal);

async function handleSubmit(e) {
  e.preventDefault();
  await sendData({
    "id": nanoid(),
    "email": e.target.formEmailFooter.value,
    "phone": e.target.formPhoneFooter.value,
    "name": e.target.formNameFooter.value,
    "service": e.target.inputServices.value,
  });
  formFooterEl.reset();
}


async function handleSubmitModal(e) {
  console.log('first')
  e.preventDefault();
  await sendData({
    "id": nanoid(),
    "email": e.target.formEmailModal.value,
    "phone": e.target.formPhoneModal.value,
    "name": e.target.formNameModal.value,
    "service": e.target.inputServicesModal.value,
  });
  formModalEl.reset();
}

const sendData = async data => {
  try {
    const response = await fetch(
      'https://events.sendpulse.com/events/id/5416e30521e640a28e94d4c786a932e7/8390747',
      { method: 'POST', body: JSON.stringify(data) }
    );
    const msg = await response.json();
    console.log(msg);
  } catch (error) {
    console.log(error.message);
    console.log(error)
  }
};





