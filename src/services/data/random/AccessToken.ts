import {AccessToken} from "../../types/entity/AccessToken";
import * as faker from "faker";

export const accessToken = (): AccessToken => ({
    access_token: faker.random.alphaNumeric(32),
    expires_in: 20000,
    token_type: "Bearer"
})
