import React from 'react';
// types
import { ChatType } from 'entities/chat';
// styles
import styled from 'styled-components';
import { Colors } from 'theme/colors';

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

        <ChatMeta>
          <ChatTime>12:12</ChatTime>
          <ChatBadge>1</ChatBadge>
        </ChatMeta>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: ${(props) => `${props.theme.colors.font}`};
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px;
`;

const ChatName = styled.p`
  font-weight: 700;
  color: ${(props) => `${props.theme.colors.secondaryFont}`};
`;
const ChatTime = styled.span``;

const ChatBadge = styled.span`
  background-color: ${(props) => `${props.theme.colors.secondaryBg}`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.white};
  line-height: 1;
  border-radius: 11px;
  font-size: 11px;
  padding: 4px;
  text-align: center;
  margin-top: 4px;
`;

const Container = styled.div`
  border-bottom: 1px solid ${(props) => `${props.theme.colors.font}`};
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
  display: flex;
  flex-direction: column;
`;

export default Chat;
