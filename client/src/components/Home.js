import React from 'react';
import '../App.css';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<p>
				This is a simple example of using React to Query the Pokemon API. Start by clicking any button below
			</p>
			<Link className='showlink' to='/pokemon/page/0'>
						Click here to get Pokemon List
					</Link>
					
			
		</div>
	);
};

export default Home;