import React from 'react';

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
          05/06/2024—I'm excited to explore the world of <a className="text-stone-300" href="https://www.google.com/search?sca_esv=be445f0cc062ab15&sca_upv=1&rlz=1C5CHFA_enUS1102US1102&sxsrf=ADLYWIKK1zelo1MqegZEzRx9SUULYbkMkw:1715023403246&q=artificial+intelligence&si=ACC90nweIdwxfIl6sRrg1PmdeiV16YSSK5qUMpXo4wqX3v5TYYeDR0ZmwbWtjFV_5yNZefqPU8sA3f_t7JrsWGzFxBlnLweAm56G23yqv1LM8pGlFkzw1S4Sh-iGxZztkhYbS4P42FSECXIKQpesAGZ9UqH92XfIcA%3D%3D&expnd=1&sa=X&ved=2ahUKEwiTl-2F4PmFAxWj4ckDHa-ZAbcQgCt6BAgREA0&biw=1800&bih=1005&dpr=2"><u>Artificial Intelligence ↗</u></a> (herein by referred to as AI), specifically its role in K-12 Education. We will discuss how the use of AI in K-12 education will impact the traditional role of educators by underlining how the educational system will change for future generations as technology continues to evolve in this field and how educators can use AI to their advantage. 
        </p>  
        {/* Start of Section 1 */}
        <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">What is Artifical Intelligence (AI)?</h2>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8">
            Before we continue, it is imperative to understand the definition of AI, or artifical intelligence. As Google defines it, AI is "the theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages." In other words, AI is the pursuit of developing computers with capabilities akin to 1:1 human intelligence. This encompasses a wide range of functionalities, from recognizing patterns in data to understanding natural language and making decisions based on that understanding. Essentially, AI enables machines to learn from experience, adapt to new inputs, and perform tasks autonomously without explicit programming for each task. This capacity to mimic human cognition opens up vast possibilities for automating routine tasks, solving complex problems, and augmenting human capabilities across various domains.
        </p> <br></br>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
            Moreover, AI is not a single entity but rather a field composed of diverse techniques and procedures. These include machine learning, where algorithms learn patterns from data; natural language processing, which enables computers to understand and generate human language; computer vision, which allows machines to interpret and analyze visual information; and many others. By combining these techniques and advancing research in AI, we continue to push the boundaries of what machines can achieve, unlocking new opportunities for innovation and addressing societal challenges in ways previously unimaginable.
        </p>
        <hr className="h-px my-6 bg-gray-300 border-0 dark:bg-gray-700 w-5/6 mx-auto"/>
        {/* Start of Section 2 */}

        <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">The Current Applications of AI in K-12 Education</h2>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8">
            Many educators today have expressed their concerns over the usage of AI for students to commit academic dishonesty. For example, a student may be assigned an assignment and they use AI Chatbots like <a href="https://chatgpt.com/"><u>ChatGPT ↗</u></a> or <a href="https://bing.com/chat"><u>BingAI ↗</u></a> to complete their assignments without any congitive input. The following graph is referenced by a study conducted by <a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Forbes Advisor ↗</u></a> represents the concerns of educators regarding AI in K-12 education.
        </p> <br></br>
        
        <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-2">Concerns of Educators Regarding Student Use of AI in School</h2>
        <img className="my-6 bg-gray-300 border-0 dark:bg-gray-700 w-5/6 mx-auto" src='https://i.postimg.cc/vmBN8MGY/Screenshot-2024-05-06-at-3-24-44-PM.png' srcSet='https://i.postimg.cc/vmBN8MGY/Screenshot-2024-05-06-at-3-24-44-PM.png'></img>
        <p className="text-md -mt-3 text-right m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>

        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg mt-5 text-justify indent-8 ">
            The same survey yielded results on how educators rated what they thought were the most prelevant AI-related cheating methods used within their educational insitution. The results showed that educators believed AI-releated cheating boiled down to students using AI to generate essays, using AI for assistance during exams and testing including to translate text, and using AI-generated code to complete coding assignments.   
        </p>

        <h2 className="font-titlet text-2xl text-stone-100 dark:text-white text-center mt-10 mb-2">Educators' Opinion on Most Prelevant Methods of AI-Related Cheating</h2>
        <img className="my-6 bg-gray-300 border-0 dark:bg-gray-700 w-5/6 mx-auto" src='https://i.postimg.cc/wvsgwZ4V/image.png' srcSet='https://i.postimg.cc/wvsgwZ4V/image.png'></img>
        <p className="text-md -mt-3 text-right m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"><a href="https://www.forbes.com/advisor/education/it-and-tech/artificial-intelligence-in-school/"><u>Data Source ↗</u></a></p>
        <hr className="h-px my-6 bg-gray-300 border-0 dark:bg-gray-700 w-5/6 mx-auto"/>
        
        {/* Start of Section 3 */}
        <h2 className="font-titlet text-4xl text-stone-100 dark:text-white text-center mt-10 mb-4">Utilizing AI as a Strategic Tool for Educators</h2>
        <p className="text-md m-auto w-10/12 text-stone-400 dark:text-stone-400 md:text-lg indent-8"> 
          According to a <a href="https://ed.stanford.edu/news/feedback-ai-driven-tool-improves-teaching-stanford-led-research-finds"><u>Stanford-led study ↗</u></a> conducted in 2023, AI tools can significantly enhance educational practices by providing automated feedback to instructors. This feedback helps improve their communication techniques, particularly in how they acknowledge and build upon students' contributions, a practice known as "uptake." This improvement in uptake was shown to increase student satisfaction and assignment completion rates. Furthermore, the AI-driven tool, M-Powering Teachers, offers a cost-effective and scalable alternative to traditional classroom observation, making it accessible for widespread use in educational settings.
        </p>

        <div className="relative m-auto mb-10 w-5/6 max-w-screen-lg overflow-hidden md:mb-20 md:h-150 md:rounded-2xl mt-5">
          <img alt="AI_ServerRoom" loading="eager" decoding="async" data-nimg="1"
            className="h-full w-full object-cover duration-700 ease-in-out scale-100 blur-0 hover:scale-105"
            srcSet="https://i.postimg.cc/0ND50rWQ/female-high-school-pupil-writing-on-whiteboard-in-2023-11-27-05-17-34-utc-1024x683.jpg"
            src="https://i.postimg.cc/0ND50rWQ/female-high-school-pupil-writing-on-whiteboard-in-2023-11-27-05-17-34-utc-1024x683.jpg"
            style={{ color: 'transparent' }} />
        </div>


    </div>
  );
};

export default ArticleBody;
