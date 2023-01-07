import { HeaderContainer, HeaderTitle, InputPicker } from './styles'
import { ButtonHTMLAttributes } from 'react'

export function Header(props: ButtonHTMLAttributes<HTMLDivElement>) {
  return(
    <HeaderContainer>
      <HeaderTitle>
        <p>BEM VINDO AO</p>
        <h2>
          <span className='explorer'>
            EXPLORER
          </span>
          APP
        </h2>
      </HeaderTitle>

      <InputPicker {...props}>
        <button>
          Selecionar Pasta
        </button>
      </InputPicker>
    </HeaderContainer>
  )
}