import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<>
			<h1>Page Not Found</h1>
			<Link to="/"></Link>
		</>
	)
}

export default NotFound
