import {Tenant} from "../../types/entity/Tenant";
import * as faker from "faker";

export const tenant = (): Tenant => ({
    apiKey: faker.random.uuid(),
    createdAt: faker.date.past().toISOString(),
    lastUsedAt: faker.date.past().toISOString(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    tenantId: faker.random.uuid()
})
