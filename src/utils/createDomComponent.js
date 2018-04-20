import ReactDOM from 'react-dom'

/**
 * 用来创建body节点下需要添加DOM容器的高阶组件
 */

export default function createDomComponent(DomComponent) {

    class CreateDomComponent extends DomComponent {

        constructor(props) {
            super(props)

            this.state = {
                isCreate: false // 是否已经创建
            }
        }

        componentWillMount() {
            if (!this.state.isCreate) {
                const ReactDom = this.createReactModal(this.props)
                this.createDom(ReactDom)
            }
        }

        render() {
            if (this.state.isCreate) {
                const ReactDom = this.createReactModal(this.props)
                ReactDOM.render(ReactDom, this.dom)
            }
            return null
        }

        // 创建虚拟dom
        createDom(ReactDom) {
            this.dom = document.createElement('div')
            ReactDOM.render(ReactDom, this.dom)
            document.body.appendChild(this.dom)
            this.setState({
                isCreate: true
            })
        }

        componentWillUnmount() {
            if (this.dom) {
                this.dom.parentNode.removeChild(this.dom)
            }
        }

    }

    return CreateDomComponent

}