import PostListItem from './PostListItem';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;