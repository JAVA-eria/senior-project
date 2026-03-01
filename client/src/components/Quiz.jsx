import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  // CUSTOMIZE THESE QUESTIONS FOR FASIH!
  const questions = [
    {
      question: "When did we first started talking?",
      options: ["November 2025", "December 2025", "June 2025", "July 2025"],
      correct: 3
    },
    {
      question: "What do you believe my favourite feature is about you?",
      options: ["Your giggles", "Your eyes", "Your cheeks", "Your hands"],
      correct: 0
    },
    {
      question: "What was our story before we fell in love?",
      options: ["Friends to lovers", "Strangers to lovers", "Enemies to lovers", "Colleagues to lovers"],
      correct: 2
    },
    {
      question: "What does your lady love doing while you listen?",
      options: ["Singing", "Cooking", "Yapping", "Dancing"],
      correct: 2
    },
    {
      question: "Would you still love me if i was a cow?",
      options: ["NO","NOOOOOO", "nah", "of course, baby"],
      correct: 3
    }
  ]

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
    const correct = index === questions[currentQuestion].correct
    setIsCorrect(correct)
    
    if (correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setIsCorrect(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  if (showResult) {
    const passed = score >= 3

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          style={{ fontSize: '5rem', marginBottom: '20px' }}
        >
          {passed ? '🏆' : '⁠જ⁀➴ ♡'}
        </motion.div>

        <h2 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '2rem',
          color: 'var(--pale-gold)',
          marginBottom: '15px'
        }}>
          {passed ? "The Trial is Complete!" : "Close Enough, My Senior Knight!"}
        </h2>

        <p style={{
          fontSize: '1.3rem',
          color: 'var(--warm-white)',
          marginBottom: '10px'
        }}>
          You scored <span style={{ color: 'var(--gold)' }}>{score}/{questions.length}</span>
        </p>

        <p style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '1.1rem',
          color: 'var(--crimson)',
          fontStyle: 'italic',
          marginBottom: '40px'
        }}>
          {passed 
            ? "You truly know our story, my love!" 
            : "Even if you forgot some details, my love for you never wavers 💕"}
        </p>

        <motion.button
          className="medieval-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onComplete}
        >
          Claim Your Reward
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⚔️</div>
        <h2 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          color: 'var(--pale-gold)',
          marginBottom: '10px'
        }}>
          The Trial of Love
        </h2>
        <p style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '1.1rem',
          color: 'var(--warm-white)',
          fontStyle: 'italic'
        }}>
          Prove yourself worthy to unlock the Sacred Scroll
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        height: '8px',
        background: 'var(--dark-stone)',
        borderRadius: '4px',
        marginBottom: '30px',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--crimson), var(--gold))',
            borderRadius: '4px'
          }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          style={{
            width: '100%',
            maxWidth: '550px',
            background: 'rgba(45, 45, 45, 0.6)',
            border: '2px solid var(--gold)',
            borderRadius: '15px',
            padding: '35px',
            textAlign: 'center'
          }}
        >
          <p style={{
            color: 'var(--gold)',
            fontSize: '0.9rem',
            marginBottom: '15px',
            fontFamily: 'Cinzel, serif'
          }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h3 style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '1.4rem',
            color: 'var(--warm-white)',
            marginBottom: '30px',
            lineHeight: 1.5
          }}>
            {questions[currentQuestion].question}
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                onClick={() => selectedAnswer === null && handleAnswer(index)}
                disabled={selectedAnswer !== null}
                style={{
                  padding: '15px 20px',
                  fontSize: '1.1rem',
                  fontFamily: 'Crimson Text, serif',
                  background: selectedAnswer === index
                    ? isCorrect
                      ? 'linear-gradient(135deg, #2d5a27, #1a3d15)'
                      : 'linear-gradient(135deg, #5a2727, #3d1515)'
                    : selectedAnswer !== null && index === questions[currentQuestion].correct
                      ? 'linear-gradient(135deg, #2d5a27, #1a3d15)'
                      : 'rgba(45, 45, 45, 0.8)',
                  border: selectedAnswer === index
                    ? isCorrect
                      ? '2px solid #4ade80'
                      : '2px solid var(--crimson)'
                    : selectedAnswer !== null && index === questions[currentQuestion].correct
                      ? '2px solid #4ade80'
                      : '1px solid var(--gold)',
                  borderRadius: '8px',
                  color: 'var(--warm-white)',
                  cursor: selectedAnswer === null ? 'pointer' : 'default',
                  transition: 'all 0.3s ease'
                }}
              >
                {option}
                {selectedAnswer !== null && index === questions[currentQuestion].correct && ' ✓'}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {isCorrect !== null && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              marginTop: '25px',
              fontSize: '1.2rem',
              color: isCorrect ? '#4ade80' : 'var(--crimson)',
              fontFamily: 'Crimson Text, serif',
              fontStyle: 'italic'
            }}
          >
            {isCorrect ? "Correct! You know me well 💕" : "Oops! But I still love you 💕"}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Quiz