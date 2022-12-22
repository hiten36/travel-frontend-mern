import { useContext } from "react"
import MainContext from "../context/MainContext"

const useMain=()=>{
    // const context = useContext(MainContext)
    // console.log(context);
    return useContext(MainContext);
};

export default useMain;
