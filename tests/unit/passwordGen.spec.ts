import useUtilities from '@/composables/useUtilities'
const {generatePassword, isPasswordValid} = useUtilities()

describe("Password Utils", () => {
    test('generator should return a string with same length as specified argument', () => {
        const passwordLength = Math.floor(Math.random() * 100)
        const password = generatePassword(passwordLength)
        expect(password.length).toBe(passwordLength)
    })
    // test('pass 0 as password gen argument', () => {
    //     const password = generatePassword(0)
    // })

    test('validator should return TRUE for password length >= 16', () => {
        const password = generatePassword(20)
        const test = isPasswordValid(password)
        expect(test).toBe(true)
    })
    test('validator should return FALSE for password length < 16', () => {
        const password = generatePassword(10)
        const test = isPasswordValid(password)
        expect(test).toBe(false)
    })
    test('validator should return TRUE for password with at least one Uppercase letter', () => {
        const test = isPasswordValid("Defghijklmnopqrstuvwxyz")
        expect(test).toBe(true)
    })
    test('validator should return FALSE for password without at least one Uppercase letter', () => {
        const test = isPasswordValid("defghijklmnopqrstuvwxyz")
        expect(test).toBe(false)
    })
    
})