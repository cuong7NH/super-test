import styled from 'styled-components'
import { darkTheme, lightTheme } from '../../theme'
import { THEME_OPTIONS } from '../../constant'

type Props = {
  themeProvider: {
    theme: string
  }
}

export const PortfolioWrapper = styled.div<Props>`


  padding-top: 80px;
  @media screen and (min-width: 481px) {
    padding-top: 100px;
  }
  .slider-wrapper {
    padding: 0 30px;
  }
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 30px;

    .portfolio-img {
      flex: 0 0 100%;
      max-width: 100%;
      padding-left: 20px;
      @media screen and (min-width: 801px) {
        flex: 0 0 calc(50% - 45px);
        max-width: calc(50% - 45px);
      }
    }

    .portfolio-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 0 0 100%;
      max-width: 100%;
      @media screen and (min-width: 801px) {
        flex: 0 0 calc(50% - 45px);
        max-width: calc(50% - 45px);
      }

      h3 {
        font-size: 24px;
        margin-bottom: 12px;
        font-weight: 500;
      }

      p {
        margin-bottom: 20px;
        color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};
      }

    }


  }

  .slick-arrow {
    &::before {
      color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
      font-size: 35px;
    }

  }

  .slick-prev {


  }

  .slick-dots {
    .slick-active {
      button {
        &::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }


`