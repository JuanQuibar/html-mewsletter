import Image from 'next/image';
import { roboto, serif } from '../ui/fonts';
import { Article } from '../lib/definitions';

export default function ArticleCard({ article }: { article: Article }) {

  const{ shortUrl, thumbnails, title, shortTitle, authors } = article;
  return (
    <a className=" pb-3 cursor-pointer border-b-2 last:border-b-0 border-gray-300  mb-4" href={shortUrl} target="_blank" >
      <Image src={thumbnails} alt={title} width={776} height={438} className="rounded-lg w-full aspect-[4/3] object-cover overflow-hidden" />
      <p className={`${roboto.className} pt-3 uppercase text-primary text-sm font-bold pb-0`}>{shortTitle}</p>
      <h2 className={`${serif.className} pt-1 text-lg md:text-2xl lg:text-xl xl:text-2xl font-extrabold tracking-tight leading-tight active:bg-slate-300 lg:hover:underline lg:active:bg-transparent`}>{article.title}</h2>
      {/* {authors.length > 0 ? (
        <p className={`${roboto.className} antialiased uppercase roboto text-xs pt-2 lg:pt-2 text-gray-400 font-bold`}>{authors}</p>
      ): null} */}
    </a>
  );
}

