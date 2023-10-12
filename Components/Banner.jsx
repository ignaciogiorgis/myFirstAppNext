import Image from 'next/image'
import Navigation from './Navigation'
import banner from '../Public/Images/banner.jpg'

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="not found image"
        priority={true}
        className="w-full"
      ></Image>
      <div className="absolute top-32 left-10 w-full ">
        <Navigation />
      </div>
    </div>
  )
}

export default Banner
