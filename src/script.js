const btnToggle = document.querySelectorAll(".btnToggle");
const container = document.querySelector(".container");
btnToggle.forEach((item) => {
  item.addEventListener("click", function () {
    if (container.classList.contains("toggle")) {
      container.classList.remove("toggle");
    } else {
      container.classList.add("toggle");
    }
  });
});
// pass show and hide
const inpPass = document.querySelectorAll(".pass");
const eyeIcon = document.querySelectorAll(".eye-icon");
const closeEye = ` <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              stroke="white"
              width="24px"
              height="24px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>`;
const openEye = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            stroke-width="1.5" 
            fill="black"
            stroke="white"
            width="24px"
            height="24px">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`;
eyeIcon.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (item.getAttribute("data-state") == "close") {
      item.innerHTML = openEye;
      inpPass[index].type = "text";
      item.setAttribute("data-state", "open");
    } else {
      item.innerHTML = closeEye;
      inpPass[index].type = "password";
      item.setAttribute("data-state", "close");
    }
  });
});
// regx for login
const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-pass");
const btnLogin = document.getElementById("login");
function LoginSubmit() {
  let emailCheck = false;
  let passCheck = false;
  // email chech
  if (loginEmail.value.length <= 10) {
    Toastify({
      text: "Email must be at least 10 characters long.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      // class :'form-container',

      style: {
        background: "#8B0000",
      },
    }).showToast();
  } else {
    if (loginEmail.value.search(/[@]/) == -1) {
      Toastify({
        text: "Please enter a valid email address.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,

        style: {
          background: "#8B0000",
        },
      }).showToast();
    } else {
      emailCheck = true;
    }
  }
  // pass check
  if (loginPass.value.length < 8) {
    Toastify({
      text: "Password must be at least 10 characters",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      // class :'form-container',

      style: {
        background: "#8B0000",
      },
    }).showToast();
  } else {
    if (loginPass.value.search(/[A-Z]/) == -1) {
      Toastify({
        text: "Password must contain at least one uppercase letter",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        // class :'form-container',

        style: {
          background: "#8B0000",
        },
      }).showToast();
    } else {
      if (loginPass.value.search(/[1-9]/) == -1) {
        Toastify({
          text: "Password must include at least one number.",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          // class :'form-container',

          style: {
            background: "#8B0000",
          },
        }).showToast();
      } else {
        passCheck = true;
      }
    }
  }
  return emailCheck && passCheck;
}
// regx for create account
const nameCreate = document.getElementById("nameCreate");
const emailCreate = document.getElementById("emailCreate");
const passCreate = document.getElementById("passCreate");
function createSubmit() {
  let emailCheck = false;
  let passCheck = false;
  let nameCheck = false;
 if(nameCreate.value.length>=5){
  nameCheck = true
  // email chech
  if (emailCreate.value.length <= 10) {
    Toastify({
      text: "Email must be at least 10 characters long.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      // class :'form-container',

      style: {
        background: "#8B0000",
      },
    }).showToast();
  } else {
    if (emailCreate.value.search(/[@]/) == -1) {
      Toastify({
        text: "Please enter a valid email address.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,

        style: {
          background: "#8B0000",
        },
      }).showToast();
    }else{
      emailCheck = true
    }
  }
  // pass check
  if(passCreate.value.length<8){
    Toastify({
      text: "Password must be at least 10 characters",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      // class :'form-container',

      style: {
        background: "#8B0000",
      },
    }).showToast();
  }else{
    if(passCreate.value.search(/[A-Z]/) == -1){
      Toastify({
        text: "Password must contain at least one uppercase letter",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        // class :'form-container',
  
        style: {
          background: "#8B0000",
        },
      }).showToast();
    }else{
      if(passCreate.value.search(/[1-9]/) == -1){
        Toastify({
          text: "Password must include at least one number.",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          // class :'form-container',
    
          style: {
            background: "#8B0000",
          },
        }).showToast();
      }else{
        passCheck = true
      }
    }
  }
 }else{
  Toastify({
    text: "Name must be at least 5 characters",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
    // class :'form-container',

    style: {
      background: "#8B0000",
    },
  }).showToast();
 }
  return emailCheck && passCheck && nameCheck;
}
