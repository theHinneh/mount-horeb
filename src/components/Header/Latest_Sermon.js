import React from "react";
import { FaBell } from "react-icons/fa";

const Latest_Sermon = () => {
  return (
    <div className="latest-sermon-container">
      <div className="sermon-description">
        <p>
          Visit us this Sunday 9:30am to hear an inspirational word, be uplifted
          by a great worship experience and fellowship with a friendly and
          welcoming Christian family.
        </p>
      </div>
      <button className="sermon-button">
        Latest Sermons{" "}
        <span>
          <FaBell className='bell' />
        </span>
      </button>
    </div>
  );
};

export default Latest_Sermon;
