import React, { Component } from 'react';
import OptionColor from '../OptionList/OptionColor';
import OptionSize from '../OptionList/OptionSize';
import OptionCount from '../OptionList/OptionCount';
import OptionDelivery from '../OptionList/OptionDelivery';
import './PaymentOption.scss';

class PaymentOption extends Component {
  constructor() {
    super();
    this.state = {
      colorList: [],
      sizeList: [],
    };
  }

  componentDidMount() {
    //   fetch('/data/DetailColordata.json')
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //         colorList: data,
    //       });
    //       console.log(data);
    //     });

    fetch('/data/DetailSizedata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          sizeList: data,
        });
      });
  }

  render() {
    const { colorList, sizeList } = this.state;
    return (
      <ul className="paymentOption">
        <OptionColor colorList={colorList} />
        <OptionSize sizeList={sizeList} />
        <OptionCount />
        <OptionDelivery />
      </ul>
    );
  }
}

export default PaymentOption;
