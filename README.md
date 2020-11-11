# design-pattern-test

# 视频教程地址 : https://www.bilibili.com/video/BV1st4y127Uz?p=30

# 环境：使用 webpack+babel 搭建 es6,（typescript）环境

# 前提：

## 面向对象三要素

### 继承，子类继承父类（extends) ：

- 父类服务于所有子类
- 继承可以将公共方法抽离，提高复用，减少冗余

### 封装，数据的权限和保密：

- public 完全开放
- protected 对子类开放
- private 对自己开放

作用：

- 减少耦合，不该外露的不外露
- 利于数据、接口的权限管理
- ES6 目前不支持，一般认为\_开头的属性的 private

### 多态，同一接口不同实现：

作用：

- 同一接口，不同表现
- JS 应用极少
- 需要结合 java 等语言的接口、重写、重载等功能

## 画类图

### 工具：

- MS Office visio
- https://www.processon.com/

#### UML 类图

例如：  
——————————————————  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  
——————————————————  
| +public 属性名：类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  
| #protected 属性名：类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  
| -private 属性名：类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  
——————————————————  
| +public 方法名(形参们)：返回值类型&nbsp;&nbsp;&nbsp;&nbsp; |  
| #protected 方法名(形参们)：返回值类型|  
| -private 方法名(形参们)：返回值类型&nbsp;&nbsp;&nbsp;&nbsp; |  
——————————————————

- 类图：属性和方法
- 关系：泛化和关联

# 设计模式

## 设计原则

### 1. 何为设计？

#### 描述：

a. 即按照哪一种思路或者标准来实现功能  
b. 功能相同，可以有不同设计方案来实现  
c. 伴随着需求增加，设计的作用才能体现出来

#### 结合《UNIX/LINUX 设计哲学》：

准则 1：小即是美  
准则 2: 让每个程序只做好一件事  
准则 3：快速建立原型  
准则 4：舍弃高效率而取可移植性【复用性>效率】  
准则 5：采用纯文本来存储数据【可读性】  
准则 6：充分利用软件的杠杆效应（软件复用）  
准则 7：使用 shell 脚本来提高杠杆效应和可移植性  
准则 8：避免强制性的用户界面【设计不要拘泥在显示上，更多在逻辑和使用全面上考虑】  
准则 9：让每个程序都称为过滤器

小准则：允许用户定制环境【允许用户配置不同的使用环境】  
小准则：尽量使操作系统内核小而轻量化【中心内容集中】  
小准则：使用小写字母并尽量简写【命名规范】  
小准则：沉默是金【不是正确的输入、或者输出不要返回 《==== 每个都是过滤器，如果有输出会影响之后的结果】  
小准则：各部分之和大于整体【组合利益更重要】  
小准则：寻求 90%的解决方案【二八定律，20%的成本解决 80%的需求，接下来 20%需要更多成本】

### 2. 设计原则

SOLID 五大设计原则：

- Single:单一职责原则  
  描述：  
  一个程序只做好一件事  
  如果功能过于复杂就拆分开，每个部分保持独立

- Open:开放封闭原则  
  描述：  
  对扩展开放，对修改封闭  
  增加需求时，扩展新代码，而非修改已有代码  
  重要性：是软件设计的终极目标

- Lee:李氏置换原则  
  描述：  
  子类能覆盖父类  
  父类能出现的地方子类就能出现  
  JS 中使用较少（弱类型&继承使用较少）

- Interface:接口独立原则  
  描述：  
  保持接口的单一独立，避免出现“胖接口”  
  JS 中没有接口（ts 例外），使用较少  
  类似于单一职责原则，更关注接口

- Dependence:依赖倒置原则  
  描述：  
  面向接口编程，依赖于抽象而不依赖于具体  
  使用方只关注接口而不关注具体类的实现  
  JS 中使用较少（没有接口&弱类型）

- 总结：  
  SO 体现较多，详细介绍  
  LID 体现较少，只要了解其用意

### 3. 从设计到模式

设计：设计原则，思想  
模式：固定的特有形成的模式  
从设计到模式：过程

_学习基本需要知道:  
该模式的介绍和示例  
UML 类图和演示  
经典使用场景  
设计原则验证_

### 4. 23 种设计模式

a. 创建型：  
1）工厂模式（工厂方法模式，抽象工厂模式，建造者模式）  
工厂模式介绍：

- 将 New 操作 **单独封装**
- 遇到 new 时, 就要考虑是否该使用工厂模式

场景例如：

- jquery $('div') 函数$ 封装了 new selector  
  _tip:  
  阅读经典 lib 源码的意义：  
  学习如何实现  
  学习设计实现  
  学习刻意训练  
  创新和拿来主义：  
  模仿，理解_

- React.createElement
  createElement 封装了 new Vnode 节点的操作

- Vue: Vue component

设计原则验证：

- 构造函数和创建者分离
- 符合开放封闭原则

2）单例模式
介绍：

- 系统中被**唯一**使用
- 一个类只有**一个**实例

说明：

- java 中强烈依赖 private 特性
- javascript 中利用闭包，来保证只创建一个实例

场景：

- jquery 只有一个 \$
- 模拟登录框
- 其他： 购物车，vuex 和 redux 中的 store

设计原则验证：

- 符合单一职责原则，只实例化唯一的对象
- 没法具体开放封闭原则，但是绝对不违反开放封闭原则

3）原型模式

b. 组合型（结构型）：  
1）适配器模式  
介绍：

- 旧接口格式和使用者不兼容
- 中间加一个适配转换接口  
  _类似中国电器拿到了日本，需要一个电源转换器（适配器）_

场景：

- 封装旧接口
- vue computed

设计原则验证：

- 将旧接口和使用者进行分离
- 符合开放封闭原则

2）装饰器模式  
介绍：

- 为对象添加新功能
- 不改变其原有的结构和功能  
  _手机的手机壳_

场景：

- ES7 装饰器
  配置环境：
  npm install --save-dev babel-plugin-transform-decorators-legacy
  在配置文件.babelrc 上配置：
  "plugins": ["transform-decorators-legacy"]

装饰类：

```js
@testDec
class Demo {}

function testDec(target) {
  target.isDec = true;
}
alert(Demo.isDec);
```

装饰方法：

- core-decorators 库

总结：

3）代理模式  
4）外观模式  
5）桥接模式  
6）组合模式  
7）享元模式

c.行为型：

行为型-1  
 1）策略模式  
 2）模板方法模式  
 3）观察者模式  
 4）迭代器模式  
 5）职责连模式  
 6）命令模式

行为型-2  
 1）备忘录模式  
 2）状态模式  
 3）访问者模式  
 4）中介者模式  
 5）解释器模式
