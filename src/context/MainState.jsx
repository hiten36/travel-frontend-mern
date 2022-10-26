import React, { useState } from 'react'
import MainContext from './MainContext'

const MainState = (props) => {
    const [searchValue, setSearchValue] = useState({
        from:"",
        to:"",
        leaving:""
    });

    return (
        <>
            <MainContext.Provider value={{searchValue, setSearchValue}}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}

export default MainState
