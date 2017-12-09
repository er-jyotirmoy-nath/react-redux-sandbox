
const sampledata = {
  posts:initdata
};
const store = createStore(rootreducer);
console.log(store.getState());
var historyobj = syncHistoryWithStore(hashHistory,store);
