$(document).ready(function() {

    function validateEmail(email) {
        const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    function validateName(name) {
        return /^[ña-zA-ZÑ -]+$/.test(name)
    }

    function digitOnly(num){
        return /^\d+$/.test(num)
    }

    $('#UserSignIn').submit(function(e) {

        e.preventDefault()

        if( $('#EmailAddress').val() ) {
            $('#EmailAddress').removeClass('is-invalid')
        } else {
            $('#EmailAddress').addClass('is-invalid')
        }

    })
})