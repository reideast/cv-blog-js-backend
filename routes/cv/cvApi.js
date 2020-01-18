var express = require('express');
var router = express.Router();

router.get("/job", (req, res, next) => {
    res.json([
        {
            company: 'IBM',
            date: '2019-Current',
            title: 'DevOps Software Engineer',
            location: 'Galway, Ireland',
            details: [
                'Development of enterprise security management software'
            ]
        }, {
            company: 'IBM',
            date: '2018-2019',
            title: 'Software Engineering Intern',
            location: 'Galway, Ireland',
            details: [
                'Developed a Java EE app presented in a TypeScript frontend in an international team',
                'Wrote a Java service deployed using Apache Common Daemon',
                'Created automated end-to-end test harness to verify SSL connections & certificates',
                'Developed automated UI tests in Selenium, API tests in Spock, Unit tests in Junit & Jasmine',
                'Created fixes for frontend defects in the Marionette framework'
            ]
        }, {
            company: 'Ericsson LMI',
            date: '2017-2017',
            title: 'Software Engineering Intern',
            location: 'Athlone, Ireland',
            details: [
                'Worked on an agile team on a JavaScript and JavaEE on the Ericsson Network Manager',
                'Developed production stories for GUI frontend, merged after code review',
                'Wrote behaviour-driven automated UI tests'
            ]
        }, {
            company: 'Tech Data',
            date: '2012-2015',
            title: 'Quality Assurance Technician II',
            location: 'California, United States',
            details: [
                'Developed scripts to automate technician’s workflows. Took initiative to identify inefficiencies, proposed improvement to management, and implemented it',
                'Wrote automated installation script to customise applications on domain PCs, increasing production throughput, directly leading to increase larger in contract size',
                'Responsible for ISO standards of 5-10 techs assembling desktop, laptop, server, and networking hardware, deploying system software'
            ]
        }, {
            company: 'Office Depot, Inc.',
            date: '2009-2012',
            title: 'Customer Services Specialist II',
            location: 'California, United States',
            details: [
                'Innovated by implementing new diagnostic protocols for services sales team using PC Doctor tool and directly increased sales of hardware repair services',
                'Designed improved marketing materials for customer check in district-wide, streamlined customer process and increased sales of add-on services'
            ]
        }, {
            company: 'Circuit City',
            date: '2007-2009',
            title: 'Lead PC Technician',
            location: 'California, United States',
            details: [
                'Managed technical service centre operations after promotion within three months',
                'Developed new procedures to improve technician standard operating procedures, designed to keep personnel focused on repairs and customer communication'
            ]
        }, {
            company: 'CompUSA',
            date: '2005-2007',
            title: 'Service Writer',
            location: 'California, United States',
            details: [
                'Provided first level help desk support with retail customers in person and over the phone',
                'Trained by technicians for hardware and software repairs of PC and Apple computers'
            ]
        }, {
            company: "San Diego Zoological Society's Wild Animal Park",
            date: '2003-2004',
            title: 'Visitor Assistance Officer',
            location: 'California, United States',
            details: [
                'Customer service and crowd control',
                'Junior security duties',
                'Fed giraffes'
            ]
        }
    ]);
});

router.get('/schools', (req, res, next) => {
    res.json([
        {
            school: 'National University of Ireland, Galway',
            date: '2016-2019',
            degree: 'Bachelor of Science (Honours), Computer Science',
            location: 'Galway, Ireland',
            grade: 'First-class Honours: overall marks 90.18% (A+ equivalent)',
            thesis: {
                description: 'Thesis Project: Genetic algorithm to schedule a timetable using machine learning in Java EE presented as a React app deployed to AWS, EC2, and an RDS Postgres database',
                url: 'https://github.com/reideast/genetic-algorithm-timetable'
            },
            details: [
                'Java Data Structures & Algorithms A',
                'Software Engineering A+',
                'Databases A+',
                'Discrete Maths A+',
                'AI A',
                'Machine Learning A+',
                'Cryptography A+'
            ]
        },
        {
            school: 'Riverside City College',
            date: '2014-2015',
            degree: 'Associate of Science, Computer Science',
            location: 'California, United States',
            grades: 'Dean\'s List Honours: (Overall 97.8%)',
            thesis: {
                description: 'Content management system in PHP and MySQL',
                url: 'https://github.com/reideast/PHP_CMS'
            },
            details: [
                'Systems Analysis',
                'Programming in C++',
                'Java',
                'PHP',
                'Operating Systems',
                'Data Structures',
                'Cisco Networking Academy'
            ]
        }
    ]);
});


module.exports = router;
