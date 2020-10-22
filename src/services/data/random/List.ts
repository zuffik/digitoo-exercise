import {List} from "../../types/entity/List";
import * as _ from 'lodash';
import * as faker from "faker";

export const list = <T>(entity: () => T): List<T> => ({
    items: _.times(1 + Math.round(faker.random.number(10)), entity),
    pagination: {
        total: Math.round(faker.random.number({min: 100, max: 1000})),
        offset: Math.round(faker.random.number(20)),
        limit: 10
    }
})
