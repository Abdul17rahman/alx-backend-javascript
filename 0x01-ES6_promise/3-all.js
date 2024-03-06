import { uploadPhoto, createUser } from "./utils"

export default function handleProfileSignup() {
	uploadPhoto().then((data) => {
		console.log(data.body)
		return createUser()
	}).then((data) => {
		console.log(`${data.firstName} ${data.lastName}`)
	}).catch(() => {
		Error()
	})
}