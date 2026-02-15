import { useState } from 'react';
import commentsData from '../data/comments.json';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState(commentsData.filter(c => c.postId === postId));
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentData = {
      id: comments.length + 1,
      postId: postId,
      author: 'Guest',
      content: newComment,
      date: new Date().toISOString().split('T')[0]
    };
    setComments([...comments, newCommentData]);
    setNewComment('');
  };

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="border-b py-4">
          <p className="font-bold">{comment.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{comment.date}</p>
          <p className="mt-2">{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="w-full border rounded-lg p-2"
          rows="3"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
