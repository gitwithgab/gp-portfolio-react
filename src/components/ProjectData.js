
import PortfolioDesktop from "../assets/img/desktop-portfolio.png";
import MovieDesktop from "../assets/img/desktop-movie.png";
import WeakestDesktop from "../assets/img/desktop-weakest.png";
import CloneDesktop from "../assets/img/desktop-clone.png";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiReact, DiNodejs, DiMongodb} from "react-icons/di"
import {SiJavascript} from "react-icons/si";



export const images = [
    {
        title: "PORTFOLIO WEBSITE", 
        subtitle:"MADE WITH",
        description:"Portfolio Website illustrating developer information.",
        img: PortfolioDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        urlReview:"https://github.com/gitwithgab/gp-portfolio-react",
        urlSite:"https://unruffled-bassi-4d7a55.netlify.app"
    },

    {
        title: "WEBSITE CLONE", 
        subtitle:"MADE WITH",
        icons:"",
        description:"Website clone of wix online technology store.",
        img: CloneDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        urlReview:"https://github.com/gitwithgab/clone-wix-techshed",
        urlSite:"https://unruffled-bassi-4d7a55.netlify.app"
    },

    {
        title: "THE WEAKEST LINK", 
        subtitle:"MADE WITH",
        icons:"",
        description:"Trivia game based on the Weakest Link TV show.",
        img: WeakestDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        urlReview:"https://github.com/gitwithgab/the-weakest-link-game",
        urlSite:"https://unruffled-bassi-4d7a55.netlify.app"
    },

    {
        title: "MOVIE STREAMING APP", 
        subtitle:"MADE WITH",
        icons:"",
        description:"Fullstack Movie Streaming Application.",
        img: MovieDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        icon5:<DiNodejs />,
        icon6:<DiMongodb />,
        urlReview:"https://github.com/gitwithgab/movie-streaming-web-app",
        urlSite:"https://unruffled-bassi-4d7a55.netlify.app"
    },
];