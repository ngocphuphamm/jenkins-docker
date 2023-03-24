```
 docker run -v $(pwd):/ngocphu:ro -v /app/node_modules -p clienPort:containerPort -d --name node-app node-image
```


```
 docker run -v $(pwd):/ngocphu:ro -v /app/node_modules -p clienPort:containerPort -d --env-file ./.env --name node-app node-image
```