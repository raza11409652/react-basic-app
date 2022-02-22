import { useParams } from "react-router-dom";

const SingleMovieContainer = () => {
  let params = useParams();
  let movieId = params.id;
  /**
   * fetch data from server
   */
  return <p>This is a single movie page{movieId}</p>;
};
export default SingleMovieContainer;
