import FlightsAndHotels from "./FlightsAndHotels";
import Header from "./Header";
import PerfectTrips from "./PerfectTrips";

const Home = () => {
  return (
    <>
      <Header />

      <main className="max-w-[1440px] mx-auto mt-[500px] lg:mt-[300px] font-Montserrat">
        <PerfectTrips />
        <FlightsAndHotels />
      </main>
    </>
  );
};

export default Home;
