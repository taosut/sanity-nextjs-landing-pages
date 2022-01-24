import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './filterItem.module.scss'

const FilterItem = ({itemName, isActive, onClick, name, groupName}) => {
  return (
    <div
      className={styles.item}
      onClick={() =>
        onClick((prevState) => {
          return {
            ...prevState,
            [groupName]: {...prevState[groupName], [name]: !prevState[groupName][name]}
          }
        })
      }
    >
      <div className={classNames(styles.radioButton, isActive && styles.active)}></div>
      <span className={styles.category}>{itemName}</span>
    </div>
  )
}

FilterItem.propTypes = {
  item: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
}
export default FilterItem
