import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';
import { useStyles } from "./styles";

const DetailsModal = ({ isOpen, onClickClose, story }) => {
    const classes = useStyles();
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClickClose}
        maxWidth='md'
        aria-labelledby="responsive-dialog-title"
      >
        <Box display={'flex'} justifyContent='space-between'>
            <DialogTitle id="responsive-dialog-title" classes={{root: classes.root}}>
            {story?.title}
            </DialogTitle>
            <CloseIcon className={classes.icon} onClick={onClickClose} cursor='pointer' />
        </Box>
        <DialogContent>
        <Box
            component="img"
            alt="news image"
            src={story?.multimedia[0]?.url}
            className={classes.image}
      />
          <DialogContentText>
            {story?.abstract}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DetailsModal;