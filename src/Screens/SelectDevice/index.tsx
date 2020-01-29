import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import './styles.css';

export default function SelectDevice () {
    const [device, setDevice] = useState<string>('');
    const [loading, setLoading] = useState<string>('');
    const [userLogin, setUserLogin] = useState<any>();
    const ws = new WebSocket('wss://localhost:6868')
    useEffect(() => {
        ws.onopen = () => {
            console.log('connected')
        }
        ws.onclose = () => {
            console.log('disconnected')
        }
        // setTimeout(() => {
        //     getInfos();
        // }, 1000);
    }, []);

    useEffect(() => {
        if(userLogin === false)
            setLoading("Nenhum usuário conectado. Entre com sua conta no EmotivApp e tente novamente!");
    }, [userLogin]);

    function getInfos() {
        getUserLogin();
    }

    function getUserLogin(){
        ws.send(JSON.stringify({"id": 1, "jsonrpc": "2.0", "method": "getUserLogin"}));
        ws.onmessage = (evt : any) => {
            if(JSON.parse(evt.data)['result'].length === 0)
                setUserLogin(false);
            else
                setUserLogin(true);
        }
    }

    function selectDevice (device : string){
        setLoading("Conectando dispositivo");
        if(device === "emotiv")
            getInfos();
    }

    return (
        <Layout 
            loading={loading}
            selectDevice={selectDevice}
        />
    );
}