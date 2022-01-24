import PropTypes from 'prop-types'
import useResize from 'use-resizing'

import Input from '@/components/Input'
import PostPreview from '@/components/PostPreview'
import Button from '@/components/buttons/Button'
import LinkTo from '@/components/LinkTo'
import color from '@/constants/colors'
import SCREEN_SIZE from '@/constants/screenSize'
import IMAGE_SIZE from '@/constants/imageSize'
import styles from './hero.module.scss'

const Hero = ({title, description, mainCard, button, slug}) => {
  const {category, pageSlug, postPreview, releaseDate, timeToRead} = mainCard
  const currentSlug = `${slug}/${pageSlug}`
  const screenSize = useResize()
  const imageSize =
    screenSize.width >= SCREEN_SIZE.MOBILE
      ? {width: IMAGE_SIZE.LARGE_L_WIDTH, height: IMAGE_SIZE.LARGE_HEIGHT}
      : {width: IMAGE_SIZE.SMALL_WIDTH, height: IMAGE_SIZE.HEIGHT}
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <form className={styles.form}>
          <label className={styles.input}>
            <Input name="subscribeField" placeholder="email@example" />
          </label>
          <Button type="submit" text={button.buttonSubscribe} color={color.YELLOW} />
        </form>
      </div>
      <div className={styles.cardWrapper}>
        {
          <PostPreview
            postPreview={postPreview}
            pageSlug={currentSlug}
            timeToRead={timeToRead}
            category={category}
            releaseDate={releaseDate}
            cardStyle="cardStyle"
            imageSize={imageSize}
          />
        }
        {<LinkTo link={currentSlug} linkName={button.buttonReadMore} />}
      </div>
    </section>
  )
}

Hero.propTypes = {
  mainCard: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  pageSlug: PropTypes.string,
  slug: PropTypes.string
}
export default Hero
