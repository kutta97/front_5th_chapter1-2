/** @jsx createVNode */
import { createVNode } from "../../lib";
import { globalStore } from "../../stores/index.js";

function addPost(post) {
  const { posts } = globalStore.getState();

  globalStore.setState({
    posts: [post, ...posts],
  });
}

export const PostForm = () => {
  const { loggedIn, currentUser } = globalStore.getState();

  const handleSubmitPost = (e) => {
    const textarea = e.target.previousSibling;
    const content = textarea.value.trim();

    if (!content) {
      return;
    }

    const post = {
      id: Math.random(),
      author: currentUser.username,
      time: Date.now(),
      content,
      likeUsers: [],
    };

    addPost(post);
  };

  return (
    loggedIn && (
      <div className="mb-4 bg-white rounded-lg shadow p-4">
        <textarea
          id="post-content"
          placeholder="무슨 생각을 하고 계신가요?"
          className="w-full p-2 border rounded"
        />
        <button
          id="post-submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSubmitPost}
        >
          게시
        </button>
      </div>
    )
  );
};
