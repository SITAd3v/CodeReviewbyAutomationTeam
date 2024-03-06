//To count number of empty spaces in a string
const string = " Stockholm IT Academy, Stockholm ";
var count  = 0;
for(i=0;i<string.length;i++){
    if(string[i]==" "){
        count++;
    }
}
console.log("Number of spaces in a string is "+ count);