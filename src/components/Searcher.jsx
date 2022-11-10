import React from 'react';
import { Input } from 'antd'

function Searcher(props) {
    return (
        <Input.Search placeholder='Buscar' style={{ marginBottom: '10px'}}/>
    );
}

export default Searcher;