'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchUltimasNoticias } from '../lib/data';
import { useSelectedArticles } from '../context/SelectedArticlesContext';
import { Article } from '../lib/definitions';
import Search from '../ui/search';

export default function Seleccionar({
  searchParams,}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  console.log(query);
  const [articles, setArticles] = useState<Article[]>([]);
  const { selectedArticles, setSelectedArticles } = useSelectedArticles() as unknown as {
    selectedArticles: Article[];
    setSelectedArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  };

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchUltimasNoticias();
      setArticles(data);
    };
    getArticles();
  }, []);

  const handleCheckboxChange = (article: Article) => {
    setSelectedArticles((prevSelectedArticles) => {
      if (prevSelectedArticles.some(selectedArticle => selectedArticle.id === article.id)) {
        return prevSelectedArticles.filter(selectedArticle => selectedArticle.id !== article.id);
      } else {
        return [...prevSelectedArticles, article];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
      <p>Inicio</p>
      </Link>
      <Search placeholder="Buscar nota" />
      <h1 className="text-2xl font-bold mb-4">Seleccionar Artículos</h1>
      <ul>

      {articles
  .filter((article: Article) => article.title.toLowerCase().includes(query.toLowerCase()))
  .map((article: Article) => (
    <li key={article.id} className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={selectedArticles.some(selectedArticle => selectedArticle.id === article.id)}
        onChange={() => handleCheckboxChange(article)}
        className="mr-2"
        aria-label={`Select article: ${article.title}`}
      />
      <span>{article.title}</span>
    </li>
  ))}
        {articles.map((article: Article) => (
          <li key={article.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedArticles.some(selectedArticle => selectedArticle.id === article.id)}
              onChange={() => handleCheckboxChange(article)}
              className="mr-2"
              aria-label={`Select article: ${article.title}`}
            />
            <span>{article.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}