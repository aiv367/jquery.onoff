# jquery.onoff
## jQuery on,off 方法扩展，增加一个参数，实现绑定事件时可以按分组命名，移除事件时可以按分组名批量删除事件

 - [GitHub: https://github.com/aiv367/jquery.onoff](https://github.com/aiv367/jquery.onoff)
 - [Demo: https://aiv367.github.io/jquery.onoff/demo/](https://aiv367.github.io/jquery.onoff/demo/)
 - [Author：aiv367 (大花猫花大)](mailto:aiv367@qq.com)

## 说明
 - on,off 方法在原有方法基础上，增加了一个参数，实现以分组命名方式，绑定、移除事件
 - 分组命名只能是数字字母下划线
 
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
	.on('input', (evt)=>{
		console.log('oninput1');
	}, 'myevent')
	.on('input', (evt)=>{
		console.log('oninput2');
	}, 'myevent')
	.on('input', (evt)=>{
		console.log('oninput3');
	})
	.on('change', (evt)=>{
		console.log('onchange1');
	});

//移除 myevent 分组的事件
$('#demo').off('input', 'myevent');
</script>
```