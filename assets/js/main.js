// Show menu
const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle', 'nav_menu')

// Get all nav links
const navLink = document.querySelectorAll('.nav_link')

// Handle navigation link clicks
function linkAction(){
    // Remove active class from all links
    navLink.forEach(n => n.classList.remove('active'))
    // Add active class to clicked link
    this.classList.add('active')

    // Close mobile menu when link is clicked
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

// Add click event to all nav links
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll spy functionality - highlights nav items based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollDown = window.scrollY + 100 // Add offset for better detection

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100 // Adjust offset
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector('.nav_link[href="#' + sectionId + '"]')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            // Remove active class from all links
            navLink.forEach(n => n.classList.remove('active'))
            // Add active class to current section's nav link
            if(sectionsClass) {
                sectionsClass.classList.add('active')
            }
        }
    })
})

// Set home as active by default when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Remove all active classes first
    navLink.forEach(n => n.classList.remove('active'))
    // Add active to home link only
    const homeLink = document.querySelector('.nav_link[href="#home"]')
    if(homeLink) {
        homeLink.classList.add('active')
    }
})