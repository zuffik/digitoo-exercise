import * as React from 'react';
import {NavBar} from "./NavBar";
import {boolean} from "@storybook/addon-knobs";
import {tenant} from "../../../../services/data/random/Tenant";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Layout/Navigation'
}

export const navBar = () => (
    <NavBar user={boolean('tenant', false) ? tenant() : undefined} onLogOut={action('onLogOut')}/>
)
