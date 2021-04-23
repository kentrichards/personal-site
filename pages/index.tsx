import HeroArticle from '../components/heroArticle'
import SocialContainer from '../components/socialContainer'
import Timeline from '../components/timeline'

const Home = () => {
  return (
    <>
      <div className="space-y-8">
        <HeroArticle />
        <SocialContainer />
      </div>
      <div className="bg-white dark:bg-gray-700 rounded p-8 space-y-8 mt-12 sm:mt-24">
        <h2 className="text-3xl font-semibold text-center">Experience</h2>
        <Timeline />
      </div>
      <a
        href="#"
        className="mt-12 sm:mt-16 text-center block hover:underline focus-visible:outline-black dark:focus-visible:outline-white"
      >
        Back to top
      </a>
    </>
  )
}

export default Home
