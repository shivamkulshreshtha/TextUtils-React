import "./App.css";
import Navbar from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import React from "react";
import Alert from "./components/Alert";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [alert, setAlert] = React.useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar
        title={"TextUtil"}
        aboutText={"About"}
        mode={darkMode}
        setDarkMode={setDarkMode}
        showAlert={showAlert}
      ></Navbar>
      {alert && <Alert alert={alert} />}
      <div className="container my3">
        <TextForm
          heading="Enter Text to analyze below"
          mode={darkMode}
          showAlert={showAlert}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}
