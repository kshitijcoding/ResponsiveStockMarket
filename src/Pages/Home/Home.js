import React from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import Header from './../../components/Header';
import Search from '../../components/Search';
import 'bulma/css/bulma.css';
import './Home.scss';

export class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div className="tile">
					<div className="tile is-parent is-vertical">
						<Search />
					</div>
				</div>
			</div>
		)
	}
}