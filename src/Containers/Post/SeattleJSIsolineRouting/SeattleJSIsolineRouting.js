import React from 'react';
import '../Post.scss';

export const SeattleJSIsolineRouting = () => {
   return (
      <>
      <p>
      A few weeks ago I spoke at the Seattle JavaScript meetup about isoline routing.
      </p>
      <p>
         <a href="https://dbabbs.github.io/isolines/">View the live demo</a>
      </p>
      <p>
         <a href="https://github.com/dbabbs/isolines/blob/master/isolines.pdf">View the deck</a>
      </p>
      <p>
         <a href="https://github.com/dbabbs/isolines">View the source code for the demo</a>
      </p>
      <iframe 
         width="100%" 
         height="600" 
         src="https://www.youtube.com/embed/p7jKHn4HSeQ" 
         frameborder="0" 
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen
      />
      </>
   )
}
