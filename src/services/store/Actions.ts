import { ActionCreator, default as actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export class Actions {
  public static readonly setLoading: ActionCreator<{
    isLoading: boolean;
  }> = actionCreator("SET_LOADING");
}
