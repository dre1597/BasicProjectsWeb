const addBtn = document.querySelector('#add-patient');

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const form = document.querySelector('.form');

  let patient = patientFromForm(form);

  let errors = validatePatient(patient);

  if (errors.length > 0) {
    returnErrorMessages(errors);
    return;
  }

  addPatient(patient);

  form.reset();
  const ulErrors = document.querySelector('#error-message');
  ulErrors.innerHTML = '';
});

function addPatient(patient) {
  let patientTr = returnTr(patient);
  const table = document.querySelector('#patients-table');
  table.appendChild(patientTr);
}

function returnErrorMessages(errors) {
  const ul = document.querySelector('#error-message');
  ul.innerHTML = '';

  errors.forEach((error) => {
    let li = document.createElement('li');
    li.textContent = error;
    ul.appendChild(li);
  });
}

function patientFromForm(form) {
  return {
    name: form.name.value,
    weight: form.weight.value,
    height: form.height.value,
    fat: form.fat.value,
    bmi: calcBmi(form.weight.value, form.height.value),
  };
}

function returnTr(patient) {
  let patientTr = document.createElement('tr');

  patientTr.appendChild(returnTd(patient.name, 'info-name'));
  patientTr.appendChild(returnTd(patient.weight, 'info-weight'));
  patientTr.appendChild(returnTd(patient.height, 'info-height'));
  patientTr.appendChild(returnTd(patient.fat, 'info-fat'));
  patientTr.appendChild(returnTd(patient.bmi, 'info-bmi'));

  return patientTr;
}

function returnTd(data, className) {
  let td = document.createElement('td');
  td.textContent = data;
  td.classList.add(className);
  return td;
}

function validatePatient(patient) {
  let errors = [];

  if (!validateWeight(patient.weight)) errors.push('Invalid weight');
  if (!validateHeight(patient.height)) errors.push('Invalid height');

  return errors;
}
