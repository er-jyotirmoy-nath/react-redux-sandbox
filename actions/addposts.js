function addComments(title,body,userId){
  return{
    type:'ADD_POSTS',
    title,
    body,
    userId
  };
}
