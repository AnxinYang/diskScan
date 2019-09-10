import { promises as fp } from 'fs';
import * as path from 'path';


let store = new Map();

console.log('HI');
type file = {
    name: string,
    children: file[],
    value: number,
    path: string,
    isDirectory: boolean,
    parent: string,
}

function index(target: string = './') {
    let t = path.join(<string>target, '');
    readTarget(t)
        .then(res => {
            console.log(store);
        });
}




async function readTarget(target: string, parent?: string) {
    let stats = await fp.stat(target);
    let isDirectory = stats.isDirectory();
    let file: file = {
        name: path.basename(<string>target),
        children: [],
        value: stats.size,
        path: target,
        isDirectory: isDirectory,
        parent: parent,
    }

    store.set(target, file);
    store.set('_children_' + target, [])
    console.log(store.get('_children_' + 'W:\\ui'));
    parent && updateAllParents(file);

    if (isDirectory) {
        fp
            .readdir(target)
            .then(targets => {
                readTargets(targets, target);
            });
    }

    return Object.assign({}, file);
}

async function readTargets(targets: string[], parent: string) {
    for (let i = 0; i < targets.length; i++) {
        let item = targets[i];
        await readTarget(path.join(<string>parent, item), parent);
    }
}

function updateAllParents(file: file) {
    let parent: file = store.get(file.parent);
    store.get('_children_' + parent.path).push(file);
    do {
        if (!file.isDirectory) {
            parent.value += file.value;
        }

        parent = parent.parent ? store.get(parent.parent) : null;
    } while (parent)
}
