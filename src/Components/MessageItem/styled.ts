import styled from "styled-components";

interface PropsItem {
  userPosition: string;
  DataPositio: string
}


interface PropsItemBackground {
    userPositionBackground: string;
    DataPositioBackground: string
      
  }

export const MensagerLine = styled.div<PropsItem>`
  margin-bottom: 0.785rem;
  display: flex;
  justify-content: ${(props) => (props.userPosition === props.DataPositio ? 'flex-end' : 'flex-start')};
`;

export const MessagerItem = styled.div<PropsItemBackground>`
 
  border-radius: 10px;
  box-shadow: 0 1px 1px ${({ theme }) => theme.Cores.BallMessageShadon};
  padding: 0.3rem;
  max-width: 90%;
  background-color: ${(props) => (props.userPositionBackground === props.DataPositioBackground ? '#dcf8c6' : '#fff')};
  /* background-color: ${(props) => (props.userPositionBackground === props.DataPositioBackground ? props.theme.Cores.balloonMessageReceived :  props.theme.Cores.balloonMessageReceived)}; */
`;

export const MessagerText = styled.div`
  font-size: 1rem;
  margin: 0.3rem 1.5rem 0.3rem 0.3rem;
  padding: 0;
`;

export const DateMessage = styled.div`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.Cores.text};
  margin-left: 0.6rem;
  text-align: right;
  height: -1rem;
`;
