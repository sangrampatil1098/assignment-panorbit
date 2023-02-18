import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";
function Dashboard() {
  const data = useContext(DataContext);
  return (
    <>
      <div className="dashboard">
        <div className="user-list-box">
          <h2 className="user-list-header">Select an account</h2>
          {data.map((ele) => {
            return (
              <div className="user-list-box2" key={ele.id}>
                <Link to="/userDetailsPage" className="links">
                  <div>
                    <img src={ele.profilepicture} className="user-img" alt="" />
                  </div>
                </Link>
                <Link to="/userDetailsPage" className="links">
                  <div className="users-list" key={ele.id}>
                    {ele.name}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
