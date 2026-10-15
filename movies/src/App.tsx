import { MovieCard } from "./MovieCard";

export default function App() {
  return (
    <>
      <h1>Top Filmes</h1>
      <h2>Os melhores filmes para você!</h2>

      <MovieCard title="Star Wars" rating={8.5} />
      <MovieCard title="Rain Man" rating={7.5} />
      <MovieCard title="All About Eve" rating={9.0} />
      <MovieCard title="Lawrence da Arábia" rating={8.5} />
    </>
  );
}
