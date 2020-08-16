import React from 'react';
import Sidebar from './Sidebar';

function Layout(props){
	return(
	    <React.Fragment>
	    	<Sidebar />
	    	{props.children}
	    </React.Fragment>
	)
}

export default Layout;