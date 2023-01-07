import styled from 'styled-components'

export const DirectoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;

  .name {
    margin-left: 10px;
    color: black;
  }
`

export const ContainerNames = styled.div`
  display: flex;
  align-items: center;
`

export const Arrow = styled.div`

`

export const EmptyBox = styled.div`
  width: 40px;
  height: 40px;
`
