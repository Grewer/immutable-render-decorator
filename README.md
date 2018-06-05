## react-immutable-class-render-decorator

> 判断react是否渲染,使用immutable比较,更加准确;


**此项目自用**

### Usage:
```js
import pureRender from 'grewer-pure-render'

@pureRender
export default class Child extends Component{
  render(){
    return (
      <div>template</div>
    )
  }
}

```
