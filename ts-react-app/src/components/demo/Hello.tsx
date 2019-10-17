import React from 'react'
import { Button } from 'antd';

interface HelloProps {
    name: string;
}

const Hello = (props: HelloProps) => <Button>hello {props.name}</Button>


export default Hello;