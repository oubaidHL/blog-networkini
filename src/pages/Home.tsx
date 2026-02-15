import PostList from '../components/PostList';
import posts from '../data/posts.json';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">My Blog</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;