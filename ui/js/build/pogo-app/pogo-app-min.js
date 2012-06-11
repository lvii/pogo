YUI.add("pogo-app",function(a){a.namespace("Pogo").App=new a.Base.create("pogo-app",a.App,[],{views:{home:{type:"Pogo.View.Dashboard"},user:{type:"Pogo.View.User"},job:{type:"Pogo.View.Job"},host:{type:"Pogo.View.Host"}},handleHome:function(b){a.one("title").set("text","Pogo - Home");this.showView("home");},handleUser:function(c){var b=c.params.name;a.one("title").set("text","Pogo - "+b+"'s Jobs");this.showView("user",{user:b});},handleJob:function(c){var d=c.params.jobid,b=new a.Pogo.Model.Job({jobid:d});b.after("load",function(){a.one("title").set("text","Pogo - Job "+d);this.showView("job",{model:b});},this);b.load();},handleHost:function(d){var e=d.params.jobid,b=d.params.hostname,c=new a.Pogo.Model.Job({jobid:e});c.after("load",function(){a.one("title").set("text","Pogo - Job "+e+" Host: "+b);this.showView("host",{model:c,host:b});},this);c.load();},handleInvalidPage:function(b){a.one("title").set("text","Pogo - Unknown request: "+b.path);this.showView("home");},render:function(){a.one(".oss-tools-content a").set("href",a.Pogo.Env.root);return this;}},{ATTRS:{serverRouting:{value:true},viewContainer:{value:"#application-content"},routes:{value:[{path:a.Pogo.Env.root,callback:"handleHome"},{path:a.Pogo.Env.root+"user/:name",callback:"handleUser"},{path:a.Pogo.Env.root+"job/:jobid",callback:"handleJob"},{path:a.Pogo.Env.root+"job/:jobid/:hostname",callback:"handleHost"},{path:"*",callback:"handleInvalidPage"}]}}});},"@VERSION@",{requires:["base","app","pogo-view-dashboard","pogo-view-user","pogo-view-job","pogo-view-host","pogo-model-job"]});