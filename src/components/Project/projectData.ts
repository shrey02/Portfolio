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
        lastName : 'Buddy',
        image : codeBuddyImage,
        stack : ['Node','React','Socket'],
        liveLink : 'https://code-buddy-v37e.onrender.com/',
        codeLink : 'https://github.com/shrey02/Code-Colab-online-IDE' 
    }
]

const reactProjectData : card [] = [
    {
        firstName : 'Video',
        lastName : 'Buddy',
        image : videoBuddyImage,
        stack : ['Tailwind','React','Parcel'],
        liveLink : 'https://chill-hub-rouge.vercel.app/',
        codeLink : 'https://github.com/shrey02/videoStreamer' 
    },
    {
        firstName : 'Movies',
        lastName : 'Hub',
        image : movieHubImage,
        stack : ['Redux','React','Tailwind'],
        liveLink : 'https://movietrailerhub.netlify.app/',
        codeLink : 'https://github.com/shrey02/netflixGPT' 
    },
    {
        firstName : 'Myntra',
        lastName : 'Clone',
        image : myntraImage,
        stack : ['Tailwind','React','Parcel'],
        liveLink : 'https://myntra2206.vercel.app/',
        codeLink : 'https://github.com/shrey02/myntra' 
    },
    {
        firstName : 'KIET',
        lastName : 'Connect',
        image : kietImage,
        stack : ['React','CSS','Firebase'],
        liveLink : 'https://kietconnect-6551c.web.app/',
        codeLink : 'https://github.com/shrey02/KietConnect' 
    },
    {
        firstName : 'Weather',
        lastName : 'Teller',
        image : weatherImage,
        stack : ['Context','React','CSS'],
        liveLink : 'https://my-weather-calculator.netlify.app/',
        codeLink : 'https://github.com/shrey02/Devsnest-hackathon/tree/master/weather' 
    },
    {
        firstName : 'Meme',
        lastName : 'Generator',
        image : memeImage,
        stack : ['Redux','React','CSS'],
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