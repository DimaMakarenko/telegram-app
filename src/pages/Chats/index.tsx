import React, { useEffect, useState } from 'react';
// components
import Chat from 'components/Chat';
import Search from 'components/Search';
import Sidebar from 'pages/Sidebar';
// services
import db from 'services/firebase';
// types
import { ChatType } from 'entities/chat';
// styles
import styled from 'styled-components';

const Chats: React.FC = () => {
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
      <Sidebar />
      <Search />
      {chats?.map(({ id, data }) => (
        <Chat key={id} data={data} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 31%;
`;

export default Chats;
