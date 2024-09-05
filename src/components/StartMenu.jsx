import { ChevronRight, Search } from "lucide-react"
import vscode from '../assets/icons/vscode.ico'
import terminal from '../assets/icons/terminal.png'
import brave from '../assets/icons/brave.ico'
import notion from '../assets/icons/notion.ico'
import explorer from '../assets/icons/explorer.ico'
import docker from '../assets/icons/docker.ico'
import postman from '../assets/icons/postman.ico'
import github from '../assets/icons/github.svg'
import virtualbox from '../assets/icons/virtualbox.ico'
import settings from '../assets/icons/settings.ico'
import teams from '../assets/icons/teams.ico'
import intellij from '../assets/icons/intellij.ico'
import firefox from '../assets/icons/firefox.ico'
import vlc from '../assets/icons/vlc.ico'
import clipchamp from '../assets/icons/clipchamp.ico'
import discord from '../assets/icons/discord.ico'
import chrome from '../assets/icons/chrome.ico'
import sublime from '../assets/icons/sublime.ico'
import linkedin from '../assets/icons/linkedin.ico'
import msword from '../assets/icons/msword.ico'
import outlook from '../assets/icons/outlook.png'
import useStart from "../store/appStore"

function StartMenu() {
  const { showStart } = useStart()

  const apps = {
    'Github': {
        'icon': github,
        'link': 'https://github.com/Abubakkar-Siddhiq/',
    },
    'Brave': {
        'icon': brave,
        'link': 'https://brave.com/en-in/',
    },
    'Terminal': {
        'icon': terminal,
        'link': null,
    },
    'VSCode': {
        'icon': vscode,
        'link': 'https://vscode.dev/',
    },
    'Sublime': {
        'icon': sublime,
        'link': 'https://www.sublimetext.com/',
    },
    'Docker': {
        'icon': docker,
        'link': 'https://www.docker.com/',
    },
    'Postman': {
        'icon': postman,
        'link': 'https://www.postman.com/',
    },
    'VirtualBox': {
        'icon': virtualbox,
        'link': 'https://www.virtualbox.org/',
    },
    'Settings': {
        'icon': settings,
        'link': null,
    },
    'Explorer': {
        'icon': explorer,
        'link': null,
    },
    'Notion': {
        'icon': notion,
        'link': 'https://www.notion.so/',
    },
    'Teams': {
        'icon': teams,
        'link': 'https://www.microsoft.com/en-in/microsoft-teams/group-chat-software',
    },
    'IntelliJ': {
        'icon': intellij,
        'link': null,
    },
    'Firefox': {
        'icon': firefox,
        'link': 'https://www.mozilla.org/en-US/firefox/',
    },
    'VLC': {
        'icon': vlc,
        'link': null,
    },
    'Clipclamp': {
        'icon': clipchamp,
        'link': null,
    },
    'Discord': {
        'icon': discord,
        'link': 'https://discord.com/',
    },
    'Chrome': {
        'icon': chrome,
        'link': null,
    },
  }

  const recommended = {
    'Github': {
        'icon': github,
        'text': 'View my Projects',
        'link': 'https://github.com/Abubakkar-Siddhiq/',
    },
    'LinkedIn': {
        'icon': linkedin,
        'text': 'View my LinkedIn',
        'link': 'https://www.linkedin.com/in/abubakkar-siddhiq/',
    },
    'Resume': {
        'icon': msword,
        'text': 'View my Resume',
        'link': null,
    },
    'Contact': {
        'icon': outlook,
        'text': 'Mail me',
        'link': 'mailto:siddhiqabu7@gmail.com',
    },
    'Sublime': {
        'icon': sublime,
        'link': 'https://www.sublimetext.com/',
    },
    'Docker': {
        'icon': docker,
        'link': 'https://www.docker.com/',
    },
  }

  return (
    <div className={`${ showStart ? 'bottom-[8.5%]' : 'bottom-[-100%]'} fixed w-[40%] left-0 right-0 mx-auto border border-slate-700 bg-black/75 py-7 px-7 backdrop-blur-md rounded-lg text-white flex flex-col items-center gap-7 transition-all duration-400`}>

        {/* Search */}
        <div className="w-full flex items-center gap-3 bg-black/70 border border-slate-800 py-1 px-7 rounded-full">
            <Search width='20' />
            <input type="text" className="w-full bg-transparent outline-none border-none" placeholder="Search for apps, settings and documents" name="" id="" />
        </div>

        <div className="w-full">
            <div className="flex flex-col gap-5">
                {/* Pinned */}
                <div className="w-full flex items-center justify-around">
                    <h1 className="font-semibold mr-auto ml-2">Pinned</h1>
                    <button className="flex gap-2 items-center mr-3 bg-slate-700/70 px-2 rounded-md backdrop-blur-lg"> 
                        <span className="text-xs">All apps</span>
                        <ChevronRight width='14' />
                    </button>
                </div>

                {/* Pinned Apps */}
                <div className="grid grid-cols-6 grid-rows-3 gap-1 place-items-center">
                    {
                        Object.entries(apps).map(([key, { icon, link }]) => (
                            <div className="hover:bg-slate-700/50 py-2 px-4 rounded-md transition duration-200 ease-in-out">
                                <div className="flex flex-col items-center gap-2">
                                    <a href={link} className="flex flex-col items-center gap-1" target="_blank">
                                        <img width="30" src={icon}  />
                                        <p className="text-xs">{key}</p>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Recommended */}
                <div className="w-full flex items-center justify-around">
                    <h1 className="font-semibold mr-auto ml-2">Recommended</h1>
                    <button className="flex gap-2 items-center mr-3 bg-slate-700/70 px-2 rounded-md backdrop-blur-lg"> 
                        <span className="text-xs">More</span>
                        <ChevronRight width='14' />
                    </button>
                </div>

                {/* Recommended Apps */}
                <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-1">
                    {
                        Object.entries(recommended).map(([key, {icon, text, link}]) => {
                            return (
                                <a className="w-full p-1 flex justify-start items-center gap-5 hover:bg-slate-700/50 rounded-md transition duration-200 ease-in-out" href={link} target="_blank">
                                    <img src={icon} width="30" alt="" />
                                    <div className="flex flex-col text-sm">
                                        <h1>{key}</h1>
                                        <p className="font-thin">{text}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartMenu
