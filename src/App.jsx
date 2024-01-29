// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SignUpPage from './pages/SignUpPage';
// import MainPage from './pages/MainPage';
// import Navbar from './components/Navbar'
// import MyPage from './pages/MyPage';
// import ModifyPage from './pages/ModifyPage'

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Navbar/>
//         <ul>
//           {/* Link 컴포넌트를 사용하여 SignUpPage로 이동하는 링크 추가 */}
//           <li>
//             <Link to="/">메인페이지</Link>
//           </li>
//           <li>
//             <Link to="/signup">회원가입</Link>
//           </li>
//           <li>
//             <Link to="/mypage">업소 등록 페이지</Link>
//           </li>
//           <li>
//             <Link to="/modifypage">업소 수정 페이지</Link>
//           </li>
//           {/* 다른 페이지에 대한 링크도 추가 가능 */}
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/mypage" element={<MyPage />} />
//         <Route path="/modifypage" element={<ModifyPage />} />
//         <Route path="/" element={<MainPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx'
import ModifyPage from './pages/ModifyPage.jsx'

import Sidebar from './components/Sidebar.jsx';
import Headerbar from './components/Headerbar.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LogoutPage from './pages/LogoutPage.jsx';



function App() {
  return (
    <div>
    <BrowserRouter>
    {/*<Navbar />
       <ul>
           <li>
             <Link to="/mainpage">메인페이지</Link>
           </li>
           <li>
             <Link to="/signup">회원가입</Link>
           </li>
           <li>
             <Link to="/registerpage">업소 등록 페이지</Link>
           </li>
           <li>
             <Link to="/modifypage">업소 수정 페이지</Link>
           </li>
      </ul> */}
      <Headerbar />
      {/* 메인 영역 */}
      <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', paddingTop: '5%' }}>
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/modifypage" element={<ModifyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  </div>
);
}

export default App;