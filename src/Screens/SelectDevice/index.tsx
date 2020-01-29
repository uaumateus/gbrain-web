import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import './styles.css';

export default function SelectDevice () {
    const [device, setDevice] = useState<string>('');
    const [loading, setLoading] = useState<string>('');
    const [userLogin, setUserLogin] = useState<any>();
    const [authorized, setAuthorized] = useState<any>();
    const ws = new WebSocket('wss://localhost:6868')
    useEffect(() => {
        ws.onopen = () => {
            console.log('connected')
        }
        ws.onclose = () => {
            console.log('disconnected')
        }
    }, []);

    useEffect(() => {
        if(userLogin === false)
            setLoading("Nenhum usuário conectado. Entre com sua conta no EmotivApp e tente novamente!");
    }, [userLogin]);

    useEffect(() => {
        if(authorized === false)
            setLoading("Por favor autorize o GBrain no seu EmotivApp para proseguir.");
    }, [authorized]);

    function getUserLogin(){
        ws.send(JSON.stringify({"id": 1, "jsonrpc": "2.0", "method": "getUserLogin"}));
        ws.onmessage = (evt : any) => {
            if(JSON.parse(evt.data)['result'] !== undefined && JSON.parse(evt.data)['result'].length === 0)
                setUserLogin(false);
            else{
                setUserLogin(true);
                setLoading("Conectando dispositivo");
                isAuthorized();
            }
        }
    }

    function selectDevice (device : string){
        setLoading("Conectando dispositivo");
        if(device === "emotiv")
            getUserLogin();
    }

    function isAuthorized(){
        ws.send(JSON.stringify({"id": 1, "jsonrpc": "2.0", "method": "requestAccess",
        "params": {
            "clientId": "v7UnOPHWEolNSRslpGPUV9WorYLrZM7diWGRlXkt",
            "clientSecret": "H6FRZI6cjymlBRo3De5XvSy9Z9wVjlA1XVPgLsGEUQZfcky5HMmjqhLCyXRFblvwnyD0Gsd0JFQuTKdBfuQGVMUx1t15G0NCaIDpm8aeTcmch2DJD2crl8dIfBEOwe5o"
        }}));
        ws.onmessage = (evt : any) => {
            console.log(JSON.parse(evt.data))
            if(JSON.parse(evt.data)['result'] !== undefined && JSON.parse(evt.data)['result'].accessGranted === false || JSON.parse(evt.data)['warning'].code === 10){
                setAuthorized(false);
            }else{
                setAuthorized(true);
                setLoading("Conectando dispositivo");
            }
        }
    }

    return (
        <Layout 
            loading={loading}
            selectDevice={selectDevice}
            getUserLogin={getUserLogin}
            isAuthorized={isAuthorized}
        />
    );
}