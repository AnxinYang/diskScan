
import { BaseType } from 'd3-selection';


// 
export interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
    end(): Promise<any>
}


type file = {
    name: string,
    children: file[],
    value: number,
    path: string,
    isDirectory: boolean,
    parent: file,
}