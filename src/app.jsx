import "./styles/main.css"

const App = () => {
  return (
    <div className='App'>
          <div>
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque, itaque temporibus alias quae aut consectetur. Architecto ullam quis veniam doloremque harum quam modi aut, tempora sequi earum sapiente sit.</p>
                <div className="find_me"></div>
              </div>
            </main>
          </div>
    </div>
  )
}

export default App;