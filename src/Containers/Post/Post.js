import React from 'react';
import './Post.scss';
import { IntroMapDataViz } from './Posts';

const lookup = {
   'map-data-viz-design': <IntroMapDataViz />
}
const Post = (props) => {
   const post = props.match.params.id;
   console.log(post);
   return (
      <div className="post-container">
         {
            lookup[post]
         }
      </div>
   )
}

export default Post;
