import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import NoStories from '../nostories';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';

const Comments = ({ isOpen, onClickClose }) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClickClose}
        aria-labelledby="responsive-dialog-title"
        classes={{ paper: classes.root }}>
        <CloseIcon className={classes.icon} onClick={onClickClose} cursor="pointer" />
        <NoStories message={'No comments yet...'} />
      </Dialog>
    </div>
  );
};

export default Comments;
