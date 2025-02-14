import React, { useState, useEffect } from 'react';
import update from 'react-addons-update';import data from './assets/json/data.js';

function App() {
    const [order, setOrder] = useState(data);
    const [payment, setPayment] = useState(order.payment);
    const [goods, setGoods] = useState(order.goods);

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
                    // violation: 동질성 비교는 고비용.?
                    // order.receive = '서울시 서초구 논현동....';
                    // setOrder(order);

                    // solution
                    // const orderUpdated = Object.assign({}, order, {receive: '서울시 서초구 논현동....'});
                    // setOrder(orderUpdated);

                    // solution recommended: property 변경
                    const orderUpdated = update(order, {
                        receive: {
                            $set: '서울시 서초구 논현동....'
                        }    
                    });
                    setOrder(orderUpdated);
                }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation: 얕은 복사를 이해하지 못한 경우
                // const orderUpdated = Object.assign({}, order);
                // orderUpdated.payment.method = 'Mobile';
                // setPayment(orderUpdated.payment);
                // setOrder(orderUpdated);
                // 여기서 setPayment위에 useState로 선언해놓고 setPayment 사용하면 안되는 이유 알아두기
            
                // solution
                // const orderUpdated = Object.assign({}, order);
                // orderUpdated.payment = Object.assign({}, order.payment, {method: 'Mobile'});
                // setPayment(orderUpdated.payment);

                const orderUpdated = update(order, {
                    payment: {
                        method: {
                            $set: 'Mobile'
                        }
                    }
                });
                setPayment(orderUpdated.payment);
            }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // goods.push({
                //     "no": "p002-001",
                //     "name": "팬츠스트라이프",
                //     "price": 2000,
                //     "amount": 1
                // });
                // setGoods(goods);

                // solution1
                // const goodsUpdated = goods.concat({"no": "c002-003", "name": "블루양말", "price": 2000, "amount": 4});
                // setGoods(goodsUpdated);

                // solution2
                // const goodsUpdated = [{"no": "c002-004", "name": "노란양말", "price": 2000, "amount": 4}, ...goods]
                // setGoods(goodsUpdated)

                // solution recommended: 배열 요소 추가
                const goodsUpdated = update(goods, {
                    $unshift: [{
                        "no": "c002-003",
                        "name": "블루양말말",
                        "price": 2000,
                        "amount": 1
                    }]
                })
                setGoods(goodsUpdated);

            }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // goods[2].name = '블루면티티';
                // setGoods(goods);

                // const goodsUpdate = [...goods.slice(0, 2), 
                //     Object.assign({}, goods[2], {name: '블루면티'}), 
                //     ...goods.slice(3)]
                // setGoods(goodsUpdate);

                // solution recommended
                const goodsUpdate = update(goods, {
                    2: {
                        name: {
                            $set: '블루면티'
                        }
                    }
                })
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