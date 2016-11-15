## TRACE: curl --insecure -v -X TRACE https://www.google.com/

## nc www.baidu.com 80

## telnet

## cache
* cache hit, cache miss

## web tunnel : client -(tunnel)- gateway -(ssl)- server
* CONNECT google.com:443 HTTP/1.1
* HTTP/1.1 200 Connection Established

## traceroute

* traceroute [-dFlnrvx][-f<存活数值>][-g<网关>...][-i<网络界面>][-m<存活数值>][-p<通信端口>][-s<来源地址>][-t<服务类型>][-w<超时秒数>][主机名称或IP地址][数据包大小]

* 实例1: traceroute www.baidu.com 

* 实例2：跳数设置 traceroute -m 10 www.baidu.com    -q xx ping per jump

* 实例3：显示IP地址，不查主机名 traceroute -n www.baidu.com

* 实例4：探测包使用的基本UDP端口设置6888(default 33434) traceroute -p 6888 www.baidu.com

* 实例5：把探测包的个数设置为值4 traceroute -q 4 www.baidu.com

* 实例6：绕过正常的路由表，直接发送到网络相连的主机 traceroute -r www.baidu.com

* 实例7：把对外发探测包的等待响应时间设置为3秒 traceroute -w 3 www.baidu.com

## netstat

>> netstat命令用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。netstat是在内核中访问网络及相关信息的程序，它能提供TCP连接，TCP和UDP监听，进程内存管理的相关报告。
如果你的计算机有时候接收到的数据报导致出错数据或故障，你不必感到奇怪，TCP/IP可以容许这些类型的错误，并能够自动重发数据报。但如果累计的出错情况数目占到所接收的IP数据报相当大的百分比，或者它的数目正迅速增加，那么你就应该使用netstat查一查为什么会出现这些情况了。]

* netstat [-acCeFghilMnNoprstuvVwx][-A<网络类型>][--ip]

* -a或–all 显示所有连线中的Socket。
-A<网络类型>或–<网络类型> 列出该网络类型连线中的相关地址。
-c或–continuous 持续列出网络状态。
-C或–cache 显示路由器配置的快取信息。
-e或–extend 显示网络其他相关信息。
-F或–fib 显示FIB。
-g或–groups 显示多重广播功能群组组员名单。
-h或–help 在线帮助。
-i或–interfaces 显示网络界面信息表单。
-l或–listening 显示监控中的服务器的Socket。
-M或–masquerade 显示伪装的网络连线。
-n或–numeric 直接使用IP地址，而不通过域名服务器。
-N或–netlink或–symbolic 显示网络硬件外围设备的符号连接名称。
-o或–timers 显示计时器。
-p或–programs 显示正在使用Socket的程序识别码和程序名称。
-r或–route 显示Routing Table。
-s或–statistice 显示网络工作信息统计表。
-t或–tcp 显示TCP传输协议的连线状况。
-u或–udp 显示UDP传输协议的连线状况。
-v或–verbose 显示指令执行过程。
-V或–version 显示版本信息。
-w或–raw 显示RAW传输协议的连线状况。
-x或–unix 此参数的效果和指定”-A unix”参数相同。
–ip或–inet 此参数的效果和指定”-A inet”参数相同。

* 实例1：无参数使用 netstat

>> 从整体上看，netstat的输出结果可以分为两个部分：
一个是Active Internet connections，称为有源TCP连接，其中"Recv-Q"和"Send-Q"指的是接收队列和发送队列。这些数字一般都应该是0。如果不是则表示软件包正在队列中堆积。这种情况只能在非常少的情况见到。
另一个是Active UNIX domain sockets，称为有源Unix域套接口(和网络套接字一样，但是只能用于本机通信，性能可以提高一倍)。
Proto显示连接使用的协议,RefCnt表示连接到本套接口上的进程号,Types显示套接口的类型,State显示套接口当前的状态,Path表示连接到套接口的其它进程使用的路径名。

LISTEN：侦听来自远方的TCP端口的连接请求
SYN-SENT：再发送连接请求后等待匹配的连接请求（如果有大量这样的状态包，检查是否中招了）
SYN-RECEIVED：再收到和发送一个连接请求后等待对方对连接请求的确认（如有大量此状态，估计被flood攻击了）
ESTABLISHED：代表一个打开的连接
FIN-WAIT-1：等待远程TCP连接中断请求，或先前的连接中断请求的确认
FIN-WAIT-2：从远程TCP等待连接中断请求
CLOSE-WAIT：等待从本地用户发来的连接中断请求
CLOSING：等待远程TCP对连接中断的确认
LAST-ACK：等待原来的发向远程TCP的连接中断请求的确认（不是什么好东西，此项出现，检查是否被攻击）
TIME-WAIT：等待足够的时间以确保远程TCP接收到连接中断请求的确认
CLOSED：没有任何连接状态

* 实例2：列出所有端口  netstat -a

* 实例3：显示当前UDP连接状况 netstat -nu

* 实例4：显示UDP端口号的使用情况 netstat -apu

* 实例5：显示网卡列表  netstat -i

* 实例6：显示组播组的关系 netstat -g 

* 实例7：显示网络统计信息  netstat -s

* 实例8：显示监听的套接口  netstat -l

* 实例9：显示所有已建立的有效连接 netstat -n

* 实例10：显示关于以太网的统计数据 netstat -e

* 实例11：显示关于路由表的信息 netstat -r

* 实例12：列出所有 tcp 端口   netstat -at

* 实例13：统计机器中网络连接各个状态个数 netstat -a | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'

* 实例15：查看连接某服务端口最多的的IP地址 netstat -nat | grep "192.168.120.20:16067" |awk '{print $5}'|awk -F: '{print $4}'|sort|uniq -c|sort -nr|head -20

* 实例16：找出程序运行的端口 netstat -ap | grep ssh

* 实例18：找出运行在指定端口的进程  netstat -anpt | grep ':16064'

## ping

