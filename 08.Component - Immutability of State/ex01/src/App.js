import React, { useEffect, useState } from 'react';
import data from './assets/json/data.js';

function App() {
    // useState: 상태 저장 및 변경 감지를 통한 컴포넌트 재렌더링을 위함.
    const [order, setOrder] = useState(data);
    const [payment, setPayment] = useState(order.payment);
    const [goods, setGoods] = useState(order.goods);

    // useEffect: 두 번째 인자의 값이 바뀔때마다 특정 동작의 실행을 정의해놓을 수 있다.
    useEffect(() => {
        console.log('Order Updated');
    }, [order])

    useEffect(() => {
        console.log('Payment Updated');
    }, [payment])

    useEffect(() => {
        console.log('Goods Updated');
    }, [goods])

    return (
        <div id='App'>
            <button
                onClick={() => {
                    // violation: React의 useState는 상태의 변경 여부를 "동질성 비교"(참조 비교)로 판단한다.
                    // order.receive = '서울시 서초구 논현동....';
                    // setOrder(order); // setOrder를 호출해도 order의 메모리 주소는 변하지 않아, react가 변경 감지를 못한다. 

                    // solution: 따라서 기존 객체 수정이 아닌, 새로운 객체를 만들어야 한다.
                    // Object.assign(새로운 객체, 복사할 기존 객체, 추가하거나 덮어쓸 속성 정의의)
                    const orderUpdated = Object.assign({}, order, {receive: '서울시 서초구 논현동....'});
                    setOrder(orderUpdated);
                }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation: 얕은 복사(내부 속성은 원본을 그대로 참조하고 있는 경우우)
                // const orderUpdated = Object.assign({}, order);
                // orderUpdated.payment는 여전히 원본 객체를 참조하고 있다.
                // orderUpdated.payment.method = 'Mobile';
                // setPayment(orderUpdated.payment);
            
                // solution1: 따라서 order.payment도 새 객체로 만들어 완전한 새로운 참조를 갖도록 한다.
                // const orderUpdated = Object.assign({}, order);
                // orderUpdated.payment = Object.assign({}, order.payment, {method: 'Mobile'});
                // setPayment(orderUpdated.payment);

                // solution2: Spread 연산자 사용
                setPayment(prevPayment => ({...prevPayment, method: 'Mobile'}));
            }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation: 배열 참조는 변하지 않았기 때문에 React가 변경을 감지하고 못하고 리렌더링되지 않는다.
                // goods.push({
                //     "no": "p002-001",
                //     "name": "팬츠스트라이프",
                //     "price": 2000,
                //     "amount": 1
                // });
                // setGoods(goods);

                // solution1: concat은 원본을 변경하지 않고 새로운 배열을 생성하여 반환함함
                // const goodsUpdated = goods.concat({"no": "c002-003", "name": "블루양말", "price": 2000, "amount": 4});
                // setGoods(goodsUpdated);

                // solution2: Spread(...) 연산자를 사용한다. 이는 새로운 배열을 생성해준다.
                const goodsUpdated = [{"no": "c002-004", "name": "노란양말", "price": 2000, "amount": 4}, ...goods]
                setGoods(goodsUpdated)
            }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // goods[2].name = '블루면티티';
                // setGoods(goods);

                const goodsUpdate = [...goods.slice(0, 2), 
                    Object.assign({}, goods[2], {name: '블루면티'}), 
                    ...goods.slice(3)]
                setGoods(goodsUpdate);
            }}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${payment.method}`}</p>
            <p>{'상품'}</p>
            <ul>
                {goods.map((good, index) => 
                    <li key={index}>{`${good.name}: ${good.price} : ${good.amount}`}</li>
                )}
            </ul>
        </div>
    );
}

export {App};