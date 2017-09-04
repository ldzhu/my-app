- 怎么使用webpack.config.js自定义配置？
  使用`ng eject`[命令](https://github.com/angular/angular-cli/wiki)导出webpack.config.js配置到项目根目录，然后就可以自定义webpack配置了。
  但是使用`ng eject`后，项目就不能再用默认的`ng build`命令了，如果要恢复，将.angular.cli.json的project.ejected配置改为false。
  如果使用`ng eject`导出webpack.config.js，需要使用`npm run build`命令。

- .angular-cli.json [配置](https://github.com/angular/angular-cli/wiki/angular-cli)

- UrlService的head在 environment(环境变量)中配置

- 调试源码在chrome-dev-tool的`webpack://xxx/src`下面，其中xxx是代码在硬盘上的绝对路径

- .angular-cli.json 在scripts或styles添加文件之后需要重启`ng serve`

- 使用第三方库的方法：

    1. 在.angular.cli.json配置文件的scripts加入第三方js
    2. 在引用的地方声明 `declare const jQuery: any;`， 就可以使用了
    
- 兼容kendo-ui jQuery版本的做法： `kendo-fiberhome-chart.component`，其他第三方js库的用法也可参考此做法。

- webstorm 升级到2017.2.2后，可以直接集成angular-cli，使用ng来创建组件、服务等，会自动添加注解、自动在module中声明declarations。

- .editorconfig默认indent_size=2，修改为4有什么意见？

- MockData如何集成？
    根据AngularJS中[mock-angular](https://github.com/think2011/mock-angular/blob/gh-pages/src/mock.angular.js)插件的经验，需要写一个interceptor来拦截ajax请求，但目前没有发现Angular的版本？自己可以写一个插件，但未实现。
    
- 路由

- 需要全局安装
    nvm, yarn, python2, @angular/cli
    
- Angular自带单元测试和e2e测试
    单元测试： `karma, jasmine, @angular/core/testing`;
    e2e测试：[angular/protractor](https://github.com/angular/protractor)？暂未研究
    
- 国际化


```
ng xi18n <options...>
  Extracts i18n messages from source code.
  --i18n-format (String) (Default: xlf) Output format for the generated file.
    aliases: -f <value>, -xmb (--i18n-format=xmb), -xlf (--i18n-format=xlf), --xliff (--i18n-format=xlf), --i18nFormat <value>
  --output-path (Path) (Default: null) Path where output will be placed.
    aliases: -op <value>, --outputPath <value>
  --verbose (Boolean) (Default: false) Adds more details to output logging.
    aliases: --verbose
  --progress (Boolean) (Default: true) Log progress to the console while running.
    aliases: --progress
  --app (String) Specifies app name to use.
    aliases: -a <value>, -app <value>
  --locale (String) Specifies the source language of the application.
    aliases: -l <value>, --locale <value>
  --out-file (String) Name of the file to output.
    aliases: -of <value>, --outFile <value>
```

- CSS模块化
    

