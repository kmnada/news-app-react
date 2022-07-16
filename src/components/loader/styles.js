import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  ({
    loader: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.7)'
    }
  })
);