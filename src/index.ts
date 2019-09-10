import { Stats, promises as fp, PathLike } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';


import treemap from './treemap';
import store from './store';

let ROOT_PATH: PathLike;
function makePromise(executor: (resolve: (value?: unknown) => void, reject: (reason?: any) => void) => void) {
    return new Promise(executor);
}

export default function (target: PathLike = './') {
    let t = path.join(<string>target, '');
    ROOT_PATH = target;
    readTarget(t)
        .then(res => {
            //res.children = store.get(t);
            console.log(store);
            treemap('#treemap', res.path);
        });
}


async function readTarget(target: PathLike, parent?: PathLike) {
    path;
    let stats = await fp.stat(target);
    let obj: any;
    let isDirectory = stats.isDirectory();
    if (!isDirectory) {
        obj = {
            name: path.basename(<string>target),
            value: stats.size,
            //children: <any>[],
            path: target,
            isDirectory: isDirectory,
            parent: parent,
        };
        //console.log(obj.path);
    } else {
        let list = await fp.readdir(target);
        let children = [];
        obj = {
            name: path.basename(<string>target),
            children: <any>[],
            value: 0,
            path: target,
            isDirectory: isDirectory,
            parent: parent,
        }

        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            let child = await readTarget(path.join(<string>target, item), target);
            children.push(child);
            obj.value += child.value;
        }

        store.set(target, {
            name: path.basename(<string>target),
            children: children,
            value: obj.value,
            path: target,
            isDirectory: isDirectory,
            parent: parent,
        });
        //console.log(store.get(ROOT_PATH));
    }

    return obj;

}