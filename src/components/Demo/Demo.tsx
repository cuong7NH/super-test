import React from 'react'
import {DemoWrapper} from './DemoStyled'
import { motion } from 'framer-motion'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'

const Demo = () => {
  const themeProvider = useAppSelector(selectThemeProvider)

  return (
    <DemoWrapper className="system" themeProvider={themeProvider}>
      <div className="system__orbit system__orbit--sun center">
        <img src="https://www.dropbox.com/s/g02pto204mz1ywi/sun.png?raw=1" alt="Sun"
             className="system__icon system__icon--sun"/>
      </div>
      <motion.div
        animate={{ rotate: 360}}
        transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        className=" system__orbit--mercury center border-around">
        <div className="system__planet system__planet--mercury ">
          <img src="https://www.dropbox.com/s/2o38602cmwhhdi1/mercury.png?raw=1" alt="Mercury"/>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: 360}}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="system__orbit system__orbit--venus border-around center">
        <div className="system__planet system__planet--venus">
          <img src="https://www.dropbox.com/s/wvictuysutiirho/venus.png?raw=1" alt="Venus"/>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: 360}}
        transition={{ ease: "linear", duration: 7, repeat: Infinity }}
        className="system__orbit system__orbit--earth border-around center">
        <div className="system__planet system__planet--earth">
          <img src="https://www.dropbox.com/s/ropzlyhb1v19l5t/earth.png?raw=1" alt="Earth"/>
        </div>
      </motion.div>
      {/*<div className="system__orbit system__orbit--mars">*/}
      {/*  <div className="system__planet system__planet--mars">*/}
      {/*    <img src="https://www.dropbox.com/s/fa9biyj617n1q30/mars.png?raw=1" alt="Mars"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="system__orbit system__orbit--jupiter">*/}
      {/*  <div className="system__planet system__planet--jupiter">*/}
      {/*    <img src="https://www.dropbox.com/s/d28oxi2c74zcoqk/jupiter.png?raw=1" alt="Jupiter"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <motion.div
        animate={{ rotate: 360}}
        transition={{ ease: "linear", duration: 12.6, repeat: Infinity }}
        className="system__orbit system__orbit--saturn center border-around">
        <div className="system__planet system__planet--saturn">
          <img src="https://www.dropbox.com/s/h8pj72v6mmaa0yq/saturn.png?raw=1" alt="Saturn"/>
        </div>
      </motion.div>
      {/*<div className="system__orbit system__orbit--uranus">*/}
      {/*  <div className="system__planet system__planet--uranus">*/}
      {/*    <img src="https://www.dropbox.com/s/du6znsmfos2r4ry/uranus.png?raw=1" alt="Uranus"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="system__orbit system__orbit--neptune">*/}
      {/*  <div className="system__planet system__planet--neptune">*/}
      {/*    <img src="https://www.dropbox.com/s/170sr7xl6gxpona/neptune.png?raw=1" alt="Neptune"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <motion.div className="system__orbit system__orbit--pluto center border-around"
           animate={{ rotate: 360}}
           transition={{ ease: "linear", duration: 16, repeat: Infinity }}
      >
        <div className="system__planet system__planet--pluto">
          <img src="https://www.dropbox.com/s/z7axkafhs887t9b/pluto.png?raw=1" alt="Pluto"/>
        </div>
      </motion.div>
    </DemoWrapper>
  )
}

export default Demo