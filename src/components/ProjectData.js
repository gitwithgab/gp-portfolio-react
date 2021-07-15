
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
        button1:"REVIEW CODE",
        button2:"LIVE SITE"
    },

    {
        title: "WEBSITE CLONE", 
        subtitle:"MADE WITH",
        icons:"",
        description:"Website clone of wix online technology store.",
        img: CloneDesktop,
        icon1:<AiFillHtml5 />,
        icon2:<DiCss3 />,
        button1:"REVIEW CODE",
        button2:"LIVE SITE"
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
        button1:"REVIEW CODE",
        button2:"LIVE SITE"
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
        button1:"REVIEW CODE",
        button2:"LIVE SITE"
    },
];