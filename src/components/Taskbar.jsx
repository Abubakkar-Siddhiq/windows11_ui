import vscode from '../assets/icons/vscode.ico'
import terminal from '../assets/icons/terminal.png'
import windows from '../assets/icons/windows.png'
import brave from '../assets/icons/brave.ico'
import notion from '../assets/icons/notion.ico'
import explorer from '../assets/icons/explorer.ico'
import cloudyday from '../assets/icons/MostlyCloudyDayV2.svg'
import github from '../assets/icons/github.svg'
import { BatteryLow, Bell, ChevronUp, Search, Volume2, Wifi } from 'lucide-react'
import useStart from '../store/appStore'


function Taskbar() {
  const date = new Date()
  const { toggleStart } = useStart()

  return (
    <div className="mt-auto w-full h-12 bg-black/75 backdrop-blur-lg flex items-center justify-around self-end text-white z-[1]">
        {/* Wideget Area  */}
        <div className="ml-6 w-[18%]">
            <div className="flex gap-3">
                <img src={cloudyday} width='24' alt="" />
                <p className='flex flex-col'>
                    <span className='text-sm'>34°C</span>
                    <span className='text-xs'>Mostly Cloudy</span>
                </p>
            </div>
        </div>
        
        {/* Apps area */}
        <div className="mx-auto w-[60%] flex items-center justify-center gap-1">
            <div className="hover:bg-slate-700/50 p-1 rounded-sm transition duration-200 ease-in-out" onClick={toggleStart}>
                <img width="32" src={windows} />
            </div>
            <div className="p-2">
                <button className='bg-slate-900/90 backdrop-blur-sm rounded-full px-5 py-1 text-white text-xs font-light flex items-center gap-2'>
                    <Search width={14} />
                    <span>Search</span>
                </button>
            </div>
            <div className="hover:bg-slate-700/50 p-2 rounded-md transition duration-200 ease-in-out">
                <img width="25" src={explorer} />
            </div>
            <div className="hover:bg-slate-700/50 p-2 rounded-md transition duration-200 ease-in-out">
                <img width="27" src={notion} />
            </div>
            <div className="hover:bg-slate-700/50 p-2 rounded-md transition duration-200 ease-in-out">
                <img width="31" src={github} />
            </div>
            <div className="hover:bg-slate-700/50 p-2 rounded-md transition duration-200 ease-in-out">
                <img width="28" src={brave} />
            </div>
            <div className="hover:bg-slate-700/50 p-2 rounded-md transition duration-200 ease-in-out">
                <img width="25" src={terminal} />
            </div>
            <div className="hover:bg-slate-700/50 p-2 rounded-md transition duration-200 ease-in-out"  target='_blank'>
                <a href='https://vscode.dev/'>
                    <img width="25" src={vscode}  />
                </a>
            </div>
        </div>

        {/* Control Center */}
        <div className="mr-2 w-fit flex items-center text-white">
            <div className="">
                <ChevronUp width='20' />
            </div>
            <div className="flex items-center justify-center gap-3 hover:bg-slate-800/40 p-2 hover:rounded-md">
                <Wifi width='16' />
                <Volume2 width='15' />
                <BatteryLow width='20' />
            </div>
            <div className="h-[95%] flex items-center gap-1 px-2 hover:bg-slate-800/40 p-1 hover:rounded-md">
                <div className="flex flex-col text-right">
                    <p className='text-xs'>{date.getHours()}:{date.getMinutes()} PM</p>
                    <p className='text-[10px]'>{date.getDate()}.{date.getMonth()}.{date.getFullYear().toString().slice(-2)}</p>
                </div>
                <div className="p-1">
                    <Bell width='18'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Taskbar
