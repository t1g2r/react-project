import React from 'react';
import '../Layout/Navbar.css';
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="logo">
          <img src={Logo} alt="Nav Logo" />
          <span className='logo-text'>Local Information</span>
      </div>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            등록하기
          </li>
          <li>
            조회하기
          </li>
          <li>
            마이페이지
          </li>
          <li>
            로그아웃
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;