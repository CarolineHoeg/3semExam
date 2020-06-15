function URLS() {
	function Login() {
		const URL = "https://carolinehoeg.com/exam/api/login";
		return URL;
	}
	function User() {
		const URL = "https://carolinehoeg.com/exam/api/info/user";
		return URL;
	}

	function Admin() {
		const URL = "https://carolinehoeg.com/exam/api/info/admin";
		return URL;
	}

	function AdminData() {
		const URL = "https://carolinehoeg.com/exam/api/fetch";
		return URL;
	}

	function Search(title) {
		let formattedTitle = title.split(" ").join("%20");
		const URL = "https://carolinehoeg.com/exam/api/movie-info/" + formattedTitle;
		return URL;
	}

	return { Login, User, Admin, AdminData, Search };
}
export default new URLS();
