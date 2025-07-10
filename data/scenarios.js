// data/scenarios.js

export const scenarios = [
  {
    id: 1,
    title: "Demonstrates Ethical Practice",
    questions: [
      {
        question:
          "A client begins discussing ongoing depression and suicidal thoughts during a session. What should the coach do?",
        options: [
          {
            text: "Explore the client's past experiences more deeply.",
            value: 0,
          },
          {
            text: "Ask the client to schedule more frequent coaching sessions.",
            value: 0,
          },
          {
            text: "Refer the client to a qualified mental health professional.",
            value: 1,
          },
          {
            text: "Reassure the client that coaching will help manage those feelings.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A sponsor asks the coach to provide session recordings of their employee’s coaching sessions. What is the ethical response?",
        options: [
          {
            text: "Share the recordings since the sponsor is paying for the coaching.",
            value: 0,
          },
          {
            text: "Summarize key takeaways from each session for the sponsor.",
            value: 0,
          },
          {
            text: "Decline unless the client has explicitly consented to sharing recordings.",
            value: 1,
          },
          {
            text: "Ask the client to write a summary to share with the sponsor.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach is bilingual and works with a client in their native language but often uses culturally unfamiliar phrases. The client seems confused. What should the coach do?",
        options: [
          {
            text: "Adjust the language to better reflect the client’s cultural context.",
            value: 1,
          },
          { text: "Continue as usual since the coach is fluent.", value: 0 },
          {
            text: "Ask the client to learn the terminology being used.",
            value: 0,
          },
          {
            text: "Keep explanations vague to avoid misunderstanding.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client says, “This coaching feels like therapy.” What is the best ethical response?",
        options: [
          {
            text: "Reassure them the sessions are similar and not to worry.",
            value: 0,
          },
          {
            text: "Avoid discussing the difference to prevent confusion.",
            value: 0,
          },
          {
            text: "Clarify the distinction between coaching and therapy.",
            value: 1,
          },
          {
            text: "Recommend they stop therapy to focus only on coaching.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach accidentally discovers private client information through a mutual connection on social media. What should the coach do?",
        options: [
          { text: "Mention it to the client in the next session.", value: 0 },
          {
            text: "Avoid using or referencing the information during coaching.",
            value: 1,
          },
          { text: "Use the insight to ask more specific questions.", value: 0 },
          {
            text: "Inform the client’s sponsor immediately for awareness.",
            value: 0,
          },
        ],
      },
      {
        question:
          "During an intake conversation, the client shares personal information and asks the coach to never share it. What should the coach do?",
        options: [
          { text: "Agree, regardless of existing contracts.", value: 0 },
          {
            text: "Tell the client it will only be shared with the sponsor.",
            value: 0,
          },
          {
            text: "Reaffirm confidentiality terms aligned with the agreement and laws.",
            value: 1,
          },
          {
            text: "Avoid making any confidentiality commitments to stay flexible.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach begins working with a client who has vastly different political and spiritual views. The coach finds it difficult to stay neutral. What is the ethical action?",
        options: [
          {
            text: "Reflect and manage personal bias to remain fully present for the client.",
            value: 1,
          },
          {
            text: "Try to change the topic when uncomfortable beliefs arise.",
            value: 0,
          },
          {
            text: "Use the session to explain a more balanced perspective.",
            value: 0,
          },
          {
            text: "Redirect the client toward more neutral conversation.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client asks the coach to help with legal advice regarding their business. What should the coach do?",
        options: [
          {
            text: "Research and provide advice before the next session.",
            value: 0,
          },
          {
            text: "Clarify coaching boundaries and suggest they consult a legal professional.",
            value: 1,
          },
          {
            text: "Offer personal opinions while disclaiming responsibility.",
            value: 0,
          },
          { text: "Ask the sponsor how to proceed in this case.", value: 0 },
        ],
      },
      {
        question:
          "A coach uses a client's anonymized story as a case example in a training workshop without prior approval. Is this ethical?",
        options: [
          { text: "Yes, because the name was not used.", value: 0 },
          {
            text: "Yes, as long as the coach doesn’t repeat it often.",
            value: 0,
          },
          { text: "No, because client consent is still required.", value: 1 },
          { text: "No, unless the sponsor has already approved.", value: 0 },
        ],
      },
      {
        question:
          "A sponsor asks the coach to subtly influence the client toward accepting a promotion. What is the ethical course of action?",
        options: [
          {
            text: "Use the sessions to encourage the promotion indirectly.",
            value: 0,
          },
          {
            text: "Maintain coaching neutrality and discuss the client’s actual aspirations.",
            value: 1,
          },
          {
            text: "Notify the sponsor about the client’s hesitation.",
            value: 0,
          },
          { text: "End the coaching engagement to avoid conflict.", value: 0 },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Embodies a Coaching Mindset",
    questions: [
      {
        question:
          "A coach becomes aware that they are feeling frustrated after several unproductive sessions with a client. What is the most appropriate course of action?",
        options: [
          { text: "Tell the client they need to be more serious.", value: 0 },
          {
            text: "Reflect on the emotion and explore its impact on the coaching process.",
            value: 1,
          },
          { text: "Ignore the feeling and continue as normal.", value: 0 },
          {
            text: "Reduce session time to manage personal frustration.",
            value: 0,
          },
        ],
      },
      {
        question:
          "Before a coaching session, the coach takes a few quiet minutes to ground themselves and review client notes. This is an example of:",
        options: [
          { text: "Mental and emotional preparation.", value: 1 },
          { text: "Time management strategy.", value: 0 },
          { text: "Process-oriented coaching.", value: 0 },
          { text: "Passive mindfulness practice.", value: 0 },
        ],
      },
      {
        question:
          "A client wants to explore a decision that contradicts what the coach believes is wise. What demonstrates the right coaching mindset?",
        options: [
          { text: "Advise the client to reconsider.", value: 0 },
          { text: "Encourage the client to ask a mentor instead.", value: 0 },
          {
            text: "Remain curious and explore the client’s rationale.",
            value: 1,
          },
          { text: "Warn the client about the consequences.", value: 0 },
        ],
      },
      {
        question:
          "A coach finds themselves being reactive during a difficult session. What should the coach do next?",
        options: [
          {
            text: "Use emotional regulation tools and refocus on the client.",
            value: 1,
          },
          { text: "End the session early to regain composure.", value: 0 },
          {
            text: "Address the client’s behavior as the cause of stress.",
            value: 0,
          },
          {
            text: "Shift to a lighter topic to avoid discomfort.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach working with a client from a different cultural background notices recurring misunderstandings. What is the best next step?",
        options: [
          {
            text: "Stick to the same approach and wait for alignment.",
            value: 0,
          },
          {
            text: "Reflect on their own cultural assumptions and adapt accordingly.",
            value: 1,
          },
          {
            text: "Recommend the client work with someone from a similar background.",
            value: 0,
          },
          { text: "Avoid cultural discussions during coaching.", value: 0 },
        ],
      },
      {
        question:
          "A coach realizes they are consistently second-guessing their intuition during sessions. What should they do?",
        options: [
          { text: "Ignore the feeling—it’s not data-based.", value: 0 },
          {
            text: "Start offering more direct advice to gain control.",
            value: 0,
          },
          {
            text: "Explore how to develop confidence in intuition for client benefit.",
            value: 1,
          },
          {
            text: "Share every intuitive thought openly with the client.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach learns about a new coaching technique that may support a struggling client. What is the coach’s best response?",
        options: [
          {
            text: "Learn and integrate the technique after assessing its relevance.",
            value: 1,
          },
          {
            text: "Use the technique immediately without training.",
            value: 0,
          },
          {
            text: "Recommend the client search for similar tools online.",
            value: 0,
          },
          { text: "Avoid new methods to stay consistent.", value: 0 },
        ],
      },
      {
        question:
          "A client complains they’re not progressing, and the coach feels unsure of how to proceed. What should the coach do?",
        options: [
          { text: "Reassure the client and change the topic.", value: 0 },
          {
            text: "Seek supervision or mentor coaching to gain perspective.",
            value: 1,
          },
          { text: "End the engagement due to lack of progress.", value: 0 },
          {
            text: "Ask the client to reflect more between sessions.",
            value: 0,
          },
        ],
      },
      {
        question:
          "During a session, the client asks the coach to make a decision on their behalf. What should the coach do?",
        options: [
          { text: "Offer an opinion based on experience.", value: 0 },
          {
            text: "Remind the client they are responsible for their own choices.",
            value: 1,
          },
          {
            text: "Make the decision with the client’s best interest in mind.",
            value: 0,
          },
          { text: "Delay the topic until the next session.", value: 0 },
        ],
      },
      {
        question:
          "A coach regularly takes time after sessions to journal about their reactions, what worked, and what didn’t. This practice is best described as:",
        options: [
          { text: "Scheduling recovery time.", value: 0 },
          { text: "Personal coaching.", value: 0 },
          {
            text: "Reflective practice to improve coaching effectiveness.",
            value: 1,
          },
          { text: "Client evaluation.", value: 0 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Establishes and Maintains Agreements",
    questions: [
      {
        question:
          "At the beginning of the first coaching session, the client says, “Let’s just jump in.” What is the most appropriate coach response?",
        options: [
          { text: "Dive into exploration without wasting time.", value: 0 },
          {
            text: "Clarify the session’s purpose and co-create a focus before starting.",
            value: 1,
          },
          {
            text: "Offer advice based on the coach’s perception of the issue.",
            value: 0,
          },
          {
            text: "Begin with a visualization to warm up the session.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach begins working with a new client but hasn’t yet discussed confidentiality, session length, or fees. What should the coach do?",
        options: [
          { text: "Bring up these topics only if the client asks.", value: 0 },
          {
            text: "Proactively clarify these aspects before proceeding.",
            value: 1,
          },
          {
            text: "Continue coaching and send a follow-up email later.",
            value: 0,
          },
          {
            text: "Assume standard practices apply to all clients.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A sponsor tells the coach that they expect regular updates on the employee’s progress. What is the most ethical and professional coach action?",
        options: [
          {
            text: "Agree to provide summaries without informing the client.",
            value: 0,
          },
          {
            text: "Clarify confidentiality terms and ensure a three-way agreement is in place.",
            value: 1,
          },
          {
            text: "Ask the employee to share progress with the sponsor.",
            value: 0,
          },
          {
            text: "Send only general comments to avoid conflict.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The client wants career coaching, but mid-way through the engagement, they shift to personal issues without informing the coach. What should the coach do?",
        options: [
          {
            text: "Pause and renegotiate the coaching goals with the client.",
            value: 1,
          },
          {
            text: "Follow the client’s new direction without question.",
            value: 0,
          },
          {
            text: "Continue exploring both areas without clarification.",
            value: 0,
          },
          {
            text: "End the engagement due to scope change.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client regularly cancels sessions last-minute and hasn’t paid their last invoice. What should the coach do?",
        options: [
          { text: "Let it go and focus on serving the client.", value: 0 },
          { text: "Ask the client when they plan to pay.", value: 0 },
          {
            text: "Stop sessions until payment is received.",
            value: 0,
          },
          {
            text: "Revisit and reinforce the original agreement on logistics and responsibilities.",
            value: 1,
          },
        ],
      },
      {
        question:
          "During a chemistry call, the client seems unclear about how coaching differs from mentoring. What should the coach do?",
        options: [
          {
            text: "Say coaching is like mentoring but more collaborative.",
            value: 0,
          },
          {
            text: "Redirect to session goals instead of definitions.",
            value: 0,
          },
          {
            text: "Clearly explain what coaching is and is not.",
            value: 1,
          },
          {
            text: "Recommend the client try both and compare",
            value: 0,
          },
        ],
      },
      {
        question:
          "In the first session, the coach notices the client has multiple topics to cover but hasn’t chosen one. What is the best next step?",
        options: [
          {
            text: "Partner with the client to identify what they want to focus on today.",
            value: 1,
          },
          {
            text: "Choose the topic that seems most urgent to the coach.",
            value: 0,
          },
          {
            text: "Postpone the session until the client has clarity.",
            value: 0,
          },
          {
            text: "Explore each topic briefly without a main focus.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client says, “I want to feel more confident,” but gives vague details. What should the coach do?",
        options: [
          { text: "Offer techniques to build confidence.", value: 0 },
          {
            text: "Partner with the client to define what “confidence” means and how it will be measured.",
            value: 1,
          },
          {
            text: "Move on to another area of their life.",
            value: 0,
          },
          {
            text: "Ask the client to bring more specifics next time.",
            value: 0,
          },
        ],
      },
      {
        question:
          "Mid-session, the client starts talking about a new and unrelated issue. What should the coach do?",
        options: [
          {
            text: "Allow the conversation to flow without concern.",
            value: 0,
          },
          {
            text: "Redirect the client back to the original topic.",
            value: 0,
          },
          {
            text: "Check in with the client to see if they want to redefine the session outcome.",
            value: 1,
          },
          {
            text: "End the session early to maintain boundaries.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A potential client seems hesitant about committing to coaching. What should the coach do to establish clarity?",
        options: [
          { text: "Offer a discount to encourage commitment.", value: 0 },
          { text: "Avoid too many details to prevent overwhelm.", value: 0 },
          {
            text: "Explore compatibility and the client’s expectations for coaching.",
            value: 1,
          },
          {
            text: "Begin a trial session without a formal agreement.",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Cultivates Trust and Safety",
    questions: [
      {
        question:
          "A client hesitates while sharing something personal and looks uncomfortable. What should the coach do?",
        options: [
          { text: "Change the topic to something lighter.", value: 0 },
          {
            text: "Gently acknowledge the hesitation and invite the client to share at their own pace.",
            value: 1,
          },
          {
            text: "Push the client to express everything for clarity.",
            value: 0,
          },
          {
            text: "Assume the client is done talking and move on.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client expresses strong emotions and says, “I feel like I’m failing.” What is the best coach response?",
        options: [
          {
            text: "Suggest reframing the situation more positively.",
            value: 0,
          },
          {
            text: "Reassure them that everyone feels that way sometimes.",
            value: 0,
          },
          {
            text: "Tell a personal story about failure to relate.",
            value: 0,
          },
          {
            text: "Acknowledge and support the client’s feelings without judgment.",
            value: 1,
          },
        ],
      },
      {
        question:
          "During coaching, a client mentions that their cultural values sometimes clash with their workplace. What should the coach do?",
        options: [
          {
            text: "Recommend strategies to adapt better to the workplace.",
            value: 0,
          },
          {
            text: "Seek to understand the client’s values and how they impact their experience.",
            value: 1,
          },
          {
            text: "Encourage the client to set their values aside for professional success.",
            value: 0,
          },
          {
            text: "Avoid the topic to keep the conversation goal-focused.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach uses complex jargon and fast-paced speech while the client uses simple and reflective language. What is the best approach?",
        options: [
          {
            text: "Adapt the communication style to match the client’s pace and language.",
            value: 1,
          },
          {
            text: "Ask the client to adjust to a more standard coaching tone.",
            value: 0,
          },
          {
            text: "Continue with the coach’s usual approach.",
            value: 0,
          },
          {
            text: "Slow down slightly but keep using technical terms.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The client says, “I don’t know if this is even worth talking about,” and looks down. What should the coach do?",
        options: [
          {
            text: "Move on to another topic that seems more important.",
            value: 0,
          },
          {
            text: "Express empathy and invite the client to explore what feels important to them.",
            value: 1,
          },
          {
            text: "Reassure them everything matters and change the subject.",
            value: 0,
          },
          {
            text: "Share a similar situation to normalize the feeling.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The coach disagrees with a client’s perspective but wants to maintain trust. What’s the most ethical and effective approach?",
        options: [
          {
            text: "Let it go and ignore the perspective.",
            value: 0,
          },
          {
            text: "Correct the client respectfully.",
            value: 0,
          },
          {
            text: "Stay open and explore the client’s view with curiosity.",
            value: 1,
          },
          {
            text: "Argue respectfully and share a different viewpoint.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach notices a client becoming defensive when discussing their manager. How can the coach respond to maintain safety and trust?",
        options: [
          {
            text: "Ask more pointed questions to break the barrier.",
            value: 0,
          },
          {
            text: "Suggest the client may be overreacting.",
            value: 0,
          },
          {
            text: "Acknowledge the defensiveness and invite exploration without pressure.",
            value: 1,
          },
          {
            text: "Shift to a more neutral topic immediately.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The client shares a success and says, “But it’s probably not a big deal.” What should the coach do?",
        options: [
          {
            text: "Move forward to more pressing goals.",
            value: 0,
          },
          {
            text: "Joke lightly and move on.",
            value: 0,
          },
          {
            text: "Acknowledge the success and ask how it feels to the client.",
            value: 1,
          },
          {
            text: "Say, “That’s nice,” and change the subject.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The coach is struggling with a personal issue and feels distracted before a session. What action reflects cultivating trust and safety?",
        options: [
          {
            text: "Coach anyway without letting it show.",
            value: 0,
          },
          {
            text: "Consider rescheduling or center themselves to stay fully present.",
            value: 1,
          },
          {
            text: "Openly talk about the issue with the client.",
            value: 0,
          },
          {
            text: "Use coaching time to process their feelings.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client asks, “Have you ever failed at something important?” How should the coach respond to build trust while maintaining professional boundaries?",
        options: [
          {
            text: "Briefly share a relevant experience if it supports the client’s growth.",
            value: 1,
          },
          {
            text: "Decline to answer and redirect immediately.",
            value: 0,
          },
          {
            text: "Avoid the question to maintain authority.",
            value: 0,
          },
          {
            text: "Give detailed personal advice based on experience.",
            value: 0,
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Maintains Presence",
    questions: [
      {
        question:
          "A client becomes quiet during a session after discussing a difficult topic. What is the best way for the coach to respond?",
        options: [
          { text: "Quickly move on to avoid discomfort.", value: 0 },
          { text: "Ask a new question to fill the silence.", value: 0 },
          {
            text: "Tell the client it’s okay to be quiet, then wait.",
            value: 0,
          },
          {
            text: "Hold the space and allow the silence for reflection.",
            value: 1,
          },
        ],
      },
      {
        question:
          "During a coaching session, the client expresses intense frustration about their team. What should the coach do?",
        options: [
          {
            text: "Reassure the client that things will get better.",
            value: 0,
          },
          { text: "Shift to goal-setting to create momentum.", value: 0 },
          {
            text: "Stay grounded and present while inviting the client to explore the emotion.",
            value: 1,
          },
          {
            text: "Share a similar personal story to show understanding.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach feels nervous while coaching a senior executive client and finds themselves overexplaining. What should they do to stay present?",
        options: [
          { text: "Keep speaking to hide their nervousness.", value: 0 },
          { text: "Avoid asking open-ended questions.", value: 0 },
          {
            text: "Pause, take a breath, and refocus attention on the client.",
            value: 1,
          },
          {
            text: "Let the client lead the session without coaching structure.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client says something surprising that challenges the coach’s assumptions. What does maintaining presence look like here?",
        options: [
          { text: "Respond with advice based on past experiences.", value: 0 },
          {
            text: "Ignore the comment and continue with the planned path.",
            value: 0,
          },
          {
            text: "Stay curious and ask the client to elaborate further.",
            value: 1,
          },
          {
            text: "Politely disagree and shift the conversation.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The coach notices their own mind drifting to unrelated thoughts during a session. What is the best response?",
        options: [
          {
            text: "Push through and hope the client doesn’t notice.",
            value: 0,
          },
          { text: "Pause the session to take a break.", value: 0 },
          {
            text: "Gently bring their attention back to the client and re-engage fully.",
            value: 1,
          },
          {
            text: "End the session early to avoid further distraction.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The client suddenly starts crying while discussing a deeply personal experience. What is the most appropriate way to respond?",
        options: [
          { text: "Offer tissues and try to lighten the mood.", value: 0 },
          {
            text: "Remain calm, compassionate, and hold space without rushing.",
            value: 1,
          },
          { text: "Suggest moving to a less emotional topic.", value: 0 },
          {
            text: "Ask the client if they want to stop the session.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A coach realizes that they don’t know how to “solve” the client’s challenge. What should they do?",
        options: [
          {
            text: "Embrace the uncertainty and stay curious with the client.",
            value: 1,
          },
          { text: "Suggest a solution to regain control.", value: 0 },
          { text: "End the topic and shift to goal tracking.", value: 0 },
          {
            text: "Ask the client to research options and return with a plan.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client reflects deeply and says, “I’ve never thought about it this way before.” What is the best next step for the coach?",
        options: [
          {
            text: "Pause and allow space for the client to continue processing.",
            value: 1,
          },
          {
            text: "Quickly ask another question to keep the flow going.",
            value: 0,
          },
          {
            text: "Move to action planning to build on the insight.",
            value: 0,
          },
          {
            text: "Repeat the insight and ask for confirmation.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client is stuck in circular thinking and the coach begins to feel impatient. What should the coach do?",
        options: [
          { text: "Interrupt and guide them out of the loop.", value: 0 },
          {
            text: "Challenge the client firmly to break the pattern.",
            value: 0,
          },
          {
            text: "Notice the feeling, stay present, and gently explore what’s underneath the repetition.",
            value: 1,
          },
          {
            text: "Let the client talk until they find their own way.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The coach’s schedule is packed, and they feel rushed as the session begins. How can they maintain presence?",
        options: [
          { text: "Power through the session quickly.", value: 0 },
          {
            text: "Take a moment to center themselves before fully engaging with the client.",
            value: 1,
          },
          { text: "Apologize to the client for being in a hurry.", value: 0 },
          { text: "Keep the session short to manage time.", value: 0 },
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Listens Actively",
    questions: [
      {
        question:
          "During a session, the client repeatedly mentions feeling “stuck,” but their tone is upbeat and they smile. What should the coach do?",
        options: [
          { text: "Accept the client’s words and move forward.", value: 0 },
          { text: "Explore the discrepancy between words and tone.", value: 1 },
          {
            text: "Reassure the client that feeling stuck is common.",
            value: 0,
          },
          {
            text: "Offer a strategy that worked with a previous client.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client says, “I just don’t know what to do anymore,” and sighs heavily. What is the most effective coach response?",
        options: [
          { text: "Ignore the sigh and focus on next steps.", value: 0 },
          { text: "Shift to a different topic.", value: 0 },
          {
            text: "Reflect the emotional tone and ask what the sigh means.",
            value: 1,
          },
          { text: "Summarize the last thing the client said.", value: 0 },
        ],
      },
      {
        question:
          "In response to a client describing a stressful work situation, the coach says: “So you’re overwhelmed and frustrated.” The client nods. What should the coach do next?",
        options: [
          { text: "Move on to setting goals for next week.", value: 0 },
          { text: "Offer a suggestion for stress relief.", value: 0 },
          {
            text: "Ask the client to share more about the frustration.",
            value: 1,
          },
          { text: "Praise the client for being honest.", value: 0 },
        ],
      },
      {
        question:
          "Over several sessions, the client uses words like “invisible,” “forgotten,” and “on the sidelines.” What should the coach do?",
        options: [
          {
            text: "Bring up the recurring language and explore its meaning.",
            value: 1,
          },
          { text: "Tell the client to avoid negative language.", value: 0 },
          { text: "Focus only on what the client says today.", value: 0 },
          { text: "Encourage the client to be more optimistic.", value: 0 },
        ],
      },
      {
        question:
          "A client describes an interaction with their boss and says, “I didn’t say anything, but inside I was boiling.” What should the coach explore?",
        options: [
          { text: "What the boss said.", value: 0 },
          {
            text: "Whether the client should speak up next time.",
            value: 0,
          },
          {
            text: "What the client felt and chose not to express.",
            value: 1,
          },
          {
            text: "Whether silence is always the best approach.",
            value: 0,
          },
        ],
      },
      {
        question:
          "When a client says, “I feel okay, I guess,” the coach replies, “You’re okay.” What’s missing in this response?",
        options: [
          { text: "Validation of client’s uncertainty.", value: 0 },
          {
            text: "Exploration of the ambiguity in the client’s tone.",
            value: 1,
          },
          { text: "Repetition of the client’s words.", value: 0 },
          { text: "Suggestion for next steps.", value: 0 },
        ],
      },
      {
        question:
          "A client is talking about a challenging project, and the coach notices the client wringing their hands. What should the coach do?",
        options: [
          { text: "Ignore it; non-verbal cues are unreliable.", value: 0 },
          { text: "Ask if the client is anxious.", value: 0 },
          {
            text: "Share the observation and ask what the gesture represents.",
            value: 1,
          },
          {
            text: "Reassure the client that stress is normal.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client speaks with low energy and avoids eye contact. How should the coach respond?",
        options: [
          { text: "Keep the conversation focused on tasks.", value: 0 },
          {
            text: "Ask if the client wants to talk about their week.",
            value: 0,
          },
          {
            text: "Gently reflect on the observed low energy and invite exploration.",
            value: 1,
          },
          {
            text: "Conclude the session early to allow rest.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The client says, “I know I should be grateful, but I’m just tired.” What would demonstrate active listening?",
        options: [
          { text: "Tell the client to focus on gratitude.", value: 0 },
          { text: "Say, “You shouldn’t feel guilty.”", value: 0 },
          { text: "Ask what’s making them tired.", value: 0 },
          {
            text: "Reflect the conflict between gratitude and exhaustion.",
            value: 1,
          },
        ],
      },
      {
        question:
          "The coach hears recurring themes of self-doubt over several sessions. What is the best course of action?",
        options: [
          { text: "Wait for the client to bring it up again.", value: 0 },
          {
            text: "Explore the pattern of self-doubt as a theme.",
            value: 1,
          },
          {
            text: "Challenge the client to stop doubting themselves.",
            value: 0,
          },
          {
            text: "Redirect to setting performance goals.",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Evokes Awareness",
    questions: [
      {
        question:
          "A client says, “I always end up taking on too much at work.” What’s the best way for the coach to evoke insight?",
        options: [
          { text: "Suggest time management tools immediately.", value: 0 },
          { text: "Ask if they’ve considered delegating.", value: 0 },
          {
            text: "Ask what patterns or beliefs might lead to saying yes too often.",
            value: 1,
          },
          { text: "Offer to role-play how to say no.", value: 0 },
        ],
      },
      {
        question:
          "The client expresses uncertainty about how to move forward. What coach response would best evoke awareness?",
        options: [
          { text: "Encourage the client to revisit past goals.", value: 0 },
          {
            text: "Ask, “What haven’t you tried yet that might be worth exploring?”",
            value: 1,
          },
          { text: "Offer examples of what other clients have done.", value: 0 },
          { text: "Tell them to list out pros and cons.", value: 0 },
        ],
      },
      {
        question:
          "A client says, “I’m just not the kind of person who takes risks.” How should the coach respond to support deeper awareness?",
        options: [
          { text: "Agree and move on to something else.", value: 0 },
          { text: "Ask them to describe why they avoid risk.", value: 0 },
          { text: "Encourage them to take small risks anyway.", value: 0 },
          {
            text: "Ask, “What has shaped your belief about risk?”",
            value: 1,
          },
        ],
      },
      {
        question:
          "A client is caught in a loop of negative self-talk. What would be the most effective coaching move?",
        options: [
          {
            text: "Disagree with their statements to counter the negativity.",
            value: 0,
          },
          {
            text: "Invite them to explore where that inner voice comes from and how it serves them.",
            value: 1,
          },
          {
            text: "Encourage affirmations to override the mindset.",
            value: 0,
          },
          { text: "Share a success story to inspire them.", value: 0 },
        ],
      },
      {
        question:
          "A client says, “This just doesn’t feel like me,” while talking about a recent decision. What coach response could spark useful reflection?",
        options: [
          { text: "Suggest they reverse the decision.", value: 0 },
          { text: "Tell them it’s okay to feel that way.", value: 0 },
          {
            text: "Ask, “What about this decision feels out of alignment with who you are?”",
            value: 1,
          },
          {
            text: "Explore whether the consequences are serious.",
            value: 0,
          },
        ],
      },
      {
        question:
          "During a session, the coach notices the client’s energy drops when discussing a new job opportunity. What should the coach do?",
        options: [
          { text: "Encourage the client to stay positive.", value: 0 },
          {
            text: "Share the observation and ask what might be happening internally.",
            value: 1,
          },
          { text: "Move on to action steps.", value: 0 },
          { text: "Ask about salary and logistics.", value: 0 },
        ],
      },
      {
        question:
          "A coach senses the client is operating on assumptions. What is the best way to support awareness?",
        options: [
          {
            text: "Challenge the assumption by providing a counter-example.",
            value: 0,
          },
          {
            text: "Ask, “What if the opposite were true—how would that change things?”",
            value: 1,
          },
          {
            text: "Ask the client to stop assuming and look at facts.",
            value: 0,
          },
          {
            text: "Avoid the topic to keep the session flowing.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client says they’ve had a great week and feel proud. What is an effective way to enhance learning in this moment?",
        options: [
          { text: "Congratulate them and move on.", value: 0 },
          {
            text: "Ask, “What worked well for you, and how can you apply that again?”",
            value: 1,
          },
          { text: "Remind them that consistency is important.", value: 0 },
          { text: "Shift the focus to new goals.", value: 0 },
        ],
      },
      {
        question:
          "A client is overwhelmed by too many ideas. What coach approach supports clarity and insight?",
        options: [
          { text: "Prioritize the ideas for them.", value: 0 },
          { text: "Ask which idea they like best.", value: 0 },
          {
            text: "Invite the client to group or theme the ideas to see patterns.",
            value: 1,
          },
          {
            text: "Tell them to focus on just one and ignore the rest.",
            value: 0,
          },
        ],
      },
      {
        question:
          "The client appears stuck between two choices and asks, “What would you do if you were me?” What is the best response?",
        options: [
          { text: "Share your personal experience.", value: 0 },
          {
            text: "Invite the client to consider what each option represents to them.",
            value: 1,
          },
          { text: "Suggest the safer option.", value: 0 },
          {
            text: "Help them decide by listing risks and benefits.",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Facilitates Client Growth",
    questions: [
      {
        question:
          "A client says, “I realize I always avoid difficult conversations.” What should the coach do to facilitate growth?",
        options: [
          { text: "Suggest a book on assertive communication.", value: 0 },
          {
            text: "Ask how this insight might influence future choices or behaviors.",
            value: 1,
          },
          { text: "Congratulate the client and move on.", value: 0 },
          { text: "Recommend a role-play exercise immediately.", value: 0 },
        ],
      },
      {
        question:
          "The client says, “I want to commit to better time boundaries next week.” What’s the most appropriate coach response?",
        options: [
          { text: "Set specific deadlines for them.", value: 0 },
          {
            text: "Ask how they want to stay accountable and what success would look like.",
            value: 1,
          },
          {
            text: "Encourage the client to just try and see how it goes.",
            value: 0,
          },
          {
            text: "Give them a time management tool to follow.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client takes a bold step in line with their goals. How can the coach reinforce client growth?",
        options: [
          {
            text: "Celebrate the action and invite the client to reflect on what they learned.",
            value: 1,
          },
          { text: "Suggest a more structured plan next time.", value: 0 },
          { text: "Review the risk they took.", value: 0 },
          { text: "Move quickly to the next action item.", value: 0 },
        ],
      },
      {
        question:
          "At the end of a coaching session, the client seems energized but the coach ends abruptly due to time. What could the coach do differently next time?",
        options: [
          { text: "Skip summaries to save time.", value: 0 },
          {
            text: "Reserve time to partner with the client in closing and capturing learning.",
            value: 1,
          },
          {
            text: "Leave it to the client to reflect after the session.",
            value: 0,
          },
          {
            text: "End early and send a follow-up email instead.",
            value: 0,
          },
        ],
      },
      {
        question:
          "A client says, “I learned I’m most productive in the mornings.” What is the coach’s best next step?",
        options: [
          { text: "Move on to a new topic.", value: 0 },
          {
            text: "Suggest adding morning goals to their to-do list.",
            value: 0,
          },
          {
            text: "Ask how they want to integrate this learning into their weekly routine.",
            value: 1,
          },
          { text: "Offer morning productivity hacks.", value: 0 },
        ],
      },
      {
        question:
          "A client has not followed through on a planned action. How should the coach respond?",
        options: [
          {
            text: "Invite the client to explore what got in the way and what they learned.",
            value: 1,
          },
          {
            text: "Express disappointment and set a new deadline.",
            value: 0,
          },
          { text: "Move on without addressing it.", value: 0 },
          { text: "Remind them of their original commitment.", value: 0 },
        ],
      },
      {
        question:
          "A client shares excitement about a small win. What’s the best coach response?",
        options: [
          {
            text: "Say, “That’s great—let’s focus on the next step.”",
            value: 0,
          },
          { text: "Log the success for future tracking.", value: 0 },
          { text: "Tell them this is expected progress.", value: 0 },
          {
            text: "Celebrate the success and ask what contributed to it.",
            value: 1,
          },
        ],
      },
      {
        question:
          "A client is unsure how to move forward after a big realization. What should the coach do?",
        options: [
          { text: "Offer a few potential next steps.", value: 0 },
          {
            text: "Ask, “What’s one small step you could take to act on this insight?”",
            value: 1,
          },
          {
            text: "Delay action planning until the next session.",
            value: 0,
          },
          { text: "Tell the client to sleep on it.", value: 0 },
        ],
      },
      {
        question:
          "A client finishes summarizing their key insight from the session. What is a good next step for the coach?",
        options: [
          {
            text: "Partner with the client to identify how they want to apply that learning.",
            value: 1,
          },
          {
            text: "Compliment their awareness and close the session.",
            value: 0,
          },
          {
            text: "Offer homework to reinforce the learning.",
            value: 0,
          },
          { text: "Write the summary down for them.", value: 0 },
        ],
      },
      {
        question:
          "A client is exploring how to manage competing priorities. How can the coach support forward momentum?",
        options: [
          { text: "Create a step-by-step plan for them.", value: 0 },
          { text: "Tell them to focus on their top three tasks.", value: 0 },
          { text: "Ask what they’ve already tried.", value: 0 },
          {
            text: "Invite the client to consider resources, support, and potential obstacles.",
            value: 1,
          },
        ],
      },
    ],
  },

  
];
