/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/globalStyles'
import { IFiles } from './@types/Files'
import { ExplorerContainer, TitleOfFiles, Files } from './styles/stylesApp'
import { Directory } from './components/Directory'

//const url = 'https://developer.chrome.com/articles/file-system-access/'

export function App() {
  const [files, setFile] = useState<IFiles[]>([])
  const [subDirectories, setSubDirectory] = useState<IFiles[]>([])


  async function handleUploadFile() {
    const out: IFiles[] = []
    const dirHandle = await window.showDirectoryPicker()

    await handleDirectoryEntry2(dirHandle, out)
   
    console.log(out)
  }

  // async function handleDirectoryEntry( dirHandle: any, out: any ) {
  //   for await (const entry of dirHandle.values()) {

  //     if (entry.kind === 'file'){
  //       const data: IFiles = new Object()
  //       const file = await entry.getFile()
  //       data.name = file.name
  //       data.kind = entry.kind
  //       await out.push(data)
  //     }

  //     if (entry.kind === 'directory') {
  //       const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false })

  //       const data: IFiles = new Object()
  //       data.name = entry.name
  //       data.kind = entry.kind

  //       await out.push(data)
  //       const newOut: IFiles = []

  //       await handleDirectoryEntry( newHandle, newOut )
  //     }
  //   }
  // }

  async function handleDirectoryEntry2( dirHandle: any, out: any ) {
    for await (const entry of dirHandle.values()) {
      if (entry.kind === 'file'){
        const file = await entry.getFile()
        out[ file.name ] = file
      }
      if (entry.kind === 'directory') {
        const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false } )
        const newOut = out[ entry.name ] = {}
        await handleDirectoryEntry2( newHandle, newOut )
      }
    }
  }

  return (
    <>
      <GlobalStyles />
      <Header onClick={handleUploadFile}/>

      <ExplorerContainer>
        <TitleOfFiles>
          {files.map((file, index) => (
            <Directory
              onFiles={() => []}
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
    </>
  )
}

