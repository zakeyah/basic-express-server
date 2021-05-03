'use strict';

const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs output correctly', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith();
  });
});

// function x (arr,value){
//     let newArr =[];
//     const middleIndex = Math.ceil(arr.length / 2);
//     console.log(middleIndex)
//     for (let i = 0 ;i<arr.length+1; i++){
//         if (i<middleIndex){
//             newArr[i]=arr[i];
//         }else if(i===middleIndex){
//             newArr[i]=value;
//         }else if(i>middleIndex){
//             newArr[i]=arr[i-1];
//         }
//     }
//     return newArr
// }    
//    console.log(x([2,4,6,8], 5))

   


   
    