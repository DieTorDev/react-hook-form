const messages = {
	name: {
		required: 'Name is required',
		wrong: 'Name is invalid'
	},
	age: {
		required: 'Age is required',
		wrong: 'Age is invalid'
	}
};
const patterns = {
	regexName: /^[a-zñ]+$/i,
	regexAge: /^[1-9]?[0-9]{1}$|^100$/
};

const nameValidation = {
	required: messages.name.required,
	pattern: {
		value: patterns.regexName,
		message: messages.name.wrong
	}
};

const ageValidation = {
	required: messages.age.required,
	pattern: {
		value: patterns.regexAge,
		message: messages.age.wrong
	}
};

export const FORM_VALIDATION = {
	NAME: nameValidation,
	AGE: ageValidation
};
