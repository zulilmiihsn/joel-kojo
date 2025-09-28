import BackgroundElements from "./components/BackgroundElements";
import Title from "./components/Title";
import MainCharacter from "./components/MainCharacter";
import SideCharacters from "./components/SideCharacters";
import InfoPanel from "./components/InfoPanel";
import ErrorBoundary from "./components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="main-screen bg-[url('/bg.webp')]" role="main" aria-label="Joel Kojo - The GOAT character showcase">
        <header className="relative main-screen grid">
          <BackgroundElements />
          <Title />
          <MainCharacter />
          <SideCharacters />
          <InfoPanel />
        </header>
      </main>
    </ErrorBoundary>
  );
}
