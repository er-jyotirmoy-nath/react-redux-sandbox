
const addpostreducer = function(state=initdata,action){
  console.log(action.type);
  console.log('State updated');
  console.log(state);
  return state;
}
