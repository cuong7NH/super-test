import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'


type Props = {
  themeProvider: {
    theme: string
  }
}
export const ServicesWrapper = styled.div<Props>`
  max-width: 100vw;
  overflow-x: hidden;
  padding-top: 80px;
  padding-bottom: 10px;
  @media screen and (min-width: 481px){
    padding-top: 100px;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 30px;
    .service-item {
      padding: 30px;
      box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
      border-radius: 20px;
      transition: 0.4s;
      background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.backgroundBox : darkTheme.backgroundBox};
      text-align: center;
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 769px) {
        flex: 0 0 calc(50% - 30px);
        max-width: calc(50% - 30px);
      }
      .icon {
        background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.text : darkTheme.text};
      
        margin: 0 auto 15px;
        box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
        border-radius: 50%;
        svg {
          color: #fff;
        }
      }

      .title {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: 500;
      }

      .desc {
        color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};
        max-width: 550px;
        margin: 0 auto;
      }
    }
  }




`