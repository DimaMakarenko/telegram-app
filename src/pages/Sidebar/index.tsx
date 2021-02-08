import React, { useEffect, useState } from 'react';
// components
import Chat from 'components/Chat';
// services
import db from 'services/firebase';
// types
import { ChatType } from 'entities/chat';
// styles
import styled from 'styled-components';

const Sidebar: React.FC = () => {
  const [chats, setChats] = useState<ChatType[] | undefined>(undefined);

  useEffect(() => {
    db.collection('chats').onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    );
  }, []);

  return (
    <Wrapper>
      {chats?.map(({ id, data }) => (
        <Chat key={id} data={data} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default Sidebar;
