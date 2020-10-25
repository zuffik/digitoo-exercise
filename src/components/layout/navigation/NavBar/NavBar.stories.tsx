import * as React from 'react';
import {NavBar} from "./NavBar";
import {boolean} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import {accessToken} from "../../../../services/data/random/AccessToken";

export default {
    title: 'Layout/Navigation'
}

export const navBar = () => (
    <NavBar accessToken={boolean('accessToken', false) ? accessToken() : undefined} onLogOut={action('onLogOut')}/>
)
