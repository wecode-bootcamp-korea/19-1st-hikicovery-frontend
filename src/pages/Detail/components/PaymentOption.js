import React, { Component } from 'react';
import OptionColor from './OptionColor';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

class PaymentOption extends Component {
  render() {
    return (
      <ul className="payment_option_wrap">
        <OptionColor></OptionColor>
        <li className="payment_option_size">
          <p className="payment_option_title">사이즈</p>
          <ul className="payment_size_listbox">
            <li className="payment_size_list">
              <button>225</button>
            </li>
            <li className="payment_size_list">
              <button>230</button>
            </li>
            <li className="payment_size_list">
              <button>235</button>
            </li>
            <li className="payment_size_list">
              <button>240</button>
            </li>
            <li className="payment_size_list">
              <button>245</button>
            </li>
            <li className="payment_size_list">
              <button>250</button>
            </li>
            <li className="payment_size_list">
              <button>255</button>
            </li>
            <li className="payment_size_list">
              <button>260</button>
            </li>
            <li className="payment_size_list">
              <button>265</button>
            </li>
            <li className="payment_size_list">
              <button>270</button>
            </li>
            <li className="payment_size_list">
              <button>275</button>
            </li>
            <li className="payment_size_list">
              <button>280</button>
            </li>
          </ul>
          <p>
            <a href="/">Size Guide</a>
          </p>
        </li>
        <li className="payment_option_count">
          <p className="payment_option_title">수량</p>
          <div className="count_wrap">
            <button className="down">
              <AiOutlineMinus />
            </button>
            <input type="button" />
            <button className="up">
              <AiOutlinePlus />
            </button>
          </div>
        </li>
        <li className="payment_option_delivery">
          <p className="payment_option_title">배송</p>
          <div className="delivery_inner">
            <input type="radio" name="tabmenu" id="tab01" checked="checked" />
            <label for="tab01">택배(무료배송)</label>
            <input type="radio" name="tabmenu" id="tab02" />
            <label for="tab02">매장픽업</label>
          </div>
        </li>
      </ul>
    );
  }
}

export default PaymentOption;
