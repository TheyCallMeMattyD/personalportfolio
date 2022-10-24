import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import resume from "../img/resume.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(18,102,175)", "rgb(219,139,26)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Matt  ",
    lastName: "Daniels",
    initials: "md", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer & Cloud  Admin",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Full Stack Web Development'
        },
        {
            emoji: '🖥️',
            text: 'Azure Cloud Administration'
        },
        {
            emoji: "⚓",
            text: "Navy Veteran"
        },
        {
            emoji: "🇺🇸",
            text: "Based in the US"
        },
        {
            emoji: "🕵🏻‍♂️",
            text: "TS/SCI Clearance"
        },
        {
            emoji: "✈️",
            text: "Naval Aviator"
        },
        {
            emoji: "📧",
            text: "matty@techmatty.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/TheyCallMeMattyD",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/themattyd/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Matt. After college I joined the Navy - which led to adventures around the world as both an Air Traffic Controller and Aviator... with some experiences thrown in that I never would have imagined. Now that it's time to leave military life behind, I've decided to dive into IT - maybe even as a digital nomad around the world. It's time for the next New Adventure!",
    skills:
    {
        proficientWith:     ['javascript', 'react', 'git', 'GitHub', 'bootstrap', 'html5', 'css3', 'npm', 'Azure Static WebApps',
                            'Azure Function Apps', 'Windows Server', 'Hyper-V', 'Active Directory', 'Agile', 'React'],
        exposedTo:          ['PowerShell Scripting', 'nodejs', 'C#']
    }
    ,
    hobbies: [
        {
            label: 'Sound Mind & Body',
            emoji: '🧠  |  💪🏽'
        },
        {
            label: 'Gardening',
            emoji: '🌽'
        },
        {
            label: 'Reading - and LOTS of it!',
            emoji: '📚'
        },
        {
            label: 'Fast Cars & Motorcycles',
            emoji: '🚘  |  🏍️'
        },
        {
            label: 'Showing the world some EMPATHY',
            emoji: '🤗'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "This Website!",
            live: "https://mattyd.info", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/TheyCallMeMattyD/Portfolio", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "UPROAR",
            live: "https://uproarlounge.com/index.html",
            image: mock2
        },
        {
            title: "Employee Directory",
            live: "https://theycallmemattyd.github.io/user-directory/",
            source: "https://github.com/TheyCallMeMattyD/user-directory",
            image: mock3
        },
        {
            title: "Holiday Wishlist",
            live: "https://project-two-gwu.herokuapp.com/login.html",
            source: "https://github.com/TheyCallMeMattyD/project_two",
            image: mock4
        },
        {
            title: "Iron MANor",
            live: "https://theycallmemattyd.github.io/ironmanor/",
            source: "https://github.com/TheyCallMeMattyD/ironmanor",
            image: mock5
        }
    ],
    resume: [ // This is where your portfolio projects will be detailed
        {
            title: "Resume",
            live: "./public/documents/2022DanielsResume.pdf",
            source: "https://github.com/TheyCallMeMattyD/Portfolio", // this should be a link to the **repository** of the project, where the code is hosted.
            image: resume
        },

    ]
}

