import { DirectoryContainer, EmptyBox, ContainerNames, Arrow } from './styles'
import { CaretRight, FolderSimple  } from 'phosphor-react'
import { IFiles } from '../../@types/Files'

export function Directory(props: IFiles) {
  return (
    <DirectoryContainer>
      <ContainerNames>
        {props.directory ? (
          <FolderSimple  size={40} color='#fff' weight='duotone' />
        ) : (
          <EmptyBox />
        )}
        <p className='name'>{props.name}</p>
      </ContainerNames>

      <Arrow>
        <CaretRight size={40} color="#fff" weight="bold" />
      </Arrow>
    </DirectoryContainer>
  )
}
