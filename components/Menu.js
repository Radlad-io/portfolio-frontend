import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';



function Menu() {
    const router = useRouter()
    const [ isOpen, setOpen ] = useState(false)

    return (
        <>  
            <svg
                onClick={() => setOpen(state => !state)}
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                fill="#fff"
            />
            </svg>
            <div className="menu">
                <h1 className="active">Home <span>🏠</span></h1>
                <h1>Work <span>🛠️</span></h1>
                <h1>Jawn <span>💡</span></h1>
                <h1>Pizza <span>🍕</span></h1>
                <h1>About <span>😬</span></h1>
                <h1>Contact <span>📪</span></h1>
            </div>


            <style jsx>{`
                
                svg {
                    z-index: 2;
                    position: fixed;
                    right: 60px;
                    top: 50px;
                }

                .menu {
                    width: 100vw;
                    height: 100vh;
                    background-color: black;
                    position: fixed;
                    top: 0;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                h1 {
                    font-size: 3.2rem;
                    font-family: 'AuxMono-Regular';
                    text-transform: uppercase;
                    color: white;
                    padding: .1em 2.5em;
                    margin: .2em 0 .2em 0em;
                }

                span {
                    font-size: 3rem;
                }
                
                .active {
                    background-color: rgba(255,255,255,.12)
                }

            `}
            </style>
        </>
    )
}

export default Menu