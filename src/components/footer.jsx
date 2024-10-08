import './footer.css'
import { FaChevronRight } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
const footer = () => {
  return (
    <div className='footer-container'>
        <div className="section-1">
            <div className="profile">
                <img src="" alt="" />
            </div>
            <div className="email">
                <h2>Subscribe</h2>
                <div className="one">
                    <div className="input">
                        <IoIosMail className='mail' fontSize={"25px"}/>
                        <input type="text" placeholder='Email here...' />
                    </div>
                    <button className='right-icon'><FaChevronRight /></button>
                </div>
            </div>
        </div>
        <div className="section-2">
            <div className="details-1">
                <h3>About Us</h3>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </div>   
            <div className="details-1">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Beat sale</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Audio production</a></li>
                </ul>
            </div>   
            <div className="details-1">
                <h3>Contact</h3>
                <ul>
                    <div className="myemail">
                        <li><a href="#"><IoIosMail className='mail' fontSize={"20px"}/> miles@gmail.com</a></li>
                    </div>
                    <div className="myemail">
                        <li><a href="#"><FaPhone  className='mail' fontSize={"20px"}/> +250-790342423</a></li>
                    </div>
                  
                </ul>
            </div>
        </div>

    </div>
  )
}

export default footer