import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

type Props = {
  themeProvider: {
    theme: string
  }
}

export const ContactWrapper = styled.div<Props>`
  padding-top: 100px;
  @media screen and (min-width: 481px){
    padding-top: 80px;
  }


  .contact {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 30px;
    .contact-info {
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 801px){
        flex: 0 0 calc(50% - 30px);
        max-width: calc(50% - 30px);
      }

      display: flex;
      flex-direction: column;
      row-gap: 30px;
      .info-box {
        padding: 30px;
        box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
        border-radius: 20px;
        transition: 0.4s;
        background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.backgroundBox : darkTheme.backgroundBox};
        display: flex;
        gap: 20px;
        &:hover {
          color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
          .icon {
            transition: 0.6s;
            background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
            color: #fff;
          }
        }
        .icon {
          flex: 0 0 50px;
          max-width: 50px;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.body : darkTheme.body};
          color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }
        .title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 6px;
        }
        .email {
          cursor: pointer;
          &:hover {
            color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
          }
        }
        .info {
          color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};
        }
        
      }
    }
    .contact-form {
      padding: 30px;
      box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
      border-radius: 20px;
      transition: 0.4s;
      background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.backgroundBox : darkTheme.backgroundBox};
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 801px){
        flex: 0 0 calc(50% - 30px);
        max-width: calc(50% - 30px);
      }
      display: flex;
      flex-wrap: wrap;
      column-gap: 30px;
      row-gap: 20px;
      .input-box {
          outline: none;
          display: block;
          width: 100% !important;
          padding: 12px 16px;
          border: 1px solid;
          border-color: ${({themeProvider})=> themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.borderColor : lightTheme.borderColor};
          color: ${({themeProvider})=> themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.text : lightTheme.text};
          transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          border-radius: 10px;
          background-color: ${({themeProvider})=> themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.body : lightTheme.body};
      }
      .input-box-50 {
        flex: 0 0 100%;
        max-width: 100%;
      }
      .input-box-100 {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
    
    
  }



`