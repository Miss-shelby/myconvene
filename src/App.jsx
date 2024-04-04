import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home_page'
import Login from './pages/Auth/LoginIn/login.jsx'
import SignUp from './pages/Auth/SignUp/signup.jsx'
import MeetUp from './pages/MeetUpPage/meetUp.jsx'
import QuestionsAnswerDisplay from './pages/QuestionsPage/questionAnswer.jsx'
import User from './pages/userProfile/user.jsx'
import Auth from './Authentication'
function App() {
  return (
    <>
    <Router>
      <div className='innerContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<Auth/>}>
            <Route path='/meetUp' element={<MeetUp />} />
            <Route path='/questionAnswer' element={<QuestionsAnswerDisplay />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </div>
     
       
      
    </Router>      
    </>
  )
}


export default App
