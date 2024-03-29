import React from 'react';
import './Post.scss';
import { MapDataVizDesign } from './MapDataVizDesign/MapDataVizDesign';
import { SeattleJSIsolineRouting } from './SeattleJSIsolineRouting/SeattleJSIsolineRouting';
import { JSConfAsia } from './JSConfAsia/JSConfAsia';

export const postLookup = {
   'map-data-viz-design': {
      content: <MapDataVizDesign />,
      title: 'Intro to Map Data Viz Design'
   },
   'seattle-js-isoline-routing': {
      content: <SeattleJSIsolineRouting />,
      title: 'Watch my talk at Seattle JS about isoline routing'
   },
   'jsconf-asia': {
      content: <JSConfAsia />,
      title: 'Watch my talk from JSConf Asia 2019'
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
