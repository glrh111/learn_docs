# live test

> http://testapi.kitty.live/v1/pay/
> http://liveadmin.com/j/tag/tag
> http://liveadmin.com/j/tag/tag-res

1. GET

* `http --json GET http://liveadmin.com/j/tag/tag`

* `http --json GET http://liveadmin.com/j/tag/tag-res`

2. POST

* `http --json POST http://liveadmin.com/j/tag/tag-res name='movie'`

* `http --json POST http://liveadmin.com/j/tag/tag-res tag_id='1,2,3' res_status=1`

3. TEST SERVER

* get login info `/v1/account/login`
`http --json POST http://testapi.kitty.live/v1/account/login country_code='86' phone='18838613739' password='111111'`

* get productsa `/v1/pay/line/products`
`http --json --auth 18838613739:111111 GET http://testapi.kitty.live/v1/pay/line/products`


