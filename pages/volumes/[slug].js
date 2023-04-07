import Image from "next/image";
import { volumes } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  console.log("Query: ", router);
  const { slug } = router.query;

  const book = volumes.find((volume) => volume.slug === slug);
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={book.cover}
        width="140"
        height="230"
        alt={"Book Cover:" + book.title}
      />
      <Link href="/volumes/the-two-towers">next volume →</Link>
    </>
  );
}
