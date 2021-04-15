import React, { Component } from 'react';
import Input from './Input/Input';
import './InputItem.scss';

class InputItem extends Component {
  render() {
    const { inputInfo } = this.props;

    return inputInfo.map(input => {
      const { name, id, idIsValued, pwIsValued, sex, region } = input;
      return (
        <tr className="normalInputBox idPwIputBox" key={id}>
          <th className="input" scope="row">
            <label>{name}</label>
            <span className="necessary">*</span>
          </th>
          <td
            className={
              (name === '아이디' && 'idPwTd') ||
              (name === '비밀번호' && 'idPwTd')
            }
          >
            <Input
              idIsValued={idIsValued}
              pwIsValued={pwIsValued}
              region={region}
              sex={sex}
              name={name}
            />
          </td>
        </tr>
      );
    });
  }
}

export default InputItem;
