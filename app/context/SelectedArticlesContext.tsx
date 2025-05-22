"use client";
import { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';
import { Article } from '../lib/definitions';

/* type Article = {
  id: string;
  shortUrl: string;
  thumbnails: string;
  title: string;
  shortTitle: string;
  authors: string;
}; */

interface SelectedArticlesContextType {
  selectedArticles: Article[];
  setSelectedArticles: (articles: Article[]) => void;
}

const SelectedArticlesContext = createContext<SelectedArticlesContextType | undefined>(undefined);

export const SelectedArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);
  return (
    <SelectedArticlesContext.Provider value={{ selectedArticles, setSelectedArticles }}>
      {children}
    </SelectedArticlesContext.Provider>
  );
};

export const useSelectedArticles = () => {
  const context = useContext(SelectedArticlesContext);
  if (context === undefined) {
    throw new Error('useSelectedArticles must be used within a SelectedArticlesProvider');
  }
  return context;
};