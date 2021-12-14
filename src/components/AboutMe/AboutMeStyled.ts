import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

type Props = {
  themeProvider: {
    theme: string
  }
}

export const AboutMeWrapper = styled.div<Props>`
  position: relative;
  padding-top: 80px;
  @media screen and (min-width: 481px) {
    padding-top: 100px;
  }

  .about-me {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;

    .about-me-img {
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 769px) {
        flex: 0 0 calc(50% - 15px);
        max-width: calc(50% - 15px);
      }
    }

    .about-me-info {
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 769px) {
        flex: 0 0 calc(50% - 15px);
        max-width: 100%;
      }

      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 12px;
      }

      p {
        margin-bottom: 12px;
        color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};
      }

      ul {
        display: flex;
        gap: 50px;
        margin-bottom: 30px;

        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          span.counter {
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 4px;
          }

        }
      }
    }
  }

`