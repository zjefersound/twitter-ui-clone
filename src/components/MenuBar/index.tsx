import React from 'react';

import Button from '../Button';
import { 
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon, 
    BellIcon, 
    EmailIcon, 
    FavoriteIcon, 
    ProfileIcon, 
    ExitIcon,
    Bottomside,
    Avatar,
    ProfileData
} from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <TopSide>
                <Logo />
                <MenuButton>
                    <HomeIcon />
                    <span>Página inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritos</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>
                
                <Button>
                    <span>Tweetar</span>
                </Button>
                
            </TopSide>

            <Bottomside>
                <Avatar />

                <ProfileData>
                    <strong>Jeferson Souza</strong>
                    <span>@zjefersound</span> 
                </ProfileData>

                <ExitIcon />
            </Bottomside>

        </Container>
    );
}

export default MenuBar;