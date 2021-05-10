import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export const Form = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};