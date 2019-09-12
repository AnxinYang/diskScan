import { Stats, promises as fp } from 'fs';
import * as fs from 'fs';
import * as path from 'path';


import treemap from './treemap';
import store from './store';
import { file } from './types';



const LOADING_LIMIT = 128;
let loadingArray: any[] = [];
let currentRunning = 0;

let updateTimer: NodeJS.Timeout | number;

export default function (target: string = './') {
    store.clear()
    loadingArray = [];
    currentRunning = 0;
    store.set('scanning', true)
    store.set('fileNum', 0)
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
    return file;
}

function handleFile(file: file) {
    let isDirectory = file.isDirectory;
    appendChildren(file);
    if (isDirectory) {
        handleDirectory(file);
    } else {
        store.set('fileNum', store.get('fileNum') + 1);
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
    if (fn) {
        let task = function () {
            currentRunning++;
            fn()
                .then(function () {
                    handleRunning();
                })
                .catch(function (err: any) {
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
        store.set('scanning', currentRunning > 0)

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
            parent = null;
        }
    } while (parent);


    treemap()

}
