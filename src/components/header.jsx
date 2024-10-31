import "/src/components/styles/header.css";
import { FaSearch, FaSun, FaMoon, FaYoutube } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function Header(){
    function changeDark() {
        document.body.classList.toggle("dark-theme");
    }

    return (
        <header>
            <nav>

                <diV className="title">
                    <h1>MILES<sub>MUSIC</sub></h1>
                </diV>
                    <div className="links">
                        <li>VIDEOS</li>
                        <li>FEATURED</li>
                        <li>COMMUNITY</li>
                        <li>PROMOTE YOUR MUSIC</li>
                    </div>
                    <div className="lower">
                        {/* <input type="button" value="SignUp"/> */}
                        <FaMoon onClick={changeDark} id="dark" fontSize={"1.5rem"}/>
                        <FaSearch className="search_btn" />
                    </div>
                <IoIosMenu className="menu_icon"/>
            </nav>
            <main className="personal_details">
                <div className="profile-img">
                    <img src="/src/images/channels4_profile.jpg" alt="" />
                </div>
                <div className="about">
                    <div>
                        <h3 className="name_header">IK MILES</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus accusantium distinctio ratione cupiditate, dolores architecto voluptatum itaque molestias vero et officiis, quidem nam recusandae voluptate blanditiis sapiente, repellat delectus aut.
                    </p>
                    <a href="https://www.youtube.com/@ikmiles2">
                        <button id="youtube_link">
                                <FaYoutube color="red" fontSize={"2rem"}/>
                                <h3>YouTube</h3>
                        </button>
                    </a>
                </div>
            </main>
      </header>
  );
};