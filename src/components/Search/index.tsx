import React from 'react';
// styles
import styled from 'styled-components';
interface InputProps extends React.ImgHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Search: React.FC<InputProps> = ({ placeholder = 'Search', ...rest }) => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Input type='text' placeholder={placeholder} autoComplete='off' {...rest} />
      </SearchWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 12px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${(props) => `${props.theme.colors.search}`};
  padding: 6px 26px 6px 30px;
  border: 1px solid ${(props) => `${props.theme.colors.search}`};
  border-radius: 2px;
  margin: 0;
`;

const SearchWrapper = styled.div``;

export default Search;
