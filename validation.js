document.addEventListener("DOMContentLoaded", ()=> {
	const email=document.querySelector("#email")
	const submit=document.querySelector("#submit")


const checkInput = () => {
	if (email.value !== ""){
	submit.disabled=""
	} else{
		submit.disabled="disabled"
	}
}

email.addEventListener("change",checkInput)

})