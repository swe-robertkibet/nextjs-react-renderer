'use client'

import React, { useEffect, useRef } from 'react'

const ReactAppIframe = () => {
    const iframeRef = useRef(null)

    useEffect(() => {
        const iframe = iframeRef.current
        if (iframe) {
            iframe.onload = () => {
                iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`
            }
        }
    }, [])

    return (
        <iframe
            ref={iframeRef}
            src="/react-app/static/index.html"
            style={{ width: '100%', border: 'none' }}
            title="React App"
        />
    )
}

export default ReactAppIframe