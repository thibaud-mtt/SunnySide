const btn = document.querySelector('.hamburger')
const nav = document.querySelector('nav ul')
const title = document.querySelector('.title')


btn.addEventListener('click', presentation)

function presentation() {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  } else {
    nav.classList.add('show')
  }
  if (nav.classList.contains('show')) {
    title.style.display = 'none'
  } else {
    title.style.display = 'block'
  }
}
