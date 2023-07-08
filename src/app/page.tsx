'use client'

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetcht = async () => {
      let reponse = await fetch('/api/user')
      let json = await reponse.json()
      console.log(json)
    }
    fetcht()
  }, [])
  return (
    <main>
      <section>
        <h1>Home</h1>
        <p>Page non protegé</p>
      </section>
    </main>
  );
}
