import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ArticleContext } from "./context";

import AppBody from "./layout/AppBody";
import AppFooter from "./layout/AppFooter";
import AppHeader from "./layout/AppHeader";
import { articleService } from "./services/article.service";

function App() {
  return (
    <ArticleContext.Provider value={articleService}>
      <BrowserRouter>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </BrowserRouter>
    </ArticleContext.Provider>
  );
}

export default App;
