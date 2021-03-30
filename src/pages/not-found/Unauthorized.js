import React from 'react';
import './Unauthorized.css';
import { Link } from 'react-router-dom';

function Unauthorized() {
    return (
        <section className="page_404">
            <div className="container">
                	
                    <div className="col-sm-12 ">
                        <div className="col-sm-10">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">401</h1>
                            </div>
                                <div className="contant_box_404">
                                <h3 className="h2">
                                Looks like you are not authorized!
                                </h3>
                                
                                <p>please login to view this page</p>
                                
                                <Link to="/auth/login" className="link_404">Login</Link>
                            </div>
                        </div>
		            </div>
		        
	        </div>
        </section>
    )
}

export default Unauthorized;
