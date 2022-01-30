import { Errors } from "../../@types"

type data = Record<string, any>
interface ResponseType {
	status: boolean,
	message: string,
	data?: data,
}

export const successResponse = (data?: data): ResponseType => {
	return {
		status: true,
		message: 'Success !',
		data
	}
}

export const errorResponse = (message: string, data?: data): ResponseType => {
	return {
		status: false,
		message: message ?? 'Error !',
		data
	}
}

export const createdResponse = (data?: data): ResponseType => {
	return {
		status: true,
		message: 'Created !',
		data
	}
}

export const notFountResponse = (data?: data): ResponseType => {
	return {
		status: false,
		message: 'Not Found!',
	}
}

export const unauthorizedResponse = (data?: data): ResponseType => {
	return {
		status: false,
		message: 'Unauthorized!',
		data
	}
}

export const unauthenticatedResponse = (data?: data): ResponseType => {
	return {
		status: false,
		message: 'Unauthenticated!',
		data
	}
}

export const errorValidationResponse = (data?: data): ResponseType => {
	return {
		status: false,
		message: 'Data is not valid!',
		data
	}
}

export const invalidPasswordResponse = (data?: data): ResponseType => {
	return {
		status: false,
		message: 'Password is not valid!',
		data
	}
}