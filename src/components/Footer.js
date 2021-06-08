import React from 'react'
import './css/footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>
            <h3>Thanks for checking us out!</h3>
            <p>If you have any questions, please <Link to='/contact'><u>contact us</u></Link></p>
        </div>
    )
}

export default Footer
