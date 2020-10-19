export const required =  (value)=> {

   return ((value) ? undefined : "Required")
}
export const maxLengthCreator = (length)=> value=>{ if(value) { return (   (value.length<length) ? undefined : `Maximum length is ${length} symbols` )}}


