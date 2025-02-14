import React from 'react';
import TabItem from './TabItem';
import styled from 'styled-components';

const SytledUL = styled.ul`
    height: 24px;
`;

function Tabs({tabs, selectTab}) {
    /*
        React를 import하여 JSX(JavaScript XML)를 쓸 수 있다.
        JSX는 아래 return문과 같이 JavaScript 코드에서 HTML 태그처럼
        컴포넌트를 작성할 수 있도록 도와준다. 
    */
    return (
        <SytledUL>
            {
                tabs.map(tab => <TabItem 
                                    key={tab.no}
                                    no={tab.no}
                                    name={tab.name}
                                    active={tab.active} 
                                    selectTab={selectTab} />)
            }
        </SytledUL>
    );
}

export default Tabs;