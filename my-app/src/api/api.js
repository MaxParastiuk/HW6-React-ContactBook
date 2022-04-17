import axios from "axios";

const URL = "https://612687da3ab4100017a68fd8.mockapi.io/contacts/";

export default axios.create({
	baseURL: URL,
	eaders: {
		"Content-Type": "application/json",
	},
});
