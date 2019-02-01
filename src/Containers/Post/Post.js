import React from 'react';
import './Post.scss';
import { MapDataVizDesign } from './MapDataVizDesign/MapDataVizDesign';

export const postLookup = {
   'map-data-viz-design': {
      content: <MapDataVizDesign />,
      title: 'Intro to Map Data Viz Design'
   }
}
const Post = (props) => {
   const post = props.match.params.id;
   console.log(post);
   return (
      <div className="post-container">
         {
            postLookup[post].content
         }
      </div>
   )
}

export default Post;
