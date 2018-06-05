import {is} from 'immutable'

function shouldComponentUpdate(nextProps, nextState) {
  // this 当前组件
  const key = Object.keys(nextProps)
  if (!nextState && key.length === 0) return false

  return !is(nextProps, this.props) || !is(nextState, this.state)
}

function decorator(component) {
  !component.prototype.shouldComponentUpdate && (component.prototype.shouldComponentUpdate = shouldComponentUpdate)
}


export default decorator