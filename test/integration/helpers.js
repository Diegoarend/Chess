// configurações dos testes
// definimos as globais que vão poder ser acessadas sem a necessidade de fazer uma importação
import supertest from 'supertest';
import chai from 'chai';
import app from '../../src/app';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
