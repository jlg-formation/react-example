import React from "react";
import { articleService } from "./services/article.service";

export const ArticleContext = React.createContext(articleService);
