// Redirect to the login page
function redirectToLogin() {
    window.location.href = 'login.html'; // Adjust to your actual login page URL
}

// Apply dark mode styles
const body = document.body;
const navbar = document.querySelector('.navbar');
const darkStylesheet = document.getElementById('darkModeStylesheet');
body.classList.add('dark-mode');
navbar.classList.add('dark-mode');
darkStylesheet.disabled = false;

const banner = document.getElementById('banner');
const bannerHeight = banner ? banner.offsetHeight : 0;

const userIcon = document.getElementById("userIcon");

// Scroll event logic for changing navbar background based on scroll position
const onScroll = () => {
    if (window.scrollY > bannerHeight) {
        navbar.style.backgroundColor = '#333';
        navbar.style.color = '#fff';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = '#000';
    }
};

// Attach the scroll event listener
window.addEventListener('scroll', onScroll);

// Update login status in local storage
function updateUserLoginStatus(email, status) {
    if (localStorage.getItem(email)) { // Check if the email exists in local storage
        let userData = JSON.parse(localStorage.getItem(email));
        userData.loggedIn = status; // Set loggedIn flag
        localStorage.setItem(email, JSON.stringify(userData)); // Update localStorage
    }
}

// Check if user is logged in and show/hide UI elements accordingly
function checkUserStatus() {
    let userData;

    // Loop through localStorage to find user data
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.includes("@")) { // Check if any email is stored
            userData = JSON.parse(localStorage.getItem(key));
            if (userData.loggedIn) {
                localStorage.setItem('loggedInEmail', key); // Store the logged-in email
                break;
            } else {
                userData = null; // Reset data if not logged in
            }
        }
    }

    // Show/hide elements based on login status
    if (!userData) {
        document.getElementById('registerNow').style.display = 'block'; // Show register button
        userIcon.style.display = 'none'; // Hide user icon
        document.getElementById('accountButton').textContent = 'My Account'; // Reset button text
    } else {
        document.getElementById('registerNow').style.display = 'none'; // Hide register button
        userIcon.style.display = 'flex'; // Show user icon
        document.getElementById('accountButton').textContent = userData.name; // Set button text to user's name
        updateContentBasedOnGender(userData.gender); // Update content based on gender
    }
}


// Update content based on gender
function updateContentBasedOnGender(gender) {
    const programSection = document.querySelector('.classes-slider');
    const trainerSection = document.querySelector('.trainers-section .owl-carousel');

    // Male and female program data
    const programData = {
        male: [
            {
                image: './assets/strength-training.jpg',
                title: 'Strength Training',
                description: 'Build muscle and increase strength with this personalized program.',
                trainerImage: './assets/trainer1.jpg',
                trainerName: 'John Doe',
                trainerRole: 'Fitness Coach'
            },
            {
                image: './assets/Hiit.jpg',
                title: 'Cardio Blast',
                description: 'Get your heart pumping with our intense cardio sessions.',
                trainerImage: './assets/trainer3.jpg',
                trainerName: 'Alex Smith',
                trainerRole: 'Cardio Specialist'
            },
            {
                image: './assets/kickboxing.jpg',
                title: 'Kickboxing',
                description: 'Learn self-defense and boost your stamina with high-energy kickboxing classes.',
                trainerImage: './assets/trainer5.jpg',
                trainerName: 'Mike Tyson',
                trainerRole: 'Kickboxing Instructor'
            },
            {
                image: './assets/crossfit.jpg',
                title: 'CrossFit Training',
                description: 'Intensive training to build endurance, strength, and agility through varied workouts.',
                trainerImage: './assets/trainer6.jpg',
                trainerName: 'Chris Evans',
                trainerRole: 'CrossFit Coach'
            }
        ],
        
        female: [
            {
                image: './assets/yoga-class.jpg',
                title: 'Yoga Therapy',
                description: 'Relax, refresh, and renew with our expert-led yoga sessions.',
                trainerImage: './assets/trainer2.jpg',
                trainerName: 'Jane Doe',
                trainerRole: 'Yoga Instructor'
            },
            {
                image: './assets/pilates.jpg',
                title: 'Pilates Training',
                description: 'Enhance your core strength and flexibility with our Pilates sessions.',
                trainerImage: './assets/trainer4.jpg',
                trainerName: 'Emily Stone',
                trainerRole: 'Pilates Instructor'
            },
            {
                image: './assets/dance-fitness.jpg',
                title: 'Dance Fitness',
                description: 'Enjoy a fun, high-energy workout with dance routines that improve cardio and coordination.',
                trainerImage: './assets/trainer7.jpg',
                trainerName: 'Sophie Turner',
                trainerRole: 'Dance Instructor'
            },
            {
                image: './assets/aerobics.jpg',
                title: 'Aerobics Workout',
                description: 'Boost your energy and burn calories with rhythmic aerobic exercises.',
                trainerImage: './assets/trainer8.jpg',
                trainerName: 'Linda Williams',
                trainerRole: 'Aerobics Coach'
            }
        ]        
    };

    // Clear the existing content
    programSection.innerHTML = '';
    trainerSection.innerHTML = '';

    // Generate program and trainer items dynamically based on gender
    programData[gender].forEach((program, index) => {
        // Create program item
        const programItem = `
            <div class="classes-item">
                <div class="ci-img">
                    <img src="${program.image}" alt="${program.title}">
                </div>
                <div class="ci-text">
                    <h4><a href="#">${program.title}</a></h4>
                    <p>${program.description}</p>
                </div>
                <div class="ci-bottom">
                    <div class="ci-author">
                        <img src="${program.trainerImage}" alt="${program.trainerName}">
                        <div class="author-text">
                            <h6>${program.trainerName}</h6>
                            <p>${program.trainerRole}</p>
                        </div>
                    </div>
                    <a href="" class="site-btn sb-gradient">Join Now</a>
                </div>
            </div>
        `;
        programSection.innerHTML += programItem;

        // Create trainer item
        const trainerItem = `
            <div class="classes-item">
                <div class="ci-img">
                    <img src="${program.trainerImage}" alt="${program.trainerName}">
                </div>
                <h4><a href="#">${program.trainerName}</a></h4>
                <p>${program.trainerRole}</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;
        trainerSection.innerHTML += trainerItem;
    });
}

// Simulate login success (call this function after successful login)
function loginSuccess(email, gender, name) {
    const userData = {
        email: email,
        loggedIn: true,
        gender: gender,
        name: name // Store the user's name
    };
    localStorage.setItem(email, JSON.stringify(userData)); // Save user data to localStorage
    checkUserStatus(); // Update UI based on new login status
}

// Simulate logout functionality
// Simulate logout functionality
document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action
    const email = localStorage.getItem('loggedInEmail');
    updateUserLoginStatus(email, false); // Update the loggedIn flag
    document.getElementById('registerNow').style.display = 'block'; // Show register button
    userIcon.style.display = 'none'; // Hide user icon
    localStorage.removeItem('loggedInEmail'); // Remove logged in email
    
    // Reload the page to revert to original HTML
    location.reload();
});


document.addEventListener('DOMContentLoaded', function () {
    checkUserStatus(); // Initial check on page load

    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent event bubbling
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
        });
    }

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.user-icon-container')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
});
