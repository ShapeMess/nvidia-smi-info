declare module "lib/NvidiaGPUInformation" {
    const getDeviceInformation: () => Promise<unknown>;
    export default getDeviceInformation;
}
declare module "index" {
    export { default } from "lib/NvidiaGPUInformation";
}
