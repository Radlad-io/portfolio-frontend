import styled from 'styled-components';

const HeaderStyle = styled.h1`
    font-size: 4rem;
    font-family: 'AuxMono-Regular';
    text-transform: uppercase;
    color: black;
`

const EmojiStyle = styled.h1`
    font-size: 5rem;
    display:inline-block;
`

function Header(props) {

    const {title, emoji} = props;

    return (
        <div>
            <HeaderStyle>
                {title} <EmojiStyle>{emoji}</EmojiStyle>
            </HeaderStyle>
        </div>
    )
}

export default Header