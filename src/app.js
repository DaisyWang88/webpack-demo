import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import config from './config.json';
import { hot } from 'react-hot-loader';
import Divider from 'antd/lib/divider';
import './app.less';

class App extends Component{
  constructor(props) {
    super(props);
  }
  //es7新特性
  state = {
    visible: false,
  }
  openModal = () =>{
    this.setState({
      visible: true,
    });
  }
  close = () =>{
    this.setState({
      visible: false,
    })
  }
  render() {
    const {visible} = this.state;
    return (
      <div className="container">
        <div style={{marginBottom: '30px', color: '#e27386'}}>react 状态保存示例 </div>
        <div style={{marginBottom: '30px', color: '#e27386'}}>点开弹窗，修改内容，弹窗仍然显示，不会消失 </div>
        <div style={{marginBottom: '30px', color: '#e27386'}}>表示hot reload 时状态保存了 </div>
        <Button onClick={this.openModal}>打开弹框</Button>
        <Modal
          title="es7 新特性使用"
          visible={visible}
          onOK={this.close}
          onCancel={this.close}
          width='700px'
        >
          <div>
            <pre>
              <code>{`
                Inside CartItem class add this right above constructor:

                export default class CartItem extends React.Component{

                 static propTypes = {
                      title: React.PropTypes.string.isRequired,
                      price: React.PropTypes.number.isRequired,
                      initialQty: React.PropTypes.number
                  };
                  static defaultProps = {
                      title: 'Undefined Product',
                      price: 100,
                      initialQty: 0
                  };

                  constructor() {
                      ...
                  }

                  // .. all other code
              }

              ----------------------------------------------------------

              initial state of React component:


              export default class CartItem extends React.Component {
                // .. some code here
                state = {
                    qty: this.props.initialQty,
                    total: 0
                };
                // .. constructor starts here

              `}</code>
            </pre>
          </div>
        </Modal>
      </div>
    );
  }
}

export default hot(module)(App);

