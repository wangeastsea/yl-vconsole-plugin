## 一个vconsole插件

如下图所示
![image.png](https://upload-images.jianshu.io/upload_images/5016475-5a4266ca6a8e6273.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

## 可以使用的功能
- 可以显示当前url
- 可以进行环境的切换
- 可以Reload当前页面

## 使用方法
```shell
npm install yl-vconsole-plugin -S

yarn add yl-vconsole-plugin
```

```js
import VConsole from 'vconsole';
import VConsoleStatsPlugin from 'vconsole-stats-plugin';
const vConsole = new VConsole();
const plugin = new VConsoleStatsPlugin(vConsole);
```