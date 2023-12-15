import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="Customer"
        width={120}
        height={120}
        className="rounded-full object-contain"
      />
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt=""
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-semibold text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
