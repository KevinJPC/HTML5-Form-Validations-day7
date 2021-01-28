function formValidation(event) {
    event.preventDefault();
    let myform = document.getElementById("myform");
    let myalert = document.getElementById("alert");
    let card = document.getElementById("inputCard");
    let cvc = document.getElementById("inputCVC");
    let amount = document.getElementById("inputAmount");
    let name = document.getElementById("inputName");
    let lastName = document.getElementById("inputLastName");
    let city = document.getElementById("inputCity");
    let states = document.getElementById("inputState");
    let postalCode = document.getElementById("inputZip");
    let cardType = document.getElementsByName("inlineRadioOptions");
    let checkInput = document.getElementById("checkInput");
    let message = document.getElementById("floatingMessage");
    let submitForm = true;


    //validacion de digitos de la tarjeta de credito
    if (!(card.value.length == 16)) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        card.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        card.style.backgroundColor = "white";
    }
    //validacion de digitos del cvc
    if (cvc.value.length != 3) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        cvc.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        cvc.style.backgroundColor = "white";
    }

    //validación del amount
    if (amount.value.length == 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        amount.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        amount.style.backgroundColor = "white";
    }

    //Validacion del nombre
    if (name.value.length == 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        name.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        name.style.backgroundColor = "white";
    }

    //Validación de apellido
    if (lastName.value.length == 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        lastName.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        lastName.style.backgroundColor = "white";
    }

    //Validación de la ciudad
    if (city.value.length == 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        city.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        city.style.backgroundColor = "white";
    }

    //Validación del estado
    if (states.value == "Pick a State") {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        states.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        states.style.backgroundColor = "white";
    }

    //Validación de la codigo postal
    if (postalCode.value.length == 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        postalCode.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        postalCode.style.backgroundColor = "white";
    }

    //Validación de la tarjeta credito
    let checkOption = false; //variable boolean.. false , true
    for (let i = 0; i < cardType.length; i++) {
        if (cardType[i].checked) {
            checkOption = true;
        }
    }
    if (checkOption == false) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        checkInput.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        checkInput.style.backgroundColor = "white";
    }

    //Validación del mensaje
    if (message.value.length == 0) {
        myalert.style.display = "block";
        myalert.textContent = "Some fields are missing";
        message.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        message.style.backgroundColor = "white";
    }

    if(submitForm == true){
        myform.submit();
    }
}