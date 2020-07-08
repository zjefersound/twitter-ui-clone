import React from 'react';

import { 
    Container, 
    Retweeted, 
    TwitterIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Status,
    Icons,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <TwitterIcon />
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Jeferson Souza </strong>
                        <span>@zjefersound</span>
                        <Dot />
                        <time>7 de julho</time>
                    </Header>

                    <Description>
                        Vapo vapo  SDA DA DSAD SADSA D ASDSAD SAD ASDAS ADS SAD SASA SADD SAD ASD SA SA SA SADSADKSAK DSAJD SAKvapo vapo
                    </Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            12
                        </Status>
                        <Status>
                            <RetweetIcon />
                            3
                        </Status>
                        <Status>
                            <LikeIcon />
                            12
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;