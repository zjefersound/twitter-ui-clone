import React from 'react';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,

    EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>
                    Editar Perfil
                </EditButton>
                <h1>Jeferson Souza</h1>
                <h2>@zjefersound</h2>

                <p>
                    Beatboxer e Dev Mobile <a href="http://github.com/zjefersound">
                        @Vapovapo</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Santa Catarina, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 14 de maio de 2002
                    </li>
                </ul>

                <Followage>
                    <span>
                        <strong>71 </strong> seguindo
                    </span>
                    <span>
                        <strong>45 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
}

export default ProfilePage;