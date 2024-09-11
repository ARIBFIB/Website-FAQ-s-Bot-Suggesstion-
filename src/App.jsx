import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { getRelatedQuestions } from './components/getRelatedQuestions'
import BotLoading from './assets/lotties/BotLoading.json'
import Lottie from 'react-lottie'

function App() {
  const [question, setquestion] = useState("")
  const [answer, setanswer] = useState("")
  const [suggesstion, setSuggesstion] = useState([])
  const [relatedQuestions, setRelatedQuestions] = useState([])
  const [loading, setLoading] = useState(false)

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: BotLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  async function generateAnswer(){
    setLoading(true); // Start loading

    setanswer(<Lottie options={defaultOption} height={40} width={40} />);
    
    
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=[Your key is here eg: key=1233211vaadasd9d9as]",
      method: "post",
      data: {
        "contents":[
          {
            "parts":[
              {
                text : `Give me the answer related to the website is "https://hihostels.com/" TONE: conversational, natural, 
                inflectional, don't use jargons,be convincing , give me the question which gives the better understanding
                according to website,
                if user asking long query about 40-70 alphabets give me long answer,
                if user asking less query about 10-20 alphabets give me answer in 2 words,
                always do the positive responce helpful,
                kindly please finish you talk in 7 words
                imagine that you are talking to the guest which is visiting first time.
                if you have to answer of this just tell give any random information related to that ${question}`
              }
            ]
          }
        ]
      }
    })
    const generatedSuggesstions = response.data.candidates[0].content.parts.map(part => part.text)
    
    const truncatedSuggestions = generatedSuggesstions.map(suggestion => 
      suggestion.length > 1250 ? suggestion.substring(0, 1250) + '...' : suggestion
    );

    setSuggesstion(truncatedSuggestions)
    setanswer("");
    setRelatedQuestions(getRelatedQuestions(question));
    setLoading(false); // Stop loading

    
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      e.preventDefault();
      generateAnswer();
    }
  }

  const handleSuggesstionClick = (suggesstion) => {
    setquestion(suggesstion); // Set the clicked suggestion as the question
    setanswer(`You selected: ${suggesstion}`);
    setSuggesstion([]); // Clear suggestions
    setRelatedQuestions([]); // Clear related questions
    generateAnswer(); // Generate the answer based on the selected suggestion
  };
  

  return (
    <div className='major'>
      <div className='self'>
        <div className='Heading'>
          <h1>Contact US</h1>
          <h3>Hostel Booking Rooms</h3>
          View your thread of messages with our support team.
        </div>
        <div className='innermajor'>
        <h1>Track a Case</h1>
          <div className='innermajorInside'>
            <form>
              <input
              className='input00' 
              placeholder='Case Number'
              />
            </form>
            <form>
              <input
              className='input00' 
              placeholder='Email Address'
              />
            </form>
          <button className='go' type="button">GO</button>          
          </div>
          <h5 className='PI'>Personal Information</h5>
          <div>
            <form>
              <input
              className='input01' 
              placeholder='Phone Number'
              />
            </form>
          </div>
          <div>
            <form>
              <input
              className='input01' 
              placeholder='Address'
              />
            </form>
          </div>
          <div>
            <form>
              <input
              className='input01' 
              placeholder='Country'
              />
            </form>
          </div>
          <div>
            <form>
              <input
              className='input01' 
              placeholder='City'
              />
            </form>
          </div>
          <button className='go' type="button">SAVE</button>          
          <div>
          <div className='FAQs'>
            <div className='insideFAQs'>
              <h2>Frequently Ask Questions FAQs</h2>
              <p>Search below for answers to queries relating to general travel and advice about our hostels.</p>
                {/* Asking Question */}
                <h4 className='headingEnter'>Ask your Question</h4>
                <form>
                <textarea
                className='FAQQuesInput' 
                placeholder='Can children stay at hostels?'
                onChange={(e) => setquestion(e.target.value)}
                onKeyDown={handleKeyDown}
                ></textarea>
              </form>
              <button className='GenerateAnswer' onClick={generateAnswer}>Bot Generate Related suggesstion</button>
              {/* Showing Results */}
              <h2 className='suggestionHeading'>Result</h2>
              <div className='FAQsSuggesstionMain'>
              <div className='ChatbotIcons'></div>
              {loading && <Lottie options={defaultOption} height={40} width={40} />}
                {suggesstion.map((suggesstion, index) => (
                  <div
                  
                    key={index}
                    className='FAQsSuggesstions'
                    onClick={() => handleSuggesstionClick(suggesstion)}
                  >
                  <h4><pre>{suggesstion}</pre></h4>
                  </div>
                ))}
              </div>
              <pre>{answer}</pre>
              {/* Suggesstion */}
              <h2 className='suggestionHeading'>Questions Suggesstion</h2>
              <div>
                {relatedQuestions.map((relatedQuestion, index) => (
                  <div
                    key={index}
                    className='relatedQuestions'
                    onClick={() => handleSuggesstionClick(relatedQuestion)}
                  >
                    <h4>{relatedQuestion}</h4>
                  </div>
                ))}
              </div>
              <pre>{answer}</pre>
              <div className='headingEnter'>
                <h3>FAQs</h3> 
                <li><a ><strong>What is a hostel?</strong>&nbsp;</a></li>
                <li><a ><strong>What are the HI Standards and HI Quality & Sustainability? </strong>&nbsp;</a></li>
                <li><a ><strong>What type of facilities can I expect to find at a hostel?</strong>&nbsp;</a></li>
                <li><a ><strong>Who can stay at a hostel? Is there an age limit?</strong>&nbsp;</a></li>
                <li><a ><strong>Can children stay at hostels? </strong>&nbsp;</a></li>
                <li><a ><strong>Do hostels organise trips and activities? </strong>&nbsp;</a></li>
                <li><a ><strong>Can I bring my pet when I stay at a hostel? </strong>&nbsp;</a></li>
                <li><a ><strong>What types of facilities are provided for wheelchair users?</strong>&nbsp;</a></li>
                <li><a ><strong>What about safety and security? </strong>&nbsp;</a></li>
                <li><a ><strong>Do I need identification?</strong>&nbsp;</a></li>
                <li><a ><strong>Do I need travel insurance? </strong>&nbsp;</a></li>
                <li><a ><strong>Where can I get directions to HI hostels? </strong>&nbsp;</a></li>
                <li><a ><strong>What about luggage storage?</strong>&nbsp;</a></li>
                <li><a ><strong>Do I need a sleeping bag/bedding?</strong>&nbsp;</a></li>
                <li><a ><strong>Do I need to bring towels? </strong>&nbsp;</a></li>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
