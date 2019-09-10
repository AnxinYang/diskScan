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
    parent: string,
}


export default function (target: string = './') {
    let t = path.join(<string>target, '');
    let updateTimer: NodeJS.Timeout;
    let res = readTarget(t);

    treemap('#treemap', res.path);

    function readTarget(target: string, parent?: string) {
        let stats = fs.statSync(target);
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

        console.log(target);

        if (isDirectory) {
            store.set('_children_' + target, [])
            setTimeout(function () {
                let targets = fs.readdirSync(target)
                readTargets(targets, target);
            })
        }


        if (!updateTimer) {
            updateTimer = setTimeout(function () {
                treemap('#treemap', res.path);
                updateTimer = null;
                console.error(store)
            }, 100)
        }

        return file;
    }

    function readTargets(targets: string[], parent: string) {
        let files = [];
        for (let i = 0; i < targets.length; i++) {
            let item = targets[i];
            files.push(readTarget(path.join(<string>parent, item), parent));
        }
        updateAllParents(files, parent);
    }

    function updateAllParents(files: file[], parentPath: string) {
        let parent: file = store.get(parentPath);
        store.get('_children_' + parent.path).push(...files);

        let value = 0;
        files.forEach(function (file) {
            value += file.value;
        })

        do {
            parent.value += value;
            if (parent.parent) {
                parent = store.get(parent.parent);
            } else {
                parent = null;
            }
        } while (parent)
    }
}



