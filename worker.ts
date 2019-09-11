import index from './src/index_worker';


onmessage = ({ data }) => {
    console.log(data);
};