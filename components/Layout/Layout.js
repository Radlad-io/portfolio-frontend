import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import Menu from '@components/Menu'

function Layout({children}) {

    const [ menuState, setMenuState ] = useState(false)

    return (
        <>  
            <Menu menuState={menuState} setMenuState={setMenuState}/>
            {children}
        </>
    )
}

export default Layout