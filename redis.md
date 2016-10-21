#REmote DIctionary Server(Redis)

> Redis是一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

## redis-benchmark

1. connect:

```
redis-cli -h redis -p 6379
```

1. enchmark Writing to socket: Connection refused

```
redis-cli -s /tmp/redis.sock
redis-benchmark -q -n 10000 -s /tmp/redis.sock
```

## Redis Pipline

1. brief introduction

* `(echo -en "PING\r\n SET w3ckey redis\r\nGET w3ckey\r\nINCR visitor\r\nINCR visitor\r\nINCR visitor\r\n"; sleep 10) | nc localhost 6379`

* Redis 管道技术可以在服务端未响应时，客户端可以继续向服务端发送请求，并最终一次性读取所有服务端的响应。

* 管道技术最显著的优势是提高了 redis 服务的性能。
