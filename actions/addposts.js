function addComments(title,body,userId){
  let payload = {title:title,body:body,userId:userId};
  return{
    type:'ADD_POSTS',
    payload:payload
  };
}
