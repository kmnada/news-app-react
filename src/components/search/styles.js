import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  field: {
    width: '80%'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    margin: 25,
    marginTop: 70
  },
  popover: {
    '&.MuiPopover-paper': {
      position: 'absolute',
      width: '75%'
    }
  }
}));
