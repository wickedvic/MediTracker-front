import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0f7986",
      },
      secondary: {
        main: "#861c0f",
      },
    },
    typography: {
      fontFamily: "Xanh Mono",
      h6: {
        fontSize: "3em",
      },
    },
  });

  export default theme 