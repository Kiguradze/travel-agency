import ReviewCard from "../../components/ReviewCard";

const ReviewCards = () => {
  return (
    <section className="w-full mt-[70px] px-4 py-4 flex justify-between gap-[50px] flex-nowrap xl:w-[90%] mx-auto overflow-x-auto overflow-y-hidden">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </section>
  );
};

export default ReviewCards;
