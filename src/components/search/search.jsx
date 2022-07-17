import React, { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles } from '../../store/stories/action';
import StoryCards from '../storycards';
import Pagination from '../pagination';
import usePagination from '../../hooks/usePagination';
import { getRecentSearches } from '../../utils/HandleSearchValues';
import NoStories from '../nostories';

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchWord, setSearchWord] = useState('');
  const [searchCalled, setSearchCalled] = useState(false);
  const fieldRef = useRef(null);
  const { isLoading, totalPages, stories } = useSelector((state) => state.storiesReducer);
  const PER_PAGE = 10;

  const count = Math.min(totalPages, 200);
  const _DATA = usePagination(stories, PER_PAGE);

  const handleClick = (event) => {
    event.persist();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const recentSearches = getRecentSearches();

  const onClickSearch = (event) => {
    if (!searchCalled) {
      setSearchCalled(true);
    }
    event.stopPropagation();
    setPage(0);
    if (searchWord.trim()) {
      dispatch(searchArticles(searchWord));
    }
  };

  const handleOnChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleChange = (_event, newPage) => {
    if (newPage !== page) {
      setPage(newPage);
      _DATA.jump(newPage);
      dispatch(searchArticles(searchWord, newPage - 1));
    }
  };

  const onClickItem = (word) => {
    setAnchorEl(null);
    setSearchWord(word);
    if (!searchCalled) {
      setSearchCalled(true);
    }
    setPage(0);
    dispatch(searchArticles(word));
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off" className={classes.box}>
        <TextField
          inputRef={fieldRef}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          className={classes.field}
          onClick={handleClick}
          onChange={(event) => handleOnChange(event)}
          value={searchWord}
          autoFocus={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!!searchWord.length && (
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      setSearchWord('');
                    }}>
                    <CancelOutlinedIcon />
                  </IconButton>
                )}
                <IconButton onClick={(event) => onClickSearch(event)} disabled={!searchWord.trim()}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {!!recentSearches.length && (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            disableAutoFocus={true}
            disableEnforceFocus={true}
            classes={{ paper: classes.popover }}>
            {recentSearches.map((option) => (
              <MenuItem
                key={`${option.value}-${option.label}`}
                onClick={() => onClickItem(option.label)}>
                {option.label}
              </MenuItem>
            ))}
          </Popover>
        )}
      </Box>
      {stories.length > 0 && <Pagination count={count} handleChange={handleChange} page={page} />}
      {!isLoading && stories.length === 0 && searchCalled ? (
        <NoStories message={'No Stories Here'} />
      ) : (
        <StoryCards stories={stories} isLoading={isLoading} />
      )}
    </>
  );
};

export default Search;
