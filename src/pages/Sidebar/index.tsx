import React, { useState, useCallback } from 'react';
// icons
import MenuIcon from '@material-ui/icons/Menu';
// styled
import styled from 'styled-components';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <ButtonWrapper>
        <button onClick={handleMenuClick}>
          <MenuIcon />
        </button>
      </ButtonWrapper>
      <Wrapper isOpen={isOpen}>
        sidebar
        <p>kdjnhkdjn</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? '300px' : '0px')};
  display: flex;
  flex-direction: column;
  background-color: blue;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  transition: 0.1s ease-out;
`;

const ButtonWrapper = styled.div`
  z-index: 2;
  position: relative;
`;
export default Sidebar;
