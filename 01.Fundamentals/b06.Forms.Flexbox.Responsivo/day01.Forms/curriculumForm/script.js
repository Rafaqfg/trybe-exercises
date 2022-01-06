function createStatesOptions() {
  let stateSelector = document.getElementById("estadouser");
  let states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  for (i = 0; i < states.length; i += 1) {
    let option = document.createElement('option');
    option.innerText = states[i];
    option.value = states[i];
    stateSelector.appendChild(option);
  }
}
window.onload = function () {
  createStatesOptions();
}