import { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import lasVentasBg from './images/fon_las-ventas.JPG'
import bullIcon from './images/bik_2.png'
import bull1 from './images/bull-1.JPG'
import bull2 from './images/bull-2.JPG'
import bull3 from './images/bull-3.JPG'
import bull4 from './images/bull-4.JPG'
import bull5 from './images/bull-5.JPG'
import bull6 from './images/bull-6.JPG'
import bull7 from './images/bull-7.JPG'
import bull8 from './images/bull-8.JPG'
import bull9 from './images/bull-9.JPG'
import bull10 from './images/bull-10.JPG'
import bull11 from './images/bull-11.JPG'
import bull12 from './images/bull-12.JPG'
import bull13 from './images/bull-13.JPG'
import bull14 from './images/bull-14.JPG'
import bull15 from './images/bull-15.JPG'
import bull16 from './images/bull-16.JPG'
import bull17 from './images/bull-17.JPG'
import bull18 from './images/bull-18.JPG'
import bull19 from './images/bull-19.JPG'
import bull20 from './images/bull-20.JPG'
import bull21 from './images/bull-21.JPG'

// Массив быков с их номерами и фотографиями
const bulls = [
  { number: 1, image: bull1 },
  { number: 2, image: bull2 },
  { number: 3, image: bull3 },
  { number: 4, image: bull4 },
  { number: 5, image: bull5 },
  { number: 6, image: bull6 },
  { number: 7, image: bull7 },
  { number: 8, image: bull8 },
  { number: 9, image: bull9 },
  { number: 10, image: bull10 },
  { number: 11, image: bull11 },
  { number: 12, image: bull12 },
  { number: 13, image: bull13 },
  { number: 14, image: bull14 },
  { number: 15, image: bull15 },
  { number: 16, image: bull16 },
  { number: 17, image: bull17 },
  { number: 18, image: bull18 },
  { number: 19, image: bull19 },
  { number: 20, image: bull20 },
  { number: 21, image: bull21 },
]

function LasVentas() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  // ✅ Прячем фон body ДО первой отрисовки — убирает мерцание
  useLayoutEffect(() => {
    const originalBg = document.body.style.backgroundImage
    document.body.style.backgroundImage = 'none'
    return () => {
      document.body.style.backgroundImage = originalBg
    }
  }, [])

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bulls.length) % bulls.length)
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bulls.length)
  }

  const goHome = () => {
    navigate('/')
  }

  // Обработка клавиатуры и клика по overlay
  useEffect(() => {
    if (!isModalOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isModalOpen])

  const currentBull = bulls[currentIndex]

  return (
    <>
      {/* ✅ ФОН: отдельный слой с фильтром — контент не меняется */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage: `url(${lasVentasBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.28) saturate(1.2)',
        }}
      />

      <main className="main-content inner-page">
        <div className="title-container">
          <h1>🏟️ Las Ventas</h1>
          <p>Главная арена Мадрида</p>

          <div className="bulls-decoration">
            {bulls.map((bull, index) => (
              <div
                key={bull.number}
                className={`decor-bull bull-${bull.number}`}
                data-bull-number={bull.number}
                onClick={() => openModal(index)}
              >
                <img src={bullIcon} alt={`Бык ${bull.number}`} />
              </div>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="back-button"
          onClick={(e) => {
            e.preventDefault()
            goHome()
          }}
        >
          <i className="fas fa-home"></i> На главную
        </a>

        {/* Модальное окно с быками */}
        <div
          className={`bull-modal ${isModalOpen ? 'is-open' : ''}`}
          id="bullModal"
        >
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
              <img src={currentBull.image} alt={`№${currentBull.number}`} />
            </div>

            <button
              className="bull-modal-nav bull-modal-next"
              onClick={showNext}
              aria-label="Следующий"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="bull-modal-caption">
              <span className="bull-modal-number">№{currentBull.number}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LasVentas
