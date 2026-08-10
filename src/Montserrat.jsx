import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import montserratBg from './images/fon-montserrat.JPG'
import swallowFlying from './images/swallow-flying.png'
import swallowSitting from './images/swallow-sitting.png'
import info1 from './images/info-1.JPG'
import info2 from './images/info-2.JPG'
import info3 from './images/info-3.JPG'
import info4 from './images/info-4.JPG'
import info5 from './images/info-5.JPG'
import info6 from './images/info-6.JPG'
import info7 from './images/info-7.JPG'
import info8 from './images/info-8.JPG'
import info9 from './images/info-9.JPG'
import info10 from './images/info-10.JPG'
import info11 from './images/info-11.JPG'
import info12 from './images/info-12.JPG'
import info13 from './images/info-13.JPG'
import info14 from './images/info-14.JPG'
import info15 from './images/info-15.JPG'
import info16 from './images/info-16.JPG'
import info17 from './images/info-17.JPG'
import info18 from './images/info-18.JPG'
import info19 from './images/info-19.JPG'
import info20 from './images/info-20.JPG'
import info21 from './images/info-21.JPG'
import info22 from './images/info-22.JPG'
import info23 from './images/info-23.JPG'
import info24 from './images/info-24.JPG'
import info25 from './images/info-25.JPG'
import info26 from './images/info-26.JPG'

// Массив всех info-картинок в порядке номеров
const infoImages = [
  info1,
  info2,
  info3,
  info4,
  info5,
  info6,
  info7,
  info8,
  info9,
  info10,
  info11,
  info12,
  info13,
  info14,
  info15,
  info16,
  info17,
  info18,
  info19,
  info20,
  info21,
  info22,
  info23,
  info24,
  info25,
  info26,
]

// Летящие ласточки (13 штук)
const flyingSwallows = Array.from({ length: 13 }, (_, i) => ({
  className: `decor-swallow swallow-flying-${i + 1}`,
  image: swallowFlying,
  infoImage: infoImages[i],
}))

// Сидящие ласточки (13 штук, info-картинки начинаются с info-14)
const sittingSwallows = Array.from({ length: 13 }, (_, i) => ({
  className: `decor-swallow swallow-sitting-${i + 1}`,
  image: swallowSitting,
  infoImage: infoImages[i + 13],
}))

// Общий массив всех ласточек
const allSwallows = [...flyingSwallows, ...sittingSwallows]

function Montserrat() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    isHiding: false,
    image: null,
  })
  const navigate = useNavigate()
  const modalTimerRef = useRef(null)
  const hideTimerRef = useRef(null)
  const contentRef = useRef(null)

  // ✅ Прячем фон body ДО первой отрисовки — убирает мерцание
  useLayoutEffect(() => {
    const originalBg = document.body.style.backgroundImage
    document.body.style.backgroundImage = 'none'
    return () => {
      document.body.style.backgroundImage = originalBg
    }
  }, [])

  // Очистка таймеров при размонтировании
  useEffect(() => {
    return () => {
      if (modalTimerRef.current) clearTimeout(modalTimerRef.current)
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [])

  const openModal = (infoImage) => {
    if (modalTimerRef.current) clearTimeout(modalTimerRef.current)
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)

    // Перезапуск анимации дорожки прогресса
    if (contentRef.current) {
      contentRef.current.style.animation = 'none'
      void contentRef.current.offsetWidth // форсируем reflow
      contentRef.current.style.animation = ''
    }

    setModalState({
      isOpen: true,
      isHiding: false,
      image: infoImage,
    })

    modalTimerRef.current = setTimeout(closeModal, 6000)
  }

  const closeModal = () => {
    if (modalTimerRef.current) clearTimeout(modalTimerRef.current)
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)

    setModalState((prev) => ({ ...prev, isHiding: true }))

    hideTimerRef.current = setTimeout(() => {
      setModalState({
        isOpen: false,
        isHiding: false,
        image: null,
      })
    }, 500)
  }

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  const goHome = () => {
    navigate('/')
  }

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
          backgroundImage: `url(${montserratBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(1.18) saturate(1.2)',
        }}
      />

      <main className="main-content inner-page">
        <h1>⛰️ Montserrat</h1>
        <p>Священная гора Каталонии</p>

        <div className="swallows-decoration">
          {allSwallows.map((swallow, index) => (
            <div
              key={index}
              className={swallow.className}
              onClick={() => openModal(swallow.infoImage)}
            >
              <img src={swallow.image} alt="Ласточка" />
            </div>
          ))}
        </div>

        <div
          id="info-modal"
          className={`info-modal ${modalState.isOpen && !modalState.isHiding ? 'show' : ''} ${
            modalState.isHiding ? 'hide' : ''
          }`}
          onClick={handleModalClick}
        >
          <div className="info-modal-content" ref={contentRef}>
            <img
              id="info-modal-img"
              src={modalState.image || ''}
              alt="Информация"
            />
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
      </main>
    </>
  )
}

export default Montserrat
