import { createContext } from "react";


const UserContext = createContext({
    Data:{},
    setData1: () =>{},
    value : {},
    setValue : () => {},
    chat:{},
    setChat:() =>{},
    select:{},
    setSelect:()=>{},
    chat1:{},
    setChat1:()=>{},
    deleteit:{},
    setDeleteit:()=>{},
    calls:{},
    setCalls:()=>{},
    block:{},
    setBlock:()=>{},

})

export default UserContext;