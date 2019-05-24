# jquery.onoff
## jQuery on,off 方法扩展，增加一个参数，实现绑定事件时可以按分组命名，移除事件时可以按分组名批量删除事件

 - [GitHub: https://github.com/aiv367/jquery.onoff](https://github.com/aiv367/jquery.onoff)
 - [Author：aiv367 (大花猫花大)](mailto:aiv367@qq.com)

## 说明
 - on,off 方法在原有方法基础上，最后增加了一个参数，实现分组命名
 

 ## 更新
 - V1.0.0 [2019/05/24]

 ## 依赖
 - [jQuery2.0+](http://jquery.com)

 ## 使用

```html
<script src="jquery.js"></script>
<script src="jquery.onoff.js"></script>
```
 
 ```html
<script>
$('#demo')
	.on('click', (evt, data)=>{
		console.log(evt.type, data);
	}, 'mygroup')
	.on('click', (evt, data)=>{
		console.log(evt.type, data);
	}, 'mygroup')
	.on('click', (evt, data)=>{
		console.log(evt.type, data);
	});

$('#demo').off('click', 'mygroup');
</script>
```