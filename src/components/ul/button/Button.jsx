import {styled} from 'styled-components';

export const Button = ({children, onClick}) => {
  return (
    <RenderDelete onClick={onClick}>{children}</RenderDelete>
  )
}

const RenderDelete = styled.button`
  width: 125px;
  height: 45px;
  background-color: #fff;
  border-radius: 14px;
  color: #d43fca;
  border: 2px solid #d43fca;
  font-size: 17px;
  &:hover{
    transition: 1s;
    background-color: #d43fca;
    color: #fff;
    border: none;
    font-size: 18px;
  }
`