const importFonts = () => `
  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Inter-UI-Regular.woff2') format('woff2'),
         url('../fonts/Inter-UI-Regular.woff') format('woff')
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 700;
    src: url('../fonts/Inter-UI-Bold.woff2') format('woff2'),
         url('../fonts/Inter-UI-Bold.woff') format('woff')
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Rubik-Regular.woff2') format('woff2'),
         url('../fonts/Rubik-Regular.woff') format('woff')
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/Rubik-Medium.woff2') format('woff2'),
         url('../fonts/Rubik-Medium.woff') format('woff')
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/Rubik-Light.woff2') format('woff2'),
         url('../fonts/Rubik-Light.woff') format('woff')
  }
`

export default importFonts
