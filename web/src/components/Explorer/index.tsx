import { ExplorerContainer, TitleOfFiles, Files } from './styles'
import { useEffect, useState } from 'react'
import { IFiles } from '../../@types/Files'
import { API } from '../../mock'
import { Directory } from '../Directory'

export function Explorer() {
  const [files, setFiles] = useState<IFiles[]>([])

  useEffect(() => {
    setFiles(API)
  },[API])
  
  return(
    <ExplorerContainer>
      <TitleOfFiles>
        {files.map((file, index) => (
          <Directory
            key={index}
            directory={file.directory}
            name={file.name}
            kind={file.kind}
          />
        ))}
      </TitleOfFiles>

      <Files>

      </Files>
    </ExplorerContainer>
  )
}