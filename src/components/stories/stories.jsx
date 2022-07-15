import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchStories } from "../../store/stories/action";
import { useEffect } from 'react';

const Stories = () => {
    const history = useHistory();
    const value = useSelector((state) => state.storiesReducer);
    const page = history?.location?.pathname.split('/')[1];
    const dispatch = useDispatch();
    if(page) {
        dispatch(fetchStories(page));
    }

return (<div>vlaas</div>)
}

export default Stories;