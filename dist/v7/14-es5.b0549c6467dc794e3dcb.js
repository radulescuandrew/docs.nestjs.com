!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,s=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+xAr":function(n,a,c){"use strict";c.r(a),c.d(a,"WebsocketsModule",function(){return q});var o,b,i,r,l,p,d,h=c("ofXK"),u=c("tyNb"),I=c("PCNd"),f=c("Ydvz"),J=c("fXoL"),m=c("zg9e"),g=c("FKbk"),w=c("xE8d"),v=((o=function(n){t(c,n);var a=s(c);function c(){return e(this,c),a.apply(this,arguments)}return c}(f.a)).\u0275fac=function(e){return y(e||o)},o.\u0275cmp=J.Ab({type:o,selectors:[["app-adapter"]],features:[J.ub],decls:163,vars:8,consts:[[1,"content"],["contentReference",""],[1,"github-links"],["href","https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/adapter.md","aria-label","Suggest Edits","title","Suggest Edits"],[1,"fas","fa-edit"],["id","adapters"],["appAnchor","","id","extend-socketio"],["rel","nofollow","target","_blank","href","https://github.com/socketio/socket.io"],[1,"language-bash"],[1,"language-typescript"],["appAnchor","","id","ws-library"],["rel","nofollow","target","_blank","href","https://github.com/websockets/ws"],[1,"info"],["appAnchor","","id","advanced-custom-adapter"],[1,"filename"],["app635c183dd7c426e2ac1bcf88d6533df286744c8c",""],["appa8cff5a577ed745ab920bdc7040da2b7cd17a3c6",""],["appAnchor","","id","example"],["rel","nofollow","target","_blank","href","https://github.com/nestjs/nest/tree/master/sample/16-gateways-ws"]],template:function(e,t){if(1&e&&(J.Jb(0,"div",0,1),J.Jb(2,"div",2),J.Jb(3,"a",3),J.Hb(4,"i",4),J.Ib(),J.Ib(),J.Jb(5,"h3",5),J.lc(6,"Adapters"),J.Ib(),J.Jb(7,"p"),J.lc(8,"The WebSockets module is platform-agnostic, hence, you can bring your own library (or even a native implementation) by making use of "),J.Jb(9,"code"),J.lc(10,"WebSocketAdapter"),J.Ib(),J.lc(11," interface. This interface forces to implement few methods described in the following table:"),J.Ib(),J.Jb(12,"table"),J.Jb(13,"tr"),J.Jb(14,"td"),J.Jb(15,"code"),J.lc(16,"create"),J.Ib(),J.Ib(),J.Jb(17,"td"),J.lc(18,"Creates a socket instance based on passed arguments"),J.Ib(),J.Ib(),J.Jb(19,"tr"),J.Jb(20,"td"),J.Jb(21,"code"),J.lc(22,"bindClientConnect"),J.Ib(),J.Ib(),J.Jb(23,"td"),J.lc(24,"Binds the client connection event"),J.Ib(),J.Ib(),J.Jb(25,"tr"),J.Jb(26,"td"),J.Jb(27,"code"),J.lc(28,"bindClientDisconnect"),J.Ib(),J.Ib(),J.Jb(29,"td"),J.lc(30,"Binds the client disconnection event (optional*)"),J.Ib(),J.Ib(),J.Jb(31,"tr"),J.Jb(32,"td"),J.Jb(33,"code"),J.lc(34,"bindMessageHandlers"),J.Ib(),J.Ib(),J.Jb(35,"td"),J.lc(36,"Binds the incoming message to the corresponding message handler"),J.Ib(),J.Ib(),J.Jb(37,"tr"),J.Jb(38,"td"),J.Jb(39,"code"),J.lc(40,"close"),J.Ib(),J.Ib(),J.Jb(41,"td"),J.lc(42,"Terminates a server instance"),J.Ib(),J.Ib(),J.Ib(),J.Jb(43,"h4",6),J.Jb(44,"span"),J.lc(45,"Extend socket.io"),J.Ib(),J.Ib(),J.Jb(46,"p"),J.lc(47,"The "),J.Jb(48,"a",7),J.lc(49,"socket.io"),J.Ib(),J.lc(50," package is wrapped in an "),J.Jb(51,"code"),J.lc(52,"IoAdapter"),J.Ib(),J.lc(53," class. What if you would like to enhance the basic functionality of the adapter? For instance, your technical requirements require a capability to broadcast events across multiple load-balanced instances of your web service. For this, you can extend "),J.Jb(54,"code"),J.lc(55,"IoAdapter"),J.Ib(),J.lc(56," and override a single method which responsibility is to instantiate new socket.io servers. But first of all, let's install the required package."),J.Ib(),J.Jb(57,"pre"),J.Jb(58,"code",8),J.lc(59,"\n$ npm i --save socket.io-redis\n"),J.Ib(),J.Ib(),J.Jb(60,"p"),J.lc(61,"Once the package is installed, we can create a "),J.Jb(62,"code"),J.lc(63,"RedisIoAdapter"),J.Ib(),J.lc(64," class."),J.Ib(),J.Jb(65,"pre"),J.Jb(66,"code",9),J.lc(67,"\nimport { IoAdapter } from '@nestjs/platform-socket.io';\nimport * as redisIoAdapter from 'socket.io-redis';\n\nexport class RedisIoAdapter extends IoAdapter {\n  createIOServer(port: number, options?: any): any {\n    const server = super.createIOServer(port, options);\n    const redisAdapter = redisIoAdapter({ host: 'localhost', port: 6379 });\n    \n    server.adapter(redisAdapter);\n    return server;\n  }\n}\n"),J.Ib(),J.Ib(),J.Jb(68,"p"),J.lc(69,"Afterward, simply switch to your newly created Redis adapter."),J.Ib(),J.Jb(70,"pre"),J.Jb(71,"code",9),J.lc(72,"\nconst app = await NestFactory.create(AppModule);\napp.useWebSocketAdapter(new RedisIoAdapter(app));\n"),J.Ib(),J.Ib(),J.Jb(73,"h4",10),J.Jb(74,"span"),J.lc(75,"Ws library"),J.Ib(),J.Ib(),J.Jb(76,"p"),J.lc(77,"Another available adapter is a "),J.Jb(78,"code"),J.lc(79,"WsAdapter"),J.Ib(),J.lc(80," which in turn acts like a proxy between the framework and integrate blazing fast and thoroughly tested "),J.Jb(81,"a",11),J.lc(82,"ws"),J.Ib(),J.lc(83," library. This adapter is fully compatible with native browser WebSockets and is far faster than socket.io package. Unluckily, it has significantly fewer functionalities available out-of-the-box. In some cases, you may just don't necessarily need them though."),J.Ib(),J.Jb(84,"p"),J.lc(85,"In order to use "),J.Jb(86,"code"),J.lc(87,"ws"),J.Ib(),J.lc(88,", we firstly have to install the required package:"),J.Ib(),J.Jb(89,"pre"),J.Jb(90,"code",8),J.lc(91,"\n$ npm i --save @nestjs/platform-ws\n"),J.Ib(),J.Ib(),J.Jb(92,"p"),J.lc(93,"Once the package is installed, we can switch an adapter:"),J.Ib(),J.Jb(94,"pre"),J.Jb(95,"code",9),J.lc(96,"\nconst app = await NestFactory.create(AppModule);\napp.useWebSocketAdapter(new WsAdapter(app));\n"),J.Ib(),J.Ib(),J.Jb(97,"blockquote",12),J.Jb(98,"strong"),J.lc(99,"Hint"),J.Ib(),J.lc(100," The "),J.Jb(101,"code"),J.lc(102,"WsAdapter"),J.Ib(),J.lc(103," is imported from "),J.Jb(104,"code"),J.lc(105,"@nestjs/platform-ws"),J.Ib(),J.lc(106,".\n"),J.Ib(),J.Jb(107,"h4",13),J.Jb(108,"span"),J.lc(109,"Advanced (custom adapter)"),J.Ib(),J.Ib(),J.Jb(110,"p"),J.lc(111,"For demonstration purposes, we are going to integrate the "),J.Jb(112,"a",11),J.lc(113,"ws"),J.Ib(),J.lc(114," library manually. As mentioned, the adapter for this library is already created and is exposed from the "),J.Jb(115,"code"),J.lc(116,"@nestjs/platform-ws"),J.Ib(),J.lc(117," package as a "),J.Jb(118,"code"),J.lc(119,"WsAdapter"),J.Ib(),J.lc(120," class. Here is how the simplified implementation could potentially look like:"),J.Ib(),J.Jb(121,"span",14),J.lc(122),J.Vb(123,"extension"),J.Hb(124,"app-tabs",null,15),J.Ib(),J.Jb(126,"pre"),J.Jb(127,"code",9),J.lc(128,"\nimport * as WebSocket from 'ws';\nimport { WebSocketAdapter, INestApplicationContext } from '@nestjs/common';\nimport { MessageMappingProperties } from '@nestjs/websockets';\nimport { Observable, fromEvent, EMPTY } from 'rxjs';\nimport { mergeMap, filter } from 'rxjs/operators';\n\nexport class WsAdapter implements WebSocketAdapter {\n  constructor(private app: INestApplicationContext) {}\n\n  create(port: number, options: any = {}): any {\n    return new ws.Server({ port, ...options });\n  }\n\n  bindClientConnect(server, callback: Function) {\n    server.on('connection', callback);\n  }\n\n  bindMessageHandlers(\n    client: WebSocket,\n    handlers: MessageMappingProperties[],\n    process: (data: any) => Observable<any>,\n  ) {\n    fromEvent(client, 'message')\n      .pipe(\n        mergeMap(data => this.bindMessageHandler(data, handlers, process)),\n        filter(result => result),\n      )\n      .subscribe(response => client.send(JSON.stringify(response)));\n  }\n\n  bindMessageHandler(\n    buffer,\n    handlers: MessageMappingProperties[],\n    process: (data: any) => Observable<any>,\n  ): Observable<any> {\n    const message = JSON.parse(buffer.data);\n    const messageHandler = handlers.find(\n      handler => handler.message === message.event,\n    );\n    if (!messageHandler) {\n      return EMPTY;\n    }\n    return process(messageHandler.callback(message.data));\n  }\n\n  close(server) {\n    server.close();\n  }\n}\n"),J.Ib(),J.Ib(),J.Jb(129,"blockquote",12),J.Jb(130,"strong"),J.lc(131,"Hint"),J.Ib(),J.lc(132," When you want to take advantage of "),J.Jb(133,"a",11),J.lc(134,"ws"),J.Ib(),J.lc(135," library, use built-in "),J.Jb(136,"code"),J.lc(137,"WsAdapter"),J.Ib(),J.lc(138," instead of creating your own one.\n"),J.Ib(),J.Jb(139,"p"),J.lc(140,"Then, we can set up a custom adapter using "),J.Jb(141,"code"),J.lc(142,"useWebSocketAdapter()"),J.Ib(),J.lc(143," method:"),J.Ib(),J.Jb(144,"span",14),J.lc(145),J.Vb(146,"extension"),J.Hb(147,"app-tabs",null,16),J.Ib(),J.Jb(149,"pre"),J.Jb(150,"code",9),J.lc(151,"\nconst app = await NestFactory.create(AppModule);\napp.useWebSocketAdapter(new WsAdapter(app));\n"),J.Ib(),J.Ib(),J.Jb(152,"h4",17),J.Jb(153,"span"),J.lc(154,"Example"),J.Ib(),J.Ib(),J.Jb(155,"p"),J.lc(156,"A working example that uses "),J.Jb(157,"code"),J.lc(158,"WsAdapter"),J.Ib(),J.lc(159," is available "),J.Jb(160,"a",18),J.lc(161,"here"),J.Ib(),J.lc(162,"."),J.Ib(),J.Ib()),2&e){var n=J.ec(125),s=J.ec(148);J.wb(122),J.nc(" ",J.Wb(123,2,"ws-adapter",n.isJsActive),"\n"),J.wb(23),J.nc(" ",J.Wb(146,5,"main",s.isJsActive),"\n")}},directives:[m.a,g.a],pipes:[w.a],encapsulation:2,changeDetection:0}),o),y=J.Lb(v),k=((b=function(n){t(c,n);var a=s(c);function c(){return e(this,c),a.apply(this,arguments)}return c}(f.a)).\u0275fac=function(e){return A(e||b)},b.\u0275cmp=J.Ab({type:b,selectors:[["app-exception-filters"]],features:[J.ub],decls:80,vars:4,consts:[[1,"content"],["contentReference",""],[1,"github-links"],["href","https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/exception-filters.md","aria-label","Suggest Edits","title","Suggest Edits"],[1,"fas","fa-edit"],["id","exception-filters"],["routerLink","/exception-filters"],[1,"language-typescript"],[1,"info"],["appAnchor","","id","filters"],["appAnchor","","id","inheritance"],[1,"filename"],["app988374700bb5a06637d8465099148f2b0fcc99f4",""]],template:function(e,t){if(1&e&&(J.Jb(0,"div",0,1),J.Jb(2,"div",2),J.Jb(3,"a",3),J.Hb(4,"i",4),J.Ib(),J.Ib(),J.Jb(5,"h3",5),J.lc(6,"Exception filters"),J.Ib(),J.Jb(7,"p"),J.lc(8,"The only difference between the HTTP "),J.Jb(9,"a",6),J.lc(10,"exception filter"),J.Ib(),J.lc(11," layer and the corresponding web sockets layer is that instead of throwing "),J.Jb(12,"code"),J.lc(13,"HttpException"),J.Ib(),J.lc(14,", you should use "),J.Jb(15,"code"),J.lc(16,"WsException"),J.Ib(),J.lc(17,"."),J.Ib(),J.Jb(18,"pre"),J.Jb(19,"code",7),J.lc(20,"\nthrow new WsException('Invalid credentials.');\n"),J.Ib(),J.Ib(),J.Jb(21,"blockquote",8),J.Jb(22,"strong"),J.lc(23,"Hint"),J.Ib(),J.lc(24," The "),J.Jb(25,"code"),J.lc(26,"WsException"),J.Ib(),J.lc(27," class is imported from the "),J.Jb(28,"code"),J.lc(29,"@nestjs/websockets"),J.Ib(),J.lc(30," package.\n"),J.Ib(),J.Jb(31,"p"),J.lc(32,"With the sample above, Nest will handle the thrown exception and emit the "),J.Jb(33,"code"),J.lc(34,"exception"),J.Ib(),J.lc(35," message with the following structure:"),J.Ib(),J.Jb(36,"pre"),J.Jb(37,"code",7),J.lc(38,"\n{\n  status: 'error',\n  message: 'Invalid credentials.'\n}\n"),J.Ib(),J.Ib(),J.Jb(39,"h4",9),J.Jb(40,"span"),J.lc(41,"Filters"),J.Ib(),J.Ib(),J.Jb(42,"p"),J.lc(43,"Web sockets exception filters behave equivalently to HTTP exception filters. The following example uses a manually instantiated method-scoped filter. Just as with HTTP based applications, you can also use gateway-scoped filters (i.e., prefix the gateway class with a "),J.Jb(44,"code"),J.lc(45,"@UseFilters()"),J.Ib(),J.lc(46," decorator)."),J.Ib(),J.Jb(47,"pre"),J.Jb(48,"code",7),J.lc(49,"\n@UseFilters(new WsExceptionFilter())\n@SubscribeMessage('events')\nonEvent(client, data: any): WsResponse<any> {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Jb(50,"h4",10),J.Jb(51,"span"),J.lc(52,"Inheritance"),J.Ib(),J.Ib(),J.Jb(53,"p"),J.lc(54,"Typically, you'll create fully customized exception filters crafted to fulfill your application requirements. However, there might be use-cases when you would like to simply extend the "),J.Jb(55,"strong"),J.lc(56,"core exception filter"),J.Ib(),J.lc(57,", and override the behavior based on certain factors."),J.Ib(),J.Jb(58,"p"),J.lc(59,"In order to delegate exception processing to the base filter, you need to extend "),J.Jb(60,"code"),J.lc(61,"BaseWsExceptionFilter"),J.Ib(),J.lc(62," and call the inherited "),J.Jb(63,"code"),J.lc(64,"catch()"),J.Ib(),J.lc(65," method."),J.Ib(),J.Jb(66,"span",11),J.Hb(67,"app-tabs",null,12),J.Ib(),J.Jb(69,"pre"),J.Jb(70,"code",7),J.lc(71,"\nimport { Catch, ArgumentsHost } from '@nestjs/common';\nimport { BaseWsExceptionFilter } from '@nestjs/websockets';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseWsExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    super.catch(exception, host);\n  }\n}\n"),J.Ib(),J.Ib(),J.Jb(72,"pre"),J.Jb(73,"code",7),J.lc(74,"\nimport { Catch } from '@nestjs/common';\nimport { BaseWsExceptionFilter } from '@nestjs/websockets';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseWsExceptionFilter {\n  catch(exception, host) {\n    super.catch(exception, host);\n  }\n}\n"),J.Ib(),J.Ib(),J.Jb(75,"p"),J.lc(76,"The above implementation is just a shell demonstrating the approach. Your implementation of the extended exception filter would include your tailored "),J.Jb(77,"strong"),J.lc(78,"business logic"),J.Ib(),J.lc(79," (e.g., handling various conditions)."),J.Ib(),J.Ib()),2&e){var n=J.ec(68);J.wb(69),J.yb("hide",n.isJsActive),J.wb(3),J.yb("hide",!n.isJsActive)}},directives:[u.f,m.a,g.a],encapsulation:2,changeDetection:0}),b),A=J.Lb(k),x=c("CquY"),S=((i=function(n){t(c,n);var a=s(c);function c(){return e(this,c),a.apply(this,arguments)}return c}(f.a)).\u0275fac=function(e){return W(e||i)},i.\u0275cmp=J.Ab({type:i,selectors:[["app-gateways"]],features:[J.ub],decls:356,vars:44,consts:[[1,"content"],["contentReference",""],[1,"github-links"],["href","https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/gateways.md","aria-label","Suggest Edits","title","Suggest Edits"],[1,"fas","fa-edit"],["id","gateways"],["rel","nofollow","target","_blank","href","https://github.com/socketio/socket.io"],["rel","nofollow","target","_blank","href","https://github.com/websockets/ws"],["routerLink","/websockets/adapter"],["src","/assets/Gateways_1.png"],[1,"info"],["routerLink","/providers"],["appAnchor","","id","installation"],[1,"filename"],["app0ecf50d03b5c162d392fecee9b9a6fccb107572a",""],[1,"language-typescript"],[1,"warning"],["rel","nofollow","target","_blank","href","https://github.com/nestjs/nest/issues/5676"],["appAnchor","","id","overview"],["rel","nofollow","target","_blank","href","https://socket.io/docs/rooms-and-namespaces/"],["rel","nofollow","target","_blank","href","https://socket.io/docs/server-api/"],["appf61db9d86269ae312f4c8d4a556e07024068ad6d",""],["app85e4c3f9f5e0213fb74290934ccc2850d2866e42",""],["rel","nofollow","target","_blank","href","https://socket.io/docs/server-api/#socket"],["app1c8ad8f0f7f5d468a698bbc7c7a29020ef975546",""],["appAnchor","","id","multiple-responses"],["appe761d7adf5841db8eb6062f51bea0ee462d889b8",""],["appAnchor","","id","asynchronous-responses"],["app8bf8a97ff64537b7b869e71f53431e8f238ebffb",""],["appAnchor","","id","lifecycle-hooks"],["appAnchor","","id","server"],["appAnchor","","id","example"],["rel","nofollow","target","_blank","href","https://github.com/nestjs/nest/tree/master/sample/02-gateways"]],template:function(e,t){if(1&e&&(J.Jb(0,"div",0,1),J.Jb(2,"div",2),J.Jb(3,"a",3),J.Hb(4,"i",4),J.Ib(),J.Ib(),J.Jb(5,"h3",5),J.lc(6,"Gateways"),J.Ib(),J.Jb(7,"p"),J.lc(8,"Most of the concepts discussed elsewhere in this documentation, such as dependency injection, decorators, exception filters, pipes, guards and interceptors, apply equally to gateways. Wherever possible, Nest abstracts implementation details so that the same components can run across HTTP-based platforms, WebSockets, and Microservices. This section covers the aspects of Nest that are specific to WebSockets."),J.Ib(),J.Jb(9,"p"),J.lc(10,"In Nest, a gateway is simply a class annotated with "),J.Jb(11,"code"),J.lc(12,"@WebSocketGateway()"),J.Ib(),J.lc(13," decorator. Technically, gateways are platform-agnostic which makes them compatible with any WebSockets library once an adapter is created. There are two WS platforms supported out-of-the-box: "),J.Jb(14,"a",6),J.lc(15,"socket.io"),J.Ib(),J.lc(16," and "),J.Jb(17,"a",7),J.lc(18,"ws"),J.Ib(),J.lc(19,". You can choose the one that best suits your needs. Also, you can build your own adapter by following this "),J.Jb(20,"a",8),J.lc(21,"guide"),J.Ib(),J.lc(22,"."),J.Ib(),J.Jb(23,"figure"),J.Hb(24,"img",9),J.Ib(),J.Jb(25,"blockquote",10),J.Jb(26,"strong"),J.lc(27,"Hint"),J.Ib(),J.lc(28," Gateways can be treated as "),J.Jb(29,"a",11),J.lc(30,"providers"),J.Ib(),J.lc(31,"; this means they can inject dependencies through the class constructor. Also, gateways can be injected by other classes (providers and controllers) as well.\n"),J.Ib(),J.Jb(32,"h4",12),J.Jb(33,"span"),J.lc(34,"Installation"),J.Ib(),J.Ib(),J.Jb(35,"p"),J.lc(36,"To start building WebSockets-based applications, first install the required package:"),J.Ib(),J.Jb(37,"span",13),J.Hb(38,"app-tabs",null,14),J.Ib(),J.Jb(40,"pre"),J.Jb(41,"code",15),J.lc(42,"\n$ npm i --save @nestjs/websockets @nestjs/platform-socket.io\n$ npm i --save-dev @types/socket.io\n"),J.Ib(),J.Ib(),J.Jb(43,"pre"),J.Jb(44,"code",15),J.lc(45,"\n$ npm i --save @nestjs/websockets @nestjs/platform-socket.io\n"),J.Ib(),J.Ib(),J.Jb(46,"blockquote",16),J.Jb(47,"strong"),J.lc(48,"Warning"),J.Ib(),J.Jb(49,"code"),J.lc(50,"@nestjs/platform-socket.io"),J.Ib(),J.lc(51," currently depends on socket.io v2.3 and socket.io v3.0 client and server are not backward compatible. However, you can still implement a custom adapter to use socket.io v3.0. Please refer to "),J.Jb(52,"a",17),J.lc(53,"this issue"),J.Ib(),J.lc(54," for further information.\n"),J.Ib(),J.Jb(55,"h4",18),J.Jb(56,"span"),J.lc(57,"Overview"),J.Ib(),J.Ib(),J.Jb(58,"p"),J.lc(59,"In general, each gateway is listening on the same port as the "),J.Jb(60,"strong"),J.lc(61,"HTTP server"),J.Ib(),J.lc(62,", unless your app is not a web application, or you have changed the port manually. This default behavior can be modified by passing an argument to the "),J.Jb(63,"code"),J.lc(64,"@WebSocketGateway(80)"),J.Ib(),J.lc(65," decorator where "),J.Jb(66,"code"),J.lc(67,"80"),J.Ib(),J.lc(68," is a chosen port number. You can also set a "),J.Jb(69,"a",19),J.lc(70,"namespace"),J.Ib(),J.lc(71," used by the gateway using the following construction:"),J.Ib(),J.Jb(72,"pre"),J.Jb(73,"code",15),J.lc(74,"\n@WebSocketGateway(80, { namespace: 'events' })\n"),J.Ib(),J.Ib(),J.Jb(75,"blockquote",16),J.Jb(76,"strong"),J.lc(77,"Warning"),J.Ib(),J.lc(78," Gateways are not instantiated until they are referenced in the providers array of an existing module.\n"),J.Ib(),J.Jb(79,"p"),J.lc(80,"You can pass any supported "),J.Jb(81,"a",20),J.lc(82,"option"),J.Ib(),J.lc(83," to the socket constructor with the second argument to the "),J.Jb(84,"code"),J.lc(85,"@WebSocketGateway()"),J.Ib(),J.lc(86," decorator, as shown below:"),J.Ib(),J.Jb(87,"pre"),J.Jb(88,"code",15),J.lc(89,"\n@WebSocketGateway(81, { transports: ['websocket'] })\n"),J.Ib(),J.Ib(),J.Jb(90,"p"),J.lc(91,"The gateway is now listening, but we have not yet subscribed to any incoming messages. Let's create a handler that will subscribe to the "),J.Jb(92,"code"),J.lc(93,"events"),J.Ib(),J.lc(94," messages and respond to the user with the exact same data."),J.Ib(),J.Jb(95,"span",13),J.lc(96),J.Vb(97,"extension"),J.Hb(98,"app-tabs",null,21),J.Ib(),J.Jb(100,"pre"),J.Jb(101,"code",15),J.lc(102,"\n@SubscribeMessage('events')\nhandleEvent(@MessageBody() data: string): string {\n  return data;\n}\n"),J.Ib(),J.Ib(),J.Jb(103,"pre"),J.Jb(104,"code",15),J.lc(105,"\n@Bind(MessageBody())\n@SubscribeMessage('events')\nhandleEvent(data) {\n  return data;\n}\n"),J.Ib(),J.Ib(),J.Jb(106,"blockquote",10),J.Jb(107,"strong"),J.lc(108,"Hint"),J.Ib(),J.Jb(109,"code"),J.lc(110,"@SubscribeMessage()"),J.Ib(),J.lc(111," and "),J.Jb(112,"code"),J.lc(113,"@MessageBody()"),J.Ib(),J.lc(114," decorators are imported from "),J.Jb(115,"code"),J.lc(116,"@nestjs/websockets"),J.Ib(),J.lc(117," package.\n"),J.Ib(),J.Jb(118,"p"),J.lc(119,"If you would prefer not to use decorators, the following code is functionally equivalent:"),J.Ib(),J.Jb(120,"span",13),J.lc(121),J.Vb(122,"extension"),J.Hb(123,"app-tabs",null,22),J.Ib(),J.Jb(125,"pre"),J.Jb(126,"code",15),J.lc(127,"\n@SubscribeMessage('events')\nhandleEvent(client: Socket, data: string): string {\n  return data;\n}\n"),J.Ib(),J.Ib(),J.Jb(128,"pre"),J.Jb(129,"code",15),J.lc(130,"\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  return data;\n}\n"),J.Ib(),J.Ib(),J.Jb(131,"p"),J.lc(132,"In the example above, the "),J.Jb(133,"code"),J.lc(134,"handleEvent()"),J.Ib(),J.lc(135," function takes two arguments. The first one is a platform-specific "),J.Jb(136,"a",23),J.lc(137,"socket instance"),J.Ib(),J.lc(138,", while the second one is the data received from the client. This approach is not recommended though, because it requires mocking the "),J.Jb(139,"code"),J.lc(140,"socket"),J.Ib(),J.lc(141," instance in each unit test."),J.Ib(),J.Jb(142,"p"),J.lc(143,"Once the "),J.Jb(144,"code"),J.lc(145,"events"),J.Ib(),J.lc(146," message is received, the handler sends an acknowledgment with the same data that was sent over the network. In addition, it's possible to emit messages using a library-specific approach, for example, by making use of "),J.Jb(147,"code"),J.lc(148,"client.emit()"),J.Ib(),J.lc(149," method. In order to access a connected socket instance, use "),J.Jb(150,"code"),J.lc(151,"@ConnectedSocket()"),J.Ib(),J.lc(152," decorator."),J.Ib(),J.Jb(153,"span",13),J.lc(154),J.Vb(155,"extension"),J.Hb(156,"app-tabs",null,24),J.Ib(),J.Jb(158,"pre"),J.Jb(159,"code",15),J.lc(160,"\n@SubscribeMessage('events')\nhandleEvent(\n  @MessageBody() data: string,\n  @ConnectedSocket() client: Socket,\n): string {\n  return data;\n}\n"),J.Ib(),J.Ib(),J.Jb(161,"pre"),J.Jb(162,"code",15),J.lc(163,"\n@Bind(MessageBody(), ConnectedSocket())\n@SubscribeMessage('events')\nhandleEvent(data, client) {\n  return data;\n}\n"),J.Ib(),J.Ib(),J.Jb(164,"blockquote",10),J.Jb(165,"strong"),J.lc(166,"Hint"),J.Ib(),J.Jb(167,"code"),J.lc(168,"@ConnectedSocket()"),J.Ib(),J.lc(169," decorator is imported from "),J.Jb(170,"code"),J.lc(171,"@nestjs/websockets"),J.Ib(),J.lc(172," package.\n"),J.Ib(),J.Jb(173,"p"),J.lc(174,"However, in this case, you won't be able to leverage interceptors. If you don't want to respond to the user, you can simple skip the "),J.Jb(175,"code"),J.lc(176,"return"),J.Ib(),J.lc(177,' statement (or explicitly return "falsy" value, e.g. '),J.Jb(178,"code"),J.lc(179,"undefined"),J.Ib(),J.lc(180,")."),J.Ib(),J.Jb(181,"p"),J.lc(182,"Now when a client emits the message as follows:"),J.Ib(),J.Jb(183,"pre"),J.Jb(184,"code",15),J.lc(185,"\nsocket.emit('events', { name: 'Nest' });\n"),J.Ib(),J.Ib(),J.Jb(186,"p"),J.lc(187,"The "),J.Jb(188,"code"),J.lc(189,"handleEvent()"),J.Ib(),J.lc(190," method will be executed. In order to listen for messages emitted from within the above handler, the client has to attach a corresponding acknowledgment listener:"),J.Ib(),J.Jb(191,"pre"),J.Jb(192,"code",15),J.lc(193,"\nsocket.emit('events', { name: 'Nest' }, data => console.log(data));\n"),J.Ib(),J.Ib(),J.Jb(194,"h4",25),J.Jb(195,"span"),J.lc(196,"Multiple responses"),J.Ib(),J.Ib(),J.Jb(197,"p"),J.lc(198,"The acknowledgment is dispatched only once. Furthermore, it is not supported by native WebSockets implementation. To solve this limitation, you may return an object which consist of two properties. The "),J.Jb(199,"code"),J.lc(200,"event"),J.Ib(),J.lc(201," which is a name of the emitted event and the "),J.Jb(202,"code"),J.lc(203,"data"),J.Ib(),J.lc(204," that has to be forwarded to the client."),J.Ib(),J.Jb(205,"span",13),J.lc(206),J.Vb(207,"extension"),J.Hb(208,"app-tabs",null,26),J.Ib(),J.Jb(210,"pre"),J.Jb(211,"code",15),J.lc(212,"\n@SubscribeMessage('events')\nhandleEvent(@MessageBody() data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Jb(213,"pre"),J.Jb(214,"code",15),J.lc(215,"\n@Bind(MessageBody())\n@SubscribeMessage('events')\nhandleEvent(data) {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Jb(216,"blockquote",10),J.Jb(217,"strong"),J.lc(218,"Hint"),J.Ib(),J.lc(219," The "),J.Jb(220,"code"),J.lc(221,"WsResponse"),J.Ib(),J.lc(222," interface is imported from "),J.Jb(223,"code"),J.lc(224,"@nestjs/websockets"),J.Ib(),J.lc(225," package.\n"),J.Ib(),J.Jb(226,"blockquote",16),J.Jb(227,"strong"),J.lc(228,"Warning"),J.Ib(),J.lc(229," You should return a class instance that implements "),J.Jb(230,"code"),J.lc(231,"WsResponse"),J.Ib(),J.lc(232," if your "),J.Jb(233,"code"),J.lc(234,"data"),J.Ib(),J.lc(235," field relies on "),J.Jb(236,"code"),J.lc(237,"ClassSerializerInterceptor"),J.Ib(),J.lc(238,", as it ignores plain JavaScript objects responses.\n"),J.Ib(),J.Jb(239,"p"),J.lc(240,"In order to listen for the incoming response(s), the client has to apply another event listener."),J.Ib(),J.Jb(241,"pre"),J.Jb(242,"code",15),J.lc(243,"\nsocket.on('events', data => console.log(data));\n"),J.Ib(),J.Ib(),J.Jb(244,"h4",27),J.Jb(245,"span"),J.lc(246,"Asynchronous responses"),J.Ib(),J.Ib(),J.Jb(247,"p"),J.lc(248,"Message handlers are able to respond either synchronously or "),J.Jb(249,"strong"),J.lc(250,"asynchronously"),J.Ib(),J.lc(251,". Hence, "),J.Jb(252,"code"),J.lc(253,"async"),J.Ib(),J.lc(254," methods are supported. A message handler is also able to return an\xa0"),J.Jb(255,"code"),J.lc(256,"Observable"),J.Ib(),J.lc(257,", in which case the result values will be emitted until the stream is completed."),J.Ib(),J.Jb(258,"span",13),J.lc(259),J.Vb(260,"extension"),J.Hb(261,"app-tabs",null,28),J.Ib(),J.Jb(263,"pre"),J.Jb(264,"code",15),J.lc(265,"\n@SubscribeMessage('events')\nonEvent(@MessageBody() data: unknown): Observable<WsResponse<number>> {\n  const event = 'events';\n  const response = [1, 2, 3];\n\n  return from(response).pipe(\n    map(data => ({ event, data })),\n  );\n}\n"),J.Ib(),J.Ib(),J.Jb(266,"pre"),J.Jb(267,"code",15),J.lc(268,"\n@Bind(MessageBody())\n@SubscribeMessage('events')\nonEvent(data) {\n  const event = 'events';\n  const response = [1, 2, 3];\n\n  return from(response).pipe(\n    map(data => ({ event, data })),\n  );\n}\n"),J.Ib(),J.Ib(),J.Jb(269,"p"),J.lc(270,"In the example above, the message handler will respond "),J.Jb(271,"strong"),J.lc(272,"3 times"),J.Ib(),J.lc(273," (with each item from the array)."),J.Ib(),J.Jb(274,"h4",29),J.Jb(275,"span"),J.lc(276,"Lifecycle hooks"),J.Ib(),J.Ib(),J.Jb(277,"p"),J.lc(278,"There are 3 useful lifecycle hooks available. All of them have corresponding interfaces and are described in the following table:"),J.Ib(),J.Jb(279,"table"),J.Jb(280,"tr"),J.Jb(281,"td"),J.Jb(282,"code"),J.lc(283,"OnGatewayInit"),J.Ib(),J.Ib(),J.Jb(284,"td"),J.lc(285," Forces to implement the "),J.Jb(286,"code"),J.lc(287,"afterInit()"),J.Ib(),J.lc(288," method. Takes library-specific server instance as an argument (and spreads the rest if required). "),J.Ib(),J.Ib(),J.Jb(289,"tr"),J.Jb(290,"td"),J.Jb(291,"code"),J.lc(292,"OnGatewayConnection"),J.Ib(),J.Ib(),J.Jb(293,"td"),J.lc(294," Forces to implement the "),J.Jb(295,"code"),J.lc(296,"handleConnection()"),J.Ib(),J.lc(297," method. Takes library-specific client socket instance as an argument. "),J.Ib(),J.Ib(),J.Jb(298,"tr"),J.Jb(299,"td"),J.Jb(300,"code"),J.lc(301,"OnGatewayDisconnect"),J.Ib(),J.Ib(),J.Jb(302,"td"),J.lc(303," Forces to implement the "),J.Jb(304,"code"),J.lc(305,"handleDisconnect()"),J.Ib(),J.lc(306," method. Takes library-specific client socket instance as an argument. "),J.Ib(),J.Ib(),J.Ib(),J.Jb(307,"blockquote",10),J.Jb(308,"strong"),J.lc(309,"Hint"),J.Ib(),J.lc(310," Each lifecycle interface is exposed from "),J.Jb(311,"code"),J.lc(312,"@nestjs/websockets"),J.Ib(),J.lc(313," package.\n"),J.Ib(),J.Jb(314,"h4",30),J.Jb(315,"span"),J.lc(316,"Server"),J.Ib(),J.Ib(),J.Jb(317,"p"),J.lc(318,"Occasionally, you may want to have a direct access to the native, "),J.Jb(319,"strong"),J.lc(320,"platform-specific"),J.Ib(),J.lc(321," server instance. The reference to this object is passed as an argument to the "),J.Jb(322,"code"),J.lc(323,"afterInit()"),J.Ib(),J.lc(324," method ("),J.Jb(325,"code"),J.lc(326,"OnGatewayInit"),J.Ib(),J.lc(327," interface). Another option is to use the "),J.Jb(328,"code"),J.lc(329,"@WebSocketServer()"),J.Ib(),J.lc(330," decorator."),J.Ib(),J.Jb(331,"pre"),J.Jb(332,"code",15),J.lc(333,"\n@WebSocketServer()\nserver: Server;\n"),J.Ib(),J.Ib(),J.Jb(334,"blockquote",16),J.Jb(335,"strong"),J.lc(336,"Notice"),J.Ib(),J.lc(337," The "),J.Jb(338,"code"),J.lc(339,"@WebSocketServer()"),J.Ib(),J.lc(340," decorator is imported from the "),J.Jb(341,"code"),J.lc(342,"@nestjs/websockets"),J.Ib(),J.lc(343," package.\n"),J.Ib(),J.Jb(344,"p"),J.lc(345,"Nest will automatically assign the server instance to this property once it is ready to use."),J.Ib(),J.Jb(346,"p"),J.Hb(347,"app-banner-enterprise"),J.Ib(),J.Jb(348,"h4",31),J.Jb(349,"span"),J.lc(350,"Example"),J.Ib(),J.Ib(),J.Jb(351,"p"),J.lc(352,"A working example is available "),J.Jb(353,"a",32),J.lc(354,"here"),J.Ib(),J.lc(355,"."),J.Ib(),J.Ib()),2&e){var n=J.ec(39),s=J.ec(99),a=J.ec(124),c=J.ec(157),o=J.ec(209),b=J.ec(262);J.wb(40),J.yb("hide",n.isJsActive),J.wb(3),J.yb("hide",!n.isJsActive),J.wb(53),J.nc(" ",J.Wb(97,29,"events.gateway",s.isJsActive),"\n"),J.wb(4),J.yb("hide",s.isJsActive),J.wb(3),J.yb("hide",!s.isJsActive),J.wb(18),J.nc(" ",J.Wb(122,32,"events.gateway",a.isJsActive),"\n"),J.wb(4),J.yb("hide",a.isJsActive),J.wb(3),J.yb("hide",!a.isJsActive),J.wb(26),J.nc(" ",J.Wb(155,35,"events.gateway",c.isJsActive),"\n"),J.wb(4),J.yb("hide",c.isJsActive),J.wb(3),J.yb("hide",!c.isJsActive),J.wb(45),J.nc(" ",J.Wb(207,38,"events.gateway",o.isJsActive),"\n"),J.wb(4),J.yb("hide",o.isJsActive),J.wb(3),J.yb("hide",!o.isJsActive),J.wb(46),J.nc(" ",J.Wb(260,41,"events.gateway",b.isJsActive),"\n"),J.wb(4),J.yb("hide",b.isJsActive),J.wb(3),J.yb("hide",!b.isJsActive)}},directives:[u.f,m.a,g.a,x.a],pipes:[w.a],encapsulation:2,changeDetection:0}),i),W=J.Lb(S),T=((r=function(n){t(c,n);var a=s(c);function c(){return e(this,c),a.apply(this,arguments)}return c}(f.a)).\u0275fac=function(e){return E(e||r)},r.\u0275cmp=J.Ab({type:r,selectors:[["app-guards"]],features:[J.ub],decls:45,vars:4,consts:[[1,"content"],["contentReference",""],[1,"github-links"],["href","https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/guards.md","aria-label","Suggest Edits","title","Suggest Edits"],[1,"fas","fa-edit"],["id","guards"],["routerLink","/guards"],[1,"info"],["appAnchor","","id","binding-guards"],[1,"filename"],["app02350c7493c0f668721af88dc765e999b84f8005",""],[1,"language-typescript"]],template:function(e,t){if(1&e&&(J.Jb(0,"div",0,1),J.Jb(2,"div",2),J.Jb(3,"a",3),J.Hb(4,"i",4),J.Ib(),J.Ib(),J.Jb(5,"h3",5),J.lc(6,"Guards"),J.Ib(),J.Jb(7,"p"),J.lc(8,"There is no fundamental difference between web sockets guards and "),J.Jb(9,"a",6),J.lc(10,"regular HTTP application guards"),J.Ib(),J.lc(11,". The only difference is that instead of throwing "),J.Jb(12,"code"),J.lc(13,"HttpException"),J.Ib(),J.lc(14,", you should use "),J.Jb(15,"code"),J.lc(16,"WsException"),J.Ib(),J.lc(17,"."),J.Ib(),J.Jb(18,"blockquote",7),J.Jb(19,"strong"),J.lc(20,"Hint"),J.Ib(),J.lc(21," The "),J.Jb(22,"code"),J.lc(23,"WsException"),J.Ib(),J.lc(24," class is exposed from "),J.Jb(25,"code"),J.lc(26,"@nestjs/websockets"),J.Ib(),J.lc(27," package.\n"),J.Ib(),J.Jb(28,"h4",8),J.Jb(29,"span"),J.lc(30,"Binding guards"),J.Ib(),J.Ib(),J.Jb(31,"p"),J.lc(32,"The following example uses a method-scoped guard. Just as with HTTP based applications, you can also use gateway-scoped guards (i.e., prefix the gateway class with a "),J.Jb(33,"code"),J.lc(34,"@UseGuards()"),J.Ib(),J.lc(35," decorator)."),J.Ib(),J.Jb(36,"span",9),J.Hb(37,"app-tabs",null,10),J.Ib(),J.Jb(39,"pre"),J.Jb(40,"code",11),J.lc(41,"\n@UseGuards(AuthGuard)\n@SubscribeMessage('events')\nhandleEvent(client: Client, data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Jb(42,"pre"),J.Jb(43,"code",11),J.lc(44,"\n@UseGuards(AuthGuard)\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Ib()),2&e){var n=J.ec(38);J.wb(39),J.yb("hide",n.isJsActive),J.wb(3),J.yb("hide",!n.isJsActive)}},directives:[u.f,m.a,g.a],encapsulation:2,changeDetection:0}),r),E=J.Lb(T),H=((l=function(n){t(c,n);var a=s(c);function c(){return e(this,c),a.apply(this,arguments)}return c}(f.a)).\u0275fac=function(e){return j(e||l)},l.\u0275cmp=J.Ab({type:l,selectors:[["app-interceptors"]],features:[J.ub],decls:24,vars:4,consts:[[1,"content"],["contentReference",""],[1,"github-links"],["href","https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/interceptors.md","aria-label","Suggest Edits","title","Suggest Edits"],[1,"fas","fa-edit"],["id","interceptors"],["routerLink","/interceptors"],[1,"filename"],["app479160cbffe50cf759a85696b98c459467d4bf12",""],[1,"language-typescript"]],template:function(e,t){if(1&e&&(J.Jb(0,"div",0,1),J.Jb(2,"div",2),J.Jb(3,"a",3),J.Hb(4,"i",4),J.Ib(),J.Ib(),J.Jb(5,"h3",5),J.lc(6,"Interceptors"),J.Ib(),J.Jb(7,"p"),J.lc(8,"There is no difference between "),J.Jb(9,"a",6),J.lc(10,"regular interceptors"),J.Ib(),J.lc(11," and web sockets interceptors. The following example uses a manually instantiated method-scoped interceptor. Just as with HTTP based applications, you can also use gateway-scoped interceptors (i.e., prefix the gateway class with a "),J.Jb(12,"code"),J.lc(13,"@UseInterceptors()"),J.Ib(),J.lc(14," decorator)."),J.Ib(),J.Jb(15,"span",7),J.Hb(16,"app-tabs",null,8),J.Ib(),J.Jb(18,"pre"),J.Jb(19,"code",9),J.lc(20,"\n@UseInterceptors(new TransformInterceptor())\n@SubscribeMessage('events')\nhandleEvent(client: Client, data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Jb(21,"pre"),J.Jb(22,"code",9),J.lc(23,"\n@UseInterceptors(new TransformInterceptor())\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Ib()),2&e){var n=J.ec(17);J.wb(18),J.yb("hide",n.isJsActive),J.wb(3),J.yb("hide",!n.isJsActive)}},directives:[u.f,g.a],encapsulation:2,changeDetection:0}),l),j=J.Lb(H),M=((p=function(n){t(c,n);var a=s(c);function c(){return e(this,c),a.apply(this,arguments)}return c}(f.a)).\u0275fac=function(e){return O(e||p)},p.\u0275cmp=J.Ab({type:p,selectors:[["app-pipes"]],features:[J.ub],decls:51,vars:4,consts:[[1,"content"],["contentReference",""],[1,"github-links"],["href","https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/pipes.md","aria-label","Suggest Edits","title","Suggest Edits"],[1,"fas","fa-edit"],["id","pipes"],["routerLink","/pipes"],[1,"info"],["appAnchor","","id","binding-pipes"],[1,"filename"],["appb593114b91260af76896418bc47eddd6e3d218ab",""],[1,"language-typescript"]],template:function(e,t){if(1&e&&(J.Jb(0,"div",0,1),J.Jb(2,"div",2),J.Jb(3,"a",3),J.Hb(4,"i",4),J.Ib(),J.Ib(),J.Jb(5,"h3",5),J.lc(6,"Pipes"),J.Ib(),J.Jb(7,"p"),J.lc(8,"There is no fundamental difference between "),J.Jb(9,"a",6),J.lc(10,"regular pipes"),J.Ib(),J.lc(11," and web sockets pipes. The only difference is that instead of throwing "),J.Jb(12,"code"),J.lc(13,"HttpException"),J.Ib(),J.lc(14,", you should use "),J.Jb(15,"code"),J.lc(16,"WsException"),J.Ib(),J.lc(17,". In addition, all pipes will be only applied to the "),J.Jb(18,"code"),J.lc(19,"data"),J.Ib(),J.lc(20," parameter (because validating or transforming "),J.Jb(21,"code"),J.lc(22,"client"),J.Ib(),J.lc(23," instance is useless)."),J.Ib(),J.Jb(24,"blockquote",7),J.Jb(25,"strong"),J.lc(26,"Hint"),J.Ib(),J.lc(27," The "),J.Jb(28,"code"),J.lc(29,"WsException"),J.Ib(),J.lc(30," class is exposed from "),J.Jb(31,"code"),J.lc(32,"@nestjs/websockets"),J.Ib(),J.lc(33," package.\n"),J.Ib(),J.Jb(34,"h4",8),J.Jb(35,"span"),J.lc(36,"Binding pipes"),J.Ib(),J.Ib(),J.Jb(37,"p"),J.lc(38,"The following example uses a manually instantiated method-scoped pipe. Just as with HTTP based applications, you can also use gateway-scoped pipes (i.e., prefix the gateway class with a "),J.Jb(39,"code"),J.lc(40,"@UsePipes()"),J.Ib(),J.lc(41," decorator)."),J.Ib(),J.Jb(42,"span",9),J.Hb(43,"app-tabs",null,10),J.Ib(),J.Jb(45,"pre"),J.Jb(46,"code",11),J.lc(47,"\n@UsePipes(new ValidationPipe())\n@SubscribeMessage('events')\nhandleEvent(client: Client, data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Jb(48,"pre"),J.Jb(49,"code",11),J.lc(50,"\n@UsePipes(new ValidationPipe())\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  const event = 'events';\n  return { event, data };\n}\n"),J.Ib(),J.Ib(),J.Ib()),2&e){var n=J.ec(44);J.wb(45),J.yb("hide",n.isJsActive),J.wb(3),J.yb("hide",!n.isJsActive)}},directives:[u.f,m.a,g.a],encapsulation:2,changeDetection:0}),p),O=J.Lb(M),P=[{path:"gateways",component:S,data:{title:"Gateways"}},{path:"pipes",component:M,data:{title:"Pipes - Gateways"}},{path:"exception-filters",component:k,data:{title:"Exception Filters - Gateways"}},{path:"guards",component:T,data:{title:"Guards - Gateways"}},{path:"interceptors",component:H,data:{title:"Interceptors - Gateways"}},{path:"adapter",component:v,data:{title:"Adapter - Gateways"}}],q=((d=function t(){e(this,t)}).\u0275mod=J.Eb({type:d}),d.\u0275inj=J.Db({factory:function(e){return new(e||d)},imports:[[h.b,I.a,u.g.forChild(P)]]}),d)}}])}();