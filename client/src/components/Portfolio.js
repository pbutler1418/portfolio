import React, { useState } from "react";
import "../slider.scss";

function Portfolio() {
  let sliderArr = [
    <div classname="darkKnight">
      <h1>Dark Knight Typing</h1>
      <p className = "appDescription">
        The Dark Knight Typing app is a typing practice game aimed to help a
        user learning to type enhance their skills and enjoy themselves at the
        same time. The user acts as Batman's GPS, typing out various locations
        where the caped crusader needs to go to put an end to Joker's schemes.
        The game will utilize the Chicago City Crime Data Base to randomly
        generate a crime and location for each round. Then, the user will have
        to type the message that appears on the screen to send to Batman, and if
        the message isn't typed correctly, the communication won't go through
        and the user will have to try again. Dark Knight Typing design and
        functionality was created with HTML, CSS, and Javascript. The app is
        currently deployed on Surge.
      </p>
      <a href="http://batmanbeginstyping.surge.sh/">
        <img
          href="http://batmanbeginstyping.surge.sh/"
          src="https://raw.githubusercontent.com/pbutler1418/Dark-Knight-Typing/master/Wireframes/Screen%20Shot%202020-02-07%20at%2010.14.00%20AM.png"
        ></img>
      </a>
    </div>,
    <div classname="rugbyWiki">
      <h1>Rugby Wiki</h1>
      <p className = "appDescription">
        Rugby Wiki is meant to be your one stop shop to stay up to date with all
        rugby related info in the world. The intention of the app is to provide
        a place where emerging rugby fans can dive in and learn more about this
        great sport. The app will allow the user to research information on
        players, teams, leagues, and even view rugby highlights from all over
        the world. Rugby Wiki was created using HTML, CSS, Javascript, and the
        React Javascript library, and is deployed on Surge.
      </p>
      <a href="http://rugbywiki.surge.sh/">
        <img
          src="https://github.com/pbutler1418/Rugby-Wiki/blob/master/rugby-wiki/wireframes/Screen%20Shot%202020-02-28%20at%209.29.15%20AM.png?raw=true"></img>
      </a>
    </div>,
    <div classname="myFlicks">
      <h1>My Flicks</h1>
      <p className = "appDescription">
        This is a movie database app that allows users to favorite their movies
        while also exploring a collection of movies from the OMDB API database.
        The main objective of the app is to allow users to browse through a
        collection of movies and add their favorites to their profile, allowing
        users to easily and simply share their favorite movies amongst one
        another. The app’s frontend is built on React and integrates Express as
        the backend and MongoDB as the database. Additionally, the app also
        features libraries such as Mongoose. The backend of the app is built to
        allow users to create accounts and sign in. Moreover, the backend also
        builds the CRUD functionality of the app which allows users to add,
        update, or delete their favorite movie list. The user’s login
        information as well as his/her favorite movies list will also be stored
        into a database through MongoDB.
      </p>
      <a href="http://myfavflicks.surge.sh">
        <img src="https://github.com/pbutler1418/P3-Movie-Goer/raw/dev/client/public/Wireframe1.png"></img>
      </a>
    </div>,
    <div classname="myFlicks">
      <h1>Stepping Out Your Door</h1>
      <p className = "appDescription">
        The Stepping Our Your Door app is an Atlas Exotica clone where users can
        create their own experience journal to add all of the interesting
        experiences they might wish to share, read about experiences other users
        have shared, and add experiences to a "bucketlist" so they can keep
        track of ideas for future adventures. The app uses a React front-end to
        let the user to navigate through the site, and a Ruby on Rails backend
        to store user information. The app also successfully implements an
        authorization process to let users register, sign in, sign out, and then
        have access to CRUD capabilities when signed in. The Stepping Out Your
        Door front-end is deployed on Surge and it's backend is deployed on
        Heroku.
      </p>
      <a href="http://stepoutyourdoor.surge.sh/">
        <img src="https://user-images.githubusercontent.com/59346178/80843547-9789b980-8bd2-11ea-9f22-8f72fc13f7ed.png"></img>
      </a>
    </div>,
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      <h1>Portfolio</h1>
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <div className="box">{item}</div>
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        Prev
      </button>
      <button id="goRight" onClick={goRight}>
        Next
      </button>
      </div>
    </>
  );
}

export default Portfolio;
