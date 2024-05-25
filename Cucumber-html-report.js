const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');


fs.readFile('cypress/.run/results.json', function read(err, data) {
    if (err) {
        throw err;
    }
    var runInfos = JSON.parse(data)

    var seconds = Math.floor((runInfos.totalDuration / 1000) % 60),
    minutes = Math.floor((runInfos.totalDuration / (1000 * 60)) % 60),
    hours = Math.floor((runInfos.totalDuration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  console.log( hours + ":" + minutes + ":" + seconds)

    report.generate({
        jsonDir: './cypress/cucumber-json',
        reportPath: './reports/cucumber-htmlreport.html',
        metadata: {
            browser: {
                name: runInfos.browserName,
                version: runInfos.browserVersion,
            },
            device: 'Local test machine',         
            
            platform: {
                name: runInfos.osName,
                version: runInfos.osVersion
            }
        },
        
        customData: {
            title: 'Run info',
            data: [
                { label: 'Project', value: 'Cypress' },
                { label: 'Release', value: '1.2.3' },
                { label: 'Cycle', value: 'B11221.34321' },
                { label: 'Duration', value: hours + ":" + minutes + ":" + seconds},
                { label: 'Execution Start Time', value: new Date(runInfos.startedTestsAt).toLocaleString() },
                { label: 'Execution End Time', value: new Date(runInfos.endedTestsAt).toLocaleString() },
                
            ]
        }
    });
});