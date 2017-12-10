
const sampledata = {
  posts:initdata
};
const store = createStore(rootreducer);
var historyobj = syncHistoryWithStore(hashHistory,store);
