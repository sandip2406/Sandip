// Get elements  
const loginForm = document.getElementById('login-form');  
const loginBtn = document.getElementById('login-btn');  
const userIdInput = document.getElementById('user-id');  
const passwordInput = document.getElementById('password');  
const errorMessage = document.getElementById('error-message');  
//const mainPageSegment = document.getElementById('main-page-segment');  
const logoutBtn = document.getElementById('logout-btn'); 
const rememberMeCheckbox = document.getElementById('remember-me');  
  
// Set up event listeners  
loginBtn.addEventListener('click', validateLogin);  
logoutBtn.addEventListener('click', logout);  
  
// Validate login credentials  
function validateLogin(event) {  
   event.preventDefault();  
   const userId = userIdInput.value.trim();  
   const password = passwordInput.value.trim();  
  
   // Hardcoded credentials for demo purposes  
   const validUserId = 'admin';  
   const validPassword = 'password';  
  
   if (userId === validUserId && password === validPassword) {  
      // Login successful, check if "Remember Me" is checked 
         if (rememberMeCheckbox.checked) {  
        // Set cookie to remember user for 30 days  
        setCookie('user-id', userId, 30);  
        setCookie('password', password, 30);  
      } else {  
        // Clear cookies  
        deleteCookie('user-id');  
        deleteCookie('password');  
      }  
      // Redirect to target page   
      loginForm.style.display = 'none';  
      //targetPage.style.display = 'block';  
      window.location.href='Visa Assist.html';
   } else {  
      // Login failed, show error message  
      errorMessage.textContent = 'Wrong Password/User ID.';  
   }  
}  
  
// Set cookie function  
function setCookie(name, value, days) {  
   const date = new Date();  
   date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  
   const expires = 'expires=' + date.toUTCString();  
   document.cookie = name + '=' + value + ';' + expires + ';path=/';  
}  
  
// Delete cookie function  
function deleteCookie(name) {  
   document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';  
}

// Logout functionality  
function logout() {  
   // Hide main page segment and show login segment  
   window.location.href='login.html';  
   loginForm.style.display = 'block';  
   // Clear input fields  
   userIdInput.value = '';  
   passwordInput.value = '';  
}

//Selectiob funtionality
function visaResponse()
{
const c = document.getElementById("country").value;
const d = document.getElementById("category").value;
const e = document.getElementById("type").value;
const result = "https://tinyurl.com/"+c + d + e;
document.getElementById("return").setAttribute("href",result);

}

function showhide()
        {
            var div = document.getElementById("div1");
            if (div.style.display !== "block") {
                div.style.display = "block";
            }
            else {
                div.style.display = "none";
            }
        }


// Validation mechanism to prevent direct access to target page  
function validateAccess() {  
   const url = window.location.href;  
   if (url.includes('Visa Assist.html')) {  
      // Check if user is logged in  
      if (!isLoggedIn()) {  
        // Redirect to login page  
        window.location.href = 'login.html';  
      }  
   }  
}  
  
// Check if user is logged in  
function isLoggedIn() {  
   // For demo purposes, assume user is logged in if username and password are stored in local storage  
   const username = 'admin';  
   const password = 'password';  
   return username === 'admin' && password === 'password';  
}  
  
// Call validation mechanism on page load  
validateAccess();