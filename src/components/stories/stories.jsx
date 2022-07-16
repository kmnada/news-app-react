import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchStories } from "../../store/stories/action";
import { useEffect } from 'react';
import StoryCards from "../storycards";
import { STORIES_CLEAR_ALL } from "../../store/stories/type";
import NoStories from "../nostories";

const Stories = () => {
    const history = useHistory();
    const { isLoading, length, stories } = useSelector((state) => state.storiesReducer);
    const page = history?.location?.pathname.split('/')[1];
    const dispatch = useDispatch();

    useEffect(() => {
        if(page){
            dispatch(fetchStories(page));
        }
    }, [page]);

    useEffect(() => {
        return () => {
          dispatch({ type: STORIES_CLEAR_ALL })
        };
      }, []);

return (
    <>
     {(!isLoading && stories.length === 0) ? <NoStories/> : <StoryCards stories={stories} isLoading={isLoading} />}
    </>
)}

export default Stories;