import React from "react";
import css from "../css/conta.css";
import far from "../img/about.gif";

const Contact = () => {
  return (
    <div>
      
      {/* <div className="container">
        <div>
          <h2>
            <center>ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕌𝕤</center>
          </h2>
          <p>
            <center>
              Swing by for a cup of coffee, or leave us a message:
            </center>
          </p>
        </div>
        <div className="row">
          <div className="column">
            <img src={far} />
          </div>
          <div className="column">
            <form action="/action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="country">States</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label for="country">Distict</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
