import React from 'react'


import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';

function Navbar(props) {
    return (<div>
        <p>Binterest</p>
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", marginBottom: "10px" }}>

            <Link className='showlink' color="inherit" to="/my-bin" >
                        My Bin
                    </Link>

                    <Link className='showlink' color="inherit" to="/">Images
                        </Link>

                

            </div>
           
        </Container>
    </div>);


}
export default Navbar;