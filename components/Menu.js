import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IconStyle = styled.div`
    z-index: 200;
    position: fixed;
    right: 80px;
    top: 60px;
`
const MenuStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const NavStyle = styled.h1`
    @font-face {
        font-family: 'AuxMono-Regular';
        src: url('/fonts/aux-mono-regular.eot');
        src: url('/fonts/aux-mono-regular.eot?#iefix') format('embedded-opentype'),
            url('/fonts/aux-mono-regular.woff2') format('woff2'),
            url('/fonts/aux-mono-regular.woff') format('woff'),
            url('/fonts/aux-mono-regular.ttf') format('truetype'),
            url('/fonts/aux-mono-regular.svg#youworkforthem') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    font-size: 2.5rem;
    font-family: 'AuxMono-Regular';
    text-transform: uppercase;
    color: white;
    padding: .1em 2.5em;
    margin: .2em 0 .2em 0em;
`

const SpanStyle = styled.span`
    font-size: 3.5rem;
`
const EmojiStyle = styled.div`
    display: inline-block;
`

const iconVariants = {
    opened: {
        rotate: 45,
        scale: 2.5,
    },
    closed: {
        rotate: 0,
        scale: 2.5,
    },
    transition: {
        duration: 1
    }
}

const menuVariants = {
    opened: {
        x: 0,
    },
    closed: {
        x: '-100vw',
    }
}

const MenuList = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .1
        }
    }
}

const MenuItem = {
    hidden: {
        y: 15,
        opacity: 0 
    },
    show: {
        y: 0,
        opacity: 1 
    }
  }


function Menu({ menuState, setMenuState }) {
    const router = useRouter()

    return (
        <>
            <IconStyle
                onClick={() => setMenuState(!menuState)}
            >
                <motion.svg
                    variants={iconVariants}
                    animate={menuState ? 'opened' : 'closed'}
                    whileHover={{ scale: 3 }}
                    whileTap={{ scale: 1.8 }}
                    width='24'
                    height='24'
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                    fill={menuState ? 'white' : 'black'}
                />
                </motion.svg>
            </IconStyle>
        
            <motion.div
                initial={false}
                variants={menuVariants}
                animate={menuState ? 'opened' : 'closed'}
                transition={{ ease: "easeOut", duration: 0.25 }}
            >
                <MenuStyle>
                    <motion.div 
                        className="menu"
                        variants={MenuList}
                        initial="hidden"
                        animate={menuState ? 'show' : 'hidden'}
                        transition={{ease: 'easeOut'}}
                    >
                        <NavStyle>
                            <motion.h1 
                                className="active" 
                                variants={MenuItem}
                                transition={{ease: 'easeInOut', duration: 0.15}}
                            >
                            <Link href='/'>
                                <div>
                                    <a>Home </a>
                                    <EmojiStyle>
                                        <Image
                                            src="/Icons/Home.png"
                                            width="100px"
                                            height="100px"
                                        ></Image>
                                    </EmojiStyle>
                                </div>
                            </Link>
                            
                            </motion.h1>

                            <motion.h1 
                                variants={MenuItem}
                                transition={{ease: 'easeInOut', duration: 0.15}}
                            >
                                <Link href='/work'>
                                    <div>
                                        <a>Work </a>
                                        <EmojiStyle>🛠️</EmojiStyle>
                                    </div>
                                </Link>
                            </motion.h1>

                            <motion.h1 
                                variants={MenuItem}
                                transition={{ease: 'easeInOut', duration: 0.15}}
                            >
                                <Link href='/jawn'>
                                    <div>
                                        <a>Jawn </a>
                                        <EmojiStyle>💡</EmojiStyle>
                                    </div>
                                </Link>
                            </motion.h1>

                            <motion.h1 
                                variants={MenuItem}
                                transition={{ease: 'easeInOut', duration: 0.15}}
                            >
                                <Link href='/pizza'>
                                    <div>
                                        <a>Pizza </a>
                                        <EmojiStyle>🍕</EmojiStyle>
                                    </div>
                                </Link>
                            </motion.h1>
                            <motion.h1 
                                variants={MenuItem}
                                transition={{ease: 'easeInOut', duration: 0.15}}
                            >
                                <Link href='about'>
                                    <div>
                                        <a>About </a>
                                        <EmojiStyle>😬</EmojiStyle>
                                    </div>
                                </Link>
                            </motion.h1>
                            <motion.h1 
                                variants={MenuItem}
                                transition={{ease: 'easeInOut', duration: 0.15}}
                            >
                                <Link href='/contact'>
                                    <div>
                                        <a>Contact </a>
                                        <EmojiStyle>📪</EmojiStyle>
                                    </div>
                                </Link>
                            </motion.h1>
                        </NavStyle>
                    </motion.div>
                </MenuStyle>
            </motion.div>
        </>
    )
}

export default Menu