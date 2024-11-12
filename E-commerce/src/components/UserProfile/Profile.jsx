import React,{useState,useContext, useEffect} from 'react'
import './profile.css';
import Profilepic from './Profilepic';
import Editprofile from './Editprofile';
import Myorders from './Myorders';
import Myaddresses from './Myaddresses';
import Wishlist from './Wishlist';
import { UserContext } from '../../Usecontext';
import { RiBarChartHorizontalLine } from "react-icons/ri";


const components = [<Editprofile/>,<Myorders/>,<Wishlist/>,<Myaddresses/>,<Wishlist/>];



export default function Profile() {
  const [f, setF] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768); // Open by default on larger screens
  const { fun } = useContext(UserContext);

  useEffect(() => {
    fun();
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // Open sidebar by default on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSwitch = (index) => {
    setF(index);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false); // Close sidebar after selecting an option on small screens
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row m-0 gap-5">
          <div className="profile-left-toggle col-12 mb-3 d-md-none">
            <RiBarChartHorizontalLine className="fs-1" onClick={toggleSidebar} />
          </div>
          {isSidebarOpen && (
            <div className="profile-left col-md-3">
              <Profilepic f={f} content_switch={handleContentSwitch} />
            </div>
          )}
          <div className={isSidebarOpen ? "profile-right col-md-8" : "profile-right col-md-12"}>
            <div className="mt-5">
              {components[f]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
