import { AiOutlineCalculator, AiFillCar } from "react-icons/ai";
import { PiVideo } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen p-10">
      <h1 className="text-white font-bold text-4xl mb-8">React Projects</h1>
      <ul className="homePageList flex flex-wrap gap-4">
        <li>
          <NavLink
            to="emicalculator"
            className={({ isActive }) =>
              isActive ? Classes.active : undefined
            }
          >
            <div className="p-6 border-2 border-slate-300">
              <AiOutlineCalculator className="text-white text-4xl mb-3 m-auto" />
              <p className="text-white text-xl text-center">EMI Calculator</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="videogallery"
            className={({ isActive }) =>
              isActive ? Classes.active : undefined
            }
          >
            <div className="p-6 border-2 border-slate-300">
              <PiVideo className="text-white text-4xl mb-3 m-auto" />
              <p className="text-white text-xl text-center">Video Gallery</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive ? Classes.active : undefined
            }
          >
            <div className="p-6 border-2 border-slate-300">
              <FaOpencart className="text-white text-4xl mb-3 m-auto" />
              <p className="text-white text-xl text-center">Products</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="filtertable"
            className={({ isActive }) =>
              isActive ? Classes.active : undefined
            }
          >
            <div className="p-6 border-2 border-slate-300">
              <HiDocumentReport className="text-white text-4xl mb-3 m-auto" />
              <p className="text-white text-xl text-center">Daily Report</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="carReports"
            className={({ isActive }) =>
              isActive ? Classes.active : undefined
            }
          >
            <div className="p-6 border-2 border-slate-300">
              <AiFillCar className="text-white text-4xl mb-3 m-auto" />
              <p className="text-white text-xl text-center">Car Report</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
