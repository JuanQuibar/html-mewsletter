"use client"
import { useSelectedArticles } from "../context/SelectedArticlesContext";
import { Article} from "../lib/definitions";
import ArticleCard from "./articleCard";

export default function ArticleList() {
  const { selectedArticles }: { selectedArticles: Article[] } = useSelectedArticles();
  
  return (
    <div className="grid grid-cols-1">
      
    {selectedArticles.map((article: Article) => (
        <ArticleCard key={article.id} article={article} />
    ))}
    </div>  
  );
}