import React, {useEffect, useState, useRef} from 'react';

import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from 'styled-components';
import serialize from 'form-serialize';
import './assets/scss/App.scss';
import * as stylesModal from './assets/scss/Modal.scss';
import data from './assets/json/data.js';

const CreateForm = styled.form``;
const UpdateForm = styled.form``;
const ItemList = styled.ul``;
const Item = styled.li``;


ReactModal.setAppElement("body");

function App() {
    const fetchItems = async () => {
        try {
            const response = await fetch('/item', {
                method: "get",
                headers: {
                    'Accept': 'application/json'
                },
                body: null
            });

            const jsonResult = await response.json();
    
            if(!response.ok || jsonResult.result === 'fail') {
                throw new Error(`${response.status} ${response.message}`);
            }

            setItems(jsonResult.data);
            console.log('데이터 로딩 완료')
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchItems();
        console.log('fetchItems 종료 X. Call Stack에 있는 코드는 콘솔 출력');
    }, []); // 두번째 인자에 빈 배열을 두어, 컴포넌트가 처음 mount 됐을때만 동작하게 설정

    return (
        <div id='App'>

            <h1>AJAX: Restful API</h1>

            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        try {
                            /*
                            const item = Array.from(e.target, (el) => {
                                if(el.name !== '' && el.value === '') {
                                    throw new Error(`validation ${el.name} is empty`);
                                }
                                return {name: el.name, value: el.value};
                            })
                            .filter(({name}) => name !== '')
                            .reduce((res, {name, value}) => {
                                res[name] = value; // {} 빈 배열로 시작. key: value 형태로 재정리리
                                return res;
                            }, {})
                            */

                            // serialize() : HTML 폼 데이터를 JSON 형식의 객체로 변환하는 라이브러리 함수
                            // hash: true 옵션을 통해 name: value 형태의 객체로 변환된다. 
                            const item = serialize(e.target, {hash: true});

                            addItem(item);

                        } catch(err) {
                            console.error(err);
                        }

                    }}>
                    <select name={'type'}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>
                    {' '}
                    <input type={'text'} name={'name'} placeholder={'name'}/>
                    <input type={'submit'} value={'[C]reate (post)'}/>
                </form>
                <CreateForm>
                    <select name={'type'}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>
                    {' '}
                    <input type={'text'} name={'name'} placeholder={'name'}/>
                    <input type={'file'} name={'file'} />
                    <input type={'submit'} value={'[C]reate (post)'}/>
                </CreateForm>
            </div>


            <h2 
                title={'[R]ead (get)'}
                onClick={() => fetchItems()}>Items</h2>

            <ItemList>
                {
                    items?.map((item, index) => <Item key={item.id}>
                        <h4>
                            <b title={'[R]ead (get)'} onClick={() => {setModalOpen()}}>{item.name}</b>
                            <button>{'[D]elete (delete)'}</button>
                        </h4>
                        <div>
                            <span>
                                <b>{index+1}</b>
                                <i>{item.type}</i>
                            </span>
                            <img src={item.image || '/assets/images/no-image.png'} />
                        </div>
                    </Item>)
                }
            </ItemList>



            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(!modalOpen)}
                className={stylesModal.Modal}
                overlayClassName={stylesModal.Overlay}
                style={{content: {width: 280}}}>
                <h3>Update Item</h3>
                <UpdateForm>
                    <label>TYPE</label>
                    {' '}
                    <select name={'type'}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>
                    <br/><br/>
                    <label>NAME</label>
                    {' '}
                    <input type={'text'} name={'name'} />   
                    <hr />
                    <input type={"submit"} value={'[U]pdate (update)'} />
                </UpdateForm>
            </Modal>

        </div>
    );
}

export {App};