'use strict';
var fs = require('fs'),
    eyes = require('eyes'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
var j = null;
parser.on('end', function (result) {
    j = result;
    var x = j.$.version;

    console.dir(x);

});
parser.on('error', function (err) {
    eyes.inspect(err);
    // console.log(result);
});
fs.readFile('./some.xml', function (err, data) {
    parser.parseString(data);
});
var x = {
    '$': {
        version: '2.0',
        'xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
        'xmlns:wfw': 'http://wellformedweb.org/CommentAPI/',
        'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
        'xmlns:atom': 'http://www.w3.org/2005/Atom',
        'xmlns:sy': 'http://purl.org/rss/1.0/modules/syndication/',
        'xmlns:slash': 'http://purl.org/rss/1.0/modules/slash/'
    },
    channel: [{
        title: [Object],
        'atom:link': [Object],
        link: [Object],
        description: [Object],
        lastBuildDate: [Object],
        language: [Object],
        'sy:updatePeriod': [Object],
        'sy:updateFrequency': [Object],
        generator: [Object],
        item: [Object]
    }]
};


