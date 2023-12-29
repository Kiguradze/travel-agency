import TripCard from "../../components/TripCard";
import Header from "./Header";
import tripCardsData from "../../data/tripCardsData/tripCardsData";

const Home = () => {
  return (
    <>
      <Header />

      <main className="max-w-[1440px] mx-auto mt-[500px] lg:mt-[300px] font-Montserrat">
        <section className="w-full px-4 xl:w-[90%] mx-auto">
          <div className="flex flex-col gap-5 text-center md:flex-row items-center justify-between md:gap-0 md:text-left">
            <div>
              <h1 className="text-[32px] font-semibold">
                Plan your perfect trip
              </h1>
              <p className="mt-4 text-sm font-normal opacity-75">
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-[#112211] border-solid border-[1px] border-[#8DD3BB] rounded hover:bg-[#8DD3BB] duration-150">
              See more places
            </button>
          </div>

          <div className="mt-[40px] flex items-center justify-between gap-8 flex-wrap">
            {tripCardsData.map((tripCard, index) => {
              return (
                <TripCard
                  key={index}
                  img={tripCard.img}
                  destination={tripCard.destination}
                  includes={tripCard.includes}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
