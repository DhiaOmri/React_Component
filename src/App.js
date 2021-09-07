import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FullName from "./Component/FullName";
import ProfilePhoto from "./Component/ProfilePhoto";
import Address from "./Component/Address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGift } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGit, faGithub, faGitSquare } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div classNameName="App">
      <div classNameName="page-content page-container" id="page-content">
        <div className="container padding justify-content-center ">
          <div className="row ">
            <div className="col-xl-12 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <ProfilePhoto />
                      </div>
                      <FullName />
                      <p>Web developer</p>{" "}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                     
                    
                    
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <Address></Address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
