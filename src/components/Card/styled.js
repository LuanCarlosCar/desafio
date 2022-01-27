import styled from "styled-components";

export const ContainerCard = styled.div`
    font-family: 'Roboto', sans-serif;
    position: relative;
    align-items: center;
    border: 0.125rem solid red;
    box-sizing: border-box;
    width: 16.875rem;
    height: 23rem;
    text-align: center;
    padding: 25px 10px ;
`;
export const ImgCard = styled.img`
    height: 6.25rem;
    width: 6.25;
    margin-bottom: 24px;

`;
export const TitleCard = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 26px;

`;
export const DescriptionCard = styled.p`
    font-size:  18px;
    font-weight: 400;
    max-width: 13rem;
    max-height: 6.8rem;
    margin: auto;
    overflow: hidden;
    text-overflow: ellipsis;
`;