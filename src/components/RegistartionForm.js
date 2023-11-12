import React from "react";

const RegistartionForm = () => {
  return (
    <div className="registration-container">
      <form>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value="email@example.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            className="btn btn-block btn-primary"
            placeholder="Submit"
            onClick={() => {
              console.log("Submitted!");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RegistartionForm;
