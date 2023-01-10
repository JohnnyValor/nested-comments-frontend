import { createContext, useState } from "react";
import { Routes, Route } from "react-router";
import { Post } from "./components/Post";
import { PostList } from "./components/PostLists";
import { PostProvider } from "./contexts/PostContext";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="fullscreen" id={theme}>
        <div className="container">
          <div className="switch">
            <label> {theme === "light" ? "Go Dark!" : "Light it up!"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route
              path="/posts/:id"
              element={
                <PostProvider>
                  <Post />
                </PostProvider>
              }
            />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
