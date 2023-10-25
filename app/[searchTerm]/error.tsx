"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";
import style from "./page.module.css";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className={style.main}>
      <h2 className={style.h2}>Something went wrong!</h2>
      <button
        className={style.button}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <p className={style.p}>
        Or go back to{" "}
        <Link href="/" className={style.Link}>
          Home 🏠
        </Link>
      </p>
    </main>
  );
}
