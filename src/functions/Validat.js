export const validate = (input, type) => {
    const errors = {};

    if (!input.fullName) {
        errors.fullName = "FullName is required"
    } else {
        delete errors.fullName
    }

    if (!input.password) {
        errors.password = "password is required";
    } else if (input.password.length < 6) {
        errors.password = "Password must have a minimum 6 characters"
    } else {
        delete errors.password
    }

    if (type === "signUp") {
        if (!input.confirmPassword) {
            return "ConfirmPassword is required";
        } else if (input.confirmPassword !== input.password) {
            return "Passwords do not match"
        } else {
            delete errors.confirmPassword
        }
    }
    return errors;
}