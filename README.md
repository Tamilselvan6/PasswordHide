# PasswordHide
A simple and elegant **Password Hide/Show Feature** built with **HTML**, **CSS**, and **JavaScript**. This feature is perfect for web forms where users can toggle their password visibility for better usability and security.  

---

## Features 🚀  

- **Interactive Eye Icon:** Toggle password visibility with a single click.  
- **Responsive Design:** Optimized for both desktop and mobile devices.  
- **Lightweight and Easy to Integrate:** Seamlessly fits into any project or website.  

---

## Preview 👀  

![Password Hide/Show Feature](path/to/your/screenshot.png)  

---

## How to Use 📋  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Tamilselvan6/PasswordHide.git
   ```
2. Open index.html in your browser to view and test the feature.

## Technologies Used 🛠️
- HTML: For structuring the web page.
- CSS: For styling and responsive design.
- JavaScript: For implementing the hide/show password functionality.

## Code Highlights 💻
### HTML
   ```html
   <div class="input-box">
       <input type="text" placeholder="password" class="password" id="password">
       <span><i class="fa-solid fa-eye" id="eyeIcon"></i></span>
   </div>
   ```
### JavaScript
   ```javascript
   const password = document.getElementById('password');
   const eyeIcon = document.getElementById('eyeIcon');

   eyeIcon.onclick = () => {
       if (password.type == 'password') {
           password.type = 'text';
           eyeIcon.className = 'fa-solid fa-eye';
       } else {
           password.type = 'password';
           eyeIcon.className = 'fa-solid fa-eye-slash';
       }
   };
   ```
## License 📜
This project is open-source and available under the MIT License. Feel free to use, modify, and contribute! 😊
