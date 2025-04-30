("");
import Link from "next/link";
import React, { use } from "react";

const NewsArticle = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
// import Link from "next/link";
// import React from "react";

// const NewsArticle = async ({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) => {
//   const { articleId } = await params;
//   const { lang = "en" } = await searchParams;
//   return (
//     <div>
//       <h1>News Article {articleId}</h1>
//       <p>Reading in {lang}</p>
//       <div>
//         <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//         <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//         <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//       </div>
//     </div>
//   );
// };

// export default NewsArticle;
