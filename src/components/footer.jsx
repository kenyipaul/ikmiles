import './styles/footer.css'
import { FaChevronRight } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone , FaTiktok } from "react-icons/fa6";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import profile from '../styles/channels4_profile.jpg'
const footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer">
            <div className="section-1">
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
                <div className="email">
                    <h2>Subscribe</h2>
                    <div className="one">
                        <div className="input-box">
                            <input type="text" placeholder='Email here...' />
                            <IoIosMail className='mail' fontSize={"25px"}/>
                        </div>
                        <button className='right-icon'><FaChevronRight /></button>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="details-1">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>   
                <div className="details-1">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Beat sales</a></li>
                        <li><a href="#">Music production</a></li>
                        <li><a href="#">Video production</a></li>
                    </ul>
                </div>   
                <div className="details-1">
                    <h3>Contact</h3>
                    <ul>
                        <div className="myemail">
                            <li><a href="#"><IoIosMail className='mail' fontSize={"20px"}/> Miles@gmail.com</a></li>
                        </div>
                        <div className="myemail">
                            <li><a href="#"><FaPhone  className='mail' fontSize={"20px"}/> +250-790342423</a></li>
                        </div>
                    
                    </ul>
                    <div className="socials">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/profile.php?id=100082900554180">
                                <FaFacebookF fontSize={"20px"}/>
                            </a>
                        </div> 
                        <div className="social-icon">
                            <a href="https://www.tiktok.com/@ikmiles1">
                                <FaTiktok fontSize={"20px"}/>
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.instagram.com/ik_miles2/profilecard/?igsh=MTZvMGFhbXY2Mzc3ag==">
                                <FaInstagram fontSize={"20px"}/>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        </div>

    </div>
  )
}

export default footer