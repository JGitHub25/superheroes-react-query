import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/Op1.SuperHeroes.page";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SuperHeroesInStyle } from "./components/SuperHeroesInStyle.page";
import SingleHeroPage from "./components/Op1.SingleHero.page";
import { SuperMegaPosts } from "./components/Posts.page";
import { ParallelQueries } from "./components/ParallelQueries.page";
import { DynamicParallel } from "./components/DynamicParallel.page";
import { DependentQueries } from "./components/DependentQueries.page";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<SuperMegaPosts />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/rq-super-heroes/:heroId" element={<SingleHeroPage />} />
          <Route
            path="/super-heroes-instyle"
            element={<SuperHeroesInStyle />}
          />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
          <Route
            path="/rq-dynamic-parallel"
            element={<DynamicParallel heroIds={[1, 3]} />}
          />
          <Route path="/rq-dependent" element={<DependentQueries id={3} />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
