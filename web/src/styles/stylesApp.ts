import styled from 'styled-components'

export const ExplorerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  border: 1px solid #1E1E1E;
  height: 50%;
  background-color: gray;
`

export const TitleOfFiles = styled.div`
  height: 500px;
  flex: 1;
  border-right: 1px solid #1E1E1E;
  overflow-y: scroll;
`

export const Files = styled.div`
  height: 500px;
  flex: 1;
`