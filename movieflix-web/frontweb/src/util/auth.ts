import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const getTokenData = (): TokenData | undefined => {
    const LoginResponse = getAuthData();

    try{
        return jwtDecode(LoginResponse.access_token) as TokenData;
    }
    catch(error){
        return undefined;
    }
  }

  export const isAuthenticated = () => {
    const TokenData = getTokenData();
    return (TokenData && TokenData.exp * 1000 > Date.now()) ? true : false;
  }
