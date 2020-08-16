import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(){
	return(
		<div className="sidebar">
			<ul>
				<li>
					<Link className="sidebar-links" to="/home"> <span className="icon-home"></span>Home</Link>
				</li>

				<li>
					<Link className="sidebar-links" to="/movies"><span className="icon-film"></span>CRUD movies</Link>
				</li>

				<li>
					<Link className="sidebar-links" to="/actors"><span className="icon-users"></span>CRUD actors</Link>
				</li>

				<li>
					<Link className="sidebar-links" to="/favorites"><span className="icon-star"></span>Favorites movies</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;