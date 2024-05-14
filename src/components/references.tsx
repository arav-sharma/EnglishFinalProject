import React from 'react';
import Link from 'next/link';

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
              References & Sources
          </h1>
          <ul className="list-disc pl-10 text-stone-400 dark:text-stone-200 w-2/5 overflow-hidden leading-8 text-left ">
            <hr className="mb-10"/>
            <li className="hanging-indent" id="Bryant">Bryant et al. “How Artificial Intelligence Will Impact K-12 Teachers.” McKinsey & Company, 14 Jan. 2020, <a href="https://www.mckinsey.com/~/media/McKinsey/Industries/Public%20and%20Social%20Sector/Our%20Insights/How%20artificial%20intelligence%20will%20impact%20K%2012%20teachers/How-artificial-intelligence-will-impact-K-12-teachers.pdf"><u>www.mckinsey.com/~/media/McKinsey/Industries/Public%20and%20Social%20Sector/Our%20Insights/How%20artificial%20intelligence%20will%20impact%20K%2012%20teachers/How-artificial-intelligence-will-impact-K-12-teachers.pdf</u></a>. Accessed 16 Apr. 2024.</li> <br/>
            <li className="hanging-indent" id="Diebold">Diebold, Gillian, and Chelsea Han. “How AI Can Improve K-12 Education in the United States.” Information Technology and Innovation Foundation, 25 Apr. 2022, <a href="https://itif.org/publications/2022/04/25/how-ai-can-improve-k-12-education-united-states/"><u>itif.org/publications/2022/04/25/how-ai-can-improve-k-12-education-united-states/</u></a>. Accessed 16 Apr. 2024.</li> <br/>
            <li className="hanging-indent">Hamilton, Ilana. “Artificial Intelligence in Education: Teachers&apos; Opinions on AI in the Classroom.” Forbes, Forbes Magazine, 6 Mar. 2024, <a href="www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/</u></a>. Accessed 5 May 2024. </li> <br/>
            <li className="hanging-indent" id="Khan">Khan, Sal. &quot;How AI Could Save (Not Destroy) Education: Sal Khan: TED.&quot; YouTube, 1 May 2023, <a href="youtu.be/hJP5GqnTrNo"><u>youtu.be/hJP5GqnTrNo</u></a>. </li> <br/>
            <li className="hanging-indent">U.S. Department of Education, Office of Educational Technology. “U.S. Department of Education Shares Insights and Recommendations for Artificial Intelligence.” U.S. Department of Education, 24 May 2023, <a href="https://www.ed.gov/news/press-releases/us-department-education-shares-insights-and-recommendations-artificial-intelligence"><u>www.ed.gov/news/press-releases/us-department-education-shares-insights-and-recommendations-artificial-intelligence</u></a>. Accessed 16 Apr. 2024.</li> <br/>
            <li className="hanging-indent" id="Spector">Spector, Carrie. “Feedback from an AI-Driven Tool Improves Teaching, Stanford-Led Research Finds.” Stanford Graduate School of Education, 8 May 2023, <a href="https://ed.stanford.edu/news/feedback-ai-driven-tool-improves-teaching-stanford-led-research-finds"><u>ed.stanford.edu/news/feedback-ai-driven-tool-improves-teaching-stanford-led-research-finds</u></a>. Accessed 16 Apr. 2024.</li> <br/>
            <li className="hanging-indent" id="Woodruff">Woodruff et al. “Perceptions and Barriers to Adopting Artificial Intelligence in K-12 Education: A Survey of Educators in Fifty States.” IntechOpen, 12 Sept. 2023, <a href="https://www.intechopen.com/chapters/1171043"><u>www.intechopen.com/chapters/1171043</u></a>. Accessed 16 Apr. 2024.</li> 

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
