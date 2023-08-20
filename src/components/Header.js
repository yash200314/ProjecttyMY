import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <div className="bg-white-950 ">
      <nav className="px-2 pt-3 pb-8 bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 cursor-pointer flex justify-evenly list-none space-x-3 shadow-lg shadow-white-500/25 ">
        <div className="container mx-auto my-auto">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl  text-slate-500 ">
              INDO-Pharmacy Store
            </div>
            <ul className="flex space-x-4">
              <li className="hover:bg-orange-500 text-center justify-center w-20 text-neutral-600">
                <Link to="/"> Home</Link>
              </li>

              {/* <!--Menu buttion icon--> */}
              <div className="relative pt-0">
                <button className="relative flex-justify-center items-center hover:bg-orange-500 text-center justify-center w-20 text-neutral-600  group flex">
                  <p className="px-4 ">Products</p>
                  <span className="border-l p-2 hover:bg-gray-100"></span>

                  <div className="absolute hidden group-focus:block top-full  bg-white shadow-md mt-1 rounded transition">
                    <ul className="text-left border rounded">
                      <li className="px-4 py1 hover:bg-gray-100 border-b">
                        Hair oil
                      </li>
                      <li className="px-4 py1 hover:bg-gray-100 border-b">
                        ASHVAGANDHA CAPSULE
                      </li>
                      <li className="px-4 py1 hover:bg-gray-100 border-b">
                        Face Mask
                      </li>
                      <li className="px-4 py1 hover:bg-gray-100 border-b">
                        PATANJALI BALM
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
              <li className="hover:bg-orange-500 text-center justify-center w-20 text-neutral-600">
              <Link to="/Aboutus">About</Link>
              </li>
              <li className=" hover:bg-orange-500 text-center justify-center w-20 text-neutral-600">
                <Link to="/Contact">Contact</Link>
              </li>
              <redirect to="/" />

              {/* <!--Cart icon--> */}
              <div className="relative flex items-center">
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
              </div>
              <li>
                <li>{isAuthenticated && <p>welcome {user.name}</p>}</li>
              </li>
              {isAuthenticated ? (
                <li className="hover:bg-blue-500 w-20 text-center">
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="hover:bg-blue-500 w-20 text-center">
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
