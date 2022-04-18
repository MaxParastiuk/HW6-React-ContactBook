import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Form(props) {
	const { handleSubmit, handleInput, onHideForm } = props;
	const { theme } = useContext(ThemeContext);

	return (
		<form className='contact_form' action='' onSubmit={handleSubmit}>
			<input
				className={"input__" + theme}
				type='text'
				placeholder='Name'
				name='name'
				onChange={handleInput}
			/>
			<input
				className={"input__" + theme}
				type='text'
				placeholder='Surname'
				name='surname'
				onChange={handleInput}
			/>
			<input
				className={"input__" + theme}
				type='text'
				placeholder='Phone number'
				name='phone'
				onChange={handleInput}
			/>
			<button className={"btn_form__" + theme}>Save</button>
			<button className={"btn_form__" + theme} onClick={onHideForm}>
				Cancle
			</button>
		</form>
	);
}
