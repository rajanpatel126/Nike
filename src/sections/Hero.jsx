import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">
          The Winter Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="z-10 xl:bg-white xl:whitespace-nowrap relative pr-10">
            The new Arrival
          </span>
          <br />
          <span className="inline-block text-coral-red mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat leading-8 mt-6 mb-14 text-lg sm:max-w-sm">
          Discover stylish Nike Arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex items-start justify-start gap-16 mt-20 flex-wrap w-full">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={650}
          height={500}
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map((shoe) => (
            <div key={shoe}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;