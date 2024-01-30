import React from 'react';
import styled from 'styled-components';

type AvatarProps = {
  name?: string;
  imageUrl?: string;
};

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

`;

const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const AvatarName = styled.span`
  margin-top: 5px;
  color: ${(props) => props.theme.Cores.text};
  padding-left: 0.5rem;
`;

export const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  return (
    <AvatarContainer>
      {imageUrl && <AvatarImage src={imageUrl} alt={`Avatar de ${name}`} />}
      {!imageUrl && <AvatarImage src="default-avatar.png" alt={`Avatar padrão de ${name}`} />}
      <AvatarName>{name}</AvatarName>
    </AvatarContainer>
  );
};


