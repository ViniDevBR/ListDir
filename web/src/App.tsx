import { useState, useEffect } from 'react'
import { Explorer } from './components/Explorer'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/globalStyles'

const url = 'https://developer.chrome.com/articles/file-system-access/'

interface IFiles {
  name: string
  kind: string
}
export function App() {
  const [cardFile, setCardFile] = useState<IFiles[]>([])

  // async function handleUploadFile() {
  //   const dirHandle = await window.showDirectoryPicker()

  //   for await (const entry of dirHandle.values()) {
  //     setCardFile(prev => prev.concat([entry.kind + entry.name]))
  //   }
  // }



  useEffect(() => {
    console.log(cardFile)
  },[cardFile])
  
  return (
    <>
      <GlobalStyles />
      <Header />
      <Explorer />

      {/* <input onClick={handleUploadFile} type="file" webkitdirectory="true" directory="true" /> */}
      {/* {cardFile.map(card => (
        <div key={card.name}>{card.name}</div>
      ))} */}
    </>
  )
}

