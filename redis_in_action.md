# Redis 实战

## = B1 & ", '" & A2 & "'"

975983

{ "_id" : ObjectId("5808407a981bf8001732a761"), "diamond" : 108, "product_id" : 51, "discount" : 1, "price" : 35, "platform_product_id" : "100001", "platform" : 2, "reward" : 54, "active" : true, "coin" : 0, "description" : "Ruby_108" }
{ "_id" : ObjectId("5808407a981bf8001732a762"), "diamond" : 108, "product_id" : 52, "discount" : 1, "price" : 0.99, "platform_product_id" : "100001", "platform" : 3, "reward" : 54, "active" : true, "coin" : 0, "description" : "Ruby_108" }

http://kitty.live.8686c.com/live-27891745--20161121225458.mp4

http://kitty.live.8686c.com/live-26395852--20161117150938.mp4

kitty_id = 53467303;
kitty_id = 52102949;

kitty_id_list  = [56969342,58449686,63041787,59813135,54717293,58287874,53187322,53267335,53362800,52102949,57609030,52971015,53190131,53932437,53079858,52269515,52183864,52155515,54596700,52155685,54323137];
kitty_id_list.forEach(function(kitty_id){
print('\n', kitty_id);
user = db.user.findOne({kitty_id: kitty_id});
if (!user) {return true;}
print('Find: ', user.kitty_id, user.nickname);
spec_live = {'user_id': user.user_id, 'record_urls': {'$ne': null}};
var lives = db.live.find(spec_live).sort({created_at: -1}).limit(10);
lives.forEach(function(live){print(live.record_urls)});
});

   1  clear
    2  ks
    3  export TERM=linux
    4  clear
    5  ls
    6  cd /opt/
    7  ls
    8  clear
    9  ls
   10  apt-get update
   11  clear
   12  ls
   13  claewr
   14  sl
   15  apt-get install vim git -y
   16  cleawr
   17  sl
   18  claer
   19  clear
   20  ls
   21  claer
   22  ls
   23  mysql -uroot -p sololive521
   24  mysql -uroot -psololive521
   25  clear
   26  ls
   27  claer
   28  sl
   29  clear
   30  ls
   31  claer
   32  ls
   33  git clone https://github.com/thx/RAP.git
   34  clear
   35  sl
   36  cleawr
   37  sl
   38  ls
   39  cd RAP/src/main/resources/database/
   40  ls
   41  clear
   42  ls
   43  vi scripts.sql 
   44  clear
   45  ls
   46  history |grep mysql
   47  mysql -uroot -psololive521 < initialize.sql 
   48  ps 
   49  ps -ef
   50  mysql -uroot -psololive521 
   51  cleawr
   52  sl
   53  clear
   54  cd ..
   55  ls
   56  cd /opt/
   57  ls
   58  clear
   59  ls
   60  clear
   61  df -lh
   62  clear
   63  ls
   64  claer
   65  ls
   66  clear
   67  ls
   68  ls
   69  wget http://rap.taobao.org/release/RAP-0.14.1-SNAPSHOT.war
   70  apt-get install -y wget
   71  clear
   72  ls
   73  wget http://rap.taobao.org/release/RAP-0.14.1-SNAPSHOT.war
   74  mv RAP-0.14.1-SNAPSHOT.war ROOT.war
   75  ls
   76  docker images
   77  exit
   78  netstat -an
   79  exit
   80  clear
   81  ls
   82  export TERM=linux
   83  clear
   84  ls
   85  cleawr
   86  sl
   87  clear
   88  slc
   89  elawr
   90  sl
   91  cearl
   92  clear
   93  ls
   94  clear
   95  ls
   96  mysql -uroot -psololive521
   97  clear
   98  exit
   99  pwd
  100  ls
  101  mysql
  102  mysql root@localhost -p
  103  mysql root@localhost
  104  docker images
  105  exit
  106  pwd
  107  ls
  108  whoami
  109  exit
  110  history


export_user_consumption_info.py --from_date 2016-11-20 --to_date 2016-11-22 --filename /data/user_consumption_info_2016-11-20_2016-11-22.csv

2016-11-19 22:00:00(Asia/Shanghai)

(function () {
    spec = {created_at: {'$lt':  1479834000000, '$gte': 1479564000000  }};
    total_count = db.luckyRewardHistory.count(spec);
    with_result = db.luckyRewardHistory.aggregate([ {$match: spec },  {$group:  {_id:  '$ruby', count_item: {$sum: 1}  }   }  ]);
    
    total_ruby = 0;
    print('Item', 'Count', 'Percent');
    
    with_result.forEach(function(item){ruby = item._id; count_item = item.count_item;  total_ruby += ruby*count_item; print('Ruby'+ruby, count_item, (count_item/total_count*100).toFixed(3)+'%')});

    print('\n');
    print('Total Count: ', total_count);
    print('Total Reward Ruby: ', total_ruby);
    print('Reward Rate: ', (total_ruby/1000/total_count*100).toFixed(3)+'%');
})()



spec = {'t_send': {  '$or':   }}
