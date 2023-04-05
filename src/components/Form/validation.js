const validation =  function(data) {
    let errors = {};
    const regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexNumber =/\d/;
    if(!regexEmail.test(data.email)){
        errors.e1='Email invalido';
    }
    if(!data.email){
        errors.e2 = 'Email Vacio';
    }
    if(data.email.length > 35){
        errors.e3 = 'Eemail debe ser de maximo 35 caracteres';
    }
    if(!regexNumber.test(data.password)){
        errors.p1 = 'Password debe tener al menos un numero';
    }
    if(data.password.length<6 || data.password.length>10){
        errors.p2 = 'El password debe tener entre 6 y 10 caracteres';
    }
    return errors;
}

export default validation;