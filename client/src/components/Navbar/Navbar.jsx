import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useState } from 'react'

const Navbar = ({ navbarimg, type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openCalender, setOpenCalender] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  })

  const handleAdult = (operation) => {
    if (operation === 'add') {
      const newOptions = {
        ...options,
        adult: options.adult + 1
      }
      setOptions(newOptions)
    } else {
      const newOptions = {
        ...options,
        adult: options.adult - 1
      }
      setOptions(newOptions)
    }
  }

  const handleChildren = (operation) => {
    if (operation === 'add') {
      const newOptions = {
        ...options,
        children: options.children + 1
      }
      setOptions(newOptions)
    } else {
      const newOptions = {
        ...options,
        children: options.children - 1
      }
      setOptions(newOptions)
    }
  }

  return (
    <div className={styles.container}>
      <img src={navbarimg} />
      <div className={styles.top}>
        <div className={styles.location}>        <FontAwesomeIcon icon={faLocationDot} size='sm' />
          <span>43, Gregory Lane, Nuwara Eliya</span></div>
        <h2>OCEANIA</h2>
        <div className={styles.btnContainer}>
          <button className={styles.register}>Register</button>
          <button className={styles.login}>Login</button>
        </div>
      </div>
      <hr />
      <div className={styles.navBar}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      {type !== 'room' &&
        <>
          <div className={styles.searchContainer}>
            <div className={styles.searchItem}>
              <FontAwesomeIcon icon={faCalendarDays} className={styles.icon} />
              <span
                onClick={() => setOpenCalender(!openCalender)}
                className={styles.searchText}
              >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
              {openCalender && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className={styles.date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className={styles.searchItem}>
              <FontAwesomeIcon icon={faPerson} className={styles.icon} />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className={styles.searchText}
              >{`${options.adult} adult · ${options.children} children`}</span>
              {openOptions && (
                <div className={styles.options}>
                  <div className={styles.optionItem}>
                    <span className={styles.optionText}>Adult</span>
                    <div className={styles.optionCounter}>
                      <button
                        disabled={options.adult <= 1}
                        className={styles.optionCounterButton}
                        onClick={() => { handleAdult('subtract') }}
                      >
                        -
                      </button>
                      <span className={styles.optionCounterNumber}>
                        {options.adult}
                      </span>
                      <button
                        className={styles.optionCounterButton}
                        onClick={() => { handleAdult('add') }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.optionItem}>
                    <span className={styles.optionText}>Children</span>
                    <div className={styles.optionCounter}>
                      <button
                        disabled={options.children <= 0}
                        className={styles.optionCounterButton}
                        onClick={() => { handleChildren('substract') }}
                      >
                        -
                      </button>
                      <span className={styles.optionCounterNumber}>
                        {options.children}
                      </span>
                      <button
                        className={styles.optionCounterButton}
                        onClick={() => { handleChildren('add') }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.searchItem}>
              <button className={styles.searchBtn} >
                Search
              </button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Navbar