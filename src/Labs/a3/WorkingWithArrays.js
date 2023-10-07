import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
function WorkingWithArrays(){
    console.log("Working with Arrays");
    var functionScoped = 2;
    console.log(functionScoped);
    let blockScoped = 5;
    console.log(blockScoped);
    const constant1 = functionScoped - blockScoped;
    console.log(constant1);
    let numberArray1 = [1, 2, 3, 4, 5];
    console.log(numberArray1);
    let stringArray1 = ['string1', 'string2'];
    console.log(stringArray1);

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];
    console.log(variableArray1);

    return (
        <div>
            
            
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1} <br/>
            stringArray1= {stringArray1} <br/>
            variableArray1 = {variableArray1} <br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
        

    );

}
export default WorkingWithArrays