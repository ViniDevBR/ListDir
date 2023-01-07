import { ExplorerContainer, TitleOfFiles, Files } from './styles'
import { useState } from 'react'
import { IFiles } from '../../@types/Files'

import { Directory } from '../Directory'

interface Props {
  files: IFiles[]
  onFilesOpen: (dirHandle: IFiles, out: any) => Promise<void>
}

export function Explorer({ files, onFilesOpen }: Props) {
  const [subDirectories, setSubDirectory] = useState<IFiles[]>([])

  return(
    <ExplorerContainer>
      <TitleOfFiles>
        {files.map((file, index) => (
          <Directory
            onFiles={onFilesOpen}
            key={index}
            file={file}
          />
        ))}
      </TitleOfFiles>

      <Files>
        {subDirectories.map((file, index) => (
          <Directory
            file={file}
            onFiles={() => []}
            key={index}
          />
        ))}
      </Files>
    </ExplorerContainer>
  )
}