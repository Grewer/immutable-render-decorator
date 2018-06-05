import React,{Component} from 'react'


import pureRender from './decorator'

@pureRender
export default class Child extends Component{
  render(){
    console.log('render')
    return (
      <div>child</div>
    )
  }
}