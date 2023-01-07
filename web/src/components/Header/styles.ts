import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  width: 50%;
  
  .explorer {
    font-weight: 100;
    font-size: 2rem;
  }
`

export const InputPicker = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`