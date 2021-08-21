// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtile-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtile-LightMode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Blogging"
        aboutText="About App"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* {/users---> component1
          /users/home---> component2}  
          So without exact keyword in router 
          in both the condition it will render component 1 */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter Your Text to analyze"
          mode={mode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
