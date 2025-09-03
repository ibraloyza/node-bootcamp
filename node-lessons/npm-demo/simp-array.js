import _ from 'lodash';
//  simple array

const numbers = [1,2,3,4,5,6,7];

// Chunk the array into smaller arrays of length 2
const Chunked = _.chunk(numbers,4);

export  function original(){
    console.log("original ",numbers);

}
export  function chunk(){
    console.log("chunked ",Chunked);
}
