var tabs = document.querySelectorAll('nav a')
var contentPara = document.querySelector('.content')

// when the hash changes
function setActiveTabAccordingToHash(type) {
  makeAllTabsInactive()
  var tabToActivate = document.querySelector(`a[href="#${type}"]`)
  tabToActivate.classList.add('active')
}

function makeAllTabsInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  for (var item of data) {
    if (item.section === type) {
      //   contentPara.innerHTML = item.story
      //   this isn't giving us html, it's just giving us what is in 'story' in the js
      contentPara.innerHTML = `<h2>${item.section}</h2> <p>${item.story}</p>`
      setActiveTabAccordingToHash(type)
    }
  }
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('[href="#cuisines"]').classList.add('active')
  }
  setContentAccordingToHash()
}

window.addEventListener('hashchange', setContentAccordingToHash)

// initializePage()
document.addEventListener('DOMContentLoaded', initializePage)
// these do the same thing but just does it via an event, this would allow you to have this anywhere in the code (the reference to the script in html)
