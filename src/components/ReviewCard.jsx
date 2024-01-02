import Star from "../assets/starIcon.svg";
import GoogleIcon from "../assets/googleIcon.png";

const ReviewCard = ({ title, desk, name, profession, img }) => {
  return (
    <div className="max-w-full px-6 py-6 rounded-[20px] bg-white shadow-[2px_4px_16px_0_rgba(17,_34,_17,_0.10)] relative xl:max-w-[31%] sm:max-w-[47%]">
      <div className="w-full h-full rounded-[20px] absolute top-[22px] left-[26px] bg-[rgba(141,_211,_187,_0.40)] -z-10"></div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-4 text-sm font-medium  h-[37px] opacity-50 line-clamp-2">
        {desk}
      </p>
      <a href="#" className="mt-3 block text-sm font-bold text-right">
        View more
      </a>
      <div className="mt-4 flex">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <span className="mt-[20px] block text-sm font-bold">{name}</span>
      <span className="text-xs font-medium opacity-50">{profession}</span>
      <div className="mt-3 flex items-center gap-2">
        <img src={GoogleIcon} alt="" />
        <span className="text-xs font-bold opacity-40">Google</span>
      </div>
      <div className="mt-10">
        <img src={img} alt="" className="mx-auto sm:mx-0" />
      </div>
    </div>
  );
};

export default ReviewCard;
