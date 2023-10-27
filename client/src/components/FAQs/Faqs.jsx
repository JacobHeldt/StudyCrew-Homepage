import React from "react";
import "./Faqs.css"

function Faqs() {
    return(
       <div className="faqs">
                <h1 className="faqs-head"> <span>faq</span>s</h1>
                <p className="faqs-des">We are here to help you with any question you have</p>
                <div className="questions-list">
                    <details className="question">
                        <summary className="question-head">Can I transfer earned credits to another institution?</summary>
                        <p className="question-des">While we strive to provide a quality educational experience, the acceptance of transfer credits is ultimately at the discretion of the institution you plan to attend. We recommend early and thorough communication with the admissions or registrar's office at that institution to ensure a smooth credit transfer process. Additionally, maintaining good academic performance in our program can enhance your chances of successful credit transfer.</p>
                    </details>
                    <details className="question">
                        <summary className="question-head">How will tutoring be offered?</summary>
                        <p className="question-des">While we strive to provide a quality educational experience, the acceptance of transfer credits is ultimately at the discretion of the institution you plan to attend. We recommend early and thorough communication with the admissions or registrar's office at that institution to ensure a smooth credit transfer process. Additionally, maintaining good academic performance in our program can enhance your chances of successful credit transfer.</p>
                    </details>
                    <details className="question">
                        <summary className="question-head">How can I apply for a tutoring role?</summary>
                        <p className="question-des">While we strive to provide a quality educational experience, the acceptance of transfer credits is ultimately at the discretion of the institution you plan to attend. We recommend early and thorough communication with the admissions or registrar's office at that institution to ensure a smooth credit transfer process. Additionally, maintaining good academic performance in our program can enhance your chances of successful credit transfer.</p>
                    </details>
                    <details className="question">
                        <summary className="question-head">Will there be a mobile app?</summary>
                        <p className="question-des">While we strive to provide a quality educational experience, the acceptance of transfer credits is ultimately at the discretion of the institution you plan to attend. We recommend early and thorough communication with the admissions or registrar's office at that institution to ensure a smooth credit transfer process. Additionally, maintaining good academic performance in our program can enhance your chances of successful credit transfer.</p>
                    </details>
                    <details className="question">
                        <summary className="question-head">How do you handle user-feedback and suggestions?</summary>
                        <p className="question-des">While we strive to provide a quality educational experience, the acceptance of transfer credits is ultimately at the discretion of the institution you plan to attend. We recommend early and thorough communication with the admissions or registrar's office at that institution to ensure a smooth credit transfer process. Additionally, maintaining good academic performance in our program can enhance your chances of successful credit transfer.</p>
                    </details>
                </div>
       </div> 
    )
}

export default Faqs