
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/post/${post.id}`}>
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      </Link>
      <p className="text-gray-700 dark:text-gray-300">{post.content.substring(0, 100)}...</p>
    </div>
  );
};

export default PostListItem;
