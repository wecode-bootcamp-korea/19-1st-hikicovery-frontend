import { useEffect, useState } from 'react';
import AccountBanner from '../../components/AccountBanner/Index';
import { API_URL } from '../../config';
import styled from 'styled-components';
import OrderMenu from './OrderMenu';
import { flexCenter, flexJustifyCenter } from '../../styles/mixin';

const TITLE = '장바구니';

const Basket = () => {
  const [basketData, setBasketData] = useState([]);

  const changeQuantity = (num, targetId) => {
    const changeQuantity = basketData.map((product, index) => {
      return index === targetId
        ? { ...product, quantity: product.quantity + num }
        : product;
    });
    setBasketData(changeQuantity);
  };

  const handleQuantity = (e, targetId) => {
    const { value } = e.target;
    const handleQuantity = basketData.map((product, index) => {
      return index === targetId ? { ...product, quantity: value * 1 } : product;
    });
    setBasketData(handleQuantity);
  };

  const delProduct = id => {
    const filterData = basketData.filter(product => {
      return product.product_detail !== id;
    });
    setBasketData(filterData);
  };

  useEffect(() => {
    fetch(`${API_URL}/cart`)
      .then(res => res.json())
      .then(data => {
        setBasketData(data.MESSAGE);
      });
  }, []);

  return (
    <>
      <AccountBanner title={TITLE} />
      <BasketContainer>
        <BasketContents>
          <BuyStepBox>
            <BuyStep>장바구니</BuyStep>
            <BuyStep>주문/결제</BuyStep>
            <BuyStep>주문완료</BuyStep>
          </BuyStepBox>
          <OrderWayBox>
            <OrderWay>일반주문(1)</OrderWay>
            <OrderWay>예약주문(0)</OrderWay>
            <OrderWay>매장픽업(0)</OrderWay>
          </OrderWayBox>
          <OrderWrap>
            <OrderLeft>
              <div>
                <DltProductBtnBox>선택상품삭제</DltProductBtnBox>
              </div>
              <div>
                <OrderMenuTitle>
                  <ProductChkBtnBox>
                    <input type="checkbox" />
                  </ProductChkBtnBox>
                  <MenuProduct>상품</MenuProduct>
                  <MenuQuantity>수량</MenuQuantity>
                  <MenuWidth>할인/혜택</MenuWidth>
                  <MenuWidth>배송정보</MenuWidth>
                  <MenuWidth>주문금액</MenuWidth>
                  <MenuDelete>삭제</MenuDelete>
                </OrderMenuTitle>
                <div>
                  {basketData.map((product, index) => {
                    const {
                      image,
                      size,
                      price,
                      quantity,
                      product_detail,
                      name,
                    } = product;
                    return (
                      <OrderMenu
                        index={index}
                        image={image}
                        size={size}
                        name={name}
                        changeQuantity={changeQuantity}
                        quantity={quantity}
                        handleQuantity={handleQuantity}
                        product_detail={product_detail}
                        price={price}
                        delProduct={delProduct}
                      />
                    );
                  })}
                </div>
              </div>
            </OrderLeft>
          </OrderWrap>
        </BasketContents>
      </BasketContainer>
    </>
  );
};

const BasketContainer = styled.section`
  ${flexJustifyCenter};
  margin-bottom: 100px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BasketContents = styled.article`
  flex-direction: column;
  max-width: 1280px;
  min-width: 1100px;
  min-height: 1000px;
`;

const BuyStepBox = styled.ul`
  ${flexJustifyCenter};
  margin-top: 30px;
  width: 100%;
  height: 80px;
  background-color: black;
`;

const BuyStep = styled.li`
  ${flexCenter};
  height: 100%;
  font-size: 24px;
  color: white;

  & + &::before {
    margin: 0 35px;
    content: '>';
  }
`;

const OrderWayBox = styled(BuyStepBox)`
  height: 55px;
  background-color: white;
`;

const OrderWay = styled.li`
  ${flexCenter}
  margin: 0 5px;
  width: 33.3%;
  border-bottom: 2px solid black;
  font-weight: 400;
  font-size: 14px;
`;

const OrderWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px;
`;

const OrderLeft = styled.div`
  float: left;
`;

const DltProductBtnBox = styled.button`
  padding: 5px 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 12px;
  cursor: pointer;
`;

const OrderMenuTitle = styled.div`
  display: flex;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  height: 50px;
`;

const ProductChkBtnBox = styled.div`
  ${flexCenter};
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

export default Basket;
