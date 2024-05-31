import { RevealButton } from "./components/reveal-button";
import { RevealCatName } from "./components/reveal-cat-name";

export default function Home() {
  return (
    <main>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">
        Hello world
      </h1>
      <RevealCatName />
    </main>
  );
}
