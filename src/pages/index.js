import Banner from "@/components/Movies/Banner";
import TopPicks from "@/components/Movies/TopPicks";
import Hero from "../assests/Hero.jpeg";

export default function Home() {
  return (
    <div>
      <Banner
        title="Welcome"
        text="Millions of movies, TV shows and game to discover. Explore now."
        img={Hero}
      />
      <TopPicks />
    </div>
  );
}
