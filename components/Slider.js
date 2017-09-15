import React from 'react'
import InputSlider from 'react-input-slider'

export default class Slider extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: props.value};
  }

  onChange = (value) => {
    this.setState({value: value.x})
  }

  render(){
    return(
      <div>
        <InputSlider
        className="slider-x"
        axis="x"
        x={this.state.value}
        xmax={100}
        onChange={this.onChange}
        onDragEnd={() => this.props.onClick(this.state.value)}
        />
        <style jsx global>{
          `.u-slider {
            position: relative;
            display: inline-block;
            background-color: #dddddd;
            border-radius: 3px;
          }
          .u-slider .value {
            position: absolute;
            background-color: #2e8ece;
            border-radius: 3px;
          }
          .u-slider .handle {
            position: absolute;
            width: 20px;
            height: 20px;
          }
          .u-slider .handle:after {
            position: relative;
            display: block;
            content: '';
          }
          .u-slider-x .handle:after,
          .u-slider-y .handle:after {
            width: 24px;
            height: 24px;
            background-color: #fff;
            border: 3px solid #2e8ece;
            border-radius: 50%;
          }
          .u-slider-x {
            height: 20px;
          }
          .u-slider-x .handle {
            height: 100%;
          }
          .u-slider-x .handle:after {
            top: -2px;
            left: -12px;
          }
          .u-slider-x .value {
            top: 0;
            height: 100%;
          }
          .u-slider-y {
            width: 20px;
          }
          .u-slider-y .handle {
            width: 100%;
          }
          .u-slider-y .handle:after {
            top: -12px;
            left: -2px;
          }
          .u-slider-y .value {
            left: 0;
            width: 100%;
          }
          .u-slider-xy {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #2e8ece;
            border-radius: 0;
          }
          .u-slider-xy .handle {
            position: absolute;
          }
          .u-slider-xy .handle:after {
            position: relative;
            display: block;
            top: -10px;
            left: -10px;
            width: 20px;
            height: 20px;
            background-color: rgba(0, 0, 0, 0);
            border: 2px solid #fff;
            border-radius: 50%;
            content: '';
          }
          .slider-x{
            width: 300px;
          }
          `
        }</style>
      </div>
    )
  }
}
