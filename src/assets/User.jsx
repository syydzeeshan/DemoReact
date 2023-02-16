import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { RiDiscussFill } from "react-icons/ri";
import { HiEye } from "react-icons/hi";

function User() {
  return (
    <div>
      <div className="user">
        <div className="profile-pic">
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Avatar" className="avatar" />
          <p id="uparrow">
            <AiFillCaretUp /> <span>104</span> <AiFillCaretDown />
          </p>
        </div>

        <div className="main-wraper">
          <div className="user-info">
            <a className="name" href="">
              Marko Smith
            </a>
            <a href="/" className="user-link">
              Enlightened{" "}
            </a>

            <p className="q-details">
              Asked: <a className="highlighted"> April,19, 2022 </a> <span> In:</span> <a className="highlighted">Programmers</a>{" "}
            </p>
          </div>
          <div className="qa-con">
            <h2>How to approach applying for a job at a company owned by a friend?</h2>
            <p className="a-q">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore cupiditate accusamus odit aliquid velit tenetur repellat quas reprehenderit amet. Repellat fugiat amet commodi ipsum distinctio iure nostrum sit laboriosam.</p>
          </div>
          <div className="answer">
            <a href="/" target="_blank" className="reply">
              {" "}
              <RiDiscussFill /> 7 Answers{" "}
            </a>
            <a href="/" target="_blank" className="reply">
              {" "}
              <HiEye />
              {"  "}2k Views
            </a>
            <a href="/" target="_blank" className="views-answer">
              {" "}
              Answer{" "}
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default User;
