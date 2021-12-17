import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'


type Props = {
  themeProvider: {
    theme: string
  }
}

export const DemoWrapper = styled.div<Props>`
  background: inherit;
  position: relative;
  height: 500px;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .border-around {
    border: 1px solid;
    border-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? '#d7e4f2' : '#4b4b5b'};
  }

  .system__orbit {

  }

  .system__orbit--sun {
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    opacity: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 1 : 0.7};
  }

  .system__orbit--mercury {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    padding: 5px;
    opacity: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 1 : 0.7};

  }

  .system__orbit--venus {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    top: calc(50% - 90px);
    left: calc(50% - 90px);
    padding: 13px;
    opacity: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 1 : 0.7};

  }

  .system__orbit--earth {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    top: calc(50% - 140px);
    left: calc(50% - 140px);
    padding: 28px;
    opacity: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 1 : 0.7};

  }

  .system__orbit--saturn {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    top: calc(50% - 175px);
    left: calc(50% - 175px);
    padding: 37px;
    opacity: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 1 : 0.7};

  }

  .system__orbit--pluto {
    width: 550px;
    height: 550px;
    border-radius: 50%;
    top: calc(50% - 275px);
    left: calc(50% - 275px);
    padding: 68px;
  }
`