import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'


type themeProps = {
  isActive: boolean;
  themeProvider: {
    theme: string,
    color: string
  }
}
type  themeProviderProps = {
  themeProvider: {
    theme: string,
    color: string
  }
}

export const HeaderWrapper = styled.div<themeProviderProps>`
  height: 70px;
  padding: 10px 0;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 'rgba(255,255,255,0.9)' : 'rgba(53,51,83,0.9)'};
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    gap: 20px;

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 50px;
      color: ${props => props.themeProvider.color};
    }

    .menu {
      @media only screen and (min-width: 801px) {
        display: flex;
      }
      line-height: 50px;
      display: none;
      flex-grow: 1;
      justify-content: flex-end;
      gap: 5px;

      .dark-mode {
        padding: 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }



`


export const MenuItem = styled.li<themeProps>`
  padding: 0 8px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  transition: .4s;
  color: ${props => props.isActive ? props.themeProvider.color : 'inherit'};

  &:before {
    content: '';
    height: 3px;
    position: absolute;
    bottom: 0;
    opacity: 0;
    left: ${props => props.isActive ? '8px' : '50%'};
    right: ${props => props.isActive ? '8px' : '50%'};
    background-color: ${props => props.themeProvider.color};
    transition: 0.4s;

  }

  &:hover {
    color: ${props => props.themeProvider.color};

    &:before {
      right: 8px;
      left: 8px;
      opacity: 0.8;
    }
  }

`