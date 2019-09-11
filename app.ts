//import index from './src/index_render';
import store from './src/store';

//index('W:/ui/node_modules');
//index('w:/');

const worker = new Worker('./build/worker.js');


worker.postMessage('Start')