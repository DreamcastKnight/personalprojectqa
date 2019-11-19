const chai = require('chai');

const expt = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../projectserver.js');

chai.use(chaiHttp);


describe('server', () => {
    it('should give the name of a creature', (done) => {
        chai.request(app)
            .get('/all/Zombie')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq('Zombie');
                done();
            })
    });
    it('should give the data of the most recent creature added', (done) => {
        chai.request(app)
            .get('/getData/Dire Wolf')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq("Dire Wolf");
                done();
            });
    });
    it('should change the HP of a monster', (done) => {
        chai.request(app)
            .put('/change/Dire Wolf/12')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq("12");
                done();
            });
    });
    it('should give the data of the most recent creature added', (done) => {
        chai.request(app)
            .get('/getData/Dire Wolf')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq("Dire Wolf");
                done();
            });
    });
    it('should give the data of the most recent creature added', (done) => {
        chai.request(app)
            .get('/getData/Dire Wolf')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq("Dire Wolf");
                done();
            });
    });
});