import ReviewCard from "../../components/ReviewCard";

const ReviewCards = () => {
  return (
    <section className="w-full mt-[70px] px-4 py-4 flex justify-between gap-[50px] flex-nowrap overflow-x-auto overflow-y-hidden xl:w-[90%] xl:overflow-visible mx-auto ">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </section>
  );
};

export default ReviewCards;
