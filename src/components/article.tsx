import React from 'react';
import Link from 'next/link';


 {/* 1. What is AI
      2. How is AI used currently in schools
      3. Data on AI usage in schools now (Forbes had a good chart)
      4. How can teachers use AI in schools now
      4a. Picture
      5. How can schools transform their style of teaching to involve AI postively (2 reasons how this changes the role of the educator)
      5a. Graphs/Data
      6. Touch on the refutation
      6a. Picture
      7. Conclude */}

const ArticleBody: React.FC = () => {
  return (
    <div className="m-auto text-justify w-8/12 prose-md prose prose-stone dark:prose-invert sm:prose-lg"> 
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg">
          05/14/2024—I&apos;m excited to explore the world of <a className="text-stone-300" href="https://www.google.com/search?sca_esv=be445f0cc062ab15&sca_upv=1&rlz=1C5CHFA_enUS1102US1102&sxsrf=ADLYWIKK1zelo1MqegZEzRx9SUULYbkMkw:1715023403246&q=artificial+intelligence&si=ACC90nweIdwxfIl6sRrg1PmdeiV16YSSK5qUMpXo4wqX3v5TYYeDR0ZmwbWtjFV_5yNZefqPU8sA3f_t7JrsWGzFxBlnLweAm56G23yqv1LM8pGlFkzw1S4Sh-iGxZztkhYbS4P42FSECXIKQpesAGZ9UqH92XfIcA%3D%3D&expnd=1&sa=X&ved=2ahUKEwiTl-2F4PmFAxWj4ckDHa-ZAbcQgCt6BAgREA0&biw=1800&bih=1005&dpr=2"><u>Artificial Intelligence ↗</u></a> (herein by referred to as AI), specifically its role in K-12 Education. We will discuss how the use of AI in K-12 education will impact the traditional role of educators by underlining how the educational system will change for future generations as technology continues to evolve in this field and how educators can use AI to their advantage. 
        </p>  
        {/* Start of Section 1 */}
        <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">What is Artifical Intelligence (AI)?</h2>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8">
            Before we continue, it is imperative to understand the definition of AI, or artifical intelligence. As Google defines it, AI is &quot;the theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.&quot; In other words, AI is the pursuit of developing computers with capabilities akin to 1:1 human intelligence. This encompasses a wide range of functionalities, from recognizing patterns in data to understanding natural language and making decisions based on that understanding. Essentially, AI enables machines to learn from experience, adapt to new inputs, and perform tasks autonomously without explicit programming for each task. This capacity to mimic human cognition opens up vast possibilities for automating routine tasks, solving complex problems, and augmenting human capabilities across various domains.
        </p> <br></br>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
            Moreover, AI is not a single entity but rather a field composed of diverse techniques and procedures. These include machine learning, where algorithms learn patterns from data; natural language processing, which enables computers to understand and generate human language; computer vision, which allows machines to interpret and analyze visual information; and many others. By combining these techniques and advancing research in AI, we continue to push the boundaries of what machines can achieve, unlocking new opportunities for innovation and addressing societal challenges in ways previously unimaginable.
        </p>
        <hr className="h-px my-6 bg-gray-300 border-0 dark:bg-gray-700 w-5/6 mx-auto"/>
        {/* Start of Section 2 */}

        <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">The Current Applications of AI in K-12 Education</h2>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8">
            Many educators today have expressed their concerns over the usage of AI for students to commit academic dishonesty. For example, a student may be assigned an assignment and they use AI Chatbots like <a href="https://chatgpt.com/"><u>ChatGPT ↗</u></a> or <a href="https://bing.com/chat"><u>BingAI ↗</u></a> to complete their assignments without any congitive input. The following graph is referenced by a study conducted by <a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Forbes Advisor ↗</u></a> represents the concerns of educators regarding AI in K-12 education. Moving forward, information regarding all graphs and data can be further explained in-depth, tackling each and every topic mentioned in the graph and where the data was sourced from, can be found in <Link href="/data"><u>the data tab ↗</u></Link>. See the breakdown of Figure 1 <Link href="/data#figureOne"><u>here ↗</u></Link>. 
        </p> <br></br>
        
        <div className="hover:scale-105 hover:shadow-glow my-6 mx-auto w-5/6 bg-transparent border-0 dark:bg-gray-700 transition-transform duration-700 ease-in-out p-5">
        <h2 className="text-2xl text-stone-100 dark:text-white text-center mt-10 mb-5">Figure 1: Concerns of Educators Regarding Student Use of AI in School</h2>
        <img
          className="w-full h-auto"
          alt='graph-data-1-educator-concerns'
          src="/Images/EducatorConcerns.png"
          srcSet="/Images/EducatorConcerns.png"
        />
      </div>

        <p className="text-md -mt-3 text-right m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>

        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg mt-5 text-justify indent-8 ">
            The same survey yielded results on how educators rated what they thought were the most prelevant AI-related cheating methods used within their educational insitution. The results showed that educators believed AI-releated cheating boiled down to students using AI to generate essays, using AI for assistance during exams and testing including to translate text, and using AI-generated code to complete coding assignments. See the breakdown of the data <Link href="/data#figureTwo"><u>here ↗</u></Link>. 
        </p>
        
        <div className="hover:scale-105 hover:shadow-glow my-6 mx-auto w-5/6 bg-transparent border-0 dark:bg-gray-700 transition-transform duration-700 ease-in-out p-5">
          <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-2">Figure 2: Educators&apos; Opinion on Most Prelevant Methods of AI-Related Cheating</h2>
          <img
            alt='graph-data-2-educator-opinions'
            src="/Images/EducatorOpinions.png"
            srcSet="/Images/EducatorOpinions.png"
            style={{ width: '100%', height: 'auto', color: 'transparent' }}
          />
        </div>
        <p className="text-md -mt-3 text-right m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>
        <hr className="h-px my-6 bg-gray-300 border-0 dark:bg-gray-700 w-5/6 mx-auto"/>
        
        {/* Start of Section 3 */}
        <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">Utilizing AI as a Strategic Tool for Educators</h2>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
          According to a <a href="https://ed.stanford.edu/news/feedback-ai-driven-tool-improves-teaching-stanford-led-research-finds"><u>Stanford-led study ↗</u></a> conducted in 2023, AI tools can significantly enhance educational practices by providing automated feedback to instructors. This feedback helps improve their communication techniques, particularly in how they acknowledge and build upon students&apos; contributions, a practice known as &quot;uptake.&quot; This improvement in uptake was shown to increase student satisfaction and assignment completion rates. Furthermore, the AI-driven tool, <a href="https://www.mpoweringteachers.com/"><u>M-Powering Teachers ↗</u></a>, offers a cost-effective and scalable alternative to traditional classroom observation, making it accessible for widespread use in educational settings.
        </p>

        <div className="relative m-auto mb-10 w-5/6 max-w-screen-lg overflow-hidden md:mb-20 md:h-150 md:rounded-2xl mt-5">
          <img alt="Classroom" loading="eager" decoding="async" data-nimg="1"
            className="h-full w-full object-cover duration-700 ease-in-out scale-100 blur-0 hover:scale-105"
            srcSet="/Images/ClassroomPicture.jpg"
            src="/Images/ClassroomPicture.jpg"
            style={{ color: 'transparent' }} />
        </div>

        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
          Returning to our dataset from <i>Forbes Advisor,</i> some educators have closed the gap and are aware of how they can use AI to their advantage. Several educators have stated that they have seen or used various AI tools for educational purposes. For example, using AI-powered educational games or AI-powered adaptive learning systems where the AI can personalize learning to an individual student. These tools are part of a broader spectrum of AI applications gaining traction in the educational sector. See the breakdown of the data  
        </p>
        <div className="hover:scale-105 hover:shadow-glow my-6 mx-auto w-5/6 bg-transparent border-0 dark:bg-gray-700 transition-transform duration-700 ease-in-out p-5">
        <h2 className="text-2xl text-stone-100 dark:text-white text-center mt-10 mb-5">Figure 3: Educator&apos;s Accounts of Beneficial AI Usage in a Classroom Setting</h2>
        <img
          className="w-full h-auto"
          alt='graph-data-3-educator-AI-encounters'
          src="/Images/EducatorAIEncounters.png"
          srcSet="/Images/EducatorAIEncounters.png"
        />

      </div>
      <p className="text-md -mt-3 text-right m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>
      
      <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">Transforming Teaching Styles: Integration of AI in Schools</h2>

      <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">AI Enhances Personalized Learning</h2>
      <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
        The integration of AI into K-12 education significantly enhances personalized learning experiences by providing real-time, individualized feedback to students. This shift allows educators to move from being direct knowledge providers to more supportive, analytical facilitators. Tools powered by AI can automate routine tasks such as grading and attendance, freeing up time for teachers to focus on personalized interactions with students. A study by Stanford University highlights that AI-driven tools &quot;[provide] teachers with real-time automation,&quot; enabling a deeper understanding of individual student needs and fostering a more supportive learning environment <Link href="/references#Spector"><u>(Spector) ↗</u></Link>. The automation of these tasks allows educators to concentrate on enriching student interactions and offering personalized mentoring, thus enhancing the overall learning experience.
      </p>

      <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">AI Streamlines Curriculum Delivery</h2>
      <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
        AI also plays a crucial role in streamlining curriculum delivery and resource management, which can lead to significant improvements in educational outcomes. By personalizing learning experiences and adapting resources to fit the needs of students with varying abilities and paces, AI ensures that all students receive the attention and resources they need to succeed. The Information Technology & Innovation Foundation asserts that AI can &quot;personalize learning experiences&quot; and &quot;adapt resources&quot; to facilitate instructional innovative approaches to individual learning styles and paces, educators can create more inclusive classrooms where all students have the opportunity to thrive <Link href="/references#Diebold"><u>(Diebold and Han) ↗</u></Link>. Additionally, AI&apos;s ability to analyze vast datasets of educational data provides educators with actionable insights into student performance trends, allowing for optimized lesson planning and targeted learning strategies. This data-driven approach ensures that educators can tailor instruction to meet the specific needs of each student, promoting a more equitable and effective educational environment.
      </p>

      <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-4">Concerns About Data Privacy and Human Interaction</h2>
      <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
        Despite the advantages, the integration of AI in education faces significant opposition due to concerns over data privacy and the potential reduction of human interaction. The U.S. Department of Education&apos;s report emphasizes the critical importance of protecting student data and privacy in the era of AI-driven education, highlighting &quot;concerns regarding privacy [and] data security&quot; <Link href="/references#Bryant"><u>(Bryant et al.) ↗</u></Link>. Furthermore, educators fear that AI might &quot;dehumanize the educational process&quot; by replacing the irreplaceable human touch crucial for student development <Link href="/references#Woodruff"><u>(Woodruff et al.) ↗</u></Link>. To mitigate these concerns, it is essential to implement AI tools that complement rather than replace human teachers, ensuring that technology enhances rather than diminishes teacher-student interactions. Establishing proper regulations and ethical guidelines will help protect student data and preserve the essential human element in education, reinforcing the role of AI as a supportive tool rather than a replacement.
      </p>

      <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">Balancing Innovation and Tradition in Education</h2>
      <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
        The integration of AI in K-12 education holds the potential to transform teaching methods and enhance learning outcomes significantly. By automating routine tasks and providing personalized feedback, AI empowers educators to adopt more supportive and analytical roles, fostering a more individualized and effective learning environment. However, it is crucial to address the concerns surrounding data privacy and the reduction of human interaction. Implementing AI as a complementary tool, rather than a replacement for human teachers, and establishing stringent ethical guidelines and data protection measures will ensure that the benefits of AI are maximized while preserving the essential human element in education. As we continue to explore and innovate in this field, ongoing dialogue among educators, policymakers, and technology developers will be vital to creating a balanced and equitable educational system for future generations.
      </p>      


      <p className="text-md m-auto w-10/12 text-stone-300 dark:text-stone-300 md:text-lg mt-20">
      For more insights on AI integration in education, explore our <Link href="/data#figureThree"><u>data section ↗</u></Link> and visit the article of our sources <Link href="/data#figureThree"><u>here ↗</u></Link> to understand how we presented the information that you read in this article.
      </p>      
      



    </div>
  );
};

export default ArticleBody;
