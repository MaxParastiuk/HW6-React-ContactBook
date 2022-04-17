import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useContacts from "../hooks/useContacts";
import "./ContactList.css";
import Form from "./Form";
import PhoneListItem from "./PhoneListItem";

export default function ConatactList() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const {
		phoneList,
		deleteContact,
		updateContact,
		createContact,
		onChangeShow,
		showForm,
	} = useContacts();

	const onDeleteButtonClick = (id) => {
		deleteContact(id);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createContact();
	};

	const handleInput = (e) => {
		e.preventDefault();
		updateContact(e);
	};

	return (
		<>
			<div className={"App " + theme}>
				<header>
					<button onClick={toggleTheme} className={"btn__theme__" + theme}>
						{theme}
					</button>
				</header>
				{!showForm ? (
					<table className={"table_phone__" + theme}>
						<thead>
							<tr>
								<th>Имя</th>
								<th>Фамилия</th>
								<th>Телефон</th>
							</tr>
						</thead>
						{phoneList.map((data) => (
							<PhoneListItem
								key={data.id}
								item={data}
								onDeleteButtonClick={onDeleteButtonClick}
							/>
						))}
					</table>
				) : (
					<Form
						handleSubmit={handleSubmit}
						handleInput={handleInput}
						onHideForm={onChangeShow}
					/>
				)}
				<button className={"addAndHide-btn__" + theme} onClick={onChangeShow}>
					{showForm ? "Hide form" : "Add"}
				</button>
			</div>
		</>
	);
}
