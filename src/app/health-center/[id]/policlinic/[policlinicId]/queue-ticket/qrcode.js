'use client'
import { QRCodeSVG } from "qrcode.react";

export function QrCode({value}) {
    
    return <QRCodeSVG className="inline-block my-3" value={value} height={120}/>
}