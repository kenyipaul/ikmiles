import "./styles/main.css"
import Main from "./components/main";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div className='app'>
          <div className="header">
            <nav>
              <div className="Search">
                  <input type="text" />
              </div>
              <diV className="title">
                <h1>MILES MUSIC</h1>
              </diV>
              <div className="log&color">
                <div className="log">
                  <input type="button" value="SIGN IN" />
                  <input type="button" value="LOGIN" />
                </div>
                <div className="color_BW">
                  <div></div>
                </div>
              </div>
            </nav>
            <main>
              <div className="image"></div>
              <div className="details">
                <h3>IK MILES</h3>
                <div className="info">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque, itaque temporibus alias quae aut consectetur. Architecto ullam quis veniam doloremque harum quam modi aut, tempora sequi earum sapiente sit.</p>
                </div>
                <div className="find_me"></div>
              </div>
            </main>
          </div>


          <Main />
          <Footer />
    </div>
  )
}

export default App;