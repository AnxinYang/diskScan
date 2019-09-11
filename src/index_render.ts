import { Stats, promises as fp } from 'fs';
import * as fs from 'fs';
import * as path from 'path';


import treemap from './treemap';
import store from './store';
type file = {
    name: string,
    children: file[],
    value: number,
    path: string,
    isDirectory: boolean,
    parent: file,
}


const LOADING_LIMIT = 32;
let loadingArray: any[] = [];
let currentRunning = 0;

let updateTimer: NodeJS.Timeout | number;

export default function (target: string = './') {
    readFile(target)
        .then(function () {
            treemap('#treemap', target)
        });
}

function readFile(target: string, parent?: file) {
    return readStats(target, parent)
        .then(handleFile)
}

function readStats(target: string, parent?: file) {
    return fp.stat(target)
        .then((stats) => {
            return handleStats(stats, target, parent);
        });
}

function handleStats(stats: Stats, target: string, parent?: file) {
    let isDirectory = stats.isDirectory();
    let file: file = {
        name: path.basename(target),
        children: [],
        value: stats.size,
        path: target,
        isDirectory: isDirectory,
        parent: parent,
    };

    store.set(target, file);
    store.set(file, []);
    //console.warn(store); // SLOW!!
    //console.warn(target);
    return file;
}

function handleFile(file: file) {
    let isDirectory = file.isDirectory;
    appendChildren(file);
    if (isDirectory) {
        handleDirectory(file);
    } else {
        updateSizeOfAllParents(file)
    }
}

function handleDirectory(file: file) {
    fp.readdir(file.path)
        .then((items) => {
            items.forEach((item) => {
                handleRunning(function () {
                    return readFile(path.join(file.path, item), file)
                })
            })
        });
}

function handleRunning(fn?: any) {
    //console.log(loadingArray.length, currentRunning);
    if (fn) {
        let task = function () {
            currentRunning++;
            fn()
                .then(function () {
                    handleRunning();
                })
                .catch(function (err: any) {
                    //console.warn(err);
                    handleRunning();
                })
        }

        if (currentRunning < LOADING_LIMIT) {
            task();
        } else {
            loadingArray.push(task);
        }
    } else {
        currentRunning--;
        let task = loadingArray.shift();
        if (task) {
            task()
        }

    }

}

function appendChildren(file: file) {
    if (file.parent)
        store.get(file.parent).push(file);
}

function updateSizeOfAllParents(file: file) {
    let parent: file = store.get(file.parent.path);
    do {
        parent.value += file.value;
        if (parent.parent) {
            parent = store.get(parent.parent.path);
        } else {
            //console.log(parent.value)
            parent = null;
        }
    } while (parent);


    treemap()
    // if (!updateTimer) {
    //     updateTimer = setTimeout(function () {
    //         treemap();
    //         updateTimer = null;
    //     }, 0)
    // }

}
