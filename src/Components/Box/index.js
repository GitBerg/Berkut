import styled from 'styled-components'

export const Box = styled.div`
  border-radius: 8px;
  background-color: #fdfdfd;
  padding: 16px;

  .boxLink{
      font-size:14px;
      color: #2E7BB4;
      text-decoration: none;
      font-weight: 800;
  }
  
  .title{
      font-size: 32px;
      font-weight: 400px;
      margin-botton: 20px;
  }

  .subTitle{
      font-size: 18px;
      font-weight: 400;
      margin-botton: 20px;
  }

  .smallTitle{
    margin-botton: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }

  hr{
    margin-top: 12px;
    margin-botton: 8px;
    border-color: transparent;
    border-botton-color: #ECF2FA;
  }

  input{
      width:100%;
      background-color: #f4f4f4;
      color: #333;
      border: 0;
      padding: 14px 16px;
      margin-botton: 14px;
      border-radius: 10000px;
      ::placeholder{
          color:#333;
          opacity: 1;
      }

  }

  button{
      border: 0px;
      padding: 8px 12px;
      color: #FFF;
      border-radius: 10000px;
      background-color: #6F92BB;
  }
`;


export default Box;