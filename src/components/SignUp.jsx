import "../css/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../js/signup.js";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  return (
    <>
      <div className="container sign-up-bg">
        <div className="row py-5 mt-4 align-items-center">
          <div className="navigate">
            <Link className="navigate-text" to={"/"}>
              <span className="navigate-icon">
                <FontAwesomeIcon icon={solid("arrow-left")} />
              </span>
              Back to Home
            </Link>
          </div>
          {/* <!-- For Demo Purpose --> */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
              alt=""
              className="img-fluid mb-3 d-none d-md-block"
            />
            <h1>Create an Account</h1>
          </div>

          {/* <!-- Registeration Form --> */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
              <div className="row">
                {/* <!-- First Name --> */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 my-icons">
                      {/* <i className="fa fa-user text-muted"></i> */}
                      <FontAwesomeIcon icon={solid("user")} />
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control bg-white border-left-0 border-md my-fields"
                  />
                </div>
                {/* <!-- Last Name --> */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 my-icons">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control bg-white border-left-0 border-md my-fields"
                  />
                </div>
                {/* <!-- Email Address --> */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 my-icons">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white border-left-0 border-md my-fields"
                  />
                </div>
                {/* <!-- Phone Number --> */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 my-icons">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="countryCode"
                    name="countryCode"
                    style={{ maxWidth: "80px" }}
                    className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted my-fields"
                  >
                    <option value="">+12</option>
                    <option value="">+10</option>
                    <option value="">+15</option>
                    <option value="">+18</option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control bg-white border-md border-left-0 pl-3 my-fields"
                  />
                </div>
                .{/* <!-- Job --> */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 my-icons">
                      {/* <i className="fa fa-black-tie text-muted"></i> */}
                      {/* <FontAwesomeIcon icon={brands("black-tie")} /> */}
                    </span>
                  </div>
                  <select
                    id="job"
                    name="jobtitle"
                    className="form-control custom-select bg-white border-left-0 border-md my-fields"
                  >
                    <option value="">Choose your job</option>
                    <option value="">Designer</option>
                    <option value="">Developer</option>
                    <option value="">Manager</option>
                    <option value="">Accountant</option>
                  </select>
                </div>
                {/* <!-- Password --> */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 my-icons">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control bg-white border-left-0 border-md my-fields"
                  />
                </div>
                {/* <!-- Password Confirmation --> */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 my-icons">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    className="form-control bg-white border-left-0 border-md my-fields"
                  />
                </div>
                {/* <!-- Submit Button --> */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a href="/" className="btn btn-primary btn-block py-2">
                    <span className="font-weight-bold">
                      Create your account
                    </span>
                  </a>
                </div>
                {/* <!-- Divider Text --> */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>
                {/* <!-- Already Registered --> */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <Link to="/" className="text-primary ml-2">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
