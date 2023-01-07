import { DirectoryContainer, EmptyBox, ContainerNames, Arrow } from './styles'
import { CaretRight, FolderSimple  } from 'phosphor-react'
import { IFiles } from '../../@types/Files'

interface IProps extends IFiles {
  onFiles: (subDirectory: IFiles[] | undefined) => void
}

export function Directory({onFiles, directory, ...props}: IProps) {
  return (
    <DirectoryContainer onClick={() => onFiles(directory)}>
      <ContainerNames>
        {directory ? (
          <FolderSimple  size={40} color='#fff' weight='duotone' />
        ) : (
          <EmptyBox />
        )}
        <p className='name'>{props.name}</p>
      </ContainerNames>

      <Arrow>
        {directory ? (
          <CaretRight size={40} color="#fff" weight="bold" />
        ) : (
          <EmptyBox />
        )}
      </Arrow>
    </DirectoryContainer>
  )
}
