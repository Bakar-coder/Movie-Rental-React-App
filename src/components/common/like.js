import React, { Fragment } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Like = ({ movie, likeMovie }) => {
  const handleLike = movie => {
    likeMovie(movie);
  };

  return (
    <Fragment>
      {movie.liked ? (
        <MdFavorite className="heart heart-full" onClick={() => handleLike(movie)} />
      ) : (
        <MdFavoriteBorder className="heart" onClick={() => handleLike(movie)} />
      )}
    </Fragment>
  );
};

export default Like;
