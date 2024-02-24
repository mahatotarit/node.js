
# Node.js

Node.js: A powerful JavaScript runtime environment that allows server-side scripting, event-driven architecture, and scalable network applications.

### 1. Install Node.js
* Linux
```bash
  sudo apt-get install -y nodejs
```

* Windows

  [Install Here](https://nodejs.org/en/download)

* macOS
```bash
  brew install node
```
### 2. Install NPM
### 3. Create a `index.js` file
* Create node server:

```
const http = require('http');

const PORT = 80;

const server = http.createServer((req, res) => {
  res.write('Nodejs server running...');
  res.end();
});

server.listen(PORT);
```

### 4. Run `index.js` file on your terminal
* Using this commond:
```
node index.js
```

### 5. Open your web browser and test the server
* Visit the following URL:
```
localhost:80
```

### 🎉 Node.js project created successfully! 🚀
