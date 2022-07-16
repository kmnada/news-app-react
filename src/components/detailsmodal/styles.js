import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  ({
    root: {
      flex: '1 1 auto'
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    }
  })
);