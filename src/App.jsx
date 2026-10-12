import { useState } from 'react'
import AppStyle from './App.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [toggled, setToggled] = useState(false)
  const [language, setLanguage] = useState('EN')

  const handleLanguageToggle = () => {
    setToggled(!toggled)
    setLanguage(toggled ? 'EN' : 'አማ')
  }

  return (
    <div className={AppStyle.root}>
      <header>
        <div className={AppStyle.title}>
          <h1>New Vision</h1>
          <h1>Ministry Ethiopia</h1>
        </div>
        <nav className={AppStyle.headerNav}>
          <Link rel="stylesheet" href="">{language === 'EN' ? 'Mission' : 'ተልእኮ'}</Link>
          <Link rel="stylesheet" href="">{language === 'EN' ? 'Vision' : 'ራእይ'}</Link>
          <Link rel="stylesheet" href="">{language === 'EN' ? 'Objectives' : 'ዓላማዎች'}</Link>
          <Link rel="stylesheet" href="">{language === 'EN' ? 'Core Values' : 'እሴቶች'}</Link>
          <Link rel="stylesheet" href="">{language === 'EN' ? 'Contacts' : 'አግኙን'}</Link>
        </nav>
        <div className={AppStyle.languageToggle}>
          <button
            className={`${AppStyle.toggleButton} ${toggled ? AppStyle.toggled : ''}`}
            onClick={handleLanguageToggle}
          >
            <div className={AppStyle.thumb}>{language}</div>
            
          </button>
        </div>
      </header>
      <div className={AppStyle.hero}>
          <p>{language === 'EN' ? 'Ethiopia shall soon' : 'ኢትዮጵያ እጆችዋን'}</p>
          <p>{language === 'EN' ? 'stretch out her hands' : 'ወደ እግዚአብሔር'}</p>
          <p style={{marginBottom:'30px'}}>{language === 'EN' ? 'to God.' : 'ትዘረጋለች።'}</p>
          <p>{language === 'EN' ? 'Psalms 68:31' : 'መዝሙር 68:31'}</p>
      </div>

      <div className={AppStyle.mission}>
        <div className={AppStyle.missionHeader}>
          <img className={AppStyle.logo} src="/missionLogo.png" alt="$ "/>
          <p id={AppStyle.missionHeaderTitle}>{language === 'EN' ? 'Our Mission' : 'ተልእኮአችን'}</p>
        </div>
        <p>
          {language === 'EN'
            ? 'We empower communities in Northern Ethiopia and Eritrea to build lasting peace through training, workshops, grassroots movements, and reconciliation.'
            : 'በሰሜን ኢትዮጵያና በኤርትራ አካባቢዎች ለሚኖሩ የማኅበረሰብ ክፍሎች የእርቀ-ሰላም ሥልጠናዎችን፣ እውደጥናቶችን፣ ኮንፍራንሶችንና የሰላም ንቅናቄዎችን በመፍጠር በሰላም እንዲኖሩ ማገዝ።'}
        </p>
      </div>

      <div className={AppStyle.vision}>
        <div className={AppStyle.visionHeader}>
          <img className={AppStyle.logo} src="/visionLogo.png" alt="$ "/>
          <p id={AppStyle.visionHeaderTitle}>{language === 'EN' ? 'Our Vision' : 'ራእያችን'}</p>
        </div>
        <p>
          {language === 'EN'
            ? 'We plan to see the people of Northern Ethiopia and Eritrea transformed and renewed through the Gospel of Peace by 2060.'
            : 'በ2060 ዓ.ም የሰሜን ኢትዮጵያና የኤርትራ አካባቢ ሕዝቦች በሰላም ወንጌል ታድሰው ማየት።'}
        </p>
      </div>

      <div className={AppStyle.objectives}>
        <div className={AppStyle.objectivesHeader}>
          <img className={AppStyle.logo} src="/objectivesTitleLogo.png" alt="$ "/>
          <p id={AppStyle.objectivesHeaderTitle}>{language === 'EN' ? 'Our Objectives' : 'ዓላማዎቻችን'}</p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="$ " />
          <p>
            {language === 'EN'
              ? 'Mobilize Communities: Foster sustainable grassroots peace movements across Northern Ethiopia and Eritrea.'
              : 'በሰሜን ኢትዮጵያና ኤርትራ አካባቢ ለሚኖሩ ማኅበረሰብ የሰላም ንቅናቄ መፍጠር።'}
          </p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="$ " />
          <p>
            {language === 'EN'
              ? 'Promote Peace Awareness: Build lasting peace through training, dialogue, and digital campaigns.'
              : 'ለሰሜን ኢትዮጵያ ማኅበረሰብ ስለ እውነተኛና ቋሚ-ሰላም በስልጠና፣ በወይይትና በማኅበራዊ ሚዲያ ግንዛቤ መፍጠር።'}
          </p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="$ " />
          <p>
            {language === 'EN'
              ? 'Build Strategic Partnerships: Work with key stakeholders to strengthen reconciliation and resolve intergroup conflicts peacefully.'
              : 'በቡድኖች መካከል የሚነሱ ግጭቶች በእርቀ-ሰላም እንዲቋጩ ከሚመለከታቸው አጋር አካላት ጋር የእርቀ-ሰላም አስፈላጊነትን ሚና መጫዎት።'}
          </p>
        </div>
      </div>

      <div className={AppStyle.coreValues}>
          <p id={AppStyle.coreValuesHeader}>{language === 'EN' ? 'Our Core Values' : 'እሴቶቻችን'}</p>
          <div className={AppStyle.upperGridCoreValues}>
            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/peaceWithGod.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Peace with God' : 'ሰላም ከእግዚአብሔር ጋር'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>Come find rest. <br />Leave with peace. <br />Walk in grace</>
                  : <>እረፍትን አግኙ። <br />በሰላም ተለዩ። <br />በጸጋ ተመላለሱ።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/permanentPeace.png" alt="" 
                style={{
                  width: '60px',
                  height: '60px'
                }}
              />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Permanent Peace' : 'ቋሚ ሰላም'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>Peace with God <br />Peace that never ends.</>
                  : <>ሰላም ከእግዚአብሔር ጋር <br />የማያልቅ ሰላም።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/permanentJoy.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Permanent Joy' : 'ቋሚ ደስታ'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>The joy that surpasses <br />understanding. The joy that <br />never passes away.</>
                  : <>ከሁሉ የሚበልጥ ደስታ <br />የማያልፍ ደስታ።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/love.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Love' : 'ፍቅር'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>Love that holds the soul. <br />Love that spans the ages. <br />Love that never fades.</>
                  : <>ነፍስን የሚይዝ ፍቅር። <br />ዘመናትን የሚሻገር ፍቅር። <br />የማይጠፋ ፍቅር።</>}
              </p>
            </div>
          </div>


          <div className={AppStyle.lowerGridCoreValues}>
            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/valuingPeace.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Valuing Peace' : 'ለሰላም ዋጋ መስጠት'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>Come find rest. <br />Leave with peace. <br />Walk in grace</>
                  : <>እረፍትን አግኙ። <br />በሰላም ተለዩ። <br />በጸጋ ተመላለሱ።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/peacefulCommunication.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Peaceful Communication' : 'ሰላማዊ ተግባቦት'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>Come find rest. <br />Leave with peace. <br />Walk in grace</>
                  : <>እረፍትን አግኙ። <br />በሰላም ተለዩ። <br />በጸጋ ተመላለሱ።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.logo} src="/peaceWithAll.png" alt="" />
              <p className={AppStyle.valueTitle}>
                {language === 'EN' ? <>Living in peace <br />with all people.</> : <>ከሰው ሁሉ ጋር <br />በሰላም መኖር።</>}
              </p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>Living peacefully. <br />Loving freely. <br />Reaching everyone</>
                  : <>በሰላም መኖር። <br />በነጻነት መውደድ። <br />ሁሉንም መድረስ።</>}
              </p>
            </div>

          </div>
      </div>

      <div className={AppStyle.contactContainer}>
        <div className={AppStyle.contact}>
          <h2>{language === 'EN' ? 'Contact Us' : 'አግኙን'}</h2>

          <div className={AppStyle.contactBody}>  
            <div className={AppStyle.left}>
              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>...</p>
              </div>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faPhone} />
                <p>+251 900 000 000</p>
              </div>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>...</p>
              </div>

            </div>

            <div className={AppStyle.right}>
              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faClock} />
                <p>...</p>
              </div>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faGlobe} />
                <Link href="" target="_blank" rel="">
                  newvisionministryethiopia.vercel.app
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>


      
      
    </div>
    
  )
}

export default App