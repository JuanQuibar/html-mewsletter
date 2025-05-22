import { unstable_noStore as noStore } from 'next/cache';
import { ArticleApi,  } from './definitions';

const url = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=10&id=351&selectors=authors';

export async function fetchUltimasNoticias() {
    noStore();
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const { "351": dataApi } = await res.json();
        const data = await dataApi.newsArticles.map((article: ArticleApi) => {
            const objeto= {
                id: article.id,
                title: article.title,
                shortTitle: article.shortTitle,
                shortUrl: article.shortUrl.replace(/^https:\/\/api\./, "https://www."),
                //authors: article.authors[0].name,
                thumbnails: article.thumbnails[0].files[1].url
            };
            return objeto;
        });
        return data;
    } catch (error) {
        console.error('Error en la consulta a la API:', error);
        throw new Error('Falló el fetch a las últimas noticias.');
    }
}