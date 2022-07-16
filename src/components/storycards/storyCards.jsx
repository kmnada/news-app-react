import React from 'react';
import Loader from '../loader';


import StoryCard from '../storycard';

const StoryCards = ({ stories, isLoading }) => {
    
return (
   <>
    {isLoading ? <Loader /> : stories.map((story, index) => story?.title && <StoryCard key={`${index}-${story.url}`} story={story} />)}
</>
)}

export default StoryCards;