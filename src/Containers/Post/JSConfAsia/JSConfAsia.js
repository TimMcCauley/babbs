import React from 'react';
import '../Post.scss';

export const JSConfAsia = () => {
  return (
    <>

      <p>
        In early June, I spoke at JSConfAsia about <a href="https://developer.here.com">HERE</a>'s new 3D web rendering engine, <a href="http://harp.gl">harp.gl</a>.
      </p>
      <p>
        <a href="https://developer.here.com/tutorials/harpgl">View the talk in workshop form</a>
      </p>
      <p>
        <a href="https://developer.here.com/blog/introducing-harp.gl-3d-vector-maps-for-the-web">View the harp.gl release blog</a>
      </p>

      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/watch?v=YhqpB58-wiQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </>
  )
}
