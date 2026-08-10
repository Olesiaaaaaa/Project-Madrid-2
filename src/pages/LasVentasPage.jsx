import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/las-ventas.css'

// Массив данных всех быков (21 штука)
const bullsData = Array.from({ length: 21 }, (_, i) => ({
  number: i + 1,
  image: `/images/bull-${i + 1}.jpg`,
}))

function LasVentasPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Открыть модальное окно с конкретным быком
  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  // Закрыть модальное окно
  const closeModal = () => {
    setModalOpen(false)
  }

  // Перейти к предыдущему быку
  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bullsData.length) % bullsData.length)
  }

  // Перейти к следующему быку
  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bullsData.length)
  }

  // Блокировка прокрутки страницы при открытом модальном окне
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  // Обработка клавиатуры: Escape, стрелки
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen])

  return (
    <div className="las-ventas-page">
      <div className="title-container">
        <h1>🏟️ Las Ventas</h1>
        <p>Главная арена Мадрида</p>

        <div className="bulls-decoration">
          {bullsData.map((bull, index) => (
            <div
              key={bull.number}
              className={`decor-bull bull-${bull.number}`}
              data-bull-number={bull.number}
              onClick={() => openModal(index)}
            >
              <img src="/images/bik_2.png" alt={`Бык ${bull.number}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно с фотографиями быков */}
      <div className={`bull-modal ${modalOpen ? 'is-open' : ''}`}>
        <div className="bull-modal-overlay" onClick={closeModal}></div>
        <div className="bull-modal-content">
          <button
            className="bull-modal-close"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            <i className="fas fa-times"></i>
          </button>

          <button
            className="bull-modal-nav bull-modal-prev"
            onClick={showPrev}
            aria-label="Предыдущий"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="bull-modal-image-wrapper">
            <img
              src={bullsData[currentIndex].image}
              alt={`Бык №${bullsData[currentIndex].number}`}
            />
          </div>

          <button
            className="bull-modal-nav bull-modal-next"
            onClick={showNext}
            aria-label="Следующий"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="bull-modal-caption">
            <span className="bull-modal-number">
              №{bullsData[currentIndex].number}
            </span>
          </div>
        </div>
      </div>

      <Link to="/" className="back-button">
        <i className="fas fa-home"></i> На главную
      </Link>
    </div>
  )
}

export default LasVentasPage
