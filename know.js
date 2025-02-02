// Stream Details Data
const streamDetails = {
  BioScience: {
    description: "BioScience focuses on the study of living organisms, including biology, biotechnology, and healthcare.",
    details: "It involves research, experiments, and applications in medicine, genetics, and environmental science.",
    entranceExams: "NEET, AIIMS, JIPMER, and other medical entrance exams.",
    jobOpportunities: "Doctor, Biotechnologist, Geneticist, Microbiologist, and more.",
    image: "images/bioscience.jpg"
  },
  ComputerScience: {
    description: "Computer Science involves the study of computers, programming, algorithms, and software development.",
    details: "It includes areas like artificial intelligence, data science, cybersecurity, and software engineering.",
    entranceExams: "JEE Main, JEE Advanced, BITSAT, and other engineering entrance exams.",
    jobOpportunities: "Software Developer, Data Scientist, Cybersecurity Analyst, AI Engineer, and more.",
    image: "images/computerscience.jpg"
  },
  Commerce: {
    description: "Commerce focuses on business, economics, finance, and trade.",
    details: "It includes accounting, marketing, management, and financial planning.",
    entranceExams: "CA Foundation, CAT, CLAT, and other commerce-related exams.",
    jobOpportunities: "Chartered Accountant, Financial Analyst, Marketing Manager, Business Consultant, and more.",
    image: "images/commerce.jpg"
  },
  Humanities: {
    description: "Humanities involve the study of human culture, history, literature, and social sciences.",
    details: "It includes subjects like philosophy, sociology, psychology, and political science.",
    entranceExams: "UPSC, CLAT, and other humanities-related exams.",
    jobOpportunities: "Historian, Psychologist, Sociologist, Writer, and more.",
    image: "images/humanities.jpg"
  }
};

// Get the Selected Stream from the URL Parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedStream = urlParams.get('stream');

// Display the Stream Details
if (selectedStream && streamDetails[selectedStream]) {
  // Update Description and Details
  document.getElementById('stream-description').textContent = streamDetails[selectedStream].description;
  document.getElementById('stream-details').textContent = streamDetails[selectedStream].details;

  // Update Entrance Exams and Job Opportunities
  document.getElementById('entrance-exams-info').textContent = streamDetails[selectedStream].entranceExams;
  document.getElementById('job-opportunities-info').textContent = streamDetails[selectedStream].jobOpportunities;

  // Update Stream Image
  const streamImage = document.getElementById('stream-image');
  streamImage.src = streamDetails[selectedStream].image;
  streamImage.alt = `${selectedStream} Image`;
} else {
  // Handle Invalid or Missing Stream
  document.getElementById('stream-description').textContent = "No stream selected.";
}

// Toggle Details Sections
function showDetails(type) {
  const entranceExams = document.getElementById('entrance-exams');
  const jobOpportunities = document.getElementById('job-opportunities');

  if (type === 'entrance-exams') {
    entranceExams.classList.add('active');
    jobOpportunities.classList.remove('active');
  } else if (type === 'job-opportunities') {
    jobOpportunities.classList.add('active');
    entranceExams.classList.remove('active');
  }
}
