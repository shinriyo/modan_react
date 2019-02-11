# FROM "node:6-alpine"
FROM "node:8.15.0-alpine"
# マウント先のディレクトリに移動しておく
WORKDIR /usr/src/app

# create-react-app いれる
RUN npm install create-react-app -g
# TSでプロジェクト生成
RUN create-react-app my-app --scripts-version=react-scripts-ts

RUN mv my-app/* .
RUN rm -rf my-app

RUN npm install redux --save
RUN npm install react-redux --save
RUN npm install recompose --save
RUN npm install typescript-fsa --save
RUN npm install typescript-fsa-reducers --save
RUN npm install @material-ui/core --save
RUN npm install @material-ui/icons --save

# typeをいれる
RUN npm install @types/redux --save-dev
RUN npm install @types/react-redux --save-dev
