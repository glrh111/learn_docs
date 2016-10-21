#2016-8-8 docker configure
1. install docker
* docker文档参考：http://udn.yyuap.com/doc/docker_practice/advanced_network/port_mapping.html
* docker 安装参考: https://docs.docker.com/

2. Redis mongodb3.2 参考：
* https://docs.mongodb.com/manual/installation/
* http://www.redis.net.cn/order/

3. 代码步骤：
* solo-frame： 基础框架  
* kitty-live-admin 直播后台代码  放在kitty-live-api/app 目录下,然后重命名目录： mov kitty-live-admin  kitty-live-admin
* api-TH  直播API代码，  放在kitty-live-api/app 目录下,然后重命名目录： mov api-TH kitty-live-api

2. init env

* `$ sudo service docker start`

* test: `$ sudo docker run hello-world`

* download: `$ sudo docker pull dl.dockerpool.com:5000/ubuntu:12.04`

* run: `$ sudo docker run -t -i ubuntu:14.04 /bin/bash`

* list: `$ sudo docker images`

3. my env

* `sudo docker pull mongo:3.2`

* `sudo docker pull redis:3`

* `sudo docker load < ~/Downloads/solo-dev-new.xz`

4. run `registrt`

* 守护态运行 `$ sudo docker run -d ubuntu:14.04`

* exit: docker stop contain-id

* list: docker ps -a

* enter: `docker exec ...` or

* via ssh

5. sole_dev

* `sudo docker run -d --name mongo mongo:3.2`

* `sudo docker run -d --name redis redis:3`

* `sudo docker run -itd --name solodev --link redis:redis --link mongo:mongo -v ~glrh11/codes:/home/solodev/workspace -p 20000:22 -p 80:80  registry.ahaflow.com:5000/solo/dev`

* `#docker exec -i bb2 /bin/sh`

* `sudo docker run -itd --name solodev --link redis:redis --link mongo:mongo -v ~monpy/codes:/home/solodev/workspace -p 20000:22 -p 80:80   glrh11/solodev:v3`

6. After entering

* ssh solodev@localhost -p 20000
* default: password
* pass: wangli2016

* mongo mongo:27017 `export LANG=C or export LC_ALL=C`

* redis-cli -h redis -p 6379

* pip install

* commit images: `docker commit -m "create a new image" -a "glrh11" solodev glrh11/solodev:v3`

* run: `./dev.sh`

7. test

* http://kittyapi.com/_/ping

8. export as my own image

* `docker export solodev > solodev.tar` or:

* `docker save -o ubuntu_14.04.tar ubuntu:14.04` or:

* all of the top two have the same V

8. problems

* `static` files couldn't be found: solodev/app.py

* nginx configration related:

> `liveadmin/misc/config/_user/solodev.py`

> and `make.py` create configuration with it

9. create a adminUser

* SECRET = "53BZTNaYKbcW3bZmO651"  passwd='wangli'  passwd_enc = 'a613e95feab44e6a77e86a3a9b580e3a'

* username = 'wangli'  password = 'wangli'

* db.adminUser.insert({'user_id':10,   username:'wangli6' , password : 'a613e95feab44e6a77e86a3a9b580e3a', 'level':1, 'status': 10})


* data server -v ~monpy/codes:/home/solodev/workspace

docker run --name save_daily_report -v /home/centos/data:/data --rm  --env-file /home/centos/kittyapi.env registry.ahaflow.com:5000/solo/kitty-live-admin-runtime-online:569 python /home/runtime/liveadmin/app/liveadmin/misc/crontab/save_daily_report.py

docker run -itd --name rank_script_test2 -v /home/centos/data:/data -P --env-file kittyapi.env registry.ahaflow.com:5000/solo/kitty-api-runtime-online:latest bash
