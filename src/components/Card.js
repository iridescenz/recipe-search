import React, { useState, useEffect } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { BsChevronDoubleUp } from 'react-icons/bs'
import { VscLink } from 'react-icons/vsc'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip)

const Card = ({ label, ingredientLines, image, url }) => {
  const [showIngr, setShowIngr] = useState(false)
  useEffect(() => {
    setShowIngr(false)
  }, [image])

  return (
    <div className='card'>
      <div className='label'>{label}</div>
      <img src={image} alt={label} />
      <br />
      <div
        className='caret'
        onClick={() => {
          setShowIngr(!showIngr)
        }}
      >
        {!showIngr ? (
          <BsChevronDoubleDown />
        ) : (
          <>
            {' '}
            <BsChevronDoubleUp />
            {showIngr && <ul className='ingr'>{ingredientLines}</ul>}
            <a href={url}>
              <LightTooltip title='See full recipe' placement='right'>
                <Button>
                  <VscLink />
                </Button>
              </LightTooltip>
            </a>
          </>
        )}
      </div>
    </div>
  )
}
export default Card
