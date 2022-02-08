// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');

const USERS_PATH = './../../data/users.json';

let users = require('./../../data/users.json');

type Data = {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = users;
    res.status(200).json(data);
}
