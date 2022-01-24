import PropTypes from 'prop-types'

import FilterItem from '../FilterItem'
import styles from './filterList.module.scss'

const FilterList = ({list, onClick, value, groupName}) => {
  return (
    <div className={styles.list}>
      <h1 className={styles.title}>{list[0].groupName}</h1>
      <div className={styles.listWrapper}>
        <FilterItem
          itemName="All"
          onClick={onClick}
          name="all"
          isActive={value.all}
          groupName={groupName}
        />
        {list?.map(({itemName}, idx) => {
          return (
            <FilterItem
              itemName={itemName}
              key={idx}
              onClick={onClick}
              name={itemName}
              isActive={value[itemName]}
              groupName={groupName}
            />
          )
        })}
      </div>
    </div>
  )
}

FilterList.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
  value: PropTypes.object,
  groupName: PropTypes.string
}
export default FilterList
