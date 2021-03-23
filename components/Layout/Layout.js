import React, { useState } from 'react';
import Menu from '@components/Menu'

function Layout({children}) {

    const [ menuState, setMenuStaten ] = useState(false)

    return (
        <>  
            <Menu menuState={menuState} setMenuStaten={setMenuStaten}/>
            {children}
        </>
    )
}

export default Layout