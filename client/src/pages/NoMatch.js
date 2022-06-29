import React from "react";
import Jumbotron from "../components/Jumbotron";

//  appear if the user hit a weird route.
const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <br/>
        <h1>
          Sorry, the page you are looking for is on vacation.
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;