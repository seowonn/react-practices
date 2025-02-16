import React from 'react';
import TabItem from './TabItem';
import styled from 'styled-components';

const SytledUL = styled.ul`
    height: 24px;
`;

function Tabs({tabs, selectTab}) {

    // Tabs 컴포넌트는 map을 통해 여러 개의 TabItem을 생성한다.
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