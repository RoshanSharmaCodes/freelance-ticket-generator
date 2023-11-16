import { Provider } from "react-redux"
import "./App.css"
import Dashboard from "./Layout/Dashboard/Dashboard"
import store from "./Store/store"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "./Layout/LoginForm/LoginForm"
import RegisterForm from "./Layout/RegisterForm/RegisterForm"
import ForgotPasswordForm from "./Layout/ForgotPasswordForm/ForgotPassword"
import ConfirmPasswordForm from "./Layout/ConfirmPassword/ConfirmPassword"

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Register" element={<RegisterForm />} />
            <Route path="/ForgotPassword" element={<ForgotPasswordForm />} />
            <Route path="/ConfirmPassword" element={<ConfirmPasswordForm />} />
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </div>
      </Provider>
  )
}

export default App
