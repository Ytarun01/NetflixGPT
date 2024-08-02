import OpenAI from "openai";
import { OPENAIKEY } from "./const.js";

const opnAi = new OpenAI({
  apiKey: OPENAIKEY,
  dangerouslyAllowBrowser: true,
});

export default opnAi;
