import ReviewCard from "../../components/ReviewCard";
import SeeBtn from "../../components/buttons/SeeBtn";
import reviewCardsData from "../../data/reviewCardsData/reviewCardsData";

const ReviewCards = () => {
  return (
    <section className="w-full mt-[70px] px-4 py-4 flex flex-col justify-between   xl:w-[90%] xl:mx-auto ">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <h2 className="text-[32px] font-semibold ">Reviews</h2>
          <p className="text-base font-normal">
            What people says about Golobe facilities
          </p>
        </div>
        <SeeBtn text="See All" />
      </div>
      <div className="w-full mt-10 flex justify-between flex-wrap gap-y-[50px]  ">
        {reviewCardsData.map((card, index) => {
          return (
            <ReviewCard
              key={index}
              title={card.title}
              desk={card.desk}
              name={card.name}
              profession={card.profession}
              img={card.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ReviewCards;
