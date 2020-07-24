import React from "react";

function ErrorMessage(props) {
  return (
    <div className="errorMessageContainer">
      <div>
        <h2>Error</h2>
        <button>:(</button>
      </div>
      <h3>
        There was an error fetching that city, please try typing it in correctly
      </h3>
      <img
        src="https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif"
        alt="GIF of tiled error messages"
      />
    </div>
  );
}

export default ErrorMessage;
