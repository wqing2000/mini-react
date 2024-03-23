# mini-react

## v1

目标：通过 mini-react API 实现在页面上显示 “app” 文字

1. 从直接操作dom -> 抽象vdom -> 根据虚拟dom创建真实dom


### 创建vscode调试配置

```json
// .vscode/launch.json
{
	// Use IntelliSense to learn about possible attributes.
	// Hover to view descriptions of existing attributes.
	// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "launch",
			"name": "Launch Chrome against localhost",
			"url": "file:///Users/wqing2000/WWW/1.Projects/mini-react/index.html", // 改为自己项目文件的绝对路径
			"webRoot": "${workspaceFolder}",
			"userDataDir": true,
			"runtimeArgs": [
				"--auto-open-devtools-for-tabs",
				"--disable-web-security" // 允许跨域
			],
		}
	]
}
```