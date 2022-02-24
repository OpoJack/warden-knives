import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #333;
      background-color: #fff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        }
        h1 {
          font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
            }
            h3 {
              font-size: 1.75rem;
              }
              h4 {
                font-size: 1.5rem;
                }
                h5 {
                  font-size: 1.25rem;
                  }
                  h6 {
                    
                    }
                    p {
                      
                      }`;
