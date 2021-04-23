import classnames from 'classnames'

import WorkIcon from './workIcon'
import SchoolIcon from './schoolIcon'

const timeline = [
  {
    id: 1,
    title: 'MDA Ltd',
    description:
      "Working on NATO's global maritime information platform for vessel detection and climate monitoring, using Java and Angular.",
    date: 'May to August, 2021',
    icon: WorkIcon,
    iconBackground: 'bg-teal-500'
  },
  {
    id: 2,
    title: 'Public Service Commission',
    description:
      'For eight months I worked on a modern single-page application using Selenium, Django, and React.',
    date: 'January to August, 2020',
    icon: WorkIcon,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 3,
    title: 'Dalhousie University',
    description:
      'I started my Computer Science education at Dalhousie University working with Java and Python. Later I spent time with C, JavaScript, and PHP.',
    date: 'September, 2018',
    icon: SchoolIcon,
    iconBackground: 'bg-green-500'
  }
]

const Timeline = () => (
  <div>
    {timeline.map((entry, index) => (
      <div key={entry.id} className="flex space-x-3">
        <div className="flex flex-col items-center">
          <div
            className={classnames(
              entry.iconBackground,
              'h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center ring-8 ring-white dark:ring-gray-700 z-10'
            )}
          >
            <entry.icon />
          </div>
          {index !== timeline.length - 1 ? (
            <div className="bg-gray-300 dark:bg-gray-600 h-full w-1" />
          ) : (
            <div className="h-full sm:h-1/2 w-1 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent" />
          )}
        </div>

        <div>
          <p className="text-xl xs:text-2xl leading-none">{entry.title}</p>
          <p className="text-gray-500 dark:text-gray-400">{entry.date}</p>
          {index !== timeline.length - 1 ? (
            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8">
              {entry.description}
            </p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {entry.description}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
)

export default Timeline
