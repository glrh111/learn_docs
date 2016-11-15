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
