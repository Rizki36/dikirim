import * as yup from 'yup'

export const signupSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(8).max(25).required(),
	username: yup.string().min(4).max(25).required(),
	name: yup.string().min(4).max(25).required(),
})