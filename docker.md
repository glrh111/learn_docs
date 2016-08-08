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

* `sudo docker run -itd --name solodev --link redis:redis --link mongo:mongo -v ~monpy/codes:/home/solodev/workspace -p 20000:22  registry.ahaflow.com:5000/solo/dev`

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