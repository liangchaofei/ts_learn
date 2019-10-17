import React, {useState, useEffect} from 'react';
import { Button } from 'antd';

interface IProps{
    name: string;
}

const HelloHooks = (props: IProps) => {
    const [ count , add ] = useState(0)
    const [ text, setText ] = useState<string | null>(null)
    let addCount = () => {
        add(count + 1)
    }
    useEffect(() => {
        if(count > 5){
            setText('休息一下')
        }   
        console.log('123')
    },[count])
    return  (
        <>
            <p>你点击了 {count} 次 {text}</p>
            <Button onClick={addCount}>hello {props.name}</Button>
        </>
    )
}

export default HelloHooks;