// The list of the members in an array
// A member will have:
// assets, personalinfo, educationInfo, skillsInfo, experienceInfo
let memberList= [
	{
		/* SAFIDY */
		assets: {
			description: "Information Technology Enthusiast",
			photo: "safidy_height.png",
		},
		personalInfo: {
			firstname: "Safidy Herinirina Arindranto",
			lastname: "Andriantsoa",
			faculty: "Business Management, Software Engineering and Artificial Intelligence",
			age: 20,
			tel: "+261 34 89 106 78",
			email: "safidy.herinirina@gmail.com"
		},
		educationInfo:{
			university: [
				{
					school: "Institut Supérieur Polytechnique de Madagascar",
					grade: "3rd year in Business Management, Software Engineering and Artificial Intelligence",
					duration: "2019 ~ Now"
				},
			],
			highschool: [
				{
					school: "Lycée Jules Ferry Faravohitra",
					grade: "D Baccalaureate",
					duration: "2018 ~ 2019"
				},
				{
					school: "International Light High School",
					duration: "2016 ~ 2017"
				},
			],
			college: [
				{
					school: "International Light College",
					duration: "2013 ~ 2015",
					grade: "BEPC"
				},
				{
					school: "Collège d'Enseignement Général Antanimena",
					duration: "2012"
				},
			]
		},
		skillsInfo:{
			framework: ["VueJS 3"],
			programmation: ["HTML 5","CSS 3","JavaScript", "PHP 8", "Python 3","Java","C Programing Language","Pascal Programing Language"],
			modelization: ["MERISE"],
			db: ["MySQL", "SQLite 3", "MongoDB", "Microsoft Access"],
			officeAutomation: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"]
		},
		experienceInfo: {
			'You Project': {
				description: 'A website that showcases each and every team member',
				techs: ['VueJS 3']
			},
			'Portfolio Design': {
				description: 'A full portfolio design and prototype done with Figma.'
			},
			'Chess': {
				description: 'A chessboard web application to help players in their game analysis.',
				techs: ['HTML 5', 'CSS 3', 'CSS Bootstrap', 'JavaScript']
			},
			'Easy Pay': {
				description: 'A software to manage employees and salary payments.',
				techs: ['Python 3.10', 'SQLite 3']
			},
			'Intermall': {
				description: 'A mobile application for online saling.',
				techs: ['Flutter']
			},
			'Orientation Universitaire': {
				description: 'A website designed to help students choosing the right way after high school',
				techs: ['HTML 5', 'CSS 3']
			}
		}
	},
	/****************************************************************************************************************/
	/* MENDRIKA */
	{
		assets: {
			description: "Software Engineer Student",
			photo: "mendrika_height.png",
		},
		personalInfo: {
			firstname: "Mendrika Henintsoa",
			lastname: "Harimalala",
			faculty: "Business Management, Software Engineering and Artificial Intelligence",
			age: 20,
			tel: "+261 34 21 495 63",
			email: "harimalalamendrika@gmail.com"
		},
		educationInfo:{
			university: [
				{
					school: "Institut Supérieur Polytechnique de Madagascar",
					grade: "3rd year in Business Management, Software Engineering and Artificial Intelligence",
					duration: "2019 ~ Now"
				},
			],
			highschool: [
				{
					school: "Lycée Privée Catholique Notre Dame de Fatima",
					grade: "D Baccalaureate",
					duration: "2016 ~ 2019"
				},
			],
			college: [
				{
					school: "Collège Privée Catholique Notre Dame de Fatima",
					grade: "BEPC",
					duration: "2012 ~ 2016"
				}
			]
		},
		skillsInfo:{
			framework: ["Symfony","ANGULAR","BOOTSTRAP","Flutter"],
			programmation: ["HTML 5","CSS 3","JavaScript","Java","C Programing Language","PHP","Pascal Programing Language"],
			modelization: ["MERISE"],
			db: ["MySQL"],
			officeAutomation: ["Microsoft Word","Microsoft PowerPoint","Microsoft Excel"]
		},
		experienceInfo: {
			'Book-y': {
				description: 'A web application to manage libraries.',
				techs: ['Symfony 5', 'MySQL']
			},
			'Intermall': {
				description: 'A mobile application for online sales.',
				techs: ['Flutter',]
			},
			'MadArt': {
				description: 'A website that shows the beauty of Madagascar.',
				techs: ['HTML 5', 'CSS 3']
			}
		}
	},
	/********************************************************************************************************************************************/
	/* SARIAKA */
	{
		assets: {
			description: "Web Designer",
			photo: "sariaka_height.png",
		},
		personalInfo: {
			firstname: "Aina Sariaka",
			lastname: "Andriamanana",
			faculty: "Business Management, Software Engineering and Artificial Intelligence",
			age: 20,
			tel: "+261 34 08 157 57",
			email: "andriamananaaina13a@gmail.com"
		},
		educationInfo: {
			university: [
				{
					school: "Institut Supérieur Polytechnique de Madagascar",
					grade: "3rd year in Business Management, Software Engineering and Artificial Intelligence",
					duration: "2019 ~ Now"
				},
			],
			highschool: [
				{
					school: "Lycée Saint Francois Xavier Antanimena",
					grade: "D Baccalaureate",
					duration: "2016 ~ 2019"
				},
			],
			college: [
				{
					school: "Collège Saint François Xavier Antanimena",
					grade: "",
					duration: "2012 ~ 2016"
				},
			]
		},
		skillsInfo:{
			framework: ["Flutter"],
			programmation: ["HTML 5","CSS 3","JavaScript","C Programing Language","PHP","Pascal Programing Language"],
			modelization: ["MERISE"],
			db: ["MySQL"],
			officeAutomation: ["Microsoft Word","Micfosoft PowerPoint","Microsoft Excel"]
		},
		experienceInfo: {
			'Malagasy Mitsabo': {
				description: 'A patient management software',
				techs: ['Python 3']
			},
			'Intermall': {
				description: 'A mobile application for online sales',
				techs: ['Flutter',]
			},
			'MadArt': {
				description: 'A website that shows the beauty of Madagascar',
				techs: ['HTML 5', 'CSS 3']
			}
		}
	},
	/*****************************************************************************************************************************/
	/* FANIRY */
	{
		assets: {
			description: "Computer Science Student",
			photo: "faniry_height.png",
		},
		personalInfo: {
			firstname: "Fanirintsoa Mathieu",
			lastname: "Andrianandraina",
			faculty: "Computer Science, Applied Statistics and Artificial Intelligence",
			age: 21,
			tel: "+261 34 72 363 79",
			email: "fanirintsoaandrianandraina@gmail.com"
		},
		educationInfo:{
			university: [
				{
					school: "Institut Supérieur Polytechnique de Madagascar",
					grade: "3rd year in Computer Science, Applied Statistics and Artificial Intelligence",
					duration: "2019 ~ Now"
				},
			],
			highschool: [
				{
					school: "Lycée Privée Catholique Notre Dame de Fatima",
					grade: "D Baccalaureate",
					duration: "2016 ~ 2019"
				},
			],
			college: [
				{
					school: "Lycéee Privée Catholique Notre Dame de Fatima",
					grade: "BEPC",
					duration: "2012 ~ 2016"
				},
			]
		},
		skillsInfo:{
			framework: ["NodeJs","ReactJs","BOOTSTRAP","Flutter"],
			programmation: ["HTML 5","CSS 3","JavaScript","Java","C Programing Language","PHP","Pascal Programing Language"],
			modelization: ["MERISE"],
			db: ["MySQL"],
			officeAutomation: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"]
		},
		experienceInfo: {
		
			'Secooly': {
				description: 'A mobile application for online sales',
				techs: ['Flutter',]
			},
			'RestoMS': {
				description: 'Student management web application',
				techs: ['Code Igniter']
			},
			'Book-e': {
				description: 'Book management web application',
				techs: ['PHP', 'MySQL', 'Bootstrap']
			},
			'Lyrics Mathieu': {
				description: 'Mobile application containing music lyrics',
				techs: ['Flutter']
			},
			'Online Diplome': {
				description: 'Web application that digitalize the obtain of baccalaureate certificates',
				techs: ['NodeJs', 'VueJs']
			},
		}
	},
	/****************************************************************************************************************************/
	/* TSIORY */
	{
		assets: {
			description: "Front End Developer",
			photo: "tsiory_height.png",
		},
		personalInfo: {
			firstname: "Tsiory Herinjato",
			lastname: "Andriamahefa",
			faculty: "Computer Science, Applied Statistics and Artificial Intelligence",
			age: 21,
			tel: "+261 34 44 382 88",
			email: "andriamahefatsiory1@gmail.com"
		},
		educationInfo: {
			university: [
				{
					school: "Institut Supérieur Polytechnique de Madagascar",
					grade: "3rd year in Computer Science, Applied Statistics and Artificial Intelligence",
					duration: "2019 ~ Now"
				},
			],
			highschool: [
				{
					school: "Lycée Jules Ferry Faravohitra",
					grade: "D Baccalaureate",
					duration: "2016 ~ 2019"
				},
			],
			college: [
				{
					school: "International Light College",
					grade: "",
					duration: "2012 ~ 2016"
				},
			]
		},
		// To be confirmed information
		// educationInfo:[
		// 	"2019 ~ 2020 : Institut Supérieur Polytechnique de Madagascar",
		// 	"2005 ~ 2019 : Lycée Privée Catholique Notre Dame de Fatima"
		// ],
		skillsInfo:{
			framework: ["VueJS 3","BOOTSTRAP","Flutter"],
			programmation: ["HTML 5","CSS 3","JavaScript","Java","C Programing Language","PHP","Pascal Programing Language", "Python"],
			modelization: ["MERISE"],
			db: ["MySQL"],
			officeAutomation: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"]
		},
		experienceInfo: {
			'Online Diplome': {
				description: 'Web application that digitalize the obtain of baccalaureate certificates',
				techs: ['NodeJs', 'VueJs']
			},
			'Point-Walk': {
				description: 'Staff attendance sotfware',
				techs: ['Python']
			},
			'Flash Delivery': {
				description: 'Mobile Application that manage service delivery',
				techs: ['Flutter']
			}
		}
	}
];

export default memberList;
/*{
	memberList: memberList,	// Because it is an array, exporting it without precising the variable would cause it to consider memberList as an object
}*/
