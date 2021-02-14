import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    paddingLeft: "50%",
  },
  navMargin: {
    marginBottom: "25px",
  },
  img: {
    padding: "10px",
    marginRight: "2%",
  },
}));

export default useStyles;
