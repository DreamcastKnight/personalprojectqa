const chai = require('chai');

const expt = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../projectserver.js');

chai.use(chaiHttp);


describe('serverGets', () => {
//     it('should give the name of a creature', (done) => {
//         chai.request(app)
//             .get('/all/dire wolf')
//             .end((err, res) => {
//                 expt(res.status).to.eq(200);
//                 expt(res.body.name).to.eq('Dire Wolf');
//                 expt(JSON.stringify(res.body).length).to.gte(20);
//                 done();
//             })
//     });
    it('should give the data of the most recent creature added to the temporary table', (done) => {
        chai.request(app)
            .get('/getData/Dire Wolf')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.body.name).to.eq('Dire Wolf');
                expt(JSON.stringify(res.body).length).to.gte(20);
                done();
            });
    });
    it('should give the data of a monster by name from the static table', (done) => {
        chai.request(app)
            .get('/monall/Dire Wolf')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.body[0].name).to.eq('Dire Wolf');
                expt(JSON.stringify(res.body).length).to.gte(20);
                done();
            });
    });
    it('should give the data of the most recent creature added to the temporary table', (done) => {
        chai.request(app)
            .get('/getData/Dire Wolf')
            .end((err, res) => {
                expt(res.body.name).to.eq('Dire Wolf');
                expt(JSON.stringify(res.body).length).to.gte(20);
                done();
            });
    });
});


describe('serverPuts', () => {
    it('should change the HP of a monster in the temporary table', (done) => {
        chai.request(app)
            .put('/change/Dire Wolf/12')
            .end((err, res) => {
                expt(res.status).to.eq(200);
                expt(res.text).to.eq("12");
                done();
            });
    });
});


// describe('serverDels', () => {
//     it('should delete all in the temporary table', (done) => {
//         chai.request(app)
//             .put('/deleteAll')
//             .end((err, res) => {
//                 expt(res.status).to.eq(404);
//                 expt(res.text).to.eq("probably worked");
//                 done();
//             });
//     });
// });