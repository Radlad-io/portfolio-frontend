import { useRouter } from 'next/router'
import styled from 'styled-components';

const HeaderStyle = styled.h1`
    font-size: 4rem;
    font-family: 'AuxMono-Regular';
    text-transform: uppercase;
    margin-top: 25px;
`

const EmojiStyle = styled.h1`
    font-size: 5rem;
    display:inline-block;
`

function Header(props) {
    const router = useRouter()

    const {title, emoji} = props;

    return (
        <>
            <HeaderStyle>
                <h1>{title} <EmojiStyle>{emoji}</EmojiStyle></h1>
            </HeaderStyle>
        </>
    )
}

export default Header