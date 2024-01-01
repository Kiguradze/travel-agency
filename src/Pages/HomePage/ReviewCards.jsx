import ReviewCard from "../../components/ReviewCard";

const ReviewCards = () => {
  return (
    <div className="mt-[70px] mx-0 pl-4 flex  gap-[50px] xl:mx-[72px] snap-x-[100%]">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default ReviewCards;
