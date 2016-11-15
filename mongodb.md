# related to mongodb

## basic operations

1. connetct

* `mongo mongo:27017`

2. \c db

* `show dbs`

* `use <ddbname>`

* `show collections`

3. GET

* `db.tag.find()`

## 7.4 aggregationsss

### count

* db.user.count({'user_type': 1})

### distinct

* db.runCommand({'distinct':'user', 'key': 'level'})

* collection: user, distinct_key: level

### group

# 8 application design

## normalization and denormalization

## divide database 

* according to contents and other important things...

## schema migration

# 9 Copy : replica set

## brief introduction

* one primary server, and several secondary server

## create

### create and start

* replicateSet = new ReplSetTest({'nodes': 3})

* replicateSet.startSet()

* replicateSet.initiate()

### connect to

* conn = new Mongo('mongo:27017')

* 

# 13 sharding (autosharding)

* sharding

# chapter 4 basic operations

## 4.5 cursor~~~~~

* var cursor = db.user.find({})

* while (cursor.hasNext()) { obj = cursor.next(); ... }

* cursor.forEach(function(x){printx.name; ... })

### limit, skip, sort

* avoid using `skip`

* 1. using result of last query cursor, to avoid using `skip`

* 2. add a random value, to find doc randomly

### advanced query options

* $maxscan : interger

> db.user.find(~~~)._addSpecial('$maxscan', 20)

* $min, $max : document

* $showDiskLoc : true

> db.user.find(~~~)._addSpecial('$showDiskLoc', true), add '$diskLoc' field in query result

### make sure that, document be returned once

> depends on basic theory for cursor

* db.user.find().snapshot()

### cursors' lifetime

## database command

> shell asssistant functions, are capsulated to DBcommands

* db.runCommand({getLastError: 1})

* show all commands: db.listCommands()

### basic theories

* return 1 in 'ok' if success, or 00 if not

* db.$cmd.findOne({'getLastError': 1})  ~~ db.runCommand({getLastError:1})

# 5 indexes : optimize queries

> use-the-index-luke.com

## 5.1 brief introduction


* no index : full table scan

> explain : db.user.find().explain()

* create index:

> db.user.ensureIndex({'user_id': 1})

### 5.1.1 composed indexes introduction

* chaxun
chaxun = function (user_list) { for(var i=0;i < user_list.length;i++ ){user = db.user.findOne({kitty_id: user_list[i]}); print(user_list[i] + ' ' + user.user_id)} }

db.giftRecord.aggregate([ {$match: {gift_id:24, t_send: {'$gte': 1476982800000, '$lt': 1477328400000} }} , {$group: { '_id': null, 'count': {'$sum': '$moon'} }} ])
db.giftRecord.aggregate([ {$match: {gift_id:44, t_send: {'$gte': 1476982800000, '$lt': 1477328400000} }} , {$group: { '_id': null, 'count': {'$sum': '$moon'} }} ])
db.giftRecord.aggregate([ {$match: {t_send: {'$gte': 1476982800000, '$lt': 1477328400000} }} , {$group: { '_id': null, 'count': {'$sum': '$moon'} }} ])
db.giftRecord.aggregate([ {$match: {t_send: {'$gte': 1476723600000, '$lt': 1476982800000} }} , {$group: { '_id': null, 'count': {'$sum': '$moon'} }} ])

2016-10-25 ~ 2016-11-03 both days : 
time_limit = {t_send: {'$gte': 1477328400000, '$lt': 1478192400000} }
db.giftRecord.distinct('to_id',  time_limit).length : for 4850
db.giftRecord.distinct('from_id', time_limit).length : for user 6591
db.giftRecord.aggregate([ {$match: time_limit} , {$group: { '_id': null, 'count': {'$sum': '$moon'} }} ])  : 5490184


Live  [------------------------------------]  2/77Miss: could not find user, skip live - [1876234]
Live  [####--------------------------------]  9/77Miss: could not find user, skip live - [1877285]
Live  [#################################---]  72/77Miss: could not find user, skip live - [1879899]
Live  [####################################]  77/77
