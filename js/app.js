const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const skillDescriptions = document.querySelectorAll('.skill-description');
const skillIcons = document.querySelectorAll('.skill-image');

document.addEventListener('mousemove', function checkHover() {
    let hoverElement = document.querySelector(".skill-image:hover");
    if (hoverElement != null) {        
        let descriptionId = hoverElement.id.concat('Description');
        let descriptionElement = document.getElementById(descriptionId);

        hideElements(skillDescriptions);

        descriptionElement.classList.remove('hidden-description');
        descriptionElement.classList.add('show-description');
    }else{
        hideElements(skillDescriptions);

        // Display default description
        document.getElementById('defaultDescription').classList.add('show-description');
    }
});

function hideElements(skillDescriptions){
    skillDescriptions.forEach(descriptionElement => {
        descriptionElement.classList.remove('show-description');
        descriptionElement.classList.add('hidden-description');
    });
}

// Menu Display Mobile
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute("data-visible");
    console.log(visibility);
    
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
    }else if(visibility === "true"){
        primaryNav.setAttribute('data-visible', false)
    }
    
});