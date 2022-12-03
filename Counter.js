import { useState } from "react"

export default function Counter(){
    // const [count, setCount] = useState(0);
    // function handleClick()
    // {
    //     setCount(count+1);
    // }
    // return (
    //     <button onClick = {handleClick}> {count}</button>
    // );

    //filter
    const ints = [1,2,3];
    const evens = ints.filter(function(item)
    {
        return item % 2 === 0;
    });
    console.log("yayyy");
    console.log(evens);


    //reduce

    const sum = [1,2,3].reduce(function(result,item)
    {
        return result-item;
    },);
    console.log(sum);

    //some

    const hasNegativeNumbers = [1,2,3,4].some(function(item){
        return item<0;
    });
    console.log(hasNegativeNumbers);

    //map


    const three = [1,2,3];
    const doubled =three.map(function(item){
        return item * 2;
    });
    console.log(doubled);

    //every

    const hasPositiveNumbers = [1,2,3,4].some(function(item){
        return item > 0;
    });
    console.log(hasPositiveNumbers);


    //find

    const objects = [{id: 'a'}, {id:'b'}, {id:'c'}];
    const found = objects.find(function(item){
        return item.id ==='d';
    });
    console.log(found);

     //findIndex

     const objects1 = [{id: 'a'}, {id:'b'}, {id:'c'}];
     const foundIndex = objects1.findIndex(function(item){
         return item.id ==='b';
     });
     console.log(foundIndex);


}