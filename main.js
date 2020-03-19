// on load

function load() {
    alert('YOU SHOULD BE 18 OR ABOVE');
  }


// for sing up page

document.getElementById("singupBtn").addEventListener("click" , function(){

    document.getElementById("singUpForm").setAttribute(
        "style","transform:scaleY(1); opacity:1"
    )
    document.getElementById("landingPage").setAttribute(
        "style","transform:scaleY(0); opacity:0"
    )

})


//after sing up

document.getElementById("afterSingUpPage").addEventListener("click" , function(){

    document.getElementById("afterSingUp").setAttribute(
        "style","transform:scaleX(1); opacity:1"
    )
    document.getElementById("singUpForm").setAttribute(
        "style","transform:scaleY(0); opacity:0"
    )

})

// for log in page


document.getElementById("loginBtn").addEventListener("click" , function(){

    document.getElementById("logInForm").setAttribute(
        "style","transform:scaleY(1); opacity:1"
    )
    document.getElementById("landingPage").setAttribute(
        "style","transform:scaleY(0); opacity:0"
    )

})

//  after log in

document.getElementById("afterLogInBtn").addEventListener("click" , function(){

    document.getElementById("logInForm").setAttribute(
        "style","transform:scaleY(0); opacity:0"
    )
    document.getElementById("afterLogIn").setAttribute(
        "style","transform:scaleX(1); opacity:1"
    )

})


// for back form sing up page

document.getElementById("back").addEventListener("click" , function(){

    document.getElementById("singUpForm").setAttribute(
        "style","transform:scaleY(0); opacity:0"
    )

    document.getElementById("landingPage").setAttribute(
        "style","transform:scaleY(1); opacity:1"
    )

})


// for back form login page


document.getElementById("back1").addEventListener("click" , function(){

    document.getElementById("logInForm").setAttribute(
        "style","transform:scaleY(0); opacity:0"
    )

    document.getElementById("landingPage").setAttribute(
        "style","transform:scaleY(1); opacity:1"
    )

})


// back from after log in


document.getElementById("back2").addEventListener("click" , function(){

    document.getElementById("afterLogIn").setAttribute(
        "style","transform:scaleX(0); opacity:"
    )

    document.getElementById("landingPage").setAttribute(
        "style","transform:scaleY(1); opacity:"
    )

})


// back from after sing up


document.getElementById("back3").addEventListener("click" , function(){

    document.getElementById("afterSingUp").setAttribute(
        "style","transform:scaleX(0); opacity:"
    )

    document.getElementById("landingPage").setAttribute(
        "style","transform:scaleY(1); opacity:"
    )

})