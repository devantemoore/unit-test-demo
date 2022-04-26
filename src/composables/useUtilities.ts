import constants from '@/constants'
export default function useUtilities(){
    const MINIMUM_PASSWORD_LENGTH = 16
    const atleastOneUppercaseLetter = new RegExp("[A-Z]")

    const generatePassword = (length:number):string => {
        let password = ""
        for (let index = 0; index < length; index++) {
            password = password + constants.CHARS[Math.floor(Math.random() * constants.CHARS.length)]
        }
        return password
    }
    const isPasswordValid = (password:string):boolean => {
        const validLength = password.length >= MINIMUM_PASSWORD_LENGTH
        const oneUppercase = atleastOneUppercaseLetter.test(password)

        return validLength && oneUppercase
    }
    return {
        generatePassword,
        isPasswordValid
    }
}