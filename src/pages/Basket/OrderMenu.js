import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import { flexCenter } from '../../styles/mixin';

const OrderMenu = ({
  index,
  image,
  size,
  name,
  changeQuantity,
  quantity,
  handleQuantity,
  product_detail,
  price,
  delProduct,
}) => {
  return (
    <Contatiner key={index}>
      <ProductChkBtnBox>
        <input type="checkbox" />
      </ProductChkBtnBox>
      <MenuProduct>
        <div>
          <img src={image} alt="상품 장바구니 이미지" />
        </div>
        <div>
          <div className="productName">
            <p>{name}</p>
            <p>{`${price.toLocaleString()}원`}</p>
          </div>
          <p>
            OW / {size}
            <Link to="/basket">변경</Link>
          </p>
        </div>
      </MenuProduct>
      <MenuQuantity>
        <div className="quntityBtnBox">
          <button onClick={() => changeQuantity(-1, index)}>
            <FaMinus />
          </button>
          <input
            className="quantityCnt"
            maxLength="2"
            type="number"
            value={quantity}
            onChange={e => handleQuantity(e, index)}
          />
          <button onClick={() => changeQuantity(1, index)}>
            <FaPlus />
          </button>
        </div>
        <span>적용</span>
      </MenuQuantity>
      <MenuWidth>
        <div>
          <span>사은품제공</span>
        </div>
      </MenuWidth>
      <MenuDelivery>
        <p>무료</p>
      </MenuDelivery>
      <MenuPrice>
        <p>{`${(price * quantity).toLocaleString()}원`}</p>
      </MenuPrice>
      <MenuDelete>
        <button
          className="delProductBtn"
          onClick={() => delProduct(product_detail)}
        >
          <FaTimes />
        </button>
      </MenuDelete>
    </Contatiner>
  );
};

const Contatiner = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
`;

const MenuSort = styled.div`
  ${flexCenter};
  font-size: 14px;
`;

const MenuWidth = styled(MenuSort)`
  width: 120px;
`;

const MenuProduct = styled(MenuSort)`
  width: 305px;
  padding: 15px 0;
  font-size: 14px;

  .productName {
    width: 100px;
    font-size: 14px;
  }
  img {
    width: 75px;
    height: 100px;
    margin-right: 10px;
  }
`;

const MenuDelete = styled(MenuSort)`
  width: 60px;
  .delProductBtn {
    background-color: white;
    width: 15px;
    cursor: pointer;
  }
`;

const MenuQuantity = styled(MenuWidth)`
  flex-direction: column;
  .quntityBtnBox {
    display: flex;

    .quantityCnt {
      margin: 0 10px;
      width: 40px;
      height: 30px;
      text-align: center;
      text-indent: 0px;
    }
    button {
      background-color: white;
      cursor: pointer;
    }
  }
`;

const MenuDelivery = styled(MenuWidth)`
  background-color: #f8f8f8;
`;

const MenuPrice = styled(MenuWidth)`
  font-weight: 900;
`;

const ProductChkBtnBox = styled.div`
  ${flexCenter};
`;

export default OrderMenu;
