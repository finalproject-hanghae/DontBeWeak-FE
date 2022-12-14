/// <reference types="react-scripts" />

//env 파일 typed를 통한 자동완성 가능화
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV : 'production' | 'development' ;
        REACT_APP_DB_HOST : string;
        REACT_APP_KAO_CLIENT_ID: string;
        REACT_APP_KAO_REDIRECT_URI: string;
    }
}