import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8f2ed;

  .login {
    display: flex;
    @media screen and (min-width: 901px) {

    }

    .login-content {
      flex: 0 0 50%;
      max-width: 50%;
      display: none;
      @media screen and (min-width: 901px) {
        display: block;
        padding: 30px;
      }
    }

    .login-form {
      flex: 0 0 100%;
      max-width: 100%;
      min-height: 505px;
      @media screen and (min-width: 901px) {
        flex: 0 0 50%;
        padding: 0 30px;
        max-width: 50%;
      }

      .ant-input {
        display: block;
        margin: 8px 0 4px;
        padding: 12px;
        outline: none;
        background-color: #e8f2ed;
        width: 100%;
        border: none;
        border-radius: 0.4rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        transition: 0.4s;
        ::placeholder {
          font-size: 14px;
        }
      }

      .ant-form-item-required {
        font-weight: 400;
        color: #5a5555;
      }

      .ant-form-item-explain-error {
        color: orangered;
      }

      .ant-row {
        margin-bottom: 20px;
      }

      #password {
        position: relative;

        .anticon {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
      }

    }
  }

  .tabs-component {
    background: linear-gradient(to bottom right, #ebfcd6 0%, #ff8fa9 100%);
    padding: 30px 20px 40px;
    @media screen and (min-width: 361px) {
      padding: 30px 30px 40px;
    }
    @media screen and (min-width: 440px) {
      padding: 30px 30px 40px;
      min-width: 400px;
    }
    @media screen and (min-width: 801px) {
      padding: 30px 40px 40px;
    }
    border-radius: 20px;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.1);

    .title {
      margin-bottom: 20px;
      color: #ff6329;
      font-size: 20px;
      font-weight: bold;
      @media screen and (min-width: 361px) {
        font-size: 24px;
      }
    }
  }

  .tab-links {
    max-width: 200px;
    margin-bottom: 20px;
    display: flex;
    background-color: #c4d1e066;
    border: 1px solid #c4d1e066;
    padding: 2px;

    border-radius: 50px;

    svg {
      padding-right: 5px;
      transform: translateX(-5px);
    }
  }

  .tab {
    position: relative;
  }

  .tab a {
    text-decoration: none;
    color: #454360;
  }

  .tab::before {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: absolute;
    border-radius: 50px;
    background: none;
    transition: background 0.5s ease;
  }

  .tab svg {
    height: 30px;
    width: 30px;
    min-width: 30px;
    fill: #6C63FF;
    transition: fill 0.5s ease;
  }

  .tab.active::before {
    background: #8A3FFC;
  }

  .tab span {
    font-weight: 700;
    transition: color 0.5s ease;
  }

  .tab.active span {
    color: #8A3FFC;
  }

  .tab.active svg {
    fill: #8A3FFC;
  }

  .tab a {
    text-transform: capitalize;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    overflow: hidden;
    position: relative;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
  }

  .content-card {
    width: 48%;
    margin-bottom: 26px;
  }

  .content-card .info::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    bottom: -5px;
    background: red;
    opacity: 0.5;
  }

  .content-card img {
    border-radius: 6px;
  }

  .content-card h3 {
    margin: 0 0 5px;
  }

  .content-card .info {
    padding: 10px 0;
  }








`

export const SignInFormWrapper = styled.div`
        

  .message {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 40%;
    top: 47%;
  }

  .button-box {
    position: absolute;
    background: #FCFCFC;
    width: 50%;
    height: 15%;
    border-radius: 20px;
    top: 73%;
    left: 25%;
    outline: 0;
    border: none;
    box-shadow: 2px 2px 10px rgba(#777777, .5);
    transition: all .5s ease-in-out;
    &:hover {
      background: darken(#FCFCFC, 5%);
      transform: scale(1.05);
      transition: all .3s ease-in-out;
    }
  }
  
  footer {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 1em;
    text-transform: uppercase;
    padding: 10px;
    p {
      color: #EF8D9C;
      letter-spacing: 2px;
    }
    a {
      color: #B0DB7D;
      text-decoration: none;
      &:hover {
        color: #FFC39E;
      }
    }
  }

`

export const SignUpFormWrapper = styled.div`



`