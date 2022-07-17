import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  title: {
    cursor: 'pointer'
  },
  label: {
    background: 'grey',
    width: 'max-content',
    borderRadius: 4,
    padding: '2px 5px'
  },
  root: {
    '&:hover': {
      background: '#00aeff'
    }
  }
}));
