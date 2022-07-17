/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DetailsModal from '../detailsmodal/detailsModal';
import { useStyles } from './styles';

const StoryCard = ({ story }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const onClickClose = () => setOpen(false);

  const onClickVisit = () => window.open(story.url, '_blank', 'noopener,noreferrer');

  return (
    <>
      <Box
        sx={{
          minWidth: 275
        }}>
        <Card variant="outlined">
          <CardContent className={classes.title} onClick={() => setOpen(true)}>
            <Typography
              sx={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
              className={classes.label}>
              {story?.section}
            </Typography>
            <Typography variant="h5" component="div" onClick={() => setOpen(true)}>
              {story?.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="textSecondary">
              {story?.byline}
            </Typography>
            <Typography variant="body2">{story?.abstract}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onClickVisit()}>
              Visit Page
            </Button>
          </CardActions>
        </Card>
      </Box>
      <DetailsModal isOpen={isOpen} onClickClose={onClickClose} story={story} />
    </>
  );
};

export default StoryCard;
