import { Link } from "react-router-dom";
import "../css/login.css";
export default function Login(props) {
  return (
    <>
      <div
        className="container-fluid login-main"
        style={{
          animation: props.isVisible ? "fadeIn 0.5s" : "fadeOut 0.5s",
          display: props.isVisible ? "block" : "none",
        }}
      >
        <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
          <div className="col-12 col-md-4 col-lg-3 h-50">
            <div className="card shadow">
              <div className="card-body mx-auto">
                <h4 className="card-title mt-3 text-center text-light">
                  Login
                </h4>
                <form className="myForm">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope myIcon"></i>
                      </span>
                    </div>
                    <input
                      name=""
                      className="form-control"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock myIcon"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block myButton"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-center text-light">
                    Do not Have an account?
                    <Link to="/signup">Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
