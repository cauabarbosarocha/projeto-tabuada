function calcular() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert('Por favor, digite um número')
  } else {
    let n = Number(num.value)
    tab.innerHTML = ''
    for (i = 1; i <= 10; i++) {
      let mult = document.createElement('option')
      mult.text = `${n} × ${i} = ${n*i}`
      mult.value = `tab${i}`
      tab.appendChild(mult)
    }
  }
}