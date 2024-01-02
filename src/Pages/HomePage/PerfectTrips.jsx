import TripCard from "../../components/TripCard";
import SeeBtn from "../../components/buttons/SeeBtn";
import tripCardsData from "../../data/tripCardsData/tripCardsData";

const PerfectTrips = () => {
  return (
    <section className="w-full px-4 xl:w-[90%] mx-auto">
      <div className="flex flex-col gap-5 text-center md:flex-row items-center justify-between md:gap-0 md:text-left">
        <div>
          <h1 className="text-[32px] font-semibold">Plan your perfect trip</h1>
          <p className="mt-4 text-sm font-normal opacity-75">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <SeeBtn text="See more places" />
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
  );
};

export default PerfectTrips;
