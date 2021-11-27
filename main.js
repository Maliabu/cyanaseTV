// flip the quick links panel with the authentication section
// links and sign in / sign up to share panel
function flipQuick(){
    var sign = document.getElementById('signUp')

    document.getElementById('quick').hidden=true
    sign.style.display='block'
}

//back to links from signup
function linkIt(){
    var linker = document.getElementById('quick')

    document.getElementById('signUp').hidden=true
    linker.hidden=false
}