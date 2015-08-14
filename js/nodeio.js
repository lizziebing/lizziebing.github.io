var proxy = new EventProxy();
proxy.all("out1","out2",function(out1,out2){

});
api.getUser("username",function(out1){
	proxy.emit("out1",out1);//发射事件
})；

api.getTime("username",function(out2){
	proxy.emit("out2",out2);
});