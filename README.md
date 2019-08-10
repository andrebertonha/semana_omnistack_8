# semana omnistack 8

- Aplicação para combinar desenvolvedores

- Backend: Node JS
  - Instruções: acessar /backend 
    - yarn install
    - yarn dev

- Frontend: React
  - Instruções: acessar /frontend
    - yarn install
    - yarn start

- Mobile: React Native
  - Instruções: acessar /tindev
    - react-native-cli deve estar instalado
    - yarn install
    - yarn start
    
- Rotas da aplicação 
  
### request listar desenvolvedores [GET]  [/devs]

+ Headers
    Accept: user: _id
    Content-Type: application/json; charset=utf-8

+ Response 200 (application/json)

### request cadastrar desenvolvedor [POST] [/devs]

+ Parameters 
    Accept: username: json object 
    Content-Type: application/json; charset=utf-8    
    + example:
      ```javascript
      {
          "username": "andrebertonha"
      }
      ```
      + Response 200 (application/json)

### request registrar like [POST]  [/devs/:devId/likes]

+ Headers
    Accept: user: _id
    Content-Type: application/json; charset=utf-8

+ Response 200 (application/json)

### request registrar dislike [POST]  [/devs/:devId/dislikes]

+ Headers
    Accept: user: _id
    Content-Type: application/json; charset=utf-8

+ Response 200 (application/json)
      

