let checkmark = document.getElementsByClassName('complete');

function alphanumeric(data) {
    let letters = /^[0-9a-zA-Z]+$/;
    if (letters.test(data)) {
        return true;
    }
    return false;
}

function validateEmail(data) {
    let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (testData.test(data)) {
        return true;
    }
    return (false)
}

function disableButton() {
    document.getElementById('submit').disabled = true;
}

function enableButton() {
    document.getElementById('submit').disabled = false;
}

document.getElementById('name').onblur = function() {
    let status = document.getElementById('name').value;
    if (status.length < 3) {
        document.getElementById('alert-name').innerHTML = 'Vul uw naam in';
        checkmark[0].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-name').innerHTML = 'Invalid characters!';
        checkmark[0].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-name').innerHTML = '';
        checkmark[0].classList.add('active');
        enableButton();
    }
};

document.getElementById('mobile').onblur = function() {
    let status = document.getElementById('mobile').value;
    if (status.length < 3) {
        document.getElementById('alert-mobile').innerHTML = 'Vul uw mobielnummer in';
        checkmark[0].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-mobile').innerHTML = 'Invalid characters!';
        checkmark[0].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-mobile').innerHTML = '';
        checkmark[0].classList.add('active');
        enableButton();
    }
};

document.getElementById('lastname').onblur = function() {
    let status = document.getElementById('lastname').value;
    if (status.length < 3) {
        document.getElementById('alert-lastname').innerHTML = 'Vul uw achternaam in';
        checkmark[0].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-lastname').innerHTML = 'Invalid characters!';
        checkmark[0].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-lastname').innerHTML = '';
        checkmark[0].classList.add('active');
        enableButton();
    }
};

document.getElementById('straatnaam').onblur = function() {
    let status = document.getElementById('straatnaam').value;
    if (status.length < 3) {
        document.getElementById('alert-straatnaam').innerHTML = 'Vul uw straatnaam in';
        checkmark[0].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-straatnaam').innerHTML = 'Invalid characters!';
        checkmark[0].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-straatnaam').innerHTML = '';
        checkmark[0].classList.add('active');
        enableButton();
    }
};

document.getElementById('post').onblur = function() {
    let status = document.getElementById('post').value;
    if (status.length < 5) {
        document.getElementById('alert-post').innerHTML = 'Vul uw postcode in';
        checkmark[1].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-post').innerHTML = 'Invalid characters!';
        checkmark[1].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-post').innerHTML = '';
        checkmark[1].classList.add('active');
        enableButton();
    }
};

document.getElementById('huis').onblur = function() {
    let status = document.getElementById('huis').value;
    if (status.length < 5) {
        document.getElementById('alert-huis').innerHTML = 'Vul uw huisnummer in';
        checkmark[1].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-huis').innerHTML = 'Invalid characters!';
        checkmark[1].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-huis').innerHTML = '';
        checkmark[1].classList.add('active');
        enableButton();
    }
};

document.getElementById('stad').onblur = function() {
    let status = document.getElementById('stad').value;
    if (status.length < 5) {
        document.getElementById('alert-stad').innerHTML = 'Vul uw stad in';
        checkmark[1].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-stad').innerHTML = 'Invalid characters!';
        checkmark[1].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-stad').innerHTML = '';
        checkmark[1].classList.add('active');
        enableButton();
    }
};

document.getElementById('toevoeging').onblur = function() {
    let status = document.getElementById('toevoeging').value;
    if (status.length < 5) {
        document.getElementById('alert-toevoeging').innerHTML = 'Vul eventueel een toevoeging in';
        checkmark[1].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-toevoeging').innerHTML = 'Invalid characters!';
        checkmark[1].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-toevoeging').innerHTML = '';
        checkmark[1].classList.add('active');
        enableButton();
    }
};

document.getElementById('land').onblur = function() {
    let status = document.getElementById('land').value;
    if (status.length < 5) {
        document.getElementById('alert-land').innerHTML = 'Vul uw land in';
        checkmark[1].classList.remove('active');
        disableButton();
    } else if (!alphanumeric(status)) {
        document.getElementById('alert-land').innerHTML = 'Invalid characters!';
        checkmark[1].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-land').innerHTML = '';
        checkmark[1].classList.add('active');
        enableButton();
    }
};

document.getElementById('email').onblur = function() {
    let status = document.getElementById('email').value;
    if (status.length < 0) {
        document.getElementById('alert-email').innerHTML = 'Email field is empty';
        checkmark[2].classList.remove('active');
        disableButton();
    } else if (!validateEmail(status)) {
        document.getElementById('alert-email').innerHTML = 'Invalid email address!';
        checkmark[2].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-email').innerHTML = '';
        checkmark[2].classList.add('active');
        enableButton();
    }
};

document.getElementById('password').onblur = function() {
    let status = document.getElementById('password').value;
    if (status.length < 6) {
        document.getElementById('alert-password').innerHTML = 'Password field is empty or less than 6 characters';
        checkmark[3].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-password').innerHTML = '';
        checkmark[3].classList.add('active');
        enableButton();
    }

    document.getElementById('password-confirm').onblur = function() {
        let confirm = document.getElementById('password-confirm').value;
        if (status != confirm) {
            document.getElementById('alert-confirm-password').innerHTML = "Passwords don't match";
            checkmark[4].classList.remove('active');
            disableButton();
        } else {
            document.getElementById('alert-confirm-password').innerHTML = '';
            checkmark[4].classList.add('active');
            enableButton();
        }
    }
}

document.getElementById('num').onblur = function() {
    let status = document.getElementById('num').value;
    if (status < 0 || status > 10) {
        document.getElementById('alert-numbers').innerHTML = "The number is not between 0 and 10";
        checkmark[5].classList.remove('active');
        disableButton();
    } else {
        document.getElementById('alert-numbers').innerHTML = '';
        checkmark[5].classList.add('active');
        enableButton();
    }
}