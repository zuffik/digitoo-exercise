import { makeUseAxios } from "axios-hooks";
import { httpClient } from "./HttpClient";

export const useAxios = makeUseAxios({ cache: undefined, axios: httpClient });
