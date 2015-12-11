print(JSON.stringify(db.getUsers()));

var listDatabases = db.adminCommand('listDatabases');
print(JSON.stringify(listDatabases));

print('');
print('Question1: How many unique users are there?');
var unique_users = db.userdata.distinct("id_member").length;
print('Answer:'+unique_users);