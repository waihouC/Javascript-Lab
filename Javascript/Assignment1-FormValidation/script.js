let errorMessages = {
    'en' : {
        'username_too_short' : "Your user name is too short",
        'email_not_valid' : "Your email is not valid",
        'password_too_short' : "Your password is too short",
        'not_accepted': "Please accept the terms and conditions"
    },
    'jp' : {
        'username_too_short' : "ユーザー名が短すぎます",
        'email_not_valid' : "あなたのメールアドレスは無効です",
        'password_too_short' : "パスワードが短すぎます",
        'not_accepted': "利用規約に同意してください"
    }
}

let languageSelected = "en";
let form = document.querySelector("#my-form");
let languageEL = document.querySelector("#language-type");

const submitForm = () => {
    let hasAccepted = document.querySelector('#accept').checked;

    // // assume not gulity unless otherwise
    let userNameTooShort = false;
    let emailNotValid = false;
    let emailFormatNotValid = false;
    let passwordTooShort = false;
    let passwordIsNotEqual = false;

    let username = document.querySelector('#username').value;
    if (username.length <= 3) {
        userNameTooShort = true;
    }

    let password = document.querySelector("#password").value;
    let pwconfirm = document.querySelector("#confirm-password").value;
    if (password.length <= 3) {
        passwordTooShort = true;
    }

    if (password !== pwconfirm) {
        passwordIsNotEqual = true;
    }

    let email = document.querySelector("#email").value;
    if (email.length <= 3) {
        emailNotValid = true;
    }

    if (!(email.includes("@") && email.includes("."))) {
        emailFormatNotValid = true;
    }

    let errors = document.querySelector('#errors');
    errors.innerHTML = "";
    
    if (userNameTooShort) {
        errors.innerHTML += `<li>${errorMessages[languageSelected]['username_too_short']}</li>`;
    }

    if (passwordTooShort) {
        errors.innerHTML += `<li>${errorMessages[languageSelected]['password_too_short']}</li>`;
    }

    if (passwordIsNotEqual) {
        errors.innerHTML += "<li>Please ensure both passwords typed are the same</li>";
    }

    if (emailNotValid) {
        errors.innerHTML += `<li>${errorMessages[languageSelected]['email_not_valid']}</li>`;
    }

    if (emailFormatNotValid) {
        errors.innerHTML += "<li>Email should contain '@' and '.'</li>";
    }
    
    if (!hasAccepted) {
        errors.innerHTML += `<li>${errorMessages[languageSelected]['not_accepted']}</li>`;
    }
}

languageEL.addEventListener("change", ()=>{
  const langOptions = document.querySelectorAll('.language-options');
  for (let l of langOptions) {
    if (l.selected) {
        languageSelected = l.value;
    }
  }
})

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    submitForm();
});
