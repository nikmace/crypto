import React from 'react';
import './Unauthorized.css';
import { Link } from 'react-router-dom';

function Unauthorized() {
    return (
        <section class="page_404">
            <div class="container">
                	
                    <div class="col-sm-12 ">
                        <div class="col-sm-10">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">401</h1>
                            </div>
                                <div class="contant_box_404">
                                <h3 class="h2">
                                Looks like you are not authorized!
                                </h3>
                                
                                <p>please login to view this page</p>
                                
                                <Link to="/auth/login" class="link_404">Login</Link>
                            </div>
                        </div>
		            </div>
		        
	        </div>
        </section>
    )
}

export default Unauthorized;
