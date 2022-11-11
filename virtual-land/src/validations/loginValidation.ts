import * as Yup from 'yup';

const loginValidationSchema = Yup.object({
    email: Yup.string().required('Please Enter your Email'),
    password: Yup.string().required('Please Enter your password '),
 
    })
export default loginValidationSchema