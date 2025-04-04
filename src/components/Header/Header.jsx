import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Container ,LogoutBtn } from "../index.js";

const Header = () => {
  const authStatus = useSelector((state) => state.status);

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <>
    <Container>
      <nav>
        <div className="flex bg-blue-500 p-2 justify-between items-center rounded-2xl mt-0.5 border-sky-800 shadow-2xl shadow-blue-500">
          <Link to="/">
            <div className="flex border-blue-700 border-2 rounded-2xl p-1 ml-8 bg-blue-400 shadow-2xl">
              <img src="../logo_1.png" alt="image" className="h-10 " />
              <h3 className="text-2xl p-1 ml-1">BlogPost</h3>
            </div>
          </Link>
          <div className="w-[35rem] mr-10">
            <ul className="flex justify-between items-center">
            
        
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

            </ul>
          </div>
        </div>
      </nav>
      </Container>
    </>
  );
};

export default Header;
