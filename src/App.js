import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { User } from "./pages/User";
import { Admin } from "./pages/Admin";
import { SearchPage } from "./pages/SearchPage";
import "./App.css";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const setLoginStatus = (status) => {
		setIsLoggedIn(status);
	};
	const [username, setUsername] = useState();
	const [roles, setRoles] = useState();
	const [searchResult, setSearchResult] = useState("");

	return (
		<Router>
			<div className="App">
				<Header
					loginMsg={isLoggedIn ? "Logout" : "Login"}
					isLoggedIn={isLoggedIn}
					username={username}
					roles={roles}
					setSearchResult={setSearchResult}
				/>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/search">
						<SearchPage searchString={searchResult.toString()} />
					</Route>
					<Route exact path="/user">
						<User />
					</Route>
					<Route exact path="/admin">
						<Admin />
					</Route>
					<Route path="/login-out">
						<Login
							loginMsg={isLoggedIn ? "Logout" : "Login"}
							isLoggedIn={isLoggedIn}
							setLoginStatus={setLoginStatus}
							setUsername={setUsername}
							setRoles={setRoles}
						/>
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Path does not exist</h2>
		</div>
	);
}
