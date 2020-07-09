import styled, { css } from 'styled-components';

import { 
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Twitter
} from '../../styles/Icons';

export const Container = styled.div`
    display: none; 
    @media (min-width: 501px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 8px 20px 20px; 
        max-height: 100vh;
        overflow-y: auto;
    }
    @media (min-width: 1280px) {
        padding: 8px 60px 20px 20px; 
    }
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }

`;

export const Logo = styled(Twitter)`
    width: 28px;
    height: 28px;
    flex-shrink: 0;

    margin-bottom: 20px; 

    > path {
        fill: var(--white);
    }
    @media (min-width: 1280px) {
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }
    @media (min-width: 1280px) {
        > span {
            display: flex;
            margin-left: 20px;
            font-weight: bold;
            font-size: 19px;
        }
        padding-right: 20px;
        padding-left: 20px;
    }
    padding: 8px;
    outline: 0;
    
    & + button {
        margin-top: 16px;
    }

    & + button:last-child {
        margin-top: 32px;
        width: 40px;
        height: 40px;

        > span {
            display: none;
        }
        @media (min-width: 1280px ) {
            width: 100%;
            height: unset;
            > span {
                display: inline;
            }
        }
    }
    cursor: pointer;
    border-radius: 24px;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    &:hover,
    &.active {
        span, svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }
`;

export const Bottomside = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;


`;

export const Avatar = styled.div`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--gray);
`;

export const ProfileData = styled.div`
    display: none;
    @media (min-width: 1280px ) {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        font-size: 14px;
        > span {
            color: var(--gray);
        }
    }

`;

//icons

const iconsCSS = css`
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    color: var(--white);

`;
export const HomeIcon = styled(Home)`
    ${iconsCSS}
`;

export const BellIcon = styled(Notifications)`
    ${iconsCSS}
`;

export const EmailIcon = styled(Email)`
    ${iconsCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconsCSS}
`;

export const ProfileIcon = styled(Person)`
    ${iconsCSS}
`;
export const ExitIcon = styled(ExitToApp)`
    display: none;
    @media (min-width: 1280px ) {
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-left: 30px;
        cursor: pointer;
        &:hover path {
            color: var(--like);
        }
    }
`;
