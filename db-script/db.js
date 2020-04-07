(function(){
    use 'school_db';
db.users.insert({
    "_id" : ObjectId("5e89671c62427b9ce75251b2"),
    "name" : "ashok",
    "userName" : "ashok@123",
    "password" : "password",
    "role" : "admin",
    "phone" : NumberLong(7658656767),
    "email" : "ashok05@gmail.com"
});
db.counters.insert({
    "_id" : "roll_number",
    "sequence_value" : 100
});
})();
