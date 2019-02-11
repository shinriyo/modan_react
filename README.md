# Docker React
## how to

https://qiita.com/mii288/items/aac597bc02575831ea90#comment-c899ffba90569b9d5b41


```
docker-compose build
```

start

```
docker-compose run --rm --service-ports node npm start
```


install
```
docker-compose run --rm --service-ports node npm install redux --save
docker-compose run --rm --service-ports node npm install react-redux --save
docker-compose run --rm --service-ports node npm install recompose --save
docker-compose run --rm --service-ports node npm install typescript-fsa --save
docker-compose run --rm --service-ports node npm install typescript-fsa-reducers --save
docker-compose run --rm --service-ports node npm install @material-ui/core --save
docker-compose run --rm --service-ports node npm install @material-ui/icons --save
```

type
```
docker-compose run --rm --service-ports node npm install @types/redux --save-dev
docker-compose run --rm --service-ports node npm install @types/react-redux --save-dev
```
