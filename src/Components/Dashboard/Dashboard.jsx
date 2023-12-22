import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#1E1F25]">
      <div className="md:w-64 min-h-screen bg-[#050505] text-white">
        <ul className="menu p-4 space-y-2">
          <>
            <Link to={"/"}>
              <img
                className="w-[230px] mb-[50px]"
                src="https://svgshare.com/i/118G.svg"
                alt=""
              />
            </Link>
            <li className="text-[18px] font-semibold  flex items-center justify-center">
              <div className="avatar">
                <div className="w-24 rounded-full block mx-auto">
                  <img src={user?.photoURL} alt="User Avatar" />
                </div>
              </div>
            </li>

            <li className="text-[18px] font-semibold">
              <NavLink to="/dashboard">
                Your Home <IoHome className="text-[24px]" />
              </NavLink>
            </li>
            <li className="text-[18px] font-semibold">
              <NavLink to="/dashboard/archived">
                Archive To-Do <LuListTodo className="text-[24px]" />
              </NavLink>
            </li>
            <li className="text-[18px] font-semibold">
              <NavLink
                onClick={handleSignOut}
                to="/dashboard/my-donation-requests"
              >
                Log out <IoIosLogOut className="text-[24px]" />
              </NavLink>
            </li>
          </>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
