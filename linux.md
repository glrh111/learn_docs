1. create symble link
sudo ln -s /opt/bin/p4v /usr/bin/p4v
sudo chmod ugo+x /usr/bin/p4v

2. tar 

* # tar -cf all.tar *.jpg
　　这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包
，-f指定包的文件名。 

* # tar -rf all.tar *.gif
　　这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的
意思。 

*  tar -uf all.tar logo.gif
　　这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。 

* tar -tf all.tar
　　这条命令是列出all.tar包中所有文件，-t是列出文件的意思 

* tar -xf all.tar
　　这条命令是解出all.tar包中所有文件，-x是解开的意思 

> GZ2

* tar -czf all.tar.gz *.jpg
　　这条命令是将所有.jpg的文件打成一个tar包，并且将其用gzip压缩，生成一个
gzip压缩过的包，包名为all.tar.gz 

* tar -xzf all.tar.gz
　　这条命令是将上面产生的包解开。 

> BZ2

* tar -cjf all.tar.bz2 *.jpg
　　这条命令是将所有.jpg的文件打成一个tar包，并且将其用bzip2压缩，生成一个
bzip2压缩过的包，包名为all.tar.bz2 

* tar -xjf all.tar.bz2
　　这条命令是将上面产生的包解开。 

> compress

* tar -cZf all.tar.Z *.jpg
　　这条命令是将所有.jpg的文件打成一个tar包，并且将其用compress压缩，生成
一个uncompress压缩过的包，包名为all.tar.Z 

*  tar -xZf all.tar.Z
　　这条命令是将上面产生的包解开 


3. `ssh-keygen -t rsa`


4. pip installed package `dir`

* import site; site.getsitepackages()

4. `dig`

*  dig +trace @8.8.8.8 glrh11.com A

5. `ubuntu wireshark no interface`

```
sudo addgroup -system wireshark
sudo chown root:wireshark /usr/bin/dumpcap
sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap
sudo usermod -a -G wireshark YOUR_USER_NAME
```

* `computer Internet`

    《计算机网络：自顶向下方法与Internet特色》
    《计算机网络》
    《Web性能权威指南》


6. 



