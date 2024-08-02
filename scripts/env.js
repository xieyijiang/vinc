import fs from 'fs'
import path from 'path'

// 获取当前模块的URL地址
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const envContent =
`VITE_APP_TITLE="Vinc App"`;

const envDevContent =
`VITE_APP_TITLE="Vinc App"
VITE_API_URL="http://localhost:3000"
VITE_SOCKET_IO_URL="http://localhost:3000"
`;

const envProdContent =
`VITE_APP_TITLE="Vinc App"
VITE_API_URL="https://api.example.com"
VITE_SOCKET_IO_URL="https://api.example.com"
`;

const envPath = path.join(__dirname, '../.env');
const envDevPath = path.join(__dirname, '../.env.development');
const envProdPath = path.join(__dirname, '../.env.production');


// 检查文件是否存在以及内容是否符合预期
function checkAndWriteFile(filePath, content) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
      // 文件不存在，创建文件并写入内容
      fs.writeFile(filePath, content, err => {
        if (err) throw err;
        console.log(`${path.basename(filePath)} has been created.`);
      });
    } else if (err) {
      // 读取文件时发生错误
      console.error(err);
    } else if (data.includes(content)) {
      // 文件存在且包含预期内容，不执行写入操作
      console.log(`${path.basename(filePath)} already has the expected content.`);
    } else {
      // 文件存在但内容不符合预期，写入新内容
      fs.appendFile(filePath, `\n${content}`, err => {
        if (err) throw err;
        console.log(`${path.basename(filePath)} has been updated.`);
      });
    }
  });
}

// 检查并写入文件
checkAndWriteFile(envPath, envContent);
checkAndWriteFile(envDevPath, envDevContent);
checkAndWriteFile(envProdPath, envProdContent);