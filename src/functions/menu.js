import SpicySalami from '../pics/pizzas/pizza-1.png'
import Margherita from '../pics/pizzas/pizza-2.png'
import PerfectPepperoni from '../pics/pizzas/pizza-3.png'
import PorkyPineapple from '../pics/pizzas/pizza-4.png'
import BaconBonanza from '../pics/pizzas/pizza-5.png'
import VeggieFiesta from '../pics/pizzas/pizza-6.png'

function loadMenu (body) {
  body.appendChild(createMenu())
  document.querySelector('.nav-bar__menu').classList.add('active')
  document.querySelector('.nav-bar__home').classList.remove('active')
  document.querySelector('.nav-bar__contact').classList.remove('active')
} 

function createMenu() {
  const menu = document.createElement('div')
  menu.classList.add('menu')

  menu.appendChild(
    createMenuItem(
      SpicySalami,
      'Spicy Salami',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      Margherita,
      'Classic Margherita',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      PerfectPepperoni,
      'Perfect Pepperoni',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      PorkyPineapple,
      'Porky Pineapple',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      BaconBonanza,
      'Bacon Bonanza',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      VeggieFiesta,
      'Veggie Fiesta',
      '$20' )
  )

  return menu
}

function createMenuItem(img, name, price) {
  const menuCard = document.createElement('div')
  menuCard.classList.add('menu__card')

  const menuImg = document.createElement('img')
  menuImg.classList.add('menu__img')
  menuImg.src = img

  const menuName = document.createElement('div')
  menuName.classList.add('menu__name')
  menuName.innerHTML = name

  const menuPrice = document.createElement('span')
  menuPrice.classList.add('menu__price')
  menuPrice.innerHTML = price

  menuCard.appendChild(menuImg)
  menuCard.appendChild(menuName)
  menuCard.appendChild(menuPrice)

  return menuCard
}

export default loadMenu