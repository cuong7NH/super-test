import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

type Props = {
  themeProvider: {
    theme: string,
    color: string
  }
}

export const QualificationWrapper = styled.div<Props>`

  padding-top: 80px;
  @media screen and (min-width: 481px){
    padding-top: 100px;
  }
  .qualification {
    display: flex;
    column-gap: 60px;
    row-gap: 30px;
    flex-wrap: wrap;

    .time-line-box {
      padding: 30px;
      background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.backgroundBox : darkTheme.backgroundBox};
      box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
      border-radius: 20px;
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 769px) {
        flex: 0 0 calc(50% - 30px);
        max-width: calc(50% - 30px);
      }

      .time-line-item {
        padding: 0 0 30px 50px;
        position: relative;

        &:before {
          content: '';
          width: 2px;
          border-radius: 10px;
          background-color: ${props => props.themeProvider.color};
          position: absolute;
          top: 32px;
          left: 10px;
          bottom: 0;
        }

        .icon {
          position: absolute;
          top: 0;
          left: 0;
        }


        .time {
          margin-bottom: 10px;
          color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};

        }

        .title {
          margin-bottom: 10px;
          font-weight: 500;
          font-size: 20px;

        }

        .content {
          margin-bottom: 0;

        }
      }


    }
  }


`