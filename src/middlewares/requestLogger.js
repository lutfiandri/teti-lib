import fs from 'fs';
// import getActualRequestDuration from '../helpers/getActualRequestDuration.js';

const requestLogger = (req, res, next) => {
  const current_datetime = new Date();
  const formatted_date =
    String(current_datetime.getFullYear()).padStart(2, '0') +
    '-' +
    String(current_datetime.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(current_datetime.getDate()).padStart(2, '0') +
    ' ' +
    String(current_datetime.getHours()).padStart(2, '0') +
    ':' +
    String(current_datetime.getMinutes()).padStart(2, '0') +
    ':' +
    String(current_datetime.getSeconds()).padStart(2, '0');
  const method = String(req.method).padEnd(8);
  const url = req.url;

  // FIXME: how to read statuscode properly
  // const status = res.statusCode;

  // const start = process.hrtime();
  // const durationInMilliseconds = getActualRequestDuration(start);

  const log = `[${formatted_date}] ${method} ${url}`;

  // log to terminal
  console.log(log);

  // log to file
  fs.appendFile('logs/requestLogs.txt', log + '\n', (err) => {
    if (err) {
      console.log(err);
    }
  });

  next();
};

export default requestLogger;
