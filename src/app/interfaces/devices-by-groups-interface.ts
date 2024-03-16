import { DeviceInterface } from "./device-interface";

export interface DevicesByGroupsInterface {
    groupId: number,
    groupName: string,
    devices: DeviceInterface[]
}
