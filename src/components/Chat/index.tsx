import React from 'react';
// types
import { ChatType } from 'entities/chat';
// styles
import styled from 'styled-components';

type Props = {
  data: ChatType['data'];
};

const Chat: React.FC<Props> = ({ data }) => {
  return <Wrapper>{data.name}</Wrapper>;
};

const Wrapper = styled.div`
  background: red;
`;

export default Chat;
