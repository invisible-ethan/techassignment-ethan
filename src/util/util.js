export const setUserSession = (user) =>{
    sessionStorage.setItem('given_name', user.given_name);
    sessionStorage.setItem('family_name', user.family_name);
    sessionStorage.setItem('email', user.email);
} 

export const getUserGivenName = () =>{
    return sessionStorage.getItem('given_name');
}

export const getUserFamilyName = () =>{
    return sessionStorage.getItem('family_name');
}

export const getUserEmail = () =>{
    return sessionStorage.getItem('email');
}