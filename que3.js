print(JSON.stringify(db.getUsers()));

var listDatabases = db.adminCommand('listDatabases');
print(JSON.stringify(listDatabases));

print('');
print('Question3:What was the earliest and lastet data (YYYY-MM-DD HH:MM:SS) that a message was published?');
var early = db.userdata.find({},{"timestamp":1,"_id":0}).limit(1).sort({timestamp:1});
e = early[0];
print( 'Answer:Earliest date:'+ e['timestamp']);

var late = db.userdata.find({},{"timestamp":1,"_id":0}).sort({timestamp: -1}).limit(1);
l = late[0];
print('Latest_date: '+ l['timestamp']);