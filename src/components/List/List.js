import React, { Component } from 'react'

export class Item extends Component {

    static defaultProps = {
        onClick: () => {}
    }

    constructor(props) {
        super(props)
    }

    render() {
        const textDirection = this.props.textDirection || ''

        return(
            <div className='cy-item' onClick={this.props.onClick}>
                {this.props.fonticon && <i className={this.props.iconName} style={{ color: this.props.color }}>{this.props.fonticon}</i>}
                {this.props.icon && (<div className='cy-item-icon'><i className={this.props.icon}></i></div>)}
                {this.props.name && <div className='cy-item-name'><span>{this.props.seq && <em>{this.props.seq}</em>}{this.props.name}</span></div>}
                <div className={`cy-item-value ${textDirection}`}>{this.props.children}</div>
                {this.props.unit && <div className='cy-item-unit'>{this.props.unit}</div>}
                {this.props.tips && <div className='cy-item-tips'>{this.props.tips}</div>}
                {this.props.arrow && <span className='cy-item-arrow'></span>}
            </div>
        )
    }

}

export default class List extends Component {
    constructor() {
        super()
    }

    render() {
        let listClass = 'cy-list'
        if(this.props.type) listClass += ` ${this.props.type}`
        return (
            <div className={listClass}>
                {this.props.children}
            </div>
        )
    }
}

/*
 * 示例

 <List>
     <Item name='名称' seq='(1)' arrow={true}>
         <Select value='0'>
             <option value='0'>落雪</option>
         </Select>
     </Item>
     <Item name='年龄'>
         <Input name='age' value='25' />
     </Item>
     <Item name='财富' unit='元'>
         <Input name='money' value='25000'/>
     </Item>
     <Item name='签名' tips='生活要珍惜'>
         <Input name='money' value='' />
     </Item>
 </List>

 */
