print(JSON.stringify(db.getUsers()));
print('Question4: What is the mean time delta between all message?');
var shortest = db.userdata.find({},{"timestamp":1,"_id":0}).limit(1).sort({timestamp:1});
s = shortest[0];

var longest = db.userdata.find({},{"timestamp":1,"_id":0}).sort({timestamp: -1}).limit(1);
l = longest[0];

function datetime_to_unix(datetime){
    var tmp_datetime = datetime.replace(/:/g,'-');
    tmp_datetime = tmp_datetime.replace(/ /g,'-');
    var arr = tmp_datetime.split("-");
    var now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
    return parseInt(now.getTime()/1000);
}

var shorttime = s.timestamp;
var unix = datetime_to_unix(shorttime);

var longtime = l.timestamp;
var unix2 = datetime_to_unix(longtime);

var delta=unix2-unix;
var sum= db.userdata.find().count();
print('Answer:'+ delta/sum);