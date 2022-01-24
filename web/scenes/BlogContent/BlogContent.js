import PropTypes from 'prop-types'
import {useState} from 'react'
import {useRouter} from 'next/router'
import classNames from 'classnames/bind'

import getFilterInitialData from '@/helpers/getFilterInitialData'
import filterPosts from '@/helpers/filterPosts'
import FilterList from './components/FilterList'
import SearchBar from './components/SearchBar'
import PostsList from './components/PostsList'
import Hero from './components/Hero'
import StaticImage from '@/components/StaticImage'
import arrow from '@/public/image/arrow-blog.svg'
import styles from './blogContent.module.scss'

const BlogContent = ({filter, posts, button, blog}) => {
  const initialData = getFilterInitialData(filter)
  const [filterList, setFilterList] = useState(initialData)
  const [foundPosts, setFoundPosts] = useState(null)
  const [formValue, setFormValue] = useState(undefined)
  const [isOpenAccordion, setOpenAccordion] = useState(false)
  const [isPostsNotFound, setPostsNotFound] = useState(false)
  const router = useRouter()
  const slug = router.route
  const {type, topic, industry} = filter
  const {badSearch, description, suggestions, title, mainCard, pageSlug} = blog
  let postList = filterPosts(posts, filterList)

  const onSubmit = (e) => {
    e.preventDefault()
    setFilterList(initialData)
    const regex = new RegExp(formValue, 'i')
    const result = posts.filter(({postPreview}) => postPreview.title.match(regex))
    if (formValue) {
      if (result.length) {
        setFoundPosts(result)
        setPostsNotFound(false)
      } else {
        setFoundPosts(posts)
        setPostsNotFound(true)
      }
    } else {
      setFoundPosts(undefined)
      setPostsNotFound(false)
    }
  }

  return (
    <>
      <Hero
        title={title}
        description={description}
        mainCard={mainCard}
        pageSlug={pageSlug}
        button={button}
        slug={slug}
      />
      <section className={styles.blog}>
        <div className={styles.searchWrapper}>
          <h1 className={styles.title}>articles</h1>
          <SearchBar
            formValue={formValue}
            setFormValue={setFormValue}
            button={button.buttonSearch}
            onSubmit={onSubmit}
          />
        </div>
        <div className={styles.postsWrapper}>
          <div className={classNames(styles.filter, isOpenAccordion && styles.isOpenAccordion)}>
            <div
              className={styles.accordionHead}
              onClick={() => setOpenAccordion((prevState) => !prevState)}
            >
              filters <StaticImage link={arrow} alt="arrow" />
            </div>
            <FilterList
              list={type}
              onClick={setFilterList}
              value={filterList.type}
              groupName="type"
            />
            <FilterList
              list={topic}
              onClick={setFilterList}
              value={filterList.topic}
              groupName="topic"
            />
            <FilterList
              list={industry}
              onClick={setFilterList}
              value={filterList.industry}
              groupName="industry"
            />
          </div>
          <PostsList
            posts={foundPosts ? foundPosts : postList}
            slug={slug}
            isPostsNotFound={isPostsNotFound}
            badSearch={badSearch}
            suggestions={suggestions}
          />
        </div>
      </section>
    </>
  )
}

BlogContent.propTypes = {
  filter: PropTypes.object,
  blog: PropTypes.object,
  posts: PropTypes.array,
  button: PropTypes.object
}
export default BlogContent
