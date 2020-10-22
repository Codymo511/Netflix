import React from 'react';
import { form } from '../components';
import * as ROUTES from '../constants/routes';
import { Header} from '../components';

export function SigninContainer({ children }) {
    return (
        <sign-in>
            <Header/>
            {children}
            <form/>
        </sign-in>
    )
}