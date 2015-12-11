print(JSON.stringify(db.getUsers()));

var listDatabases = db.adminCommand('listDatabases');
print(JSON.stringify(listDatabases));

print('');

print('Question2: How many tweets(%) did the top 10 users measured by the number of messages) publish?');
var t= db.userdata.find().count();
var num=32344;
p=num/t;
print(p);
