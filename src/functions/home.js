import locationIcon from '../icons/location.svg'
import timeIcon from '../icons/time.svg'

function loadHome (body) {
  body.appendChild(createHome())
  document.querySelector('.nav-bar__home').classList.add('active')
  document.querySelector('.nav-bar__menu').classList.remove('active')
  document.querySelector('.nav-bar__contact').classList.remove('active')
}

function createHome () {
  const home = document.createElement('div')
  home.classList.add('home')

  const homeImage = document.createElement('div')
  homeImage.classList.add('home__image')
  
  const homeContainer = document.createElement('div')
  homeContainer.classList.add('home__container')

  const homeCopy = document.createElement('div')
  homeCopy.classList.add('home__copy')
  homeCopy.innerHTML = `Drew's offers a modern take on the neighborhood pizzeria. Enjoy a concise menu of premium stone-fired pizzas handcrafted with the freshest ingredients.`

  const homeOrderBtn = document.createElement('button')
  homeOrderBtn.classList.add('home__order-btn')
  homeOrderBtn.innerHTML = 'Order Now!'

  home.appendChild(homeImage)
  home.appendChild(homeContainer)
  homeContainer.appendChild(homeCopy)
  homeContainer.appendChild(homeOrderBtn)
  homeContainer.appendChild(createInfoBox())

  return home
}

function createInfoBox () {
  const homeInfoBox = document.createElement('div')
  homeInfoBox.classList.add('home__info-box')

  homeInfoBox.appendChild(createAddressBox())
  homeInfoBox.appendChild(createOpeningHoursBox())

  return homeInfoBox
}

function createAddressBox () {
  const addressWrapper = document.createElement('div')
  addressWrapper.classList.add('home__address-wrapper')
  
  const addressIcon = document.createElement('img')
  addressIcon.classList.add('home__address-icon')
  addressIcon.src = locationIcon

  const addressCopy = document.createElement('div')
  addressCopy.classList.add('home__address-copy')
  addressCopy.innerHTML = 'Jalan Faraday, Bangsar, 59100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur'

  addressWrapper.appendChild(addressIcon)
  addressWrapper.appendChild(addressCopy)

  return addressWrapper
}

function createOpeningHoursBox () {
  const hoursWrapper = document.createElement('div')
  hoursWrapper.classList.add('home__hours-wrapper')
  
  const hoursIcon = document.createElement('img')
  hoursIcon.classList.add('home__hours-icon')
  hoursIcon.src = timeIcon

  const hoursCopy = document.createElement('div')
  hoursCopy.classList.add('home__hours-copy')
  hoursCopy.innerHTML = 'Open Daily, 12:00 PM to 9:00 PM'

  hoursWrapper.appendChild(hoursIcon)
  hoursWrapper.appendChild(hoursCopy)

  return hoursWrapper
}

export default loadHome