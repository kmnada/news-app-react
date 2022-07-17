import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Comments from '../comments';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';

const DetailsModal = ({ isOpen, onClickClose, story }) => {
  const classes = useStyles();
  const history = useHistory();
  const [isCommentsOpen, setCommentsOpen] = useState(false);
  const isSearch = history?.location?.pathname.split('/')[1] === 'search';
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClickClose}
        maxWidth="md"
        aria-labelledby="responsive-dialog-title">
        <Box display={'flex'} justifyContent="space-between">
          <DialogTitle id="responsive-dialog-title" classes={{ root: classes.root }}>
            {story?.title}
          </DialogTitle>
          <CloseIcon className={classes.icon} onClick={onClickClose} cursor="pointer" />
        </Box>
        <DialogContent>
          {story?.multimedia?.[0]?.url && !isSearch && (
            <Box
              component="img"
              alt="news image"
              src={story?.multimedia?.[0]?.url}
              className={classes.image}
            />
          )}
          <DialogContentText>{story?.abstract}</DialogContentText>
        </DialogContent>
        <DialogActions onClick={() => setCommentsOpen(true)} classes={{ root: classes.button }}>
          View Comments
        </DialogActions>
      </Dialog>
      <Comments isOpen={isCommentsOpen} onClickClose={() => setCommentsOpen(false)} />
    </div>
  );
};

export default DetailsModal;
