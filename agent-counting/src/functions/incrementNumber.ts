import { FunctionFailure, log } from "@restackio/ai/function";

export const incrementNumber = async (num: number): Promise<number> => {

  let numberToReturn = num + 1;
  log.info("Function incrementNumber triggered. To return: ", { numberToReturn });
  return numberToReturn;

};
