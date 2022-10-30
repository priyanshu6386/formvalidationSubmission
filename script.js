let globalIsSubmitted = false 

function validate(isSubmitted = false) {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
    let phone = document.getElementById('phone-number').value
	let country = document.getElementById('country').value
    let male_g = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let others = document.getElementById('others').checked

    
    
	let error = false

	if(isSubmitted) {``
		globalIsSubmitted = true
	}

	if(globalIsSubmitted) {
        var letters = /^[a-zA-Z]*$/;
		if(firstName.length >= 3 && isNaN(firstName) && firstName.match(letters)) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else {
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
			error = true
		}

		if(lastName.length >= 3 && isNaN(lastName) && lastName.match(letters)) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
			error = true
		}

		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 && email.lastIndexOf(".") < email.length - 2 && email.lastIndexOf(".") >= email.length-4 )
			 {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
			error = true
		}

        var get_num = String(phone).charAt(0);
        var first_num = Number(get_num)
        // var nums = /^[0-9]*$/;
        var nums = /^\d{10}$/;
        
        if(phone.length===10 && !isNaN(phone) && first_num > 5 && phone.match(nums)){
            document.getElementById('phone-valid').style.display = 'block'
            document.getElementById('phone-invalid').style.display = 'none'
        } else{
            document.getElementById('phone-invalid').style.display = 'block'
            document.getElementById('phone-valid').style.display = 'none'
            error = true
        }

          
        if(male_g || female || others){
            document.getElementById('valid-gender').style.display = "block"
            document.getElementById('invalid-gender').style.display = "none"
        } else {
            document.getElementById('invalid-gender').style.display = "block"
            document.getElementById('valid-gender').style.display = "none"
            error = true
        }


		if(country != 'None') {
			document.getElementById('country-valid').style.display = 'block'
			document.getElementById('country-invalid').style.display = 'none'
		} else {
			document.getElementById('country-invalid').style.display = 'block'
			document.getElementById('country-valid').style.display = 'none'
			error = true
		}


		if(!error && isSubmitted) {
			alert('Your details have been saved successfully!')

			document.getElementById('registration-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'none'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
	}
}