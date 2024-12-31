const password = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

eyeIcon.onclick = () => {
    if (password.type == 'password') {
        password.type = 'text';
        eyeIcon.className = 'fa-solid fa-eye';
    }
    else {
        password.type = 'password';
        eyeIcon.className = 'fa-solid fa-eye-slash';
    }
}