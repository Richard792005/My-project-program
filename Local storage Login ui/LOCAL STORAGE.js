// kita akan buat LOGIN PAGE OTAK
const containerLogin = document.querySelector('.Login-formContainer')
const containerRegister = document.querySelector('.regis-formContainer')
const tombolLogin = document.getElementById('Login-button')
const tombolRegister = document.getElementById('Register-button')
const container = document.querySelector('.container')


window.addEventListener('load', function (event) {
    tombolLogin.classList.add('active')
    containerLogin.classList.add('active')
    container.classList.add('active')
})

const containerToggle = document.querySelector('.form-toggle')
containerToggle.addEventListener('click', function (event) {
    // let border = localStorage.getItem('border') 
    // if (!border) {
    //     border = localStorage.setItem('border', 'active')
    // }

    // border = localStorage.getItem('border')

    // if (border === 'active') {
    //     addClassActiveRegister(event, containerLogin, containerRegister, tombolLogin)

    // }

    if (event.target.id === 'Register-button') {
        addClassActiveRegister()
    }
    if (event.target.id === 'Login-button') {
        addClassActiveLogin()
    }

})

function addClassActiveRegister() {
    container.classList.remove('active')

    // INI ANIMASI CONTAINER
    containerRegister.classList.add('active')
    containerLogin.classList.remove('active')


    containerRegister.classList.remove('disable')
    containerLogin.classList.add('disable')

    // INI BORDER
    tombolRegister.classList.add('active')
    tombolLogin.classList.remove('active')
}


function addClassActiveLogin() {
    container.classList.add('active')



    // INI ANIMASI CONTAINER
    containerLogin.classList.add('active')
    containerRegister.classList.remove('active')

    containerLogin.classList.remove('disable')
    containerRegister.classList.add('disable')

    // INI BORDER
    tombolLogin.classList.add('active')
    tombolRegister.classList.remove('active')
}


// ANIMATION PARTICLE 

function createParticles() {
    const container = document.querySelector('.bg-particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(particle);

    }
}


// Initialize particles on page load
document.addEventListener('DOMContentLoaded', createParticles);

// Add form submission handlers
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const button = this.querySelector('.sign-button');
        const originalText = button.textContent;

        button.textContent = 'Processing...';
        button.style.opacity = '0.7';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.opacity = '1';
            alert('This is a demo - form submission handled!');
        }, 2000);
    });
});





// Buat login dengan local storage


const containerForm = document.querySelector('.form-input')
const tombolCreate = document.querySelector('.create-button')
const buttonLogin = document.querySelector('.sign-button')
console.log(buttonLogin)
let users = JSON.parse(localStorage.getItem('users')) || []


tombolCreate.addEventListener('click', function (event) {
    event.preventDefault()

    const fullname = document.querySelector('.form-input input[id = Full-name]').value
    const inputEmail = document.querySelector('.form-input input[id = Email]').value
    const inputPassword = document.querySelector('.form-input input[id = Password').value

    // cek apakah ada email yang sama 
    let checkEmail = users.some(function (user, indeks) {
        return user.email === inputEmail
    })

    if (checkEmail) {
        alert(`Email ${inputEmail} sudah terdaftar !`)
        return
    }

    console.log(checkEmail)

    let newUser = {
        fullname: fullname,
        email: inputEmail,
        password: inputPassword
    }

    alert(`Berhasil register !!`)
    users.push(newUser)
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users))

    containerForm.reset()
})


buttonLogin.addEventListener('click', function (event) {
    const inputEmail = document.querySelector('.form-input input[data-a = email]').value
    const inputPassword = document.querySelector('.form-input input[data-a = pass]').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    let user = users.find(function (user, indeks) {
        return user.email === inputEmail && user.password === inputPassword
    })
    console.log(user)

    if (user) {
        alert(`Halo selamat datang ! ${user.fullname}`)
        localStorage.setItem('current User', JSON.stringify(user))
        buatLogout()
        containerForm.reset()
    }
    else {
        alert('Email atau Password salah')
    }

})

function buatLogout() {
    const formToggle = document.querySelector('#Register-button')

    const tombolLogout = document.createElement('button')
    tombolLogout.className = 'toggle'
    tombolLogout.id = 'Logout-button'
    tombolLogout.type = 'button'
    tombolLogout.textContent = 'LogOut'

    // const dd = `<button id="Logout-button" class="toggle" type="button">LogOut</button>`

    formToggle.insertAdjacentElement('afterend', tombolLogout)

    const toggle = document.querySelectorAll('.toggle')[1]
    console.log(toggle)
    toggle.remove()

}




