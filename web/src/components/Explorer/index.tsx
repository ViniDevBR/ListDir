import { ExplorerContainer, TitleOfFiles, Files } from './styles'
import { useEffect, useState } from 'react'
import { IFiles } from '../../@types/Files'
import { API } from '../../mock'
import { Directory } from '../Directory'

export function Explorer() {
  const [files, setFiles] = useState<IFiles[]>([])
  const [subDirectories, setSubDirectory] = useState<IFiles[]>([])

  function onFilesOpen(subDirectory: IFiles[] | undefined) {
    if(!subDirectory){
      return
    }

    if(!subDirectories[0]) {
      setSubDirectory(prev => prev.concat(subDirectory))
    } else {
      setSubDirectory(prev => {
        const item = [prev]
        const data = item[0] = subDirectory

        return data
      })
    }
  }

  useEffect(() => {
    setFiles(API)
  },[API])
  console.log(subDirectories)
  return(
    <ExplorerContainer>
      <TitleOfFiles>
        {files.map((file, index) => (
          <Directory
            onFiles={onFilesOpen}
            key={index}
            directory={file.directory}
            name={file.name}
            kind={file.kind}
          />
        ))}
      </TitleOfFiles>

      <Files>
        {subDirectories.map((item, index) => (
          <Directory
            onFiles={() => []}
            key={index}
            name={item.name}
            kind={item.kind}
            directory={item.directory}
          />
        ))}
      </Files>
    </ExplorerContainer>
  )
}