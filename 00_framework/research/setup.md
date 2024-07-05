
## Mongo

```
/# mongo -u root -p example --authenticationDatabase admin
MongoDB shell version v3.6.4
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.4
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
Server has startup warnings:
2024-07-05T10:35:37.070+0000 I CONTROL  [initandlisten]
2024-07-05T10:35:37.071+0000 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. rlimits set to 31720 processes, 1048576 files. Number of processes should be at least 524288 : 0.5 times number of files.
> use admin
switched to db admin
> db.createUser({
...   user: "root",
...   pwd: "example",
...   roles: [
...     { role: "root", db: "admin" },
...     { role: "readWrite", db: "bizzan" }
...   ]
... })
2024-07-05T10:36:10.187+0000 E QUERY    [thread1] Error: couldn't add user: User "root@admin" already exists :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype.createUser@src/mongo/shell/db.js:1437:15
@(shell):1:1
>
> db.updateUser("root", {
...   roles: [
...     { role: "root", db: "admin" },
...     { role: "readWrite", db: "bizzan" }
...   ]
... })
>
```