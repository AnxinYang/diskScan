import { promises as fp } from 'fs';
import * as path from 'path';
function makePromise(executor) {
    return new Promise(executor);
}
export default function () {
    let rootPath = 'w:/diskScan/';
    readFolder(rootPath)
        .then(function (res) {
        console.log(res);
        let data = {
            name: rootPath,
            children: res
        };
    })
        .catch(err => console.error(err));
}
function readFolder(target = './') {
    return getStats(target)
        .then(getList)
        .then(convertList);
}
function getStats(target) {
    return fp.lstat(target)
        .then((stats) => {
        return [stats, target];
    });
}
function getList([stats, target]) {
    if (!stats.isDirectory()) {
        return Promise.reject('Target is not a folder.');
    }
    return fp.readdir(target)
        .then((items) => {
        return [items, stats, target];
    });
}
;
function convertList([items, stats, target]) {
    let promises = [];
    items.forEach((item) => {
        let promise = makePromise(function (resolve, reject) {
            let childPath = path.join(target, item);
            getStats(childPath)
                .then(([stats]) => {
                resolve({
                    name: item,
                    value: stats.size,
                    path: childPath,
                });
            });
        });
        promises.push(promise);
    });
    return Promise.all(promises);
}
//# sourceMappingURL=index.js.map