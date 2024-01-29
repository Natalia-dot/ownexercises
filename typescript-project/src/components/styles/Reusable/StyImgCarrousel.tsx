import styled from "styled-components";


export const StyledImgCarrousel = styled.div`
    width: 100vw;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        width: 6rem;
        height: 5rem;
        margin: 1rem;

    }

    #pagesContainer {
        display: flex;
        justify-content: center;
        width: 100vw;
        padding: 2rem;
    }

    #mainImage{
        width: 20vw
    }

    .miniIcons{
        height: 5rem;
    }
`