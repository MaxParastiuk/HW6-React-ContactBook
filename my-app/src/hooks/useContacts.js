import { useEffect, useState } from "react";
import api from "../api/api";

export default function useContacts() {
	const [phoneList, setPhoneList] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [state, setState] = useState({
		name: "",
		surname: "",
		phone: "",
	});

	useEffect(() => {
		api.get().then(({ data }) => setPhoneList(data));
	}, []);

	function createContact() {
		api.post("", state).then(({ data }) => setPhoneList([...phoneList, data]));
		setShowForm(!showForm);
	}

	function updateContact(e) {
		setState((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	}

	function deleteContact(id) {
		api.delete(id).then((res) => res.json());
		const newPhoneList = phoneList.filter((list) => list.id !== id);
		setPhoneList(newPhoneList);
	}

	function onChangeShow() {
		setShowForm(!showForm);
	}

	return {
		phoneList,
		deleteContact,
		updateContact,
		createContact,
		onChangeShow,
		showForm,
	};
}
