export function parseErrorString(string,substring){
    if(string.includes(substring))
    {return  string.slice(+string.indexOf(substring)+substring.length,-1).toLowerCase()}

}