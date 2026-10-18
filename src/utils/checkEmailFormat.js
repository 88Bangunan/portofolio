export const checkEmailFormat = (email) => {
    return (email.includes("@") && email.includes('.') && email.split("")[0] !== '@' && email.split("")[email.length - 1] !== '.' && email.split("")[0] !== '.' && email.split("")[email.length - 1] !== '@' && email.indexOf('.') - email.indexOf('@') > 1)
}