import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

function isAuth() {
    const token = Cookies.get('token');
    let email = '';
    if (token) {
        jwt.verify(token, 'SALAMI', function(err, decoded) {
            if (err) {
                console.log(err)
            } 
            email = decoded.email
        }) 
    }
    return {
        isAuth: true,
        email,
    }
}

export default isAuth;