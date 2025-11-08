import React from "react";
function Reset() {
    return (
        <>
         <h1 className="form-title">Reset Password</h1> 
        <div className="form-group">
        <label htmlFor="password" className="form-label">New Password</label>
        <input id="password" type="password" placeholder="Enter your Password" value={password} onChange={(e) =>
            setPassword(e.target.value)
        } required className="form-input"/>

      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Confirm Password</label>
        <input id="password" type="password" placeholder="Enter your Password" value={password} onChange={(e) =>
            setPassword(e.target.value)
        } required className="form-input"/>

      </div>
      <div className="form-button">
        <button type="submit" className="form-button">submit</button>
      </div>
      </>
    );
}

export default Reset;