import '../src/styles/style.css'
import loadHome from './functions/home'
import loadMenu from './functions/menu'
import loadContact from './functions/contact'

const body = document.getElementById('content')

initialLoad()

function initialLoad () {
  loadHeader(body)
  loadHome(body)
  loadFooter(body)
}

function generateHome () { 
  clearDisplay(body)
  loadHome(body)
  loadFooter(body)
}

function generateMenu () { 
  clearDisplay(body)
  loadMenu(body)
  loadFooter(body)
}

function generateContact () { 
  clearDisplay(body)
  loadContact(body)
  loadFooter(body)
}


function loadHeader () {
  body.appendChild(createHeader())
}

function createHeader () {
  const header = document.createElement('div')
  header.classList.add('header')

  const logo = document.createElement('div')
  logo.classList.add('logo')
  logo.innerHTML = `Drew's`

  header.appendChild(logo)

  header.appendChild(createNavBar(body))

  return header
}

function createNavBar () {
  const navBar = document.createElement('div')
  navBar.classList.add('nav-bar__container')

  const home = document.createElement('div')
  home.innerHTML = 'Home'
  home.classList.add('nav-bar__home')
  home.addEventListener('click', () => generateHome(body))

  const menu = document.createElement('div')
  menu.innerHTML = 'Menu'
  menu.classList.add('nav-bar__menu')
  menu.addEventListener('click', () => generateMenu(body))
  
  const contact = document.createElement('div') 
  contact.innerHTML = 'Contact'   
  contact.classList.add('nav-bar__contact')
  contact.addEventListener('click', () => generateContact(body))

  navBar.appendChild(home)
  navBar.appendChild(menu)
  navBar.appendChild(contact)

  return navBar
}

function loadFooter () {
  body.appendChild(createFooter())
}

function createFooter () {
  const footer = document.createElement('div')
  footer.classList.add('footer')
  
  const footerCredits = document.createElement('span')
  footerCredits.classList.add('footer__credits')
  footerCredits.innerHTML = 'created by ' 

  const devName = document.createElement('a')
  devName.innerHTML = '@atwycodes'
  devName.href = 'https://github.com/atwycodes'

  footerCredits.appendChild(devName)
  footer.appendChild(footerCredits)

  return footer
}

function clearDisplay () {
  for (let i = 2; i > 0; i--) {
    body.children[i].remove()
  }
}

