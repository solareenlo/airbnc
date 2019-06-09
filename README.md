# airbnc
- DECRYPT TOKYO 2019で作成したもの.
- 私はAngularの部分だけを担当.
- Angular, express, Mysqlをdocker-composeで起動した.
- `airbnc`という名前の由来は`air block and chain`の略.

# Usage
```bash
git clone
cd airbnc
npm i
docker-compose up -d
```
で, `localhost:4200`にAngularでフロントエンドが, `localhost:3000`にexpressでバックエンドが, `localhost:3306`にMySQLが立ち上がる.
