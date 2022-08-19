
function signOut(err){
    console.log(err);
    axios.get('http://localhost:8000/api/signout')
      .then(function (response) {
        console.log(response);
        localStorage.clear();
        location.href="\index.html"
      })
      .catch(function (error) {
        console.log(error);
      });
    }


function showData(){
    
    const userData=JSON.parse(localStorage.getItem('user'))
    //dashboard.innerHTML=`token=${localStorage.getItem('token')}<br>`
    print_id.innerText=`${userData._id}`
    print_name.innerText=`${userData.name}`
    print_email.innerText=`${userData.email}`
    print_salt.innerText=`${userData.salt}`
    print_pswd.innerText=`${userData.encry_password}`
    

}



