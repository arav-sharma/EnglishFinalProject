import React from 'react';
import Link from 'next/link';
import "@/app/globals.css"

const ArticleBody: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="m-auto w-full text-center md:w-7/12">
            <p className="m-auto my-5 w-10/12 text-sm font-light text-stone-400 dark:text-stone-400 md:text-base">
              May 14th, 2024
            </p>
            <h1 className="mb-10 font-title text-3xl font-bold text-stone-100 dark:text-white md:text-6xl mt-5">
              Artificial Intelligence in K-12 Education
            </h1>

            <Link href="/"><p className="text-md m-auto w-10/12 text-stone-200 dark:text-stone-400 md:text-lg">
              <u>Return to Article ↗</u>
            </p></Link>
          </div>
          <h1 className="mb-10 font-title text-3xl font-bold text-stone-100 dark:text-white mt-20">
            In-Depth Explaination of Data
          </h1> 
          
          <hr className="mb-10 w-3/5"/>

          <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">How Reputable Is Your Data?</h2>
          <p className="text-md m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            As discussed in the main article, various datasets were complied by <a href="www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Forbes Advisor ↗</u></a> independent of this article. While conflicting opinions exist around the intentions of Forbes Advisor, independent third-party sources argue that while they may have outside factor-driven intentions to what they report (e.g. what topic to create an article on), data collected is objective and Forbes attests to their editorial team being independent. You can find more information regarding the integrity of Forbes Advisor & Forbes <a href="https://www.forbes.com/advisor/about-us/#:~:text=Fact%20Checked%3A%20Members%20of%20our,academic%20institutions%20and%20advocacy%20associations."><u>here ↗</u></a>. All data shown in the graphs was sourced from Forbes. All graphs were independently made but mirror data that can be found in <Link href="/references"><u>the references tab ↗</u></Link>. 
          </p>  

          <h2 id="figureOne" className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">Explaination of Figure 1: Concerns of Educator&apos;s of Student use of Artificial Intelligence in School</h2>
          <div className="hover:scale-105 hover:shadow-glow my-6 mx-auto w-2/5 bg-transparent border-0 dark:bg-gray-700 transition-transform duration-700 ease-in-out p-5">
            <img
              className="w-full h-auto"
              alt='graph-data-1-educator-concerns'
              src="/Images/EducatorConcerns.png"
              srcSet="/Images/EducatorConcerns.png"
            />
          </div>
          <p className="text-md mb-6 text-right m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>
          <p className="text-md m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            This bar graph displays the results of a survey concerning educators&apos; concerns about the use of artificial intelligence in education. The categories of concerns are listed along the y-axis, and the corresponding percentage of educators who share each concern is represented on the x-axis. This is the breakdown of the data shown in the graph:
          </p>  
        
          <ul className="text-stone-400 dark:text-stone-400 w-2/5 overflow-wrap leading-8 text-justify list-none pl-2">
            <li>Plagiarism in essays/work: <span className="text-stone-400 dark:text-stone-400">65% of educators are concerned about increased plagiarism with the use of AI.</span></li>
            <li>Reduced human interaction in learning: <span className="text-stone-400 dark:text-stone-400">62% believe that AI will decrease the amount of human interaction in education.</span></li>
            <li>Data privacy and security: <span className="text-stone-400 dark:text-stone-400">42% are worried about the implications of AI on data privacy and security.</span></li>
            <li>Job displacement for teachers: <span className="text-stone-400 dark:text-stone-400">30% fear that AI could lead to job losses among teachers.</span></li>
            <li>Unequal access to AI-powered resources: <span className="text-stone-400 dark:text-stone-400">30% worry about the disparities in accessing AI tools, leading to unequal opportunities.</span></li>
            <li>Automation of manual tasks: <span className="text-stone-400 dark:text-stone-400">23% of the surveyed educators see the automation of manual tasks as a concern.</span></li>
            <li>No concerns in particular: <span className="text-stone-400 dark:text-stone-400">5% of the respondents indicated they have no particular concerns regarding AI in education.</span></li>
            <li>Other/Not sure: <span className="text-stone-400 dark:text-stone-400">2% either have other concerns not listed or are not sure about their concerns.</span></li>
          </ul>

          <p className="text-md mt-8 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            The significance of the data presented in the graph is varied but prominent, reflecting deep-rooted concerns among educators about the rapid integration of AI in educational settings. These concerns signal critical areas that policymakers, technologists, and educational leaders must address to ensure that AI tools enhance rather than detract from educational experiences.
          </p>  
          
          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 1.1: Students Plagiarizing in Essays / Work with AI (65%)
          </h3> 
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
          The concern about increased plagiarism with the use of AI highlights a significant challenge for maintaining academic integrity. As AI tools become more capable of generating complex texts, educators worry that students may rely on these tools instead of developing their own skills and ideas. This reliance could potentially diminish the value of original work and critical thinking, which are core to educational achievements, particularly in K-12 Education where development of critical thinking is crucial for a student.
          </p>  

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 1.2: Reduced Human Interaction in Learning (62%)
          </h3> 
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            The fear that AI will decrease the amount of human interaction in educational environments is equally troubling. Human interaction is crucial for personalized learning experiences and for developing essential social skills. If AI tools replace these interactions, it could impact students&apos; emotional and social development and weaken the bond that facilitates effective teaching and mentoring.
          </p>  

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 1.3: Concerns over Data Privacy and Security (42%)
          </h3> 
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
           This concern reflects broader issues with digital tools, as educators worry about how student data is managed by AI systems. The handling of sensitive information, concerns over consent, security breaches, and potential misuse are all critical issues. Ensuring robust data protection mechanisms is essential to maintain trust and safety in AI-enhanced education.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 1.4: Displacement of Employement for Teachers (30%)
          </h3> 
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Approximately a third of educators are apprehensive that AI might replace human roles, which is particularly sensitive in teaching—a field deeply rooted in personal interaction, empathy, and adaptability. While AI can potentially enhance educational delivery, there is a real fear about it diminishing the teacher&apos;s role, leading to job losses and a devaluation of the profession.
          </p>
          
          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 1.5: Concerns over Unequal Access to AI Powered Resources (30%)
          </h3> 
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Similarly, a third of educators are concerned with the potential for AI to create or worsen disparities in educational opportunities. If AI tools and resources are not equitably distributed, students in underprivileged or rural areas may fall further behind their peers in more affluent or technologically advanced settings. Addressing this issue is crucial to prevent widening the educational gap.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 1.6: Automation of Manual Tasks (23%)
          </h3> 
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Almost a fourth of educators agree that there are significant concerns about the implications of automation for controlling and personalizing educational processes. One of the primary concerns is the risk of a &apos;one-size-fits-all&apos; approach. While AI can manage data and perform tasks based on predefined algorithms, it may not fully capture the nuanced needs of individual students as effectively as a human teacher can. Personalization in education is not merely about adapting to academic performance but also involves understanding students&apos; emotional and social development, interests, and unique learning styles. AI, in its current form, might not be adept at making these fine distinctions, which could lead to a more generic and less engaging learning experience.
          </p>
          

          <hr className="mb-10 w-3/5"/>

          <h2 id="figureTwo" className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">Explaination of Figure 2: Opinions of Educator&apos;s of Student Use of AI-Related Cheating in School</h2>
          <div className="hover:scale-105 hover:shadow-glow my-6 mx-auto w-2/5 bg-transparent border-0 dark:bg-gray-700 transition-transform duration-700 ease-in-out p-5">
            <img
              className="w-full h-auto"
              alt='graph-data-1-educator-concerns'
              src="/Images/EducatorOpinions.png"
              srcSet="/Images/EducatorOpinions.png"
            />
          </div>
          <p className="text-md mb-6 text-right m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>
          <p className="text-md m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            This bar graph displays the results of a survey concerning educators&apos; awareness of AI-related cheating methods. The methods of cheating are listed along the y-axis, and the corresponding percentage of educators who are aware of each method is represented on the x-axis. This is the breakdown of the data shown in the graph:
          </p>

          <ul className="text-stone-400 dark:text-stone-400 w-2/5 overflow-wrap leading-8 text-justify list-none pl-2">
            <li>Using AI-powered essay generators to complete written assignments: <span className="text-stone-400 dark:text-stone-400">64% of educators are aware of this cheating method.</span></li>
            <li>Utilizing chatbots or voice assistants for assistance during exams: <span className="text-stone-400 dark:text-stone-400">31% of educators are aware of this cheating method.</span></li>
            <li>Employing AI-driven translation tools during assessments: <span className="text-stone-400 dark:text-stone-400">29% of educators are aware of this cheating method.</span></li>
            <li>Copying or sharing AI-generated code or algorithms for coding assignments: <span className="text-stone-400 dark:text-stone-400">28% of educators are aware of this cheating method.</span></li>
            <li>N/A: I&apos;m not aware of any AI-related cheating methods: <span className="text-stone-400 dark:text-stone-400">10% of educators are not aware of any specific AI-related cheating methods.</span></li>
            <li>Other/Not sure: <span className="text-stone-400 dark:text-stone-400">4% either are aware of other methods not listed or are not sure about any.</span></li>
          </ul>

          <p className="text-md mt-8 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            The significance of the data presented in the graph is varied but prominent, reflecting deep-rooted concerns among educators about the possible misuse of AI in educational settings. These concerns highlight critical areas that need stringent monitoring and policies to ensure that AI tools are used ethically and enhance educational integrity.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 2.1: Awareness of Using AI-powered Essay Generators (64%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            A significant majority of educators are aware that AI-powered essay generators can be misused by students to complete written assignments. This awareness is crucial for developing strategies to detect and mitigate such forms of cheating, ensuring that students engage in authentic learning experiences.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 2.2: Awareness of Utilizing Chatbots or Voice Assistants During Exams (31%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            About a third of educators are aware that chatbots or voice assistants can be used by students for unauthorized assistance during exams. This highlights the need for secure testing environments that can prevent the use of such AI tools to maintain the integrity of the examination processes.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 2.3: Awareness of Employing AI-driven Translation Tools During Assessments (29%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Nearly 30% of educators are aware of the use of AI-driven translation tools during assessments. This awareness is important for addressing potential academic dishonesty in language learning environments and ensuring that assessments accurately reflect a student&apos;s own language proficiency.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 2.4: Awareness of Using AI-Generated Code or Algorithms (28%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Approximately 28% of educators are aware that students might copy or share AI-generated code or algorithms for coding assignments. This issue underscores the importance of teaching ethical programming practices and developing systems to detect and discourage the submission of non-original code.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 2.5: Awareness of Not Knowing Any AI-Related Cheating Methods (10%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            10% of educators admit they are not aware of any AI-related cheating methods. This indicates a gap in understanding and awareness that could be addressed through professional development focused on emerging technologies and their potential misuse in academic settings.
          </p>

          
          <hr className="mb-10 w-3/5"/>

          <h2 id="figureThree" className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">Explaination of Figure 3: Educator Accounts of Beneficial Uses of AI</h2>
          <div className="hover:scale-105 hover:shadow-glow my-6 mx-auto w-2/5 bg-transparent border-0 dark:bg-gray-700 transition-transform duration-700 ease-in-out p-5">
            <img
              className="w-full h-auto"
              alt='graph-data-3-educator-AI-encounters'
              src="/Images/EducatorAIEncounters.png"
              srcSet="/Images/EducatorAIEncounters.png"
            />
          </div>
          <p className="text-md mb-6 text-right m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p> 

          <p className="text-md m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Some educators have closed the gap and are aware of how they can use AI to their advantage. Several educators have stated that they have seen or used various AI tools for educational purposes, such as AI-powered educational games or AI-powered adaptive learning systems, where the AI personalizes learning to an individual student. These tools are part of a broader spectrum of AI applications gaining traction in the educational sector. 
          </p>

          <ul className="text-stone-400 dark:text-stone-400 w-2/5 overflow-wrap leading-8 text-justify list-none pl-2">
            <li>AI-powered educational games: <span className="text-stone-400 dark:text-stone-400">51% of educators report using AI educational games to create engaging learning environments.</span></li>
            <li>Adaptive learning platforms: <span className="text-stone-400 dark:text-stone-400">43% utilize platforms that tailor content and pacing to each student&apos;s needs.</span></li>
            <li>Automated grading and feedback systems: <span className="text-stone-400 dark:text-stone-400">41% adopt systems that automate grading and provide instant feedback.</span></li>
            <li>Chatbots for student support: <span className="text-stone-400 dark:text-stone-400">35% employ AI chatbots that offer round-the-clock assistance and streamline student queries.</span></li>
            <li>Intelligent tutoring systems: <span className="text-stone-400 dark:text-stone-400">29% implement tutoring systems that simulate personalized teaching experiences.</span></li>
            <li>Other/Not sure: <span className="text-stone-400 dark:text-stone-400">14% of educators are exploring or unsure about other AI applications.</span></li>
          </ul>

          

          <p className="text-md mt-8 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
          This illustrates the various ways in which artificial intelligence is transforming the educational landscape. It highlights the adoption rates among educators for AI-powered tools and technologies such as educational games, adaptive learning platforms, automated grading systems, and chatbots for student support. Additionally, it covers the use of intelligent tutoring systems that mimic personalized teaching experiences. The list also acknowledges a segment of educators who are either exploring other potential AI applications or remain unsure about its broader implications.
          </p>

          


          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 3.1: AI-powered Educational Games (51%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Over half of educators utilize AI-powered educational games, which leverage artificial intelligence to adapt the game&apos;s difficulty and content to the individual learning levels of students. This approach not only makes learning more engaging but also ensures that students are challenged just right, enhancing their learning potential and retention.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 3.2: Adaptive Learning Platforms (43%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Adaptive learning platforms are leveraged by 43% of educators. These platforms analyze student performance in real-time to dynamically adjust the difficulty and type of content presented. This personalized learning environment helps students master topics at their own pace, improving outcomes by addressing individual learning gaps.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 3.3: Automated Grading and Feedback Systems (41%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            A significant portion of educators, 41%, have adopted automated grading and feedback systems. These tools can quickly assess student submissions and provide immediate, personalized feedback, drastically reducing the time educators spend on grading assignments and allowing them more time to focus on teaching and supporting students directly.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 3.4: Chatbots for Student Support (35%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Thirty-five percent of educators use chatbots to provide real-time, 24/7 support to students. These AI-powered chatbots can answer common questions, guide students through learning materials, and even provide explanations and hints when students are stuck, making learning more accessible and reducing response times significantly.
          </p>

          <h3 className="mb-3 font-title text-lg font-bold text-stone-100 dark:text-white mt-15">
            Figure 3.5: Intelligent Tutoring Systems (29%)
          </h3>
          <p className="text-md mt-3 m-auto w-2/5 text-stone-400 dark:text-stone-400 md:text-lg mb-10">
            Nearly a third of educators are implementing intelligent tutoring systems. These systems use AI to mimic the benefits of one-on-one tutoring, providing personalized instruction and feedback based on the student&apos;s specific needs and learning patterns. They are particularly effective in subjects where students benefit from repeated practice and feedback, such as mathematics and languages.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
