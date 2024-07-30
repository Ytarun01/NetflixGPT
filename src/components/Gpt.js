import { BG_URL } from "../utils/const";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const Gpt = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default Gpt;
