
import { BaseType } from 'd3-selection';


declare module "d3-transition" {
    export interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        end(): Promise<any>
    }
}

export type file = {
    name: string,
    children: file[],
    value: number,
    path: string,
    isDirectory: boolean,
    parent: file,
    _value?: number,
}