export function ValidEmail(email){

    var regEmail = /^([a-zA-Z0-9_.+-])+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regEmail.test(email);
}