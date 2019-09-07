import { Stats, promises as fp } from 'fs';
import * as fs from 'fs';
import * as path from 'path';


import treemap from './treemap';


function makePromise(executor: (resolve: (value?: unknown) => void, reject: (reason?: any) => void) => void) {
    return new Promise(executor);
}



export default function () {
    let rootPath = 'd:/Steam/';
    readFolder(rootPath)
        .then(function (res) {
            console.log(res);
            let data = {
                name: rootPath,
                children: res
            }
            treemap('treemap', data)
        })
        .catch(err => console.error(err))
}




function readFolder(target = './') {
    return getStats(target)
        .then(getList)
        .then(convertList);
}

function getStats(target: fs.PathLike) {
    return fp.lstat(target)
        .then((stats): any => {
            return [stats, target]
        });
}

function getList([stats, target]: [Stats, fs.PathLike]) {
    if (!stats.isDirectory()) {
        return Promise.reject('Target is not a folder.')
    }

    return fp.readdir(target)
        .then((items: string[]) => {
            return [items, stats, target];
        });
};

function convertList([items, stats, target]: [string[], Stats, fs.PathLike]) {
    let promises: Promise<any>[] = [];

    items.forEach((item) => {
        let promise = makePromise(function (resolve, reject) {
            let childPath = path.join(<string>target, item);
            getStats(childPath)
                .then(([stats]) => {
                    resolve({
                        name: item,
                        value: stats.size,
                        path: childPath,
                    })
                })
        });
        promises.push(promise);
    })

    return Promise.all(promises);
}
