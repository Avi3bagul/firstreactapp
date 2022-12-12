import * as Yup  from 'yup';

const signUpSchema = Yup.object({
    userName: Yup.string().min(4).max(20).required("plase enter your First Name"),
    // lName: Yup.string().min(4).max(20).required("plase enter your Last Name"),
    email: Yup.string().email().min(12).max(30).required("please enter your Email id !"),
    massage: Yup.string().min(2).max(1000).required("Give your Feedback !")
})

export default signUpSchema;

const signUpSchema1 = Yup.object({
    username: Yup.string().min(4).max(30).required("please enter your name"),
    email: Yup.string().email().min(12).max(30).required("please enter your Email id !"),
    mob: Yup.string().min(10).max(10).required("please enter your Email id !"),
    msg: Yup.string().min(4).max(30).required("please enter your Email id !"),
})

export {signUpSchema1} ;