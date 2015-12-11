print(JSON.stringify(db.getUsers()));

var listDatabases = db.adminCommand('listDatabases');
print(JSON.stringify(listDatabases));

print('');
print('Question5: What is the mean length of a message');
var t= db.userdata.find().count();
var text = db.userdata.find({},{"text":1 , "_id":0});
var x=0;
var s=0;
for(x=0;x<t;x++){
	str=text[x];
	s=s+str['text'].toString().length;
}
var mean_length = s/t;
print(mean_length);
