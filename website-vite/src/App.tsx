import BlurryShapes from './blurryShapes'
import BoxWithButton from './boxWithButton'

function App() {

  return (
    <>
      <div className='min-h-screen px-8 py-16 bg-black'>
        <div className='grid gap-8 items-center justify-center'>

          <BoxWithButton />

          <div className='h-40'></div>

          <BlurryShapes />
          
        </div>
      </div>
    </>
  )
}

export default App
