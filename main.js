const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        // Update the query selector to match all navigation links
        const navLink = document.querySelector('.nav_list a[href*=' + sectionId + ']');
        const navIcon = navLink.querySelector('.nav_icon');

        // Use toggle to add or remove the class based on the condition
        navLink.classList.toggle('active-link', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
        navIcon.classList.toggle('active-link', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
    });
}

window.addEventListener('scroll', scrollActive);

function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
