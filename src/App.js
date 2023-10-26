import { useState} from "react";
import './index.css';
import Input from "./Components/InputComp";
import InputLenghtCalc from "./Components/InputLenghtComp";
import PostList from "./Components/PostList";

function App() {

  const [posts, setPosts] = useState([])

  const onNewPostAdded = (post) => {
    const newPosts = [...posts]
    newPosts.unshift(post);
    setPosts(newPosts)
  };

  const onPostDeleted = (postDeleted) => {
    setPosts(posts.filter((post) => post !==postDeleted))
  }


  return (
    <div className="App">
    <Input onNewPostAdded={onNewPostAdded} />
    <InputLenghtCalc posts={posts} />
    <PostList posts={posts} onPostDeleted= {onPostDeleted}/>
    </div>
  );
}

export default App;
