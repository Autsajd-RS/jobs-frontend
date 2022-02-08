import cookie from 'cookie';
import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

type RequestType = IncomingMessage & {
    cookies: NextApiRequestCookies;
};

export const parseCookies = (req: RequestType) => {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
};
