import React from 'react';
import StickyBox from 'react-sticky-box';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>
                <Body>
                    <List 
                        title='Talvez você curta' 
                        elements={[
                            <FollowSuggestion 
                                name = "Ana Maria"
                                nickname = "@namari11"
                            />,
                            <FollowSuggestion 
                                name = "Robso Juca"
                                nickname = "@jukrob"
                            />,
                            <FollowSuggestion 
                                name = "Fernando Vasconcelos de Oliveira Filho"
                                nickname = "@fernandov"
                            />,
                            <FollowSuggestion 
                                name = "Edinaldo Pereira"
                                nickname = "@naldope"
                            />,
                        ]}
                    />
                    <List 
                        title='O que está acontecendo' 
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List 
                        title='O que está acontecendo' 
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List 
                        title='O que está acontecendo' 
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    

                </Body>
            </StickyBox>
        </Container>
    );
}

export default SideBar;