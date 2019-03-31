var course_arr = new Array("Invertis Institute of Engineering and Technology", "Invertis Institute of Education", "Invertis Institute of Management Studies", "Invertis Institute of Computer Applications", "Invertis Institute of Pharmacy", "Invertis Institute of Law", "Invertis Institute of Architecture", "Invertis Institute of Journalism and Mass Communication", "Invertis Institute of Humanities and Applied Science", "Faculty of Bioscience", "Faculty ofAgriculture");

// branchs
var s_a = new Array();
s_a[0] = "";
s_a[1] = "B.Tech (Plus) M.B.A. -Computer Science(Integrated)|B.Tech. (Plus)  M.B.A. - Electronic & Comm. (Integrated)|B.Tech. (Plus) M.B.A. - Mechanical Engineering (Integrated)|B.Tech. (Plus) M.Tech. - Computer Science (Integrated)|B.Tech. (Plus) M.Tech. - Electronic & Comm. (Integrated)|B.Tech. (Plus) M.Tech. - Mechanical Engg. (Integrated)|B.Tech. in Civil Engineering|B.Tech. in Computer Science & Engineering |B.Tech. in CSE - Specialization in Animation & VFX|B.Tech. in CSE - Specialization in Cloud Technology|B.Tech. in Electrical & Electronic Engineering|B.Tech. in Electrical Engineering|B.Tech. in Electronics & Communication Engineering|B.Tech. in Mechanical Engineering|Diploma in Civil Engineering|Diploma in Computer Science Engineering|Diploma in Electrical Engineering|Diploma in Electronics Engineering|Diploma in Mechanical Engineering (Automobile)|Diploma in Mechanical Engineering (Production Engineering)|M.Tech in Electronic & Communication Engineering|M.Tech. in Computer Science & Engineering|M.Tech. in Mechanical Engineering|Ph.D. (Electrical Engg.)|Ph.D. (Electronics & Communication Engg.)|Ph.D. (Mechanical Engg.)";
s_a[2] = "Bachelor of Arts|Bachelor of Arts & B.Ed (Integrated)-B.A.B.Ed|Bachelor of Elementary Education, B.El.Ed (Approved by NRC,NCTE)|Bachelor of Science & B.Ed (Integrated)-B.Sc.BEd(PCM)|Bachelor of Science & B.Ed (Integrated)-B.Sc.BEd(ZBC)";
s_a[3] = "Bachelor of Business Administration|Bachelor of Commerce|Bachelor of Commerce (Honors)|Bachelor of Commerce(Honors) in Financial Markets|BBA- Financial Markets with NSE|International MBA|Master of Commerce|MBA- Agriculture & Rural Management|MBA- Event Management|MBA- Financial Market with NSE|MBA with Dual Specialization.(HR,IT,Finance,Marketing,IB,Entrepreneurship,OM,PM)|MBA-Business Analytics|MBA-Healthcare & Hospital Mangement|MBA-Retail Management|MBA-Tours & Travel Management|MBA-Urban Development Management|Ph.D. (Management)";
s_a[4] = "Bachelor of Computer Applications.|Bachelor Of Science in Computer Science(Honors)|Master of Computer Applications|Ph.D. (Computer Science & Engg.)";
s_a[5] = "Bachelor of Pharmacy|Diploma in Pharmacy|Ph.D(Pharmacy)";
s_a[6] = "LLB|LLM|Ph.D. (Law)";
s_a[7] = "Bachelor in Architecture(Admissions Closed)";
s_a[8] = "Bachelor of Journalism & Mass Communication|Master of Journalism & Mass Communication|Ph.D. (Journalism & Mass Comm.)";
s_a[9] = "Bachelor of Science (Physics, Chemistry & Maths)|Bachelor of Science in Chemistry (Honors)|Bachelor of Science in Fashion Design|Bachelor of Science in Mathematics (Honors)|Bachelor of Science in Physics (Honors)|Master of Arts in Operations Research|Master of Science in Chemistry|Master of Science in Mathematics|Master of Science in Operations Research|Master of Science in Physics|Ph.D(Physics)|Ph.D. (Chemistry)|Ph.D. (Mathematics)";
s_a[10] = "B.Tech. in Biotechnology|Bachelor of Science (Zoology,Botany,Chemistry)|Bachelor of Science in Biotechnology(Honors)|Master of Science in Biotechnology|Master of Science in Microbiology|Ph.D. (Biotechnology)|Ph.D.(Environmental Sciences)";
s_a[11] = "Bachelor of Science(Agriculture)|Master of Science in Agriculture (Soil Science)|Master of Science in Food Technology";

function populatebranchs(courseElementId, branchElementId) {

	var selectedcourseIndex = document.getElementById(courseElementId).selectedIndex;

	var branchElement = document.getElementById(branchElementId);

	branchElement.length = 0;
	branchElement.options[0] = new Option('Select branch', '');
	branchElement.selectedIndex = 0;

	var branch_arr = s_a[selectedcourseIndex].split("|");

	for (var i = 0; i < branch_arr.length; i++) {
		branchElement.options[branchElement.length] = new Option(branch_arr[i], branch_arr[i]);
	}
}

function allcourses(courseElementId, branchElementId) {
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var courseElement = document.getElementById(courseElementId);
	courseElement.length = 0;
	courseElement.options[0] = new Option('-- Select Institute Name --', '' );
	courseElement.selectedIndex = 0;
	for (var i = 0; i < course_arr.length; i++) {
		courseElement.options[courseElement.length] = new Option(course_arr[i], course_arr[i]);
	}

	// Assigned all courses. Now assign event listener for the branchs.

	if (branchElementId) {
		courseElement.onchange = function () {
			populatebranchs(courseElementId, branchElementId);
		};
	}
}