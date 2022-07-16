import { useDispatch } from 'react-redux';
import { fetchStories } from '../store/stories/action';

const useFetchStories = (page) => {
  const dispatch = useDispatch();
  dispatch(fetchStories(page));
};

export default useFetchStories;
