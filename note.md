### 说明

### router.ts 

此路由文件只做两个路由分发：
    "/" 默认
    '/distributor' 分发器

### home.ts

* get请求将全部没有响应

* 由分发器解释post请求 
      根据topic 使用eval调用 mysqlService中的 function
      在distributor中
          检查 topic 是否存在
          检查 topic 指向的函数是否存在
          data参数是否存在
  这种做法有以下几点好处：
         1. 只需要一个API地址
         2. 前端配置好请求地址后不用再动了，只需要每次发送时携带不同的topic即可
         3. 请求地址正确，网络正常的情况下，服务器端程序不会发生异常情况，所有的异常要么被预见到，将明确的错误发送到前端，要么被catch捕获，错误阶段将发生在distributor中，对实际处理业务的函数没有任何影响

### mysqlService.ts

​	处理数据库业务的模块，由home.ts的 distributor 发送过来，每个函数将返回一个对象，内容没有标准

