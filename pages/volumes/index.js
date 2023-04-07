import { useRouter } from "next/router";
import { volumes, introduction } from "../../lib/data";
import Link from "next/link";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
export default function Overview() {
  const router = useRouter();

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={"/volumes/" + volume.slug}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() =>
          router.push("/volumes/" + getRandomElement(volumes).slug)
        }
      >
        Random Book
      </button>
    </>
  );
}
