import styled from 'styled-components'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

type Props = {
  themeProvider: {
    theme: string
  }
}

export const BannerWrapper = styled.div<Props>`
  padding-top: 80px;
  @media screen and (min-width: 481px) {
    padding-top: 100px;
  }

  .banner-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 500px;
    background:  ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? 'linear-gradient(0deg, #ffffff, #bfe6ff)' : 'linear-gradient(0deg, #b3e5ff1a, #b3e5ff00)'};
  }

  .banner-bg-bottom {
    position: absolute;
    top: 426px;
    left: 0;
    right: 0;
    z-index: -1;

    svg {
      path {
        fill: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.body : darkTheme.body};
        
      }
    }
  }

  .banner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    align-items: center;


    .banner-social {
      flex: 0 0 50px;
      order: 1;
      max-width: 50px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        svg {
          cursor: pointer;
        }
      }
    }

    .banner-info {

      flex: 0 0 100%;
      max-width: 100%;
      order: 3;
      @media screen and (min-width: 769px) {
        order: 2;
        flex: 0 0 calc(50% - 80px);
        max-width: calc(50% - 80px);
      }

      h3 {
        font-size: 34px;
        font-weight: bold;
        margin-bottom: 5px;
        @media screen and (min-width: 321px) {

        }
      }

      h4 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 16px;
        color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};
      }
    }


  
    .banner-img {
      
      order: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      @keyframes myAnimation {
        0%   {transform :translate(0, 0) scale(1) rotateY(0);}
        25%   {transform :translate(-10px, 10px) scale(1.025) rotateY(10deg);}
        50%   {transform :translate(-10px, -10px) scale(1.05) rotateY(0);}
        75%   {transform :translate(0px, 10px) scale(1.025) rotateY(-10deg);}
        100%   {transform :translate(0, 0) scale(1) rotateY(0);}
      }
      .me  {
        position: relative;
        animation: myAnimation 6s infinite;
        img {
          width: 100%;
          max-width: 200px;
        }
      }
      .demo {
        z-index: -1;
        position: absolute;
        left: 100px;
        
      }

      flex: 0 0 calc(100% - 80px);
      max-width: calc(100% - 80px);
      @media screen and (min-width: 320px) {
        @media screen and (min-width: 769px) {
          order: 3;
          flex: 0 0 calc(50% - 80px);
          max-width: calc(50% - 80px);
        }


      }


    }
  }

`