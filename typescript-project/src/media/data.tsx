import { StyledButton } from "../components";
import { GeneralButton } from "../components/styles";

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
    text: <p>Hello! I am Natalia, and this is my portfolio. You can click through the images on the left to get to know me a bit better one-on-one, or you can click on the desired section through the navbar. I wish you the best of journeys through my page, and feel free to fork, comment, or mail me for whatever you may need. Thank you for your time.</p>,
    img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'/>
  },
  {
    title: <h3>What I do</h3>,
    text: <p>I am aiming to become a fully-fledged full-stack developer as of now. I'd say I learn at a rapid pace, and not only that, but I am <em>eager</em> to learn. Nothing feels unreachable, since I know and am well aware that all things take time and effort, and so I deem nothing impossible to learn (which I think is a perk on its own). I have the most projects in Javascript ES6, but I also developed projects with an array of technologies.</p>,
    img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'/>,
    extra: <GeneralButton>My technologies</GeneralButton>
  },  
  {
    title: <h3>Where I come from</h3>,
    text: <p>Well really, all I can say is that I aimed to be a doctor when I was a kiddy. For medical reasons, ironically enough, I couldn't attend school and fell behind. Nonetheless, I wouldn't let any of that hinder me, and finished my pre-university education in science. Then I studied, worked for a little bit, and got more in touch with the development world... Read more in the about me page!</p>,
    img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'/>
  },
];
