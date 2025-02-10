## Application Bundling

#### 00. Webpack이란?
Webpack은 JavaScript 모듈 번들러이다.
여러 개의 JavaScript, CSS, 이미지 등 리소스를 하나(또는 최적화된 여러 개)의 파일로 묶어서 브라우저에서 효율적으로 로드할 수 있도록 해주는 도구이다. 

Webpack을 사용하면 좋은점
- 여러 개의 JS, CSS, 이미지 등을 하나의 번들 파일로 묶어 최적화가 가능하다.
- 파일 간의 의존성을 자동으로 해결하여 순서 문제가 발생하지 않는다.
- 코드를 압축하고 최적화하여 성능을 향상시킬 수 있다.  

#### 01. Webpack Practices
1. Bundling I: JS Module
2. Bundling Environment Configuration : webpack.config.js
3. Webpack Development Server
4. Bundling II: CSS Module
5. Bundling III: SASS/SCSS Module
6. Bundling IV: Image Module


#### 02. 실습
1. Init Project

    $ mkdir ex04
    $ cd ex04
    $ npm init -y 

2. Install Packages

    $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass

3. NPM scripting : package.json

    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    } 

4. Configuration

    webpack.config.js

5. Landing

    public/index.html 

6. Application

    1) src/index.js
    2) src/App.js

7. Test

    $ npm start

8. Build(Bundling)

    $ npm run build