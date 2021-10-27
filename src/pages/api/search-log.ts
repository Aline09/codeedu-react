// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';


const { readFileSync, appendFileSync, existsSync, writeFileSync } = require('fs')
const { join } = require('path')

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
    const { headers, socket, query: { search_term } } = req
    
    const parseIp = (headers:any) => headers['x-forwarded-for']?.split(',').shift() || socket?.remoteAddress
    
    let searchLogFilePath;

    if(process.env.NODE_ENV == 'development'){
      searchLogFilePath = join(process.cwd(), '/data', 'search-log.json');
      
    } else if(process.env.NODE_ENV == 'production'){
      searchLogFilePath = '/tmp/search-log.json';
    }


    if(search_term){
      const searchLog = {ip: parseIp(headers),date: new Date(),search_term: search_term};
      try {
        if (existsSync(searchLogFilePath)) {
          //File exists
          const searchLogFile = readFileSync(searchLogFilePath, 'utf8');
          const searchLogFileJSON = JSON.parse(searchLogFile);
          searchLogFileJSON.push(searchLog);
          writeFileSync(searchLogFilePath, JSON.stringify(searchLogFileJSON), 'utf8');
        } else {
          const searchLogList = [];
          searchLogList.push(searchLog)
          appendFileSync(searchLogFilePath, JSON.stringify(searchLogList), (err: any) => {
            if (err) {
              throw err;
            } else {
              console.log('The "data to append" was appended to file!');
            }
          });
        }
      } catch(err) {
        console.error(err)
      }
      
    }
    
    const searchLogs = readFileSync(searchLogFilePath, 'utf8');
    res.status(200).send(searchLogs);

}