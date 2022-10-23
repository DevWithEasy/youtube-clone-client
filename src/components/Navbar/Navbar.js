import {AiOutlineMenu,AiOutlineSearch} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {RiVideoAddLine} from "react-icons/ri";
import demo from "../../image/user-demo.png"

const Navbar=()=>{
    const user = {}
    return(
        <div className="nav flex justify-between items-center p-4">
            <div className="w-4/12 flex items-center space-x-2">
                <AiOutlineMenu/>
                <p>MomentShare</p>
            </div>
            <div className="w-4/12">
                <div className="border-2 flex">
                    <input type="text" name="" className="w-9/12 outline-none px-2" placeholder="Search"/>
                    <p className="bg-gray-200 w-3/12 flex justify-center items-center"><AiOutlineSearch/></p>
                </div>
            </div>
            <div className="w-4/12 flex justify-end items-center space-x-4">
                <RiVideoAddLine size={20}/>
                <IoMdNotificationsOutline size={20}/>
                <button>
                    <img src={user.image? user.image : demo} alt="" className="h-6"/>
                </button>
            </div>
        </div>
    )
}
export default Navbar;