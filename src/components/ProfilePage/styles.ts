import styled, { css } from "styled-components";

import { 
    Cake, 
    LocationOn 
} from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background: var(--twitter);

    position: relative;

`;

export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    border-radius: 50%;

    background: var(--gray);
    position: absolute;
    bottom: max(-60px, -10vw );
    left: 16px;
`;

export const ProfileData = styled.div`
    padding: min(calc(10vw + 8px), 68px) 16px 0;

    display: flex;
    flex-direction: column;
    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 20px;
    }

    > h2 {
        font-weight: normal;
        font-size: 16px;
        color: var(--gray);
    }

    > p {
        font-size: 16px;
        margin-top: 12px;
        
        > a {
            text-decoration: none;
            color: var(--twitter);
        }
    }

    > ul {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            font-size: 16px;
            color: var(--gray);

            display: flex;
            align-items: center;

            > svg {
                fill: var(--gray);
                margin-right: 6px;
            }
        }

    }
`;

//icons
const iconsCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);

`;
export const LocationIcon = styled(LocationOn)`
    ${iconsCSS}
`;

export const CakeIcon = styled(Cake)`
    ${iconsCSS}
`;
//end icons
export const Followage = styled.div`
    display: flex;
    > span {
        font-size: 16px;
        color: var(--gray);

        & + span {
            margin-left: 12px;
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vh;
    right: 16px;

    padding: 4px 16px;   
    font-size: 12px; 

    @media ( min-width: 320px) {
        top: 12px;
        font-size: 16px;
        padding: 8px 16px; 
    }
`;