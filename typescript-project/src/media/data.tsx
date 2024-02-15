import { Link, useNavigate } from "react-router-dom";
import { FlexDiv, StyledButton } from "../components";
import { GeneralButton } from "../components/styles";
import { ProjectsType } from "../props/props";

export const imagesArray = [
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
];

export const introduction = [
  {
    title: <h3>Introduction</h3>,
    text: (
      <p>
        Hello! I am Natalia, and this is my portfolio. You can click through the
        images on the left to get to know me a bit better one-on-one, or you can
        click on the desired section through the navbar. I wish you the best of
        journeys through my page, and feel free to fork, comment, or mail me for
        whatever you may need. Thank you for your time.
      </p>
    ),
    img: (
      <img src="https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1703/vadymvdrobot170307024/75590828-vertical-image-of-man-in-striped-sweater-and-glasses-posing-with-arms-in-pockets-and-looking-at.jpg" />
    ),
  },
  {
    title: <h3>What I do</h3>,
    text: (
      <p>
        I am aiming to become a fully-fledged full-stack developer as of now.
        I'd say I learn at a rapid pace, and not only that, but I am{" "}
        <em>eager</em> to learn. Nothing feels unreachable, since I know and am
        well aware that all things take time and effort, and so I deem nothing
        impossible to learn (which I think is a perk on its own). I have the
        most projects in Javascript ES6, but I also developed projects with an
        array of technologies.
      </p>
    ),
    img: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
    ),
    extra: <GeneralButton $nav="/work">My technologies</GeneralButton>,
  },
  {
    title: <h3>Where I come from</h3>,
    text: (
      <p>
        Well really, all I can say is that I aimed to be a doctor when I was a
        kiddy. For medical reasons, ironically enough, I couldn't attend school
        and fell behind. Nonetheless, I wouldn't let any of that hinder me, and
        finished my pre-university education in science. Then I studied, worked
        for a little bit, and got more in touch with the development world...
        Read more in the about me page!
      </p>
    ),
    img: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
    ),
  },
];

export const workPageInfo = {
  main: (
    <>
      <h2>My work</h2>
      <p>
        Hi. I am a full-stack developer, with proficiency mainly in the{" "}
        <em>MERN</em> stack but still learning new technologies. I have also
        worked in projects under the AGILE methodology, which provides a lead
        when in a team. You can click on the sections below to jump straight to
        the section you may need.
      </p>
    </>
  ),
  technologies: (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
        alt="Javascript logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
        alt="Node logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/800px-CSS.3.svg.png"
        alt="CSS3 logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
        alt="HTML5 logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="React logo"
      />
      <img
        src="https://www.styled-components.com/atom.png"
        alt="Styled components logo"
      />
      <img
        src="https://coursera-university-assets.s3.amazonaws.com/05/353594a7964fdeaff4e10615de58c0/MongoDBSquareLogo.png"
        alt="MongoDB logo"
      />
    </>
  ),
  projects: (
    //aqui en vez de fragments habia flexdiv pero no los reconoce
    <>
      <h2>My projects</h2>
      <p>
        Welcome to my projects area. I recently finished a programming bootcamp,
        so the work is scarce, but by all means suggest what you may. I am
        focusing on learning other technologies at the moment, so the work you
        find here may be incomplete. Nonetheless, have a look around!
      </p>
    </>
  ),

  otherLanguages: (
    <>
      <h2>I can speak:</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
        alt="Flag of Spain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
        alt="Flag of United Kingdom"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png"
        alt="Flag of France"
      />
    </>
  ),
};

export const projects:ProjectsType = {
  "Pokemon-Game-Hut": {
    title: "Pokemon-Game-Hut",
    desc: "A Javascript game hut with three games and a Pokedex as well as theme change and a simple user.",
    img: "",
    alt: "Pokemon Game Hut Image",
  },
  "Node-Backend": {
    title: "Node-Backend",
    desc: "Using MongoDB we built a backend to build and update a database.",
    img: "",
    alt: "Backend controllers code",
  },
  "Arctic-Monkeys-Frontend": {
    title: "Arctic-Monkeys-Frontend",
    desc: "A REACT Arctic Monkeys compendium, with the ability to complete user integration, profle editing, and favorite marking.",
    img: "",
    alt: "A photo of the REACT frontend",
  },
  'Group-React-Project': {
    title: "Group-React-Project",
    desc: "An extensive sports compendium with possibilities to make your own football team, star other people's, and comment on them!",
    img: "",
    alt: "An image of the project",
  },
  "Final-BootCamp-Project": {
    title: "Final-BootCamp-Project",
    desc: "A social network to post accomodation or look for roommates, with rating systems, user verification, comments, personalized search and messaging. ",
    img: "",
    alt: "An image of the project",
  },
};
