function loadContact (body) {
  body.appendChild(createContact())
  document.querySelector('.nav-bar__contact').classList.add('active')
  document.querySelector('.nav-bar__home').classList.remove('active')
  document.querySelector('.nav-bar__menu').classList.remove('active')
} 

function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')
  
  const contactCopy = document.createElement('div')
  contactCopy.innerHTML = 'For enquiries or general feedback, write to us at:'
  contactCopy.classList.add('contact__copy')

  const email = document.createElement('div')
  email.innerHTML = 'customerfeedback@totallyreal.com'
  email.classList.add('contact__email')

  contact.appendChild(contactCopy)
  contact.appendChild(email)

  return contact
}

export default loadContact