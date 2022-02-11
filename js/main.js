window.onload = function first() {
    var input = document.getElementsByTagName("input");
    input[0].onkeypress = (event) => {
        var number = parseInt(event.key)
        if (isNaN(number)) {
        } else {
            event.preventDefault()
        }
    }
    input[1].onkeypress = (event) => {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault()
        } else {
        }
    }
    input[5].onchange = (event) => {
        if (event.target.checked === true) {
            console.log('согласен')
        } else {
            console.log('не согласен')
        }
    }
    var button = document.getElementById("sign-actions");
    button.onclick = (event) => {
        for (var i = 0; i < input.length; i++) {
            if (input[i].value === '') {
                alert('заполните поле' + ' ' + input[i].name)
                var result1 = true
            }
        }
        if (input[3].value !== input[4].value) {
            alert('пароли не совпадают')
            var result2 = true
        }
        if (input[5].checked === false) {
            alert('Примите согласие')
            var result3 = true
        }
        if (result1 === true || result2 === true || result3 === true) {
        } else {
            alert('OKAY')
        }

    }
    var a = document.getElementById('account');
    var get = document.getElementById('form-title-one');
    var check = document.getElementById('check');
    var blockForm = document.getElementsByClassName('form-block');
    a.onclick = (event) => {
        get.innerText = 'Log in to the system';
        blockForm[0].innerText = ''
        blockForm[2].innerText = ''
        blockForm[4].innerText = ''
        check.innerText= ''
        a.innerText= ''
    }
}



