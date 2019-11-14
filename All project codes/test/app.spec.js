const chai = require('chai');

const expt = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../projectserver.js');

chai.use(chaiHttp);


describe('server', () => {
    it('should give the name of a creature', (done) => {
        chai.request(app)
            .get('/all/blob')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq('blob');
                done();
            })
    });
});