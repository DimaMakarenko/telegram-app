import React from 'react';
// types
import { ChatType } from 'entities/chat';
// styles
import styled from 'styled-components';

type Props = {
  data: ChatType['data'];
};

const Chat: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Image
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
        alt=''
      />

      <Container>
        <MessageWrapper>
          <ChatName>{data.name}</ChatName>
          <Message>Hii</Message>
        </MessageWrapper>

        <ChatMeta>12:12</ChatMeta>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px;
`;

const ChatName = styled.p`
  font-weight: 700;
`;

const Container = styled.div`
  border-bottom: 1px solid ${(props) => `${props.theme.colors.secondary}`};
  display: flex;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 12px;
  line-height: 18px;
`;

const Message = styled.p``;

const MessageWrapper = styled.div`
  flex: 1;
`;

const ChatMeta = styled.div`
  font-size: 0.85em;
`;

export default Chat;
