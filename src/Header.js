import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export function Header({ isLoggedIn, loginMsg, username, roles, setSearchResult }) {
	const [search, setSearch] = useState("");
	let history = useHistory();

	const doSearch = (evt) => {
		evt.preventDefault();
		history.push("/search");
		setSearchResult(search);
		setSearch("");
	};

	const onChange = (evt) => {
		evt.preventDefault();
		setSearch(evt.target.value);
	};

	const renderRoleButton = (roles) => {
		if (roles.includes("user")) {
			return (
				<Nav.Link className="right">
					<NavLink activeClassName="active" to="/user">
						<p className="headerText">{username}</p>
					</NavLink>
				</Nav.Link>
			);
		} else if (roles.includes("admin")) {
			return (
				<Nav.Link className="right">
					<NavLink activeClassName="active" to="/admin">
						<p className="headerText">Admin page</p>
					</NavLink>
				</Nav.Link>
			);
		}
	};

	return (
		<ul className="header">
			<li>
				<NavLink exact activeClassName="active" to="/">
					Home
				</NavLink>
			</li>
			<li>
				<Form inline className="searchform" onSubmit={doSearch}>
					<FormControl type="text" className="mr-sm-2 search"
						placeholder="Search movietitle"
						value={search}
						onChange={onChange} />
					<Button variant="outline-info" onClick={doSearch}>Search</Button>
				</Form>
			</li>
			<li>
				{isLoggedIn && <React.Fragment>{renderRoleButton(roles)}</React.Fragment>}
				<NavLink activeClassName="active" to="/login-out">
					<p className="headerText">{loginMsg}</p>
				</NavLink>
			</li>
		</ul >
	);
}
