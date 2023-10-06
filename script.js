function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar-black.png")
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-black.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
})
