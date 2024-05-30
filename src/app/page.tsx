import { RevealButton } from "./components/reveal-button";

export default function Home() {
  return (
    <main>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">
        Hello world
      </h1>
      <RevealButton secret="foobar" />
    </main>
  );
}
