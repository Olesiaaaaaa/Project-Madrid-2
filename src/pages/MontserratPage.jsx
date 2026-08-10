import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/montserrat.css'

// Летящие ласточки (13 штук) — верхняя часть экрана
const flyingSwallows = [
  { class: 'swallow-flying-1', image: '/images/info-1.jpg' },
  { class: 'swallow-flying-2', image: '/images/info-2.jpg' },
  { class: 'swallow-flying-3', image: '/images/info-3.jpg' },
  { class: 'swallow-flying-4', image: '/images/info-4.jpg' },
  { class: 'swallow-flying-5', image: '/images/info-5.jpg' },
  { class: 'swallow-flying-6', image: '/images/info-6.jpg' },
  { class: 'swallow-flying-7', image: '/images/info-7.jpg' },
  { class: 'swallow-flying-8', image: '/images/info-8.jpg' },
  { class: 'swallow-flying-9', image: '/images/info-9.jpg' },
  { class: 'swallow-flying-10', image: '/images/info-10.jpg' },
  { class: 'swallow-flying-11', image: '/images/info-11.jpg' },
  { class: 'swallow-flying-12', image: '/images/info-12.jpg' },
  { class: 'swallow-flying-13', image: '/images/info-13.jpg' },
]

// Сидящие ласточки (13 штук) — нижняя часть экрана
const sittingSwallows = [
  { class: 'swallow-sitting-1', image: '/images/info-14.jpg' },
  { class: 'swallow-sitting-2', image: '/images/info-15.jpg' },
  { class: 'swallow-sitting-3', image: '/images/info-16.jpg' },
  { class: 'swallow-sitting-4', image: '/images/info-17.jpg' },
  { class: 'swallow-sitting-5', image: '/images/info-18.jpg' },
  { class: 'swallow-sitting-6', image: '/images/info-19.jpg' },
  { class: 'swallow-sitting-7', image: '/images/info-20.jpg' },
  { class: 'swallow-sitting-8', image: '/images/info-21.jpg' },
  { class: 'swallow-sitting-9', image: '/images/info-22.jpg' },
  { class: 'swallow-sitting-10', image: '/images/info-23.jpg' },
  { class: 'swallow-sitting-11', image: '/images/info-24.jpg' },
  { class: 'swallow-sitting-12', image: '/images/info-25.jpg' },
  { class: 'swallow-sitting-13', image: '/images/info-26.jpg' },
]

function MontserratPage() {
  const [modalState, setModalState] = useState({
    visible: false,
    hiding: false,
    image: '',
  })
  const timersRef = useRef({ close: null, hide: null })

  // Закрыть модальное окно (с плавным исчезновением)
  const closeModal = () => {
    clearTimeout(timersRef.current.close)
    clearTimeout(timersRef.current.hide)

    setModalState((prev) => ({ ...prev, hiding: true }))

    timersRef.current.hide = setTimeout(() => {
      setModalState({ visible: false, hiding: false, image: '' })
    }, 500)
  }

  // Открыть модальное окно с картинкой
  const openModal = (imageSrc) => {
    clearTimeout(timersRef.current.close)
    clearTimeout(timersRef.current.hide)

    setModalState({ visible: true, hiding: false, image: imageSrc })

    // Автозакрытие через 6 секунд
    timersRef.current.close = setTimeout(closeModal, 6000)
  }

  // Очистка таймеров при размонтировании компонента
  useEffect(() => {
    return () => {
      clearTimeout(timersRef.current.close)
      clearTimeout(timersRef.current.hide)
    }
  }, [])

  // Закрытие по клику на тёмный фон (но не на саму картинку)
  const handleModalClick = (e) => {
    if (e.target.classList.contains('info-modal')) {
      closeModal()
    }
  }

  // Перезапуск анимации дорожки при открытии новой картинки
  const contentRef = useRef(null)
  useEffect(() => {
    if (modalState.visible && contentRef.current) {
      contentRef.current.style.animation = 'none'
      void contentRef.current.offsetWidth
      contentRef.current.style.animation = ''
    }
  }, [modalState.image, modalState.visible])

  const modalClassName = modalState.visible
    ? modalState.hiding
      ? 'info-modal show hide'
      : 'info-modal show'
    : 'info-modal'

  return (
    <div className="montserrat-page">
      <h1>⛰️ Montserrat</h1>
      <p>Священная гора Каталонии</p>

      {/* Декоративные ласточки */}
      <div className="swallows-decoration">
        {flyingSwallows.map((swallow, index) => (
          <div
            key={`flying-${index}`}
            className={`decor-swallow ${swallow.class}`}
            onClick={() => openModal(swallow.image)}
          >
            <img src="/images/swallow-flying.png" alt="Летящая ласточка" />
          </div>
        ))}
        {sittingSwallows.map((swallow, index) => (
          <div
            key={`sitting-${index}`}
            className={`decor-swallow ${swallow.class}`}
            onClick={() => openModal(swallow.image)}
          >
            <img src="/images/swallow-sitting.png" alt="Сидящая ласточка" />
          </div>
        ))}
      </div>

      {/* Модальное окно с картинкой */}
      <div className={modalClassName} onClick={handleModalClick}>
        <div className="info-modal-content" ref={contentRef}>
          <img src={modalState.image} alt="Информация" />
        </div>
      </div>

      <Link to="/" className="back-button">
        <i className="fas fa-home"></i> На главную
      </Link>
    </div>
  )
}

export default MontserratPage
