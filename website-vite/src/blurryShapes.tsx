
function BlurryShapes() {


  return (
    <>
      <div className="relative w-full">

        <CircleShape color={ColorClassNames.blueClassName} className="-inset-x-20 animate-wobble1" />
        <CircleShape color={ColorClassNames.indigoClassName} className="inset-x-12 inset-y-8 animate-wobble2" />
        <CircleShape color={ColorClassNames.pinkClassName} className="-inset-y-2 inset-x-32 animate-wobble3" />
      </div>
    </>
  )
}

interface CircleShapeProps {
  color?: ColorClassNames;
  className?: string;
}

enum ColorClassNames {
  blueClassName = "bg-blue-400",
  tealClassName = "bg-teal-400",
  indigoClassName = "bg-indigo-400",
  pinkClassName = "bg-pink-400",
}

const CircleShape = ({ color, className }: CircleShapeProps) => {
  const colorClass = color;
  return (
    <>
      <div className={`${className} ${colorClass} rounded-full w-72 h-72 absolute opacity-40 blur-xl`}>

      </div>
    </>
  )
}

export default BlurryShapes
