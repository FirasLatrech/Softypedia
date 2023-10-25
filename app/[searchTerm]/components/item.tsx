import Link from "next/link";
import style from "./page.module.css";
type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className={style.mainContainerItem}>
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className={style.Link}
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className={style.artical}>
      <div className={style.UnderArtical}>
        <div className={style.articalContainer}>
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className={style.lastArtical}>{itemTextCol}</article>
  );

  return content;
}
