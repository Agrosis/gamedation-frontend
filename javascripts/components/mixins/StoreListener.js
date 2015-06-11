
module.exports = {
  getStoreListeners: function() {
    return this.constructor.storeListeners;
  },
  componentDidMount: function(){
    var storeListeners = this.getStoreListeners();
    if(storeListeners)
      storeListeners.forEach(s => window.dispatcher.getStore(s).addChangeListener(this.onChange));
    else
      console.err(new Error("`storeListeners` not defined.").stack);
  },
  componentWillUnmount: function(){
    var storeListeners = this.getStoreListeners();
    if(storeListeners)
      storeListeners.forEach(s => window.dispatcher.getStore(s).removeChangeListener(this.onChange));
    else
      console.err(new Error("`storeListeners` not defined.").stack);
  }
};