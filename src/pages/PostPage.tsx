import { useParams } from 'react-router-dom';
import posts from '../data/posts.json';
import Comments from '../components/Comments';

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">By {post.author} on {post.date}</p>
      <div className="prose dark:prose-invert max-w-none">
        {post.content}
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Like
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <Comments postId={post.id} />
      </div>
      <div className="mt-8 text-center">
        <a href="https://github.com/networkini" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-4">GitHub</a>
        <a href="https://linkedin.com/in/networkini" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-4">LinkedIn</a>
      </div>
    </div>
  );
};

export default PostPage;
