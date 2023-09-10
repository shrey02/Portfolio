import {card, projectArray} from "../../utility/interface"
import codeBuddyImage from '../../images/codeBuddyPhoto.jpeg'
import videoBuddyImage from '../../images/youtubeProject.jpeg'
import myntraImage from '../../images/myntraProject.jpeg'
import kietImage from '../../images/kietConnectProject.jpeg'
import weatherImage from '../../images/weatherProject.jpeg'
import memeImage from '../../images/memeProject.jpeg'
import persianImage from '../../images/persianGameProject.jpeg'
import movieHubImage from '../../images/moviesHub.jpeg'
 

const fullStackProjectData : card [] = [
    {
        firstName : 'Code',
        lastName : ' Buddy',
        image : codeBuddyImage,
        stack : ['Node','React','Socket'],
        about: 'Real-time code editor with user authentication and room management functionalities accompanied with feature of development sandbox.',
        liveLink : 'https://code-buddy-v37e.onrender.com/',
        codeLink : 'https://github.com/shrey02/Code-Colab-online-IDE' 
    }
]

const reactProjectData : card [] = [
    {
        firstName : 'Video',
        lastName : ' Buddy',
        image : videoBuddyImage,
        stack : ['Tailwind','React','Parcel'],
        about: 'Comprehensive video streaming platform with advanced search functionality with debouncing, caching of API hits, and configuration-driven UI.',
        liveLink : 'https://chill-hub-rouge.vercel.app/',
        codeLink : 'https://github.com/shrey02/videoStreamer' 
    },
    {
        firstName : 'Movies',
        lastName : ' Point',
        image : movieHubImage,
        stack : ['Redux','React','Tailwind'],
        about: 'Trailer streaming platform, where user can search and stream trailer of movies. Login and SignUp using firebase email - password feature.',
        liveLink : 'https://movietrailerhub.netlify.app/',
        codeLink : 'https://github.com/shrey02/netflixGPT' 
    },
    {
        firstName : 'Myntra',
        lastName : ' Clone',
        image : myntraImage,
        stack : ['Tailwind','React','Parcel'],
        about: 'E-commerce app with Config Driven UI, using Myntra APIs to render the clothing items,and adding clothing items to the cart and wishlist.',
        liveLink : 'https://myntra2206.vercel.app/',
        codeLink : 'https://github.com/shrey02/myntra' 
    },
    {
        firstName : 'KIET',
        lastName : ' Connect',
        image : kietImage,
        stack : ['React','CSS','Firebase'],
        about: 'A unified platform for all clubs of KIET. Multiple feed pages for different clubs with easy navigation using club templates at top.',
        liveLink : 'https://kietconnect-6551c.web.app/',
        codeLink : 'https://github.com/shrey02/KietConnect' 
    },
    {
        firstName : 'Weather',
        lastName : ' Teller',
        image : weatherImage,
        stack : ['Context','React','CSS'],
        about: 'Weather API used to fetch the weather information of different cities through user input. Redux has been used for application state management.',
        liveLink : 'https://my-weather-calculator.netlify.app/',
        codeLink : 'https://github.com/shrey02/Devsnest-hackathon/tree/master/weather' 
    },
    {
        firstName : 'Meme',
        lastName : ' Generator',
        image : memeImage,
        stack : ['Redux','React','CSS'],
        about: 'It is a React web application that can be used to create memes. It provides the user a large variety of meme templates to choose from',
        liveLink : 'https://eloquent-haibt-f41e05.netlify.app/',
        codeLink : 'https://github.com/shrey02/Devsnest-hackathon/tree/master/meme/meme' 
    }
]

const javaScriptProject : card[] = [
    {
        firstName : 'Persian',
        lastName : 'Conqueror',
        image : persianImage,
        stack : ['JS','Canvas','CSS'],
        about: 'This platform is a Breakout game in which the player must smash a wall of lamps by deflecting the shield from the sword.',
        liveLink : 'https://shrey02.github.io/Devsnest-hackathon/brick-breaker/index',
        codeLink : 'https://github.com/shrey02/Devsnest-hackathon/tree/master/brick-breaker' 
    }
] 

const projectData : projectArray = [
    fullStackProjectData,
    reactProjectData,
    javaScriptProject
]

export default projectData;