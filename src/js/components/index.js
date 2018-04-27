import styled from 'styled-components';

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: flex-between;
`;

export const Label = styled.h3`
  font-family: 'Inconsolata', monospace;
  font-weight: 100;
  font-size: 2rem;
`;

export const TimeWrapper = styled.div`
  font-family: 'Inconsolata', monospace;
  font-weight: 100;
  font-size: 5rem;
  color: ${props => props.buffer ? 'orange' : 'green'}
`;
