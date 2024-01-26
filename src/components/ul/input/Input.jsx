import {styled} from 'styled-components';

export const Input = ({type, value, setData, placeholder}) => {
  return (
    <Inputs type={type} value={value} onChange={(e) => {
      setData(e.target.value);
    }} placeholder={placeholder}/>
  )
}

const Inputs = styled.input`
  width: 268px;
  height: 40px;
  border-radius: 13px;
  color: #c6c5c5;
  font-size: 18px;
  padding-left: 8px;
`