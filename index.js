const express = require("express");
const app = express();

//app.use((req, res) => {
    console.log("We got a request!");
    //res.send("Hello, we got a request");
    //res.send({color: 'red',
//mancos: 'KingManco'});
//})

app.get('/cats', (req, res) => {
    res.send('<img src = "https://lh3.googleusercontent.com/FtUXUNA_g7wuYuuEszsztT3QyV86QL9T9dw38VLvf3qTqo9x6jey5pLn6lQOTskwViR4hr_4bWSxKpJuYYw7rMlU9BNB4meOt-_bIq4AZXAQWmuLpyquXyG0R5aGVxmzdXUwkqkX82ID78gYPsQ7qW3ntCgilISAY9vCgtHtdPg5f15oNwswdaOaR5vJPXJCOvhyVURoyBiXOCYl5pQAyub5StOVCg2oXNbtx21hby2wdT4ir7v_0Wfuo6F8gXgkfm8AbjOPsPEeJ5Ra9vgr4Ki_VNBuqFJTCHlhI83VldsmDZma6d37FVFTsv4hyk62SYfslL_5lX2ckI8W9-A7QCseE31hOByTCLGIswtkqXDsdYAfw8jU6rzoZXwcBDawaslKodXvMMBbiu88lO5ltjH4r-sgPXdinQZbFgaGohKvXKvOVe2Mry7s9jyT0hg08ay7GQKVAQS9Zt-vNmBWkMhowJ9hnaEE7gIr45SM3LnnjK5h06_mMhfOnS8NEGWsYsY84AKF59GzwJHsKMVo3PVmepckS3JmAGWLWv6r5SBOSlUWOpyZKW6P8ZFcVFaHKc3fcPm_7FvBk6c8f6MhTPDE3Qwc5NUlv9Kfr_V2640xW3Dfm9YPYwDnWjy3mgjSL011PEHhgrfEwCQsc736zpOiAgrqbKjzx6vZwLMPkCummM3_4N_TlBV4EIsqeq5lB0cgmCl3JRZKvalpGCpFuWtm=w697-h929-no?authuser=0">');
})

app.get('/search', (req, res) =>{
    const { q } = req.query;
    if (!q) {
        res.send('No query has done');
    }
    res.send(`<h1>Yes! We got ${q}</h1>`);
})

app.get('/dogs', (req, res) => {
    res.send('<img src ="https://lh3.googleusercontent.com/5V3hFq50LNr0X-tTvOLyFFBRd75cGjYkZlRqQF36r8LmlpOJoLMyaOsk5raKz-J6J1sT-a3VA8_2rT8QxkokQVg5SpGIA-MVUzK848K6qQv0_cQMb2gRGiSKFOJFw5IDUDeSV2OQDwWPAByNmLB5KExjClTqnkBxne4rqU0OL9lQZN6VhltZip1ciXToq-hH8Csz-uT6mk9QSWFx6_gK0tzfQCfMkO9sR-2a7lGPP82ar0nKc1nAjJK5tlJjFSvaooPYsiY2idmMRa4-bvdV8M_tmIXlyrjzSGMMtqoVQfz9zB0iqGEG827LgMDa82CiPONHu_mhCREd-XvhFtpyykrpEFEhIQ96z_PkeVkDQanfXbXZjAP3CoWZPltPmqxm3vAAMJYZJ7UyNHkJsmAM6SlQgjgv6QigFElZ5oXcV1shzmDxE0LZqkFBrQDc-5arTrCvJ77geIsOg87cPv6VtUCNrcqy5awmiMowP35ayuIspzyIDCV8afsJ79JNgjQLWN_mslYUBAevVQuWdT792fAYp79jUPncrgzw8sZdL1t0-KoiMxijN1b38aH-c-k2fU3sC1jqrwAiLhqieiGFCJDQSFwgEsZCnDBWHRHjp83jFs_6kD3YxOhI3fCrsGU19RQ97dr8jRQdksj5F1tdVNlr-F91ALaAmXlpBfPGheHZQnOOx_aDdUg_gr9KZVgf3nhveF9CUyMs1f7GwU9mBd7R=w697-h929-no?authuser=0">');
})
app.get('/r/:manco', (req, res) => {
    const {manco} = req.params;
    res.send(`<h1>Viendo el manco ${manco}</h1>`);
})

app.get('/r/:manco/:id', (req, res) => {
    const {manco, id} = req.params;
    res.send(`<h1>El manco ${manco} se identifica con la cédula ${id}</h1>`);
})
app.post('/cats', (req, res) => {
    res.send('This is a post method!');
})
app.listen(8080, () => {
    console.log("Listening on 8080");
})