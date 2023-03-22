const navHome= document.querySelector('.home')
const navUniverse= document.querySelector('.universe')
const navExplore= document.querySelector('.explore')

const routes = {
  '/': "/pages/home.html",  
  '/universe': "/pages/universe.html",  
  '/explore': "/pages/explore.html",
  404: "/pages/404.html"
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, '', event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location // or window.location.pathname
  const route = routes[pathname] || routes[404] 

  fetch(route)
  .then(data => data.text())
  .then (html => {
    document.querySelector('#app').innerHTML = html
  })
}

handle()

window.onpopstate = () => handle()

navHome.addEventListener('click', () => {
  navHome.classList.add('focus')
  navUniverse.classList.remove('focus')
  navExplore.classList.remove('focus')
})

navUniverse.addEventListener('click', () => {
  navUniverse.classList.add('focus')
  navHome.classList.remove('focus')
  navExplore.classList.remove('focus')
})

navExplore.addEventListener('click', () => {
  navExplore.classList.add('focus')
  navUniverse.classList.remove('focus')
  navExplore.classList.remove('focus')
})