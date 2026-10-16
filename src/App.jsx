import { useState } from 'react'
import AppStyle from './App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons'


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
          <a href="#mission">{language === 'EN' ? 'Mission' : 'ተልእኮ'}</a>
          <a href="#vision">{language === 'EN' ? 'Vision' : 'ራእይ'}</a>
          <a href="#objectives">{language === 'EN' ? 'Objectives' : 'ዓላማዎች'}</a>
          <a href="#coreValues">{language === 'EN' ? 'Core Values' : 'እሴቶች'}</a>
          <a href="#contacts">{language === 'EN' ? 'Contacts' : 'አግኙን'}</a>
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

      <div id="mission" className={AppStyle.mission}>
        <div className={AppStyle.missionHeader}>
          <img className={AppStyle.logo} src="/missionLogo.png" alt="" />
          <p id={AppStyle.missionHeaderTitle}>{language === 'EN' ? 'Our Mission' : 'ተልእኮአችን'}</p>
        </div>
        <p>
          {language === 'EN'
            ? 'To transform Northern Ethiopia community through biblical peace building and demonstrating Christlike love by developing leaders.'
            : 'የሰሜን ኢትዮጵያን ማህበረሰብ በመጽሐፍ ቅዱሳዊ የሰላም ግንባታ እና ክርስቶስን የመሰለ ፍቅርን በማሳየት መሪዎችን በማፍራት መለወጥ።'}
        </p>
      </div>

      <div id="vision" className={AppStyle.vision}>
        <div className={AppStyle.visionHeader}>
          <img className={AppStyle.logo} src="/visionLogo.png" alt="" />
          <p id={AppStyle.visionHeaderTitle}>{language === 'EN' ? 'Our Vision' : 'ራእያችን'}</p>
        </div>
        <p>
          {language === 'EN'
            ? 'To see transformed community in Northern Ethiopia through biblical peace building, love, and leadership development.'
            : 'በሰሜን ኢትዮጵያ የተለወጠ ማህበረሰብን በመጽሐፍ ቅዱሳዊ የሰላም ግንባታ፣ በፍቅር እና በመሪነት እድገት ማየት።'}
        </p>
      </div>

      <div id="objectives" className={AppStyle.objectives}>
        <div className={AppStyle.objectivesHeader}>
          <img className={AppStyle.logo} src="/objectivesTitleLogo.png" alt="" />
          <p id={AppStyle.objectivesHeaderTitle}>{language === 'EN' ? 'Our Objectives' : 'ዓላማዎቻችን'}</p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="" />
          <p>
            {language === 'EN'
              ? 'To lead people in Northern Ethiopia to reconciliation with God through Jesus Christ by promoting Gospel outreach, evangelism, and discipleship.'
              : 'በሰሜን ኢትዮጵያ ያሉ ሰዎችን ወንጌልን በማስፋፋት፣ በወንጌላዊነት እና በደቀ መዝሙርነት በኢየሱስ ክርስቶስ ከእግዚአብሔር ጋር ወደ እርቀ-ሰላም መምራት።'}
          </p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="" />
          <p>
            {language === 'EN'
              ? 'To promote biblical peacebuilding, forgiveness, dialogue, and reconciliation among individuals, churches, and communities in Northern Ethiopia.'
              : 'በሰሜን ኢትዮጵያ በግለሰቦች፣ በአብያተ ክርስቲያናት እና በማኅበረሰቦች መካከል መጽሐፍ ቅዱሳዊ የሰላም ግንባታን፣ ይቅርታን፣ ውይይትን እና እርቀ-ሰላምን ማስፋፋት።'}
          </p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="" />
          <p>
            {language === 'EN'
              ? 'To demonstrate Christlike love through compassionate service, mutual respect, and collaborative initiatives that strengthen relationships and community well-being.'
              : 'ክርስቶስን የመሰለ ፍቅርን በርኅራኄ አገልግሎት፣ በጋራ መከባበር እና ግንኙነቶችን እና የማኅበረሰብን ደህንነት በሚያጠናክሩ የትብብር ተነሳሽነቶች ማሳየት።'}
          </p>
        </div>

        <div className={AppStyle.objective}>
          <img className={AppStyle.logo} src="/blackCheckMark.png" alt="" />
          <p>
            {language === 'EN'
              ? 'To equip and mentor emerging church and community leaders in biblical peacebuilding, servant leadership, and reconciliation to foster lasting transformation in Northern Ethiopia.'
              : 'በሰሜን ኢትዮጵያ ዘላቂ ለውጥን ለማምጣት በመጽሐፍ ቅዱሳዊ የሰላም ግንባታ፣ በአገልጋይነት አመራር እና በእርቀ-ሰላም የሚያድጉ የቤተ ክርስቲያን እና የማኅበረሰብ መሪዎችን ማሠልጠን እና ማማከር።'}
          </p>
        </div>
      </div>

      <div id="coreValues" className={AppStyle.coreValues}>
          <p id={AppStyle.coreValuesHeader}>{language === 'EN' ? 'Our Core Values' : 'እሴቶቻችን'}</p>
          <div className={AppStyle.upperGridCoreValues}>

            <div className={AppStyle.value}>
              {/* Image placeholder — add src when you have it */}
              <img className={AppStyle.valueIcon} src="/peaceWithGod.png" alt="" />              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Peace with God' : 'ሰላም ከእግዚአብሔር ጋር'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>We believe reconciliation with God through Jesus Christ is the foundation of true and lasting peace.</>
                  : <>በኢየሱስ ክርስቶስ ከእግዚአብሔር ጋር የሚደረግ እርቀ-ሰላም የእውነተኛና ዘላቂ ሰላም መሠረት ነው ብለን እናምናለን።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.valueIcon} src="/peaceWithAll.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Peace with Others' : 'ሰላም ከሰዎች ጋር'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>We promote forgiveness, reconciliation, and peaceful relationships among individuals and communities.</>
                  : <>በግለሰቦች እና በማኅበረሰቦች መካከል ይቅርታን፣ እርቀ-ሰላምን እና ሰላማዊ ግንኙነቶችን እናበረታታለን።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.valueIcon} src="/love.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Love' : 'ፍቅር'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>We demonstrate the love of Jesus through compassion, humility, service, and respect for others.</>
                  : <>የኢየሱስን ፍቅር በርኅራኄ፣ በትህትና፣ በአገልግሎት እና ሌሎችን በማክበር እናሳያለን።</>}
              </p>
            </div>

            <div className={AppStyle.value}>
              <img className={AppStyle.valueIcon} src="/leadership.png" alt="" />
              <p className={AppStyle.valueTitle}>{language === 'EN' ? 'Leadership Development' : 'የመሪነት እድገት'}</p>
              <p className={AppStyle.valueBody}>
                {language === 'EN'
                  ? <>We equip and mentor emerging leaders to serve faithfully and transform churches and communities.</>
                  : <>በታማኝነት እንዲያገለግሉ እና አብያተ ክርስቲያናትንና ማኅበረሰቦችን እንዲለውጡ የሚያድጉ መሪዎችን እናሠለጥናለን፣ እናማክራለን።</>}
              </p>
            </div>

          </div>
      </div>

      <div id="contacts" className={AppStyle.contactContainer}>
        <div className={AppStyle.contact}>
          <h2>{language === 'EN' ? 'Contact Us' : 'አግኙን'}</h2>

          <div className={AppStyle.contactBody}>
            <div className={AppStyle.left}>
              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon id={AppStyle.invisibleIcon} icon={faClock} />
                <p>Abebe Mokyalew — {language === 'EN' ? 'Director' : 'ዳይሬክተር'}</p>
              </div>
              
              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faPhone} />
                <p>+251 982 691 992 (Bahir Dar)</p>
              </div>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faPhone} />
                <p>+251 920 345 655 (Addis Ababa)</p>
              </div>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>newvisionem2026@gmail.com</p>
              </div>
            </div>

            <div className={AppStyle.right}>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                <p>{language === 'EN' ? 'New Vision Ethiopia Ministry' : 'New Vision Ethiopia Ministry'}</p>
              </div>

              <div className={AppStyle.contactInfo}>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <p>{language === 'EN' ? 'New Vision Ethiopia Ministry' : 'New Vision Ethiopia Ministry'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App