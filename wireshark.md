## wireshark operation

### basic

* C-m  mark package

* S-C-n  S-C-b  change from marked packages

### time related

* View - Time Display Format

* Edit - Set/Unset Time Reference

### Capture

#### Setting

* promiscuous mod

* cap ng

* capture to file(s)

* Display Options

* Name Resolution

#### BPF syntax : Berkeley Packet Filter

#### Capture Filter And Display Filter


## Advanced

### Endpoint

* Statistics -> Endpoints

* Statistics -> Conversations

* Statistics -> Protocol Hierarchy

### Name Resolution

* MAC name resolution: Mac -> IP ADDR or device Inc.

* Network Name Resolution: IP -> Domain

* Transport Name Resolution: port -> protocol

### Protocol Resolution

* based on port (may be error)

* change parser: right click: Decode As

* source code: https://code.wireshark.org/review/gitweb?p=wireshark.git;a=tree

### Follow TCP stream

* right click package, 'Follow TCP Stream' : Red(c -> s) and Blue (s -> c)

### Package Length

* Statistics - Packet lengths

## Graphics

* Statistics - IO Graphs : tuntu amount

* Statistics - TCP Stream ... - Round Trip Time Graph: RTT

* Statistics - Flow Graph

## Network Protocol

### ARP, Address Resolution Protocol, IP A -> MAC A

> used in link layer, and single net

* need MAC A, because the Swither use CAM(Content Addr Memery, port <-> MAC A) to locate computer. If not find MAC A(IP Related), if it will send a ARP.

* packet: request, and reply

* request, ethernet header destination: ff:*6, is broadcast; target ip addr: 0.0.0.0(to get)

* free ARP: when its IP changes, it will broadcast his IP and MAC.

### IP, Internet Protocol

#### IP Addr

* network addr + host addr, defined by network mask

* CIDR: Classless Inter-Domain Routing, 10.1.0.22/16

#### IP Header 20 * 8 bits

* Flags: if its a frag of something, if is, Fragment will be set.

* TTL: time to live, when pass a router, substract 1.

* Frag: based on MTU(OSI 2 EtherNet)

* Identification: mark a ip packet

### TCP, Transmission Control Protocol

#### header

* Source Port, Destination Port

* Sequence Number: mark a tcp packet

* Acknowledgement Number: wish next Sequence number

* Flags: URG, ACK, PSH, RST, STN, FIN

* Window Size: buff size(for receiver)

* Checksum: ensure integrality

* Urgent Pointer: if is URG, tell CPU where to read data

* Options.

#### port

* standard ports: 1 - 1023 (0 is for special usages)

* temp ports: 1024 - 65535

#### Flags

* SYN: synchronous

* ACK: acknowledgement

* PSH: push

* FIN: finish

* RST: reset

* URG: urgent

* *SEQ: Sequence Number

* *ACK: Acknowledge Number

#### handshake (3 times), only head

* SYN(c->s) - SYN/ACK(s->c) - ACK(c->s)

* number(default relative): Relative Sequence Numbers and Window Scaling

#### Byebye: four packets

* FIN/ACK(c->s) - ACK(s->c) - FIN/ACK(s->c) - ACK(c->s)

#### TCP reset

* RST: connection was cut, or conn was refused

### UDP: User Datagram Protocol (no connection)

#### header 16 * 8 bits

* port, length, checksum

### ICMP: Internet Control Message Protocol (RFC792)

#### Header 16 * 4 bits

* Type : 

* Code : sub type

* Checksum : 

* Variable

#### echo (ping)

## Advanced Internet Protocol

### DHCP : Dynamic Host Configuration Protocol (bootp.option.type == 53)

#### relet: DORA

* discover(c -> s) - offer(s -> c) - request(c -> s) - acknowledgement(s -> c)

##### discover: 0.0.0.0 -> 255.255.255.255

* DHCP message type : 53

### DNS: Domain Name System (port 53)

#### Header

* DNS ID Number: bind dns query and response

* Query/Response

* OpCode: message type

* Authoritative Answer: AA, in response packet

* Truncation: TC, response was cut

* Recursion Desired, RD

* Recursion Available: RA, for response, if set, the DNS server supporting recursiving

* Z

* Reply code

* Questions, A

#### Record Type

* 1 A IPv4

* 2 NS Authoritative DNServer

* 5 CNAME canonical name

* 15 MX Mail Exchange

* 16 TXT Text String

* 28 AAAA IPv6

* 251 IXFR  (TCP)

* 252 AXFR  (TCP)

#### Recursive

#### DNS zone transfer

* IXFR

* AXFR : full zone transfer

## make internet faster

### TCP Error Recorvery

> delay time

#### TCP resend (Sender)

* Retransmission Timer

* Retransmission Time Out : RTO

* Round Trip Time: Send packet - Receive ACK

#### TCP resend ensure and retransmission

* ISN, (Initial Sequence Number), when a TCP connection is established, ISN wa set.

* SEQ = ISN , TCP size = SIZE (a -> b), ACK = SEQ + SIZE (b -> a)

* if the receiver find that SEQ is not correct, it will send several (old) ACK to make the sender know which TCP packet to resend.

### TCP stream control

> lose prevention

#### window size

* receiver specify a window size, its a buffer size.

* the sender could only send eh data amount of window

* window size value = 0, sender will stop

### locate the problems

> handshake(3), first HTTP request(1), ACK request(1), first HTTP response

#### wire delay

* client send SYN fast, but receive SYN/ACK very slow

* because server do nothing complex with initial SYN, so, if server is busy, it return fast. but now, it return slow.

* so, its the wire problem

#### client delay

* send request slowly

#### server delay

* fask handshake, slow http response

### Network Base Line

#### Site Baseline

* Protocol, Statistics -> Protocol Hierarchy

* Broadcast, 

* Server Authoration, bacause its always slow in server authoration

* Data Transmission Rate

#### Host Baseline

* Protocols

* Busy/Free Network Traffic

* server start/stop

* Authoration

* Inline/Dependency

#### App Baseline

## Network Safty

### Network investigator

#### SYN Scan

* SYN/ACK

* RST

* nothing(fitered)

> nmap 123.56.250.233

#### OS fingerprint

##### passive fingerprint

* based on that, OS set different default values for TCP/IP headers.

##### initiative

* use nmap

#### Exploit

##### Operation Aurora

##### ARP cache attack: man in the middle (MITM)

##### Teluoyi


