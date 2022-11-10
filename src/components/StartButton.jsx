import React from 'react';
import { Button } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons';
function StartButton({isFavorite, onClick}) {
    console.log('isFavorite', isFavorite)
    const Icon = isFavorite ? StarFilled : StarOutlined
    return (
        <Button icon={<Icon />} onClick={onClick}></Button>
    );
}

export default StartButton;