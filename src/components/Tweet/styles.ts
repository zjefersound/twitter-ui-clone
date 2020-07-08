import styled, { css } from 'styled-components';
import { 
    Twitter,
    Favorite,
    Chat
     
} from '../../styles/Icons'; 

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    max-width: 100%;
`;

export const Retweeted = styled.div`
    display: flex;

    align-items: center;
    
    color: var(--gray);
    font-size: 12px;

`;
export const TwitterIcon = styled(Twitter)`
    height: 16px;
    width: 16px;

    margin-left: 36px;
    margin-right: 8px;
    > path { fill: var(--gray); }
`;

export const Body = styled.div`
    display: flex;
    margin-top: 4px;
    
    position: relative;
`;

export const Avatar = styled.div`
    width: 48px; 
    height: 48px;
    border-radius: 50%;

    flex-shrink: 0;
    
    background: var(--gray); 

    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 60px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 6px;
    }

    > span, time {
        color: var(--gray);
    } 

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    border-radius: 1px;
    margin: 0 8px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const ImageContent = styled.div`
    margin-top: 12px;

    width: 100%;
    height: min(285px, max(175px, 41vw));
    background: var(--outline);

    border-radius: 14px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
    margin: 12px auto 0;
    width: 100%;

    @media ( min-width: 330px) {
        width: 63%;
    }

    > div {
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }

`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;
    color: var(--gray);

    &:nth-child(1) {
        &, svg path {
            color: var(--gray);

        }
    }
    &:nth-child(2) {
        color: var(--retweet);
        > svg path {
            fill: var(--retweet);
        }
    }
    &:nth-child(3) {
        color: var(--like);
        > svg{
            fill: var(--like);
        }
    }
`;

const iconCSS = css`
    width: 20px;
    height: 20px;
    fill: var(--gray);
    margin-right: 4px;
`;

export const CommentIcon = styled(Chat)`
    ${iconCSS}
`;

export const RetweetIcon = styled(Twitter)`
    ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
    ${iconCSS}
`;
