# hustonline

> use vue to rebuild hustonline

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Docker的应用

  Docker是一种容器式服务器部署框架，将项目的运行环境和项目代码分别包装起来，让应用的运行环境隔离。
	架构可以是，同一个代理，不同port，利用一致性hash，调用不同容器中的功能。比如数据库，应用容器等。更可以方便的进行分布式布局。

	DNS服务器有负载平衡算法，也可以同一个域名，跳转到不同的ip上进行服务。

	当前端请求api时，基于docker的应用架构，就可以再将请求分发到不同的服务器，组合返回到前端。

	正向代理：是基于用户的，公司可以为安全考虑，让局域网统一通过一个网关，建立防火墙。
	反向代理：是基于服务的，公司可以服务器群集就可以不用暴露自己的ip，所有的请求通过网关来访问，反响代理（即应用级网关）又可以采用负载均衡算法，分配需求到不同的服务器上。

	利用来进行缓存memcache，利用mosql进行数据库映射。

	设计模式：
	单利模式：主要用于储存数据，减少内存消耗，保持数据一致性。
	利用python的元编程， __metaclass__ = Singleon

	工厂模式：
	具有相似功能，需要单独存在，且数量众多的话，就可以使用工厂模式，传入配置信息，返回一个符合需求的对象。
	比如python的log对象，具有error,info,debug等层级，所以使用工厂模式，输入层级，返回合适

	修饰器：
	python可以用修饰器，给方法添加额外的功能，是一种组合方式，低耦合。

	后台瓶颈：
	利用耗时统计，分析函数的一些算法的性能瓶颈。

	配置信息统一管理：
	利用静态类，保存到文件，保存到数据库。

	RPC:
	远程控制：利用socket长链接，软件监听该链接，再来执行相关方法。

	Proto Buffer
	利用流式序列化，这个可以一边序列化，一边传。对及时性的延迟更少。适用于王者荣耀这种游戏

	微服务架构
	每台服务器只服务一种微小的接口，利用docker可以方便的部署这种微应用。一般通过网关，反向代理，再来分发

	leetcode

	/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var candylist = [];
    var length = 0;
    for(var i in ratings){
        candylist.push(1);
        length++;
    }
    var updateFont = function(index){
        var index3 = parseInt(index)-1
        if(index < 1){
            return false;   
        }
        if(ratings[index3]>ratings[index]){
            candylist[index3]++;
        }
        updateFont(--index);
    };
    for(var j in ratings){
        var index2 = parseInt(j)+1
        if(ratings[j] > ratings[index2]){
            candylist[j]++
            (function(j){updateFont(j)})(j)
        }else if(ratings[j] < ratings[index2]){
					   candylist[index2] = candylist[j]+1
				}
    }
    var num = candylist.reduce(function(sum,item){
        return sum+item;
    },0);
    return num;
};
candy([1,2,3,4])

//自己想到的一个解法：一次循环过程中，从两个方向扫描，得到两边的最小特征数组，再将两个特征数组合并,既得数组
var candy = function(ratings) {
    var candylist = [];
    var tail = 0;
		var top = 0;
		for(var i in ratings){
			tail++
			candylist.push(1)
		}
  	for(var i in ratings){
			if( ratings[ top ] < ratings[ top+1 ] ){
				if( candylist[top + 1] < candylist[ top ] + 1 ){
						candylist[ top+1 ] = candylist[ top ] + 1
				}
			}
			if( ratings[ tail ] < ratings[ tail-1 ] ){
				if( candylist[ tail-1 ] < (candylist[ tail ] + 1) ){
					candylist[ tail-1 ] = candylist[ tail ] + 1
				}
			}
			top++
			tail--
		}
    var num = candylist.reduce(function(sum,item){
        return sum+item;
    },0);
    return num;
};
