export default function handler(req, res) {
	res.status(200).json([
		{
			id: "q1",
			institution: "Richfield Graduate Institute of Technology",
			qualification: "BsC IT SAQA ID # 35954",
			dateFrom: "January 2019",
			dateTo: "December 2021",
			comments: ["Specialized in Systems Development", "8 Distinctions"],
		},
		{
			id: "q2",
			institution: "Udemy",
			qualification: "The Complete Web Developer in 2022: Zero to Mastery",
			dateFrom: "May 2022",
			dateTo: "August 2022",
			comments: [,
			],
      link: "https://ude.my/UC-1d4f7fd3-ec81-4317-b99d-5747cbcd16ac"
		},
		{
			id: "q3",
			institution: "MiTx Online",
			qualification:
				"6.00.2x Introduction to Computational Thinking and Data Science",
			dateFrom: "November 2018",
			dateTo: "December 2018",
			comments: [,
			],
      link: "https://courses.edx.org/certificates/fa03b6b8c0a04312945e938093948cd2"
		},
		{
			id: "q4",
			institution: "MiTx Online",
			qualification:
				"6.00.1x: Introduction to Computer Science and Programming Using Python",
			dateFrom: "August 2018",
			dateTo: "November 2018",
			comments: [
				,
			],
      link: "https://courses.edx.org/certificates/4a21f40f94dc4d5da93426422982fc1b"
		},
		{
			id: "q5",
			institution: "Lyttleton Manor High School",
			qualification: "National Senior Certificate",
			dateFrom: "January 2006",
			dateTo: "December 2010",
			comments: ["Achieved half colours for academics."],
		},
	]);
}