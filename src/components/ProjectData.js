
import PortfolioDesktop from "../assets/img/desktop-portfolio.png";
import MovieDesktop from "../assets/img/desktop-movie.png";
import WeakestDesktop from "../assets/img/desktop-weakest.png";
import CloneDesktop from "../assets/img/desktop-clone.png";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiReact, DiNodejs, DiMongodb} from "react-icons/di"
import {SiJavascript} from "react-icons/si";
import { GrStatusGoodSmall } from "react-icons/gr";



export const carousel = [
    {
        title: "PORTFOLIO WEBSITE", 
        subtitle:"MADE WITH",
        subtitle2:"STATUS",
        description:"Portfolio Website illustrating developer information and projects",
        img: PortfolioDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        status: "In Progress",
        statusIcon:<GrStatusGoodSmall />,
        urlReview:"https://github.com/gitwithgab/gp-portfolio-react",
        urlSite:"https://gabriellepantin.com"
    },

    {
        title: "WEBSITE CLONE", 
        subtitle:"MADE WITH",
        subtitle2:"STATUS",
        description:"Website clone of wix online retail technology store",
        img: CloneDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        status: "In Progress",
        statusIcon:<GrStatusGoodSmall />,
        urlReview:"https://github.com/gitwithgab/clone-wix-techshed-react",
        urlSite:"https://practical-payne-a014b7.netlify.app"
    },

    {
        title: "THE WEAKEST LINK", 
        subtitle:"MADE WITH",
        subtitle2:"STATUS",
        description:"Trivia game based on the Weakest Link TV show",
        img: WeakestDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        status: "In Progress",
        statusIcon:<GrStatusGoodSmall />,
        urlReview:"https://github.com/gitwithgab/the-weakest-link-game",
        urlSite:"https://relaxed-goldberg-5662a0.netlify.app"
    },

    {
        title: "MOVIE STREAMING APP", 
        subtitle:"MADE WITH",
        subtitle2:"STATUS",
        description:"Fullstack Movie Streaming Application",
        img: MovieDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        icon3:<SiJavascript />,
        icon4:<DiReact />,
        icon5:"",
        icon6:<DiNodejs />,
        icon7:<DiMongodb />,
        status: "In Progress",
        statusIcon:<GrStatusGoodSmall />,
        urlReview:"https://github.com/gitwithgab/movie-streaming-web-app",
        urlSite:"https://unruffled-bassi-4d7a55.netlify.app"
    },
];