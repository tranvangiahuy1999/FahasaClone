export const isPhoneNumber = (phone) => {
    if(!phone){
        return false;
    }
    var phoneRegEx = /\D+/;
    if(phone.length > 15 || phone.length < 10|| phone.replace('+','').match(phoneRegEx))
        return false;
    return true;
};
export const countWords = (str) => {
    return str.trim().split(/\s+/).length;
}