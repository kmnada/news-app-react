import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchStories } from '../../store/stories/action';
import StoryCards from '../storycards';
import { STORIES_CLEAR_ALL } from '../../store/stories/type';
import NoStories from '../nostories';
import { useStyles } from './styles';

const Stories = () => {
  const history = useHistory();
  const classes = useStyles();
  const { isLoading, stories } = useSelector((state) => state.storiesReducer);
  const page = history?.location?.pathname.split('/')[1];
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(fetchStories(page));
    }
  }, [page]);

  useEffect(() => {
    return () => {
      dispatch({ type: STORIES_CLEAR_ALL });
    };
  }, []);

  return (
    <div className={classes.root}>
      {!isLoading && stories.length === 0 ? (
        <NoStories message={'No Stories Here'} />
      ) : (
        <StoryCards stories={stories} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Stories;
