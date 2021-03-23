import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContainerStyle = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
`

const ErrorStyle = styled.h1`
    font-size: 8rem;
    font-family: 'AuxMono-Regular';
    text-transform: uppercase;
`

const EmojiStyle = styled.span`
    display: inline-block;
    font-size: 10rem;
`
const ParagraphStyle = styled.h1`
font-family: 'AuxMono-Regular';
    font-size: 1.5rem;
`


export default function Custom404() {
    return (
        <>
        <ContainerStyle>
            <ErrorStyle>
                <h1>4<EmojiStyle><span>😖</span></EmojiStyle>4</h1>
            </ErrorStyle>
            <ParagraphStyle>
                <p>Dang. What your looking for <br />either doesn't exist or can't<br /> be found.</p>
            </ParagraphStyle>
            </ContainerStyle>

        </>
    
        ) 
  }