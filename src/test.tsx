/** @format */

import React from 'react';

interface Greeting {
    name: string
}

function a () {
}
a();
const Test: React.FC<Greeting> = (props: Greeting,) => {
  const bbb = 123;
  console.log('bbb', bbb,);
  const a = 'wwwwwwww';
  const ddd_abc = '234';
  console.info('ddd_abc', ddd_abc,);
  console.warn('ddd_abc', ddd_abc,);
  const abc = {
    a: 1,
    b: 2,
  };
  return (
        <div></div>
  );
};
export default Test;
