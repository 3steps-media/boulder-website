'use client';

import {useEffect} from 'react';
import markerSDK from '@marker.io/browser';

export default function MarkerIO({projectKey}: { projectKey?: string }) {
    useEffect(() => {
        async function initMarkerWidget() {
            await markerSDK.loadWidget({
                project: `${projectKey}`
            });
        }

        initMarkerWidget();
    }, []);

    return (
        <div style={{textAlign: 'center', padding: '50px'}}>
            <h1>Welcome to My App</h1>
            <p>The Marker.io widget is now integrated!</p>
        </div>
    );
}