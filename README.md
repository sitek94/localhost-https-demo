# localhost https

Fix the following error when trying to run local server using `https`:

![Screen Shot 2022-08-13 at 16 30 47](https://user-images.githubusercontent.com/58401630/184499257-d876a86f-b91c-40bb-bfcb-f6fa0b248a4d.png)

## Steps

Install `mkcert` and generate key and cert

```bash
# Install mkcert
brew install mkcert

# Create local CA (certificate authority)
mkcert -install

# Generate key and certificate for localhost
mkcert localhost
```

Pass an object with `key` and `cert` when creating new server using `https`:

```js
const options = {
  key: '<YOUR_KEY>',
  cert: '<YOUR_CERT>',
}

https.createServer(options, (req, res) => { ... })
```

## Resources

- [Node: https.createServer](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)
- [mkcert](https://github.com/FiloSottile/mkcert)
