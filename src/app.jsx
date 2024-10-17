import "./styles/main.css";
import Main from "./components/main";
import Footer from "./components/footer.jsx";
import { FaSearch } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <nav>
          {/* <a className="burger-nav"></a> */}
          <search>
            <input type="text" placeholder="Search"/><FaSearch className="FaSearch"/>
          </search>
          <diV className="title">
            <h1>MILES MUSIC</h1>
          </diV>
          <div className="log-color">
            <div className="log">
              <input type="button" value="SignUp" />
              <input type="button" value="Login" />
            </div>
            <cons className="color_BW">
              <div>
                <FaSun color="#d2d2d2"fontSize={"1.3rem"}/><FaMoon fontSize={"1.2rem"}/>
              </div>
            </cons>
          </div>
        </nav>
        <center>
          <div className="refrence">
            <li>VIDEOS</li>
            <li>FEATURED</li>
            <li>COMMUNITY</li>
            <li>PROMOTE YOUR MUSIC</li>
          </div>
        </center>
        <div className="body">
         <div className="profile">
          <img src="/src/styles/gyomei-himejima-5120x2880-17626.jpg" alt="" />
         </div>
         <div className="details">
          <h3>Ik miles</h3>
          <div className="profile-details">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus accusantium distinctio ratione cupiditate, dolores architecto voluptatum itaque molestias vero et officiis, quidem nam recusandae voluptate blanditiis sapiente, repellat delectus aut.
            </p>
            <div className="Find-me">
              <FaYoutube color="red" fontSize={"2rem"}/><h3>YouTube</h3>
            </div>
          </div>
         </div>
        </div>
      </div>

      <Main />
      <Footer />
    </div>
  );
};

export default App;
