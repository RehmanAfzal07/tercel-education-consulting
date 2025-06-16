import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card'; // Adjust path based on your setup


const commonAppCards = [
  {
    heading: '✅Purpose & Simplicity',
    description: 'The Common App streamlines the application process, allowing you to apply to multiple colleges using one core application, saving time and effort.',
   },
  {
    heading: '✅How It Works',
    description: " Youll complete general sections (profile, family, education, activities, personal essay) once, and then submit college-specific supplements and questions for each institution.",
  },
  {
    heading: '✅Key Benefits',
    description: 'Provides comprehensive resources, guidance, essay prompts, and access initiatives, making college applications more accessible and equitable for students.',
  }
];

const ivyLeagueUniversities = [
  {
    name: 'Brown University',
    location: 'Providence, Rhode Island',
    founded: '1764, known for admitting students regardless of religious affiliation early in its history.',
    academic: 'Famous for its student-centric Open Curriculum, allowing undergraduates to design their own course of study from over 80 concentrations. Emphasizes independent thought and intellectual exploration.',
    campusVibe: 'A supportive, collaborative, and intellectually vibrant community with numerous student-run identity and cultural centers. Offers unique programs like the Brown-RISD Dual Degree. Strong focus on undergraduate research and social impact.',
    applying: 'Primarily uses the Common Application for traditional first-year students. Requires supplemental essays (typically 3 essays of 200–250 words and a few short answers) focusing on the Open Curriculum, community contributions, and personal interests.'
  },
  {
    name: 'Columbia University',
    location: 'New York City, New York',
    founded: '1754 as King\'s College. A leading research university with a rich history of innovation.',
    academic: 'Comprises Columbia College (liberal arts), Fu Foundation School of Engineering and Applied Science, and the School of General Studies. Renowned for its Core Curriculum, exposing all undergraduates to a wide range of foundational texts and disciplines.',
    campusVibe: 'Dynamic and diverse, deeply integrated with the energy and resources of NYC. Offers a global perspective through various international programs, a diverse student body, and over 500 student groups.',
    applying: 'Accepts the Common Application, Coalition Application, and QuestBridge Application. Features distinctive supplemental essays (usually list questions and several short essays around 150 words) that probe intellectual curiosity, fit with Columbia\'s urban setting, and academic interests.'
  },
  {
    name: 'Cornell University',
    location: 'Ithaca, New York',
    founded: '1865 with the vision "any person can find instruction in any study." A unique private university with a public land-grant mission.',
    academic: 'Offers a vast range of programs across its seven undergraduate colleges and schools, from arts and sciences to engineering, agriculture, and hotel administration. Emphasizes research, public engagement, and hands-on learning.',
    campusVibe: 'A large, diverse campus with over 1,000 student organizations, rich traditions (like Dragon Day & Slope Day), and a strong sense of community within its residential colleges. Set in a beautiful natural landscape.',
    applying: 'Uses the Common Application. Requires a Cornell-specific Writing Supplement with prompts (essay length varies, typically one main essay up to 650 words depending on the college) tailored to the undergraduate college/school to which the student is applying.'
  },
  {
    name: 'Dartmouth College',
    location: 'Hanover, New Hampshire',
    founded: '1769. A liberal arts college with a strong focus on undergraduate education.',
    academic: 'Renowned for its commitment to undergraduate teaching, close student-faculty interaction, and the Dartmouth Plan (D-Plan), which offers year-round, flexible academic scheduling. Encourages research and global experiences.',
    campusVibe: 'Strong sense of community, fostered by its rural setting, house communities, and traditions like the Dartmouth Outing Club and vibrant Greek life. Offers a blend of intellectual rigor and outdoor adventure.',
    applying: 'Accepts the Common Application and QuestBridge Application. Requires the Dartmouth Writing Supplement (usually 1 short essay up to 100 words and 2 essays up to 250 words each) which includes prompts about personal fit and intellectual curiosity. A peer recommendation is also an option.'
  },
  {
    name: 'Harvard University',
    location: 'Cambridge, Massachusetts',
    founded: '1636, the oldest institution of higher learning in the United States.',
    academic: 'Offers a rich liberal arts and sciences curriculum through Harvard College. Known for its unparalleled academic resources, groundbreaking research opportunities, and distinguished faculty.',
    campusVibe: 'A historic and vibrant campus with a strong residential House system that fosters community. Offers extensive extracurriculars (over 450 student organizations), from arts and athletics to numerous student organizations, all with a global reach.',
    applying: 'Accepts the Common Application or the Coalition Application. Requires several short-answer supplemental questions (typically 5 questions, 150 words each) designed to assess an applicant\'s personality, intellectual interests, and potential contributions.'
  },
  {
    name: 'University of Pennsylvania',
    location: 'Philadelphia, Pennsylvania',
    founded: 'By Benjamin Franklin in the 1740s, emphasizing practical knowledge and public service.',
    academic: 'Unique "One University" policy allows students to take courses across its four undergraduate schools: College of Arts & Sciences, School of Engineering and Applied Science, School of Nursing, and The Wharton School. Strong emphasis on interdisciplinary study, research, and real-world impact.',
    campusVibe: 'A dynamic urban campus fostering innovation and collaboration. Offers a rich student life with hundreds of clubs, cultural organizations, extensive arts and athletics programs, and a strong sense of community within a bustling city.',
    applying: 'Accepts the Common Application, Coalition Application, and QuestBridge Application. Requires specific supplemental essays (usually 2–3 essays of 150–200 words) tailored to the chosen undergraduate school and general prompts exploring community and intellectual curiosity.'
  },
  {
    name: 'Princeton University',
    location: 'Princeton, New Jersey',
    founded: '1746 as the College of New Jersey. A world-renowned research university with a strong commitment to undergraduate teaching.',
    academic: 'Grounded in the liberal arts, with a strong emphasis on independent research, culminating in the senior thesis. Encourages close student-faculty interaction and exploration across disciplines.',
    campusVibe: 'A picturesque campus with a strong sense of tradition and community, including its unique eating clubs and over 500 student organizations. Offers a vibrant intellectual and social environment with cultural centers and civic engagement opportunities.',
    applying: 'Accepts the Common Application or Coalition Application, as well as QuestBridge. Features Princeton-specific questions (A.B./B.S.E. essays around 250 words; "Your Voice" essays of 500 and 250 words; "More About You" short answers around 50 words). A graded written paper is also required.'
  },
  {
    name: 'Yale University',
    location: 'New Haven, Connecticut',
    founded: '1701 as the Collegiate School. One of the oldest and most prestigious universities in the U.S.',
    academic: 'Offers a comprehensive liberal arts education through Yale College. Known for its residential college system, which fosters tight-knit communities. Strong programs across humanities, arts, sciences, and social sciences, with extensive research opportunities.',
    campusVibe: 'A rich tapestry of academic rigor, artistic expression, and community engagement, deeply rooted in its historic residential college system. Offers a vibrant cultural scene (museums, theater, music) and hundreds of student groups in New Haven.',
    applying: 'Accepts the Common Application, Coalition Application, and QuestBridge Application. Requires Yale-specific short answer questions (typically several around 35 words each) and essays (one 200-word essay on an academic topic and one 125-word essay on "Why Yale?"). Applicants also choose one of three prompts for a 400-word essay.'
  }
];


const CraftingApplicaiton=[
      {
        title: '🎯 Ace the Personal Statement',
        desc: 'This is your chance to share your unique story, voice, and personality. Focus on authenticity, reflection, and a narrative that reveals who you are beyond grades and scores. Show, don\'t just tell.'
      },
      {
        title: '🎯 Master the Supplemental Essays',
        desc: 'Tailor each essay meticulously. Research school-specific programs and values to answer "Why this school?" authentically.'
      },
      {
        title: '🎯 Showcase Impactful Extracurriculars',
        desc: 'Demonstrate depth, leadership, and measurable impact in a few activities rather than a long list. Use action verbs and quantifiable outcomes.'
      },
      {
        title: '🎯 Secure Strong Letters of Recommendation',
        desc: 'Choose teachers who know you well and can speak to your academic and personal growth with specific stories.'
      },
      {
        title: '🎯 Utilize the "Additional Information" Section Wisely',
        desc: 'Use this optional space for essential context only. Be factual, concise, and relevant.'
      },
      {
        title: '🎯 Start Early and Research Thoroughly',
        desc: 'Give yourself months, not weeks. Know each school’s identity and tailor every part of your application to fit.'
      }
    ]

const commonMistakes=[
      {
        title: 'ℹ️ Generic Applications',
        desc: 'Failing to tailor essays and responses to each specific university. Reusing content without customization is a major red flag.'
      },
      {
        title: 'ℹ️ Neglecting Supplementals',
        desc: 'Focusing only on the main essay and under-developing school-specific supplements.'
      },
      {
        title: 'ℹ️ Superficial Extracurriculars',
        desc: 'Listing many activities without demonstrating depth, impact, or commitment.'
      },
      {
        title: 'ℹ️ Not Demonstrating "Fit"',
        desc: 'Failing to show why you belong at that particular university or how you align with its values and culture.'
      },
      {
        title: 'ℹ️ Typos and Errors',
        desc: 'Submitting applications with grammar mistakes or incorrect info. Proofread thoroughly.'
      },
      {
        title: 'ℹ️ Last-Minute Rush',
        desc: 'Waiting until the last minute to submit can cause stress, reduce quality, and lead to technical problems.'
      }
    ]


const rating=[
      { name: 'Harvard', rate: '3.2%' },
      { name: 'Yale', rate: '4.4%' },
      { name: 'Princeton', rate: '4.0%' },
      { name: 'Columbia', rate: '3.6%' },
      { name: 'Brown', rate: '5.1%' },
      { name: 'Dartmouth', rate: '6.0%' },
      { name: 'Cornell', rate: '7.7%' },
      { name: 'UPenn', rate: '5.8%' }
    ]    


const IvyLeague = () => {
  return (
    <div className="mt-12 px-6 md:px-20 text-gray-800">
      {/* First Div */}
      <div className="mb-12">
        <h4 className="text-sm font-semibold text-left text-red-500 mb-2">
          NAVIGATING THE IVY LEAGUE
        </h4>
        <h1 className="text-3xl font-bold mb-4">
          Your Guide to the Common App & Ivy League Universities in the USA
        </h1>
        <p className="text-gray-600 max-w-3xl text-left">
          Applying to Ivy League universities is a significant step, and the Common Application is your primary gateway. This guide provides an overview of the Common App, insights into each Ivy League institution, and tips to help you craft a compelling application.
        </p>
      </div>

      {/* Second Div */}
      <div className="mb-12 ">
        <h2 className="text-2xl font-semibold m-6">Understanding the Common Application</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-">
          {commonAppCards.map((card, index) => (
            <div key={index} className="bg-white m-2 shadow-2xl  rounded-lg p-6 ">
              <h3 className="text-xl font-semibold mb-2">{card.heading}</h3>
              <p className="text-gray-600 text-xs font-extralight">{card.description}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Third Div */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet the Ivy League</h2>
        <p className="text-xs text-gray-600 mb-6 max-w-3xl">
          The Ivy League is a group of eight highly selective private research universities in the Northeastern United States, renowned for their academic excellence, historic campuses, and significant contributions to research and global leadership.
        </p>
        <div className="grid grid-cols-1 gap-6">
          {ivyLeagueUniversities.map((uni, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition rounded-lg">
              <CardHeader>
                <h3 className="text-lg font-bold text-red-500">{uni.name}</h3>
              </CardHeader>
              <CardContent className="text-xs text-gray-700 space-y-1">
                <p><strong> Location:</strong> {uni.location}</p>
                <p><strong> Founded:</strong> {uni.founded}</p>
                <p><strong> Academic Focus:</strong> {uni.academic}</p>
                <p><strong> Campus Vibe:</strong> {uni.campusVibe}</p>
                <p><strong> Applying:</strong> {uni.applying}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>




   
<div className="my-12">
  <h2 className="text-2xl font-semibold mb-4">Why So Selective? Understanding Ivy League Admissions</h2>
  <p className="text-gray-600 mb-6 max-w-3xl text-sm">
    Ivy League universities are among the most selective institutions in the world, with thousands of high-achieving applicants competing for limited spots. Their holistic admissions process considers academic excellence, leadership, extracurriculars, essays, and personal qualities.
  </p>
  <div className="grid grid-cols-4 gap-4">
    {rating.map((uni, index) => (
      <div key={index} className="bg-white shadow-sm p-4 text-center rounded border border-gray-200">
        <h3 className="font-bold text-red-500">{uni.name}</h3>
        <p className="text-gray-700 text-lg font-bold">{uni.rate}</p>
      </div>
    ))}
  </div>
</div>

{/* Section 5: Crafting Your Ivy League Application */}
<div className="my-12">
  <h2 className="text-2xl font-semibold mb-4">Crafting Your Ivy League Application via Common App</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {CraftingApplicaiton.map((tip, index) => (
      <div key={index} className="bg-white border border-gray-200 shadow-sm p-4 rounded">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{tip.title}</h3>
        <p className="text-sm text-gray-600">{tip.desc}</p>
      </div>
    ))}
  </div>
</div>

{/* Section 6: Common Mistakes to Avoid */}
<div className="my-12">
  <h2 className="text-2xl font-semibold mb-4">Common Mistakes to Avoid</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {commonMistakes.map((mistake, index) => (
      <div key={index} className="bg-white border border-red-200 shadow-sm p-4 rounded">
        <h3 className="text-lg font-semibold text-red-600 mb-2">{mistake.title}</h3>
        <p className="text-sm text-gray-600">{mistake.desc}</p>
      </div>
    ))}
  </div>
</div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Official Resources</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h3 className="text-xl font-medium mb-2 hover:text-red-600 transition-colors">
            The Common Application Official Website
          </h3>
          <p className="text-gray-700">
            The primary source for all Common App related information, deadlines, and support.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <h1 className=" text-gray-800"></h1>
            <ul className='list-disc list-inside'>
            <li className="font-semibold text-red-500">Ivy League Admissions Pages:</li>
            <li>Brown University Admissions</li>
            <li>Columbia University Admissions</li>
            <li>Cornell University Admissions</li>
            <li>Dartmouth College Admissions</li>
            <li>Harvard University Admissions</li>
            <li>University of Pennsylvania Admissions</li>
            <li>Princeton University Admissions</li>
            <li>Yale University Admissions</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-gray-700 text-center" >
        <p>
          Navigating the Ivy League application process can be challenging, but with thorough
          preparation, genuine self-reflection, and careful attention to detail, you can present your strongest self.
        </p>
        <p>Need personalized guidance for your Ivy League journey?</p>
        <span>
          <a
            href="#"
            className="text-red-600  font-medium hover:underline"
          >
            Learn how Tiercel Consulting can empower your application.
          </a>
        </span>
      </div>
    </div>



    </div>
  );
};

export default IvyLeague;
