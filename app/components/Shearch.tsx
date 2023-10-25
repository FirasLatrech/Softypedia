"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Style from "./page.module.css";
export default function Shearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };
  return (
    <form className={Style.leftContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className={Style.inputTypeText}
      />

      <button className={Style.InputTypeButton}>🚀 </button>
    </form>
  );
}
