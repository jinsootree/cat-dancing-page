import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

const DancingCat = () => {
  const { isAnimating, toggleAnimation } = useAnimation(true)

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : 'static'}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          className="toggle-button"
          onClick={toggleAnimation}
        >
          {isAnimating ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
        </button>

        <p className="instructions">
          {isAnimating ? 'The cat is dancing! 💃' : 'Click to make the cat dance! 🐱'}
        </p>

        <p className="keyboard-hint">
          💡 Press <kbd>Space</kbd> to toggle animation
        </p>
      </div>
    </div>
  )
}

export default DancingCat