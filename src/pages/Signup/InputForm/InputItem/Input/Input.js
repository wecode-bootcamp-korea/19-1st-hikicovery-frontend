import React, { Component } from 'react';
import './Input.scss';
class Input extends Component {
  render() {
    const { sex, region, idIsValued, pwIsValued, name } = this.props;
    return (
      <>
        <input type="text" className="idPwFormat" />

        {(idIsValued && <span>{idIsValued}</span>) ||
          (pwIsValued && <span>{pwIsValued}</span>)}

        {region &&
          region.map((region, index) => {
            return (
              <>
                <input type="radio" />
                <label>{region}</label>
              </>
            );
          })}

        {sex && (
          <>
            <button>월</button>
            <input type="text" placeholder="일" />
            {sex.map((sex, index) => {
              return (
                <>
                  <input type="radio" />
                  <label>{sex}</label>
                </>
              );
            })}
          </>
        )}

        {name === '이메일' && (
          <>
            <span>@</span>
            <input type="text" />
            <button>직접입력</button>
          </>
        )}

        {name === '휴대전화' && (
          <>
            <button>통신사 선택</button>
            <input type="text" />
            <span>-</span>
            <input type="text" />
            <span>-</span>
            <input type="text" />
          </>
        )}
      </>
    );
  }
}

export default Input;
