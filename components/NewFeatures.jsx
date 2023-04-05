import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
    >
      <img src={imgUrl} className="w-1/2 h-1/2 object-contain" alt="" />
    </div>
    <h1 className="mt-7 font-bold text-base leading-8 text-white">
      Title {title}
    </h1>
    <p className="flex-1 mt-4 font-normal text-lg text-[#b0b0b0] leading-8">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
