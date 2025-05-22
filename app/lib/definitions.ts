export type ArticleApi = {
  id: string;
  shortUrl: string;
  thumbnails: { files: { url: string }[] }[];
  title: string;
  shortTitle: string;
  authors: { name: string }[];
  };

  export type Article = {
    id: string;
    shortUrl: string;
    thumbnails: string;
    title: string;
    shortTitle: string;
    authors: string;
  }