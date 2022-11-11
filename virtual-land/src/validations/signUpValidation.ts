import * as Yup from 'yup';

const signUpValidationSchema = Yup.object({
    email: Yup.string().required('Please Enter your Email'),
    password: Yup.string().required('Please Enter your password ').min(8,'Make Sure you reached 8 length password'),
    confirmPassword: Yup.string().required(
        'Please Enter your password Again'
    ).oneOf([Yup.ref('password')], 'Passwords must match')

    })
export default signUpValidationSchema