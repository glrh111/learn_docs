## history

* TIB

* IBM MQ

* ITBCO

* MS MQ

* AMQP

## 

* start server: rabbitmq-server

* vhost:

rabbitmqctl add_vhost [], delete_vhost [], list_vhosts, -n rabbit@[server-name]

## 3. server management

### server management

* start node

> start: `rabbitmq-server`

> logs: `/var/log/rabbitmq: rabbit@hostname.log`

* stop: 
> `rabbitmqctl stop`: close app and node
> `rabbitmqctl stop_app`: just stop app

* configure file: /etc/rabbitmq/rabbitmq.config

### request permission : based on user

#### user management

* `rabbitmqctl add_user username password`

* `rabbitmqctl delete_user username`

> this will delete all items related to the user

* `rabbitmqctl change_password username new-password`


#### permission system : ACL style

> permission: read(consume), write(publish), set(create/delete queue/exchange)

> one piece: user vhost permission permission_area

* `rabbitmqctl set_permissions -p sycamore cashing-tier ".*" ".*" ".*"`

* `rabbitmqctl list_permissions -p sycamore`

* `rabbitmqctl clear_permissions -p sycamore cashing-tier`

### monitor

#### admin

* rabbitmq-plugins enable rabbitmq_management

* restart

* GET : http://localhost:15672/

#### statistics

* `rabbitmqctl list_queues -p vhost`

* `rabbitmqctl list_exchanges`, if no name, its anounmous

* `rabbitmqctl list_bindings`

#### logs

spec = {from_id: 156633}
db.giftRecord.aggregate([ {$match: spec }, {$group:  { _id: '$from_id',  count: { '$sum': {  '$multiply': [ '$count', '$moon'  ]   }  }    }   }   ])

spec2 = {user_id: 156633, status:2, bill_type: 3}
db.bill.aggregate([ {$match: spec2 }, {$group:  { _id: '$user_id',  count: { '$sum': {'$abs':'$d_amount'}  }    }   }   ])
