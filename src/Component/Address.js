import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Address extends Component {
    render() {
        return (
            <div>
                
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">zawachiomri@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">+216 41 995 961</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contact Us</h6>
                              
                                <ul className="social-link list-unstyled m-t-40 m-b-10 ">
                                    <a href="https://github.com/DhiaOmri"className="m-20">
                                    <FontAwesomeIcon icon={faGithub}  style={{fontSize:"30px"}}/>
                                    </a>
                                    <a href="https://github.com/DhiaOmri">
                                    <FontAwesomeIcon icon={faLinkedin}  style={{fontSize:"30px"}}/>
                                    </a>
                                </ul>
                            </div>
                        
            </div>
        )
    }
}
