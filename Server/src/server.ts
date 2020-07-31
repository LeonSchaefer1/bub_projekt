/*****************************************************************************
 * Import package                                                            *
 *****************************************************************************/
import express = require ('express');
import session = require ('express-session');
import mysql = require ('mysql');
import {Request, Response} from 'express';
import {Connection, MysqlError} from 'mysql';
import {Configuration} from '../config/config';
import {Answer, Question} from "../model/model";

/*****************************************************************************
 * Define app and database connection                                        *
 *****************************************************************************/
const app = express();
// Start up database connection
const database: Connection = mysql.createConnection(Configuration.mysqlOptions);
console.log('Database Connection established');

/*****************************************************************************
 * Configure web-app                                                         *
 *****************************************************************************/
app.use(express.json());
app.use(session(Configuration.sessionOptions));

/*****************************************************************************
 * Start server and connect to database                                      *
 *****************************************************************************/
app.listen(8080, () => {
    console.log('Server started: http://localhost:8080/Startseite.html');
});

/*****************************************************************************
 * STATIC ROUTES                                                             *
 *****************************************************************************/
app.use('/', express.static(__dirname + '/../../client/views'));
app.use('/css', express.static(__dirname + '/../../client/css'));
app.use('/src', express.static(__dirname + '/../../client/src'));
app.use('/jquery', express.static(__dirname + '/../../client/node_modules/jquery/dist'));
app.use('/popperjs', express.static(__dirname + '/../../client/node_modules/popper.js/dist'));
app.use('/materialize-css', express.static(__dirname + '/../../client/node_modules/materialize-css/dist'));
app.use('/assets', express.static(__dirname + '/../../client/assets/pictures'));

// POST Route um eine Auswertung anzulegen.

app.post('/auswertung', (req: Request, res: Response) => {

    const frageId: number = Number (req.body.frageId);
    const antwortId: number = Number (req.body.antwortId);

    // Überprüft, ob frageID und antwortID vorhanden sind
    if(frageId && antwortId){

        // Bereite Query vor
        const data: [number, number] = [frageId, antwortId];
        const query: string = "INSERT INTO auswertung (frage_id, antwort_id) VALUES (?,?)";

        // Führe Query aus
        database.query(query, data, (err: MysqlError) => {
            if(err){
                console.log(err)
                res.status(500).send({
                    message: 'Datenbank-Anfrage fehlgeschlagen.'
                })
            }
            else {
                console.log("'Frage mit Antwort wurde erfolgreich in Datenbank hinterlegt.")
                res.status(200).send({
                    message: 'Frage mit Antwort wurde erfolgreich in Datenbank hinterlegt.'
                })
            }
        });
    }

    else{
        console.log('Frage ID oder Antwort ID sind nicht angekommen')
        res.status(400).send({
            message: 'Frage ID oder Antwort ID sind nicht angekommen',
        });
    }
});

// Erwartet eine FrageID (number) und antwortet mit dem

app.get('/frage/:frageId', (req: Request, res: Response) => {

    // Bereite Abfrage vor
    const data: number = Number(req.params.frageId);
    const query = 'SELECT * FROM frage WHERE id = ?;';
    // Führe Abfrage auf Datenbank aus
    database.query(query, data, (err: MysqlError, rows: any) => {
        if(err){
            console.log(err);
            res.status(500).send({
                message: 'Datenbank-Anfrage fehlgeschlagen',
            })
        }
        else {
            console.log("Frage gefunden")
            res.status(200).send({
                message: 'Frage gefunden',
                question: new Question(
                    rows[0].id,
                    rows[0].text,
                )
            })
        }
    });
})

app.get('/antworten/:frageId', (req: Request, res: Response) =>{
    console.log(req.params.frageId)
    const data: number = Number (req.params.frageId);
    const query = 'SELECT * FROM antwort WHERE frage_ID =?;';
    database.query(query, data, (err: MysqlError, rows: any) => {
        if(err){
            console.log(err)
            res.status(500).send({
                message: 'Datenbank-Anfrage fehlgeschlagen',
            })
        }
        else {
            console.log('Antworten zu Frage ID' + data + ' gefunden.')
            let antworten = [];
            for (let i = 0; i < rows.length; i++){
                antworten[i] = rows[i].answer;
            }
            res.status(200).send({
                    message: 'Antworten zu Frage ID' + data + ' gefunden.',
                    answerId: req.params.frageId,
                    answer: antworten,
                });
        }
    });

})

