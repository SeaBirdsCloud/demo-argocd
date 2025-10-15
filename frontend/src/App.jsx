import { useState, useEffect } from 'react'
import QuoteCard from './components/QuoteCard'

function App() {
  const [quote, setQuote] = useState(null)

  const fetchQuote = async () => {
    const res = await fetch('/api/quote')
    const data = await res.json()
    setQuote(data)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header>
        <h1>
            Quotes App ✨ <span className="text-gray-500 font-normal">| Inspiração Diária</span>
        </h1>
        <button onClick={fetchQuote} className="btn-primary">
            Nova frase ✨
        </button>
        </header>

        {/* Main */}
        <main>
        {quote ? (
            <div className="quote-card">
            <p className="quote-text">“{quote.text}”</p>
            <p className="quote-author">— {quote.author}</p>
            </div>
        ) : (
            <p className="text-gray-500 animate-pulse text-lg">Carregando...</p>
        )}
        </main>

        {/* Footer */}
        <footer>© 2025 Quotes App — Inspirado em Perdix</footer>
    </div>
    )
}

export default App
