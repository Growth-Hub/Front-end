import React, { useState, useEffect, useMemo } from 'react';
import styled from "styled-components";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import Search from '../components/Search';
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useFirebaseLogin } from '../hooks/useFirebaseLogin';

const StyledHeader = styled.header<{shrink:boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid #ddd;
  transition: height 0.3s ease; 
  height: ${props => props.shrink ? '100px' : '134px'};
`;

const Profile = styled.div`
  position: absolute;
  top: 30px;
  right: 180px;
`;

const UserProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
`;

const LogoutBtn = styled.button`
  margin-left: 10px;
`;


export default function Header() {
  const navigate = useNavigate();
  
  //카테고리 관리
  const [shrink, setShrink] = useState(false);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShrink(currentScrollY > 50);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //User
  const [user, setUser] = useState<User | null>(null); 
  const auth = getAuth();
  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return userState; 
  }, [auth]);
  const { logout } = useFirebaseLogin();

  return (
    <StyledHeader shrink={shrink}>
      <Search />
      <Profile>
        {user ? (
          <Username>
            {user.photoURL ? (
              <UserProfileImage src={user.photoURL} alt="User profile" />
            ) : (
              <FaRegUserCircle style={{marginRight: '5px'}}/>
            )}
            {user.displayName}
            <LogoutBtn onClick={() => logout()}>Logout</LogoutBtn>
          </Username> 
        ) : (
          <button onClick={() => navigate("/signin")}>로그인</button> 
        )}
      </Profile>
    </StyledHeader>
  );
}