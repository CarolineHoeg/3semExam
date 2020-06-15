import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
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
		<>
			<Navbar bg="dark" variant="dark">
				<NavLink exact activeClassName="active" to="/">
					Home
				</NavLink>
				<Form inline className="searchform" onSubmit={doSearch}>
					<FormControl type="text" className="mr-sm-2 search"
						placeholder="Search movietitle"
						value={search}
						onChange={onChange} />
					<Button variant="outline-info" onClick={doSearch}>Search</Button>
				</Form>
				<Nav className="mr-auto">
					{isLoggedIn && <React.Fragment>{renderRoleButton(roles)}</React.Fragment>}
					<Nav.Link>
						<NavLink activeClassName="active" to="/login-out">
							<p className="headerText">{loginMsg}</p>
						</NavLink>
					</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
}
