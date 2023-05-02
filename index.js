//1- 
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

// 2 - teclas que serão permitidas digitar
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//2 - teclas que serão permitidas digitar
input.addEventListener("keydown", function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) { // usou includes para permitir teclas do array
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

//3 - acessar o data-value
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// 4 - limpar input
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus() // quando limar, volta para digitar no input
})

// 5 - botao = para calcular
document.getElementById("equal").addEventListener("click", calculate)



// 6 - 
function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  
  const result = eval(input.value) // faz calcular tudo
  resultInput.value = result // faz calcular tudo
  resultInput.classList.remove("error") // tira a class error
}

//8
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})

// 7
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f8f8f8")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#00a0dc")
    root.style.setProperty("--primary-color", "#00a0dc")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#1c1c1c")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#cccccc")
    root.style.setProperty("--primary-color", "#00a0dc")
    main.dataset.theme = "dark"
  }
})