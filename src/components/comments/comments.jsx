import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import NoStories from '../nostories';
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
        <NoStories message={'No comments yet...'} />
      </Dialog>
    </div>
  );
};

export default Comments;
