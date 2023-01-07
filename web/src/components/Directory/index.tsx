import { DirectoryContainer, EmptyBox, ContainerNames, Arrow } from './styles'
import { CaretRight, FolderSimple  } from 'phosphor-react'
import { IFiles } from '../../@types/Files'

interface IProps {
  file: IFiles
  onFiles: (file: IFiles, out: any) => void
}

export function Directory({ onFiles, file }: IProps) {
  return (
    <DirectoryContainer onClick={() => onFiles(file, file)}>
      <ContainerNames>
        {file.kind === 'directory' ? (
          <FolderSimple  size={40} color='#fff' weight='duotone' />
        ) : (
          <EmptyBox />
        )}
        <p className='name'>{file.name}</p>
      </ContainerNames>

      <Arrow>
        {file.kind === 'directory' ? (
          <CaretRight size={40} color='#fff' weight='bold' />
        ) : (
          <EmptyBox />
        )}
      </Arrow>
    </DirectoryContainer>
  )
}
