import { useForm } from 'react-hook-form';
import { FORM_VALIDATION } from '../constants/form-validation';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					{...register('name', FORM_VALIDATION.NAME)}
				/>
				<span>{errors?.name?.message}</span>
			</div>
			<div>
				<label htmlFor='age'>Age</label>
				<input type='text' id='age' {...register('age', FORM_VALIDATION.AGE)} />
				<span>{errors?.age?.message}</span>
			</div>
			<input type='submit' value='Send' />
		</form>
	);
};

const onSubmit = (data, event) => {};

export default Form;
