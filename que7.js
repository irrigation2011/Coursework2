print(JSON.stringify(db.getUsers()));

var listDatabases = db.adminCommand('listDatabases');
print(JSON.stringify(listDatabases));

print('');
print('Question7: What is the average number of hashtags(#)used within a message?');
var num= db.userdata.find({text:/#/}).count();
var t= db.userdata.find().count();
print('Answer:' + num/t);