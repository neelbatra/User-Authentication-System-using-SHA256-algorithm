const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

function register(err){
    console.log(err);
    axios.post('http://localhost:8000/api/signup', {
        name : username.value,
        email: reg_e_mail.value,
        password: con_password.value
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
function signIn(){
    axios.post('http://localhost:8000/api/signin', {
        email: login_e_mail.value,
        password: login_password.value
      })
      .then(function (response) {
        console.log(response);
        if (response.status==200){
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            location.href="\dashboard.html"

        }
      })
      .catch(function (error) {
        console.log(error);
      });
}





    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");

    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
