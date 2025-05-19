import {
  defineEvent,
  onEvent,
  condition,
  log,
  step,
} from "@restackio/ai/agent";
import * as functions from "../functions";

export const numberEvent = defineEvent<number>("number");
export const endEvent = defineEvent("end");

export async function agentCounting(): Promise<number> {

  let endReceived = false; 
  let counting = 0;

  onEvent(numberEvent, async (data: any): Promise<number> => {
    log.info("Number event received");
    const result = await step<typeof functions>({}).incrementNumber(counting);
    counting = result;
    return counting;
  });

  onEvent(endEvent, async () => {
    endReceived = true;
  });

  // We use the `condition` function to wait for the event goodbyeReceived to return `True`.
  await condition(() => endReceived);

  log.info("end condition met");
  return counting;
}
