/* =====================================================================
   COLLEGE SAATHI - CONTENT FILE
   Sirf isi file ko edit karna hai. index.html ko chhedne ki zaroorat nahi.

   Kaise edit karein:
   - Har list mein ek item = ek { ... } block. Naya item add karne ke liye
     kisi purane block ko copy karke neeche paste karo aur text badlo.
   - Har item ke aage-peeche comma (,) rehna chahiye. Text "double quotes" mein.
   - Hindi ke liye alag field: title -> titleHi, body -> bodyHi, name -> nameHi.
     Hindi field nahi doge to English hi dikhega.
   - Date hamesha '2026-11-05' format mein (saal-mahina-din).
   - streams: "all" (sab ke liye) ya ["ba"], ["bsc","bcom"] jaisa list.
   - Links poore likho: https://drive.google.com/... (Drive link ko
     "Anyone with the link" pe share karna mat bhoolna).

   DEMO DATA: neeche ki saari entries sirf namoona hain. Asli content
   daalne ke baad config mein demo: false kar do.
   ===================================================================== */
(function () {
  // Demo dates: d(0)=aaj, d(3)=3 din baad, d(-2)=2 din pehle.
  // Asli content mein d(...) hata kar fixed date likho, jaise '2026-11-05'.
  function d(n) {
    var x = new Date();
    x.setHours(12, 0, 0, 0);
    x.setDate(x.getDate() + n);
    return x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2);
  }
  var DRIVE = 'https://drive.google.com/';   // demo link, asli Drive link se badlo
  var YT = 'https://www.youtube.com/';       // demo link

  window.COLLEGE = {

    /* ---------- Basic settings ---------- */
    config: {
      demo: true,
      short: 'BAGC',
      name: 'Dr. Bhimrao Ambedkar Government College',
      nameHi: 'डॉ. भीमराव अम्बेडकर राजकीय महाविद्यालय',
      city: 'Nimbahera',
      cityHi: 'निम्बाहेड़ा',
      semester: 'Semester I',
      semesterHi: 'प्रथम सेमेस्टर',
      session: '2026-27',
      whatsapp: 'https://www.whatsapp.com/',   // class WhatsApp group invite link (khali chhodo to button chhup jayega)
      onlineClass: 'https://meet.google.com/', // Google Meet / YouTube live link (khali = button chhup)
      updated: d(0)                            // last baar kab update kiya
    },

    /* ---------- Streams (first year mein sab saath hote hain) ---------- */
    streams: [
      { id: 'ba',   en: 'B.A.',   hi: 'बी.ए.' },
      { id: 'bsc',  en: 'B.Sc.',  hi: 'बी.एससी.' },
      { id: 'bcom', en: 'B.Com.', hi: 'बी.कॉम.' }
    ],

    /* ---------- Notice / date categories ---------- */
    categories: {
      exam:        { en: 'Exam',          hi: 'परीक्षा' },
      scholarship: { en: 'Scholarship',   hi: 'छात्रवृत्ति' },
      fees:        { en: 'Fees and ID',   hi: 'फीस व आईडी' },
      event:       { en: 'Event',         hi: 'कार्यक्रम' },
      holiday:     { en: 'Holiday',       hi: 'अवकाश' },
      online:      { en: 'Online class',  hi: 'ऑनलाइन कक्षा' },
      general:     { en: 'General',       hi: 'सामान्य' }
    },

    /* ---------- Subjects ---------- */
    subjects: [
      { id: 'hin', code: 'HIN-101', name: 'Hindi',                 nameHi: 'हिन्दी',            teacher: 'Dr. R. Sharma',  room: 'Room 12', credits: 4, marks: '25 + 75', streams: 'all' },
      { id: 'eng', code: 'ENG-101', name: 'English',               nameHi: 'अंग्रेज़ी',          teacher: 'Dr. S. Meena',   room: 'Room 14', credits: 4, marks: '25 + 75', streams: 'all' },
      { id: 'evs', code: 'EVS-101', name: 'Environmental Studies', nameHi: 'पर्यावरण अध्ययन',   teacher: 'Dr. K. Jain',    room: 'Room 3',  credits: 2, marks: '15 + 35', streams: 'all' },

      { id: 'pol', code: 'POL-101', name: 'Political Science',     nameHi: 'राजनीति विज्ञान',   teacher: 'Dr. A. Gurjar',  room: 'Room 5',  credits: 4, marks: '25 + 75', streams: ['ba'] },
      { id: 'his', code: 'HIS-101', name: 'History',               nameHi: 'इतिहास',            teacher: 'Dr. M. Paliwal', room: 'Room 6',  credits: 4, marks: '25 + 75', streams: ['ba'] },
      { id: 'eco', code: 'ECO-101', name: 'Economics',             nameHi: 'अर्थशास्त्र',        teacher: 'Dr. P. Soni',    room: 'Room 7',  credits: 4, marks: '25 + 75', streams: ['ba'] },

      { id: 'phy', code: 'PHY-101', name: 'Physics',               nameHi: 'भौतिक विज्ञान',     teacher: 'Dr. V. Joshi',   room: 'Lab Block 1', credits: 4, marks: '25 + 75', streams: ['bsc'] },
      { id: 'che', code: 'CHE-101', name: 'Chemistry',             nameHi: 'रसायन विज्ञान',     teacher: 'Dr. N. Dhakad',  room: 'Lab Block 2', credits: 4, marks: '25 + 75', streams: ['bsc'] },
      { id: 'mat', code: 'MAT-101', name: 'Mathematics',           nameHi: 'गणित',              teacher: 'Dr. L. Patidar', room: 'Room 9',  credits: 4, marks: '25 + 75', streams: ['bsc'] },

      { id: 'acc', code: 'ACC-101', name: 'Financial Accounting',  nameHi: 'वित्तीय लेखांकन',   teacher: 'Dr. H. Mandot',  room: 'Room 10', credits: 4, marks: '25 + 75', streams: ['bcom'] },
      { id: 'bos', code: 'BOS-101', name: 'Business Organisation', nameHi: 'व्यावसायिक संगठन',  teacher: 'Dr. T. Choudhary', room: 'Room 11', credits: 4, marks: '25 + 75', streams: ['bcom'] },
      { id: 'bec', code: 'BEC-101', name: 'Business Economics',    nameHi: 'व्यावसायिक अर्थशास्त्र', teacher: 'Dr. D. Vyas', room: 'Room 8',  credits: 4, marks: '25 + 75', streams: ['bcom'] }
    ],

    /* ---------- Notices (naya notice sabse upar ya kahin bhi, app khud date se sort karta hai) ----------
       important: true  -> "Important" stamp + Home page pe dikhega
       deadline: date   -> "Last date" countdown dikhega
       link / linkLabel -> PDF ya form ka button */
    notices: [
      { id: 'n1', date: d(-1), cat: 'exam', important: true, streams: 'all', deadline: d(6),
        title: 'Semester I exam form: last date is near',
        titleHi: 'सेमेस्टर I परीक्षा फॉर्म: अंतिम तिथि पास है',
        body: 'Fill the exam form online as per the university notice and submit the printout with the fee receipt at the exam section before the last date.',
        bodyHi: 'विश्वविद्यालय की सूचना के अनुसार परीक्षा फॉर्म ऑनलाइन भरें और अंतिम तिथि से पहले प्रिंटआउट व फीस रसीद परीक्षा शाखा में जमा करें।',
        link: DRIVE, linkLabel: 'Notice PDF' },

      { id: 'n2', date: d(-2), cat: 'scholarship', important: true, streams: 'all', deadline: d(12),
        title: 'Scholarship applications are open',
        titleHi: 'छात्रवृत्ति के लिए आवेदन शुरू हैं',
        body: 'Apply on the official portal for your category. Keep Aadhaar, bank passbook, income or caste certificate (if applicable) and last marksheet ready. Get the printed form verified at the scholarship desk.',
        bodyHi: 'अपनी श्रेणी के अनुसार आधिकारिक पोर्टल पर आवेदन करें। आधार, बैंक पासबुक, आय या जाति प्रमाण पत्र (यदि लागू हो) और पिछली अंकतालिका तैयार रखें। प्रिंटेड फॉर्म छात्रवृत्ति डेस्क पर सत्यापित करवाएँ।',
        link: 'https://scholarships.gov.in/', linkLabel: 'Scholarship portal' },

      { id: 'n6', date: d(0), cat: 'online', important: true, streams: 'all',
        title: 'Saturday classes will be online',
        titleHi: 'शनिवार की कक्षाएँ ऑनलाइन होंगी',
        body: 'The Google Meet link will be shared in the class WhatsApp group 15 minutes before the first period. Join with your real name.',
        bodyHi: 'गूगल मीट का लिंक पहली कक्षा से 15 मिनट पहले क्लास के व्हाट्सऐप ग्रुप में भेजा जाएगा। अपने असली नाम से जुड़ें।',
        link: 'https://meet.google.com/', linkLabel: 'Open Google Meet' },

      { id: 'n3', date: d(-3), cat: 'fees', streams: 'all',
        title: 'ID card and fee receipt',
        titleHi: 'परिचय पत्र और फीस रसीद',
        body: 'First-semester students can collect their ID card from the college office. Carry your fee receipt.',
        bodyHi: 'प्रथम सेमेस्टर के विद्यार्थी अपना परिचय पत्र कार्यालय से ले सकते हैं। फीस रसीद साथ लाएँ।' },

      { id: 'n5', date: d(-5), cat: 'event', streams: 'all', deadline: d(9),
        title: 'NSS and sports enrolment',
        titleHi: 'एनएसएस और खेल पंजीकरण',
        body: 'Interested students can enrol with the programme officer or the sports in-charge. Bring a copy of your ID card.',
        bodyHi: 'इच्छुक विद्यार्थी कार्यक्रम अधिकारी या खेल प्रभारी के पास पंजीकरण करवाएँ। परिचय पत्र की प्रति साथ लाएँ।' },

      { id: 'n4', date: d(-4), cat: 'holiday', streams: 'all',
        title: 'Diwali vacation',
        titleHi: 'दीपावली अवकाश',
        body: 'The college will be closed for Diwali vacation as per the college calendar. Regular classes resume after the break.',
        bodyHi: 'कॉलेज कैलेंडर के अनुसार दीपावली अवकाश रहेगा। अवकाश के बाद नियमित कक्षाएँ शुरू होंगी।' },

      { id: 'n7', date: d(-7), cat: 'exam', streams: ['ba'],
        title: 'Internal test: BA subjects',
        titleHi: 'आंतरिक परीक्षा: बी.ए. विषय',
        body: 'Internal tests for BA first-semester subjects will be held in the classroom during regular periods. See the Key dates tab for the schedule.',
        bodyHi: 'बी.ए. प्रथम सेमेस्टर के विषयों की आंतरिक परीक्षा नियमित पीरियड में कक्षा में होगी। समय-सारणी के लिए "ज़रूरी तिथियाँ" देखें।' },

      { id: 'n8', date: d(-8), cat: 'general', streams: 'all',
        title: 'Library membership',
        titleHi: 'पुस्तकालय सदस्यता',
        body: 'Library card forms are available at the library counter. Bring one passport-size photo.',
        bodyHi: 'पुस्तकालय कार्ड के फॉर्म पुस्तकालय काउंटर पर उपलब्ध हैं। एक पासपोर्ट साइज़ फोटो साथ लाएँ।' }
    ],

    /* ---------- Notes / PYQ / Videos ----------
       type: 'notes' | 'pyq' | 'video' | 'book' | 'other'
       subject: upar subjects wali id */
    notes: [
      { id: 'm1',  subject: 'hin', type: 'notes', title: 'Unit 1 notes (PDF)',                    link: DRIVE, added: d(-1),  by: 'Dr. R. Sharma' },
      { id: 'm2',  subject: 'hin', type: 'pyq',   title: 'Previous year paper 2024',              link: DRIVE, added: d(-6),  by: 'Library' },
      { id: 'm3',  subject: 'eng', type: 'notes', title: 'Grammar basics: tenses and articles',   link: DRIVE, added: d(-2),  by: 'Dr. S. Meena' },
      { id: 'm4',  subject: 'eng', type: 'video', title: 'Spoken English practice playlist',      link: YT,    added: d(-9),  by: 'Class group' },
      { id: 'm5',  subject: 'evs', type: 'book',  title: 'Environmental Studies reference book',  link: DRIVE, added: d(-12), by: 'Library' },
      { id: 'm6',  subject: 'pol', type: 'notes', title: 'Unit 1 notes: nature and scope',        link: DRIVE, added: d(-1),  by: 'Dr. A. Gurjar' },
      { id: 'm7',  subject: 'his', type: 'pyq',   title: 'Previous year paper 2023',              link: DRIVE, added: d(-10), by: 'Library' },
      { id: 'm8',  subject: 'eco', type: 'video', title: 'Demand and supply: explained',          link: YT,    added: d(-4),  by: 'Class group' },
      { id: 'm9',  subject: 'phy', type: 'notes', title: 'Vectors: formula sheet',                link: DRIVE, added: d(-1),  by: 'Dr. V. Joshi' },
      { id: 'm10', subject: 'che', type: 'pyq',   title: 'Previous year paper 2024',              link: DRIVE, added: d(-8),  by: 'Library' },
      { id: 'm11', subject: 'mat', type: 'notes', title: 'Matrices: solved problems',             link: DRIVE, added: d(-2),  by: 'Dr. L. Patidar' },
      { id: 'm12', subject: 'acc', type: 'notes', title: 'Journal and ledger: solved examples',   link: DRIVE, added: d(-1),  by: 'Dr. H. Mandot' },
      { id: 'm13', subject: 'bos', type: 'notes', title: 'Forms of business: summary chart',      link: DRIVE, added: d(-5),  by: 'Class group' },
      { id: 'm14', subject: 'bec', type: 'video', title: 'Nature of business economics',          link: YT,    added: d(-3),  by: 'Class group' }
    ],

    /* ---------- Syllabus ----------
       units: [ ["Unit ka title", "topics, comma se alag"], ... ]  (Hindi mein bhi likh sakte ho) */
    syllabus: [
      { subject: 'hin', link: DRIVE, units: [
        ['Hindi poetry', 'Selected poems, poet introduction, summary and meaning'],
        ['Prose', 'Selected essays and a story, central idea, characters'],
        ['Grammar', 'Sandhi, samas, muhavare, lokokti'],
        ['Letter writing', 'Formal letter, application, simple report'] ] },
      { subject: 'eng', link: DRIVE, units: [
        ['Prose', 'Selected essays, comprehension questions'],
        ['Poetry', 'Selected poems, theme and poetic devices'],
        ['Grammar', 'Tenses, articles, prepositions, subject-verb agreement'],
        ['Writing skills', 'Paragraph, formal letter, application'] ] },
      { subject: 'evs', link: DRIVE, units: [
        ['Ecosystem', 'Structure and function, food chain, energy flow'],
        ['Natural resources', 'Water, forest, soil, minerals, conservation'],
        ['Pollution', 'Air, water, soil and noise pollution, waste management'],
        ['Environment and society', 'Environmental laws, awareness, sustainable living'] ] },

      { subject: 'pol', link: DRIVE, units: [
        ['Introduction', 'Meaning, nature and scope of political science'],
        ['State', 'State, nation, sovereignty, elements of state'],
        ['Rights', 'Rights, liberty, equality, justice'],
        ['Democracy', 'Types of government, basic ideas of democracy'] ] },
      { subject: 'his', link: DRIVE, units: [
        ['Sources', 'Archaeological and literary sources of ancient India'],
        ['Indus valley', 'Town planning, economy, society, decline'],
        ['Vedic period', 'Early and later Vedic society, religion, polity'],
        ['Mauryan age', 'Mahajanapadas, rise of Magadha, Ashoka and his dhamma'] ] },
      { subject: 'eco', link: DRIVE, units: [
        ['Basic concepts', 'Wants, scarcity, choice, positive and normative economics'],
        ['Demand and supply', 'Law of demand, supply, market equilibrium'],
        ['Consumer behaviour', 'Utility, indifference curves, consumer equilibrium'],
        ['Elasticity', 'Price, income and cross elasticity of demand'] ] },

      { subject: 'phy', link: DRIVE, units: [
        ['Vectors', 'Scalar and vector, dot and cross product, gradient'],
        ['Mechanics', 'Laws of motion, frames of reference, friction'],
        ['Work and energy', 'Work-energy theorem, conservative forces, power'],
        ['Gravitation', 'Newton law of gravitation, potential, satellites'] ] },
      { subject: 'che', link: DRIVE, units: [
        ['Atomic structure', 'Atomic models, quantum numbers, electronic configuration'],
        ['Periodic table', 'Periodic properties, ionisation energy, electronegativity'],
        ['Chemical bonding', 'Ionic and covalent bond, VSEPR, hybridisation'],
        ['Basic organic chemistry', 'Hybridisation, isomerism, reaction intermediates'] ] },
      { subject: 'mat', link: DRIVE, units: [
        ['Matrices', 'Types, operations, rank, inverse'],
        ['Limits and derivatives', 'Limits, continuity, differentiability'],
        ['Successive differentiation', 'nth derivative, Leibnitz theorem'],
        ['Mean value theorems', 'Rolle, Lagrange, Cauchy, Taylor series'] ] },

      { subject: 'acc', link: DRIVE, units: [
        ['Accounting basics', 'Concepts, conventions, accounting equation'],
        ['Journal and ledger', 'Rules of debit and credit, journal entries, posting'],
        ['Final accounts', 'Trial balance, trading and profit and loss account, balance sheet'],
        ['Depreciation', 'Straight line and diminishing balance methods'] ] },
      { subject: 'bos', link: DRIVE, units: [
        ['Business', 'Nature, scope and objectives of business'],
        ['Forms of organisation', 'Sole trader, partnership, company, cooperative'],
        ['Promotion', 'Promotion of a company, documents, stages'],
        ['Location and size', 'Factors affecting location, optimum size'] ] },
      { subject: 'bec', link: DRIVE, units: [
        ['Introduction', 'Nature and scope of business economics'],
        ['Demand analysis', 'Law of demand, elasticity, demand forecasting'],
        ['Production and cost', 'Production function, short and long run costs'],
        ['Pricing', 'Price determination under different market forms'] ] }
    ],

    /* ---------- Assignments ----------
       mode: 'class' | 'online' | 'email'   marks: number   note: chhoti baat */
    assignments: [
      { id: 'a13', subject: 'hin', title: 'Summary writing: one passage',      due: d(-1), mode: 'class',  marks: 10 },
      { id: 'a1',  subject: 'hin', title: 'Letter writing: two formal letters', due: d(2),  mode: 'class',  marks: 10 },
      { id: 'a2',  subject: 'eng', title: 'Paragraph writing: three topics',    due: d(3),  mode: 'class',  marks: 10 },
      { id: 'a3',  subject: 'evs', title: 'Mini project: water sources near your home', due: d(6), mode: 'online', marks: 20, note: 'Upload the PDF to the shared folder', link: DRIVE },
      { id: 'a4',  subject: 'pol', title: 'Short note: nature of political science', due: d(4), mode: 'class', marks: 10 },
      { id: 'a5',  subject: 'his', title: 'Map work: Indus valley sites',       due: d(8),  mode: 'class',  marks: 10 },
      { id: 'a6',  subject: 'eco', title: 'Numericals: set 1',                  due: d(5),  mode: 'class',  marks: 10, link: DRIVE },
      { id: 'a7',  subject: 'phy', title: 'Vector problems: 10 questions',      due: d(7),  mode: 'class',  marks: 10 },
      { id: 'a8',  subject: 'che', title: 'Lab file: experiments 1 to 3',       due: d(9),  mode: 'class',  marks: 10 },
      { id: 'a9',  subject: 'mat', title: 'Problem sheet 1',                    due: d(3),  mode: 'online', marks: 10, link: DRIVE },
      { id: 'a10', subject: 'acc', title: 'Journal entries: 20 transactions',   due: d(4),  mode: 'class',  marks: 10 },
      { id: 'a11', subject: 'bos', title: 'Chart: forms of business',           due: d(10), mode: 'class',  marks: 10 },
      { id: 'a12', subject: 'bec', title: 'Demand schedule practice',           due: d(6),  mode: 'email',  marks: 10, note: 'Send a photo of the notebook page' }
    ],

    /* ---------- Timetable ----------
       periods: har period ka time ("shuru-khatam", 24 ghante format).
       recessAfter: kitne period ke baad recess. Neeche har stream ke har din
       ke liye subject ids period ke order mein. Chhota din = kam ids. */
    timetable: {
      periods: ['10:00-10:45', '10:45-11:30', '11:30-12:15', '12:45-13:30', '13:30-14:15'],
      recessAfter: 3,
      recessTime: '12:15-12:45',
      ba: {
        mon: ['hin', 'pol', 'his', 'eng', 'eco'],
        tue: ['eng', 'his', 'eco', 'pol', 'evs'],
        wed: ['pol', 'hin', 'eco', 'his', 'eng'],
        thu: ['his', 'eco', 'hin', 'evs', 'pol'],
        fri: ['eco', 'eng', 'pol', 'hin', 'his'],
        sat: ['evs', 'his', 'pol']
      },
      bsc: {
        mon: ['mat', 'phy', 'che', 'hin', 'eng'],
        tue: ['phy', 'che', 'mat', 'eng', 'evs'],
        wed: ['che', 'mat', 'phy', 'hin', 'eng'],
        thu: ['mat', 'che', 'evs', 'phy', 'hin'],
        fri: ['phy', 'hin', 'mat', 'che', 'eng'],
        sat: ['che', 'phy', 'mat']
      },
      bcom: {
        mon: ['acc', 'bos', 'bec', 'hin', 'eng'],
        tue: ['bec', 'acc', 'bos', 'eng', 'evs'],
        wed: ['bos', 'bec', 'acc', 'hin', 'eng'],
        thu: ['acc', 'bec', 'evs', 'bos', 'hin'],
        fri: ['bos', 'hin', 'acc', 'bec', 'eng'],
        sat: ['acc', 'bos', 'bec']
      }
    },

    /* ---------- Class updates (jo college nahi aa paaye unke liye) ----------
       Roz class ke baad ek line likh do: kya padhaya, homework kya hai. */
    updates: [
      { date: d(0),  subject: 'hin', topic: 'Poem introduction and summary of unit 1', hw: 'Write a short summary in your notebook' },
      { date: d(0),  subject: 'eng', topic: 'Tenses: present and past',                 hw: 'Exercise 1 from the handout' },
      { date: d(0),  subject: 'pol', topic: 'Meaning and scope of political science' },
      { date: d(-1), subject: 'his', topic: 'Sources of ancient Indian history',        hw: 'Read the first two pages of the notes', link: DRIVE },
      { date: d(-1), subject: 'phy', topic: 'Scalar and vector quantities',             hw: 'Solve questions 1 to 5' },
      { date: d(-1), subject: 'mat', topic: 'Types of matrices',                        hw: 'Problem sheet 1, Q1 to Q4', link: DRIVE },
      { date: d(-1), subject: 'acc', topic: 'Journal entries: rules of debit and credit', hw: 'Practise 10 entries' },
      { date: d(-2), subject: 'evs', topic: 'Ecosystem: producers and consumers' },
      { date: d(-2), subject: 'che', topic: 'Atomic models',                            hw: 'Draw each model with labels' },
      { date: d(-2), subject: 'bos', topic: 'Meaning of business and its features' },
      { date: d(-3), subject: 'eco', topic: 'Basic economic problems' },
      { date: d(-3), subject: 'bec', topic: 'Nature of business economics',             link: YT }
    ],

    /* ---------- Key dates ---------- */
    dates: [
      { date: d(-6), cat: 'event',   streams: 'all', title: 'Freshers welcome programme',          titleHi: 'नवागंतुक स्वागत समारोह' },
      { date: d(7),  cat: 'exam',    streams: 'all', title: 'Internal test: Hindi and English',    titleHi: 'आंतरिक परीक्षा: हिन्दी और अंग्रेज़ी' },
      { date: d(9),  cat: 'event',   streams: 'all', title: 'NSS and sports enrolment closes',     titleHi: 'एनएसएस और खेल पंजीकरण समाप्त' },
      { date: d(10), cat: 'exam',    streams: 'all', title: 'Internal test: stream subjects',      titleHi: 'आंतरिक परीक्षा: संकाय के विषय' },
      { date: d(16), cat: 'holiday', streams: 'all', title: 'Diwali vacation starts',              titleHi: 'दीपावली अवकाश शुरू' },
      { date: d(24), cat: 'general', streams: 'all', title: 'Classes resume after vacation',       titleHi: 'अवकाश के बाद कक्षाएँ शुरू' },
      { date: d(45), cat: 'exam',    streams: 'all', title: 'Semester I exams begin (tentative)',  titleHi: 'सेमेस्टर I परीक्षा शुरू (संभावित)' }
    ],

    /* ---------- Help: FAQ ---------- */
    faq: [
      { q: 'I cannot come to college this week. What should I do?',
        qHi: 'मैं इस हफ़्ते कॉलेज नहीं आ पा रहा/रही हूँ। क्या करूँ?',
        a: 'Open Class > Class updates to see what was taught and the homework. Download notes from Study. Join online classes when they are announced. Tell your class representative so your attendance question reaches the teacher.',
        aHi: 'कक्षा > कक्षा अपडेट में देखें कि क्या पढ़ाया गया और गृहकार्य क्या है। पढ़ाई > नोट्स से नोट्स लें। ऑनलाइन कक्षा की घोषणा होने पर जुड़ें। अपने क्लास रिप्रेज़ेंटेटिव को बताएँ ताकि आपकी उपस्थिति की बात शिक्षक तक पहुँचे।' },
      { q: 'Where do I find previous year papers?',
        qHi: 'पिछले साल के पेपर कहाँ मिलेंगे?',
        a: 'Go to Study > Notes and papers and choose the type "Previous papers".',
        aHi: 'पढ़ाई > नोट्स व पेपर में जाकर "पिछले पेपर" चुनें।' },
      { q: 'How do I fill the exam form?',
        qHi: 'परीक्षा फॉर्म कैसे भरें?',
        a: 'Exam forms are filled online as per the university notice. The college notice will show the last date. After filling, take a printout and submit it with the fee receipt at the exam section.',
        aHi: 'परीक्षा फॉर्म विश्वविद्यालय की सूचना के अनुसार ऑनलाइन भरे जाते हैं। अंतिम तिथि कॉलेज की सूचना में मिलेगी। भरने के बाद प्रिंटआउट निकालकर फीस रसीद के साथ परीक्षा शाखा में जमा करें।' },
      { q: 'Which documents do I need for a scholarship?',
        qHi: 'छात्रवृत्ति के लिए कौन से दस्तावेज़ चाहिए?',
        a: 'Usually Aadhaar, bank passbook, last marksheet, and an income or caste certificate if your category needs it. Check the scholarship notice for the exact list.',
        aHi: 'आमतौर पर आधार, बैंक पासबुक, पिछली अंकतालिका और ज़रूरत हो तो आय या जाति प्रमाण पत्र। सही सूची के लिए छात्रवृत्ति की सूचना देखें।' },
      { q: 'How much attendance do I need?',
        qHi: 'कितनी उपस्थिति ज़रूरी है?',
        a: 'The rule is set by the university. Ask your class teacher or the office and check the university notice. Do not depend on this site for the exact number.',
        aHi: 'नियम विश्वविद्यालय तय करता है। अपने कक्षा शिक्षक या कार्यालय से पूछें और विश्वविद्यालय की सूचना देखें। सही प्रतिशत के लिए इस साइट पर निर्भर न रहें।' },
      { q: 'How do I get the ID card and library card?',
        qHi: 'परिचय पत्र और पुस्तकालय कार्ड कैसे मिलेगा?',
        a: 'ID card from the college office with your fee receipt. Library card form from the library counter with one passport-size photo.',
        aHi: 'परिचय पत्र कार्यालय से फीस रसीद दिखाकर मिलेगा। पुस्तकालय कार्ड का फॉर्म पुस्तकालय काउंटर पर पासपोर्ट साइज़ फोटो के साथ जमा करें।' },
      { q: 'How do I keep this site on my phone like an app?',
        qHi: 'इस साइट को ऐप की तरह फ़ोन में कैसे रखें?',
        a: 'Open it in Chrome, tap the three dots, then "Add to Home screen". Pages you have opened once also work with a weak network.',
        aHi: 'इसे Chrome में खोलें, तीन बिंदुओं पर टैप करें, फिर "Add to Home screen" चुनें। एक बार खुले पेज कमज़ोर नेटवर्क में भी चलते हैं।' },
      { q: 'A notice or date here looks wrong. Who do I tell?',
        qHi: 'यहाँ कोई सूचना या तिथि गलत लग रही है। किसे बताऊँ?',
        a: 'Tell your class representative or the person who maintains this site. Always confirm important dates with the college office.',
        aHi: 'अपने क्लास रिप्रेज़ेंटेटिव या इस साइट को संभालने वाले को बताएँ। ज़रूरी तिथियाँ हमेशा कॉलेज कार्यालय से पुष्टि करें।' }
    ],

    /* ---------- Help: useful links ---------- */
    links: [
      { label: 'SSO Rajasthan',                  labelHi: 'एसएसओ राजस्थान',               url: 'https://sso.rajasthan.gov.in/',   note: 'Student login for state services',          noteHi: 'राज्य सेवाओं के लिए स्टूडेंट लॉगिन' },
      { label: 'National Scholarship Portal',    labelHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल',  url: 'https://scholarships.gov.in/',    note: 'Apply for scholarships',                    noteHi: 'छात्रवृत्ति के लिए आवेदन' },
      { label: 'DigiLocker',                     labelHi: 'डिजिलॉकर',                     url: 'https://www.digilocker.gov.in/',  note: 'Keep marksheets and certificates safe',     noteHi: 'अंकतालिका और प्रमाण पत्र सुरक्षित रखें' },
      { label: 'Academic Bank of Credits',       labelHi: 'एकेडमिक बैंक ऑफ क्रेडिट्स',      url: 'https://www.abc.gov.in/',         note: 'Create your ABC ID',                        noteHi: 'अपनी एबीसी आईडी बनाएँ' },
      { label: 'SWAYAM',                         labelHi: 'स्वयं',                         url: 'https://swayam.gov.in/',          note: 'Free online courses',                       noteHi: 'मुफ़्त ऑनलाइन कोर्स' },
      { label: 'NPTEL',                          labelHi: 'एनपीटीईएल',                    url: 'https://nptel.ac.in/',            note: 'Video lectures',                            noteHi: 'वीडियो लेक्चर' },
      { label: 'National Digital Library',       labelHi: 'राष्ट्रीय डिजिटल पुस्तकालय',    url: 'https://ndl.iitkgp.ac.in/',       note: 'Free books and papers',                     noteHi: 'मुफ़्त किताबें और शोध-पत्र' }
    ],

    /* ---------- Help: contacts (demo numbers, asli number daalo) ---------- */
    contacts: [
      { role: 'College office',        roleHi: 'कार्यालय',           name: '',            phone: 'XXXXX XXXXX' },
      { role: 'Exam section',          roleHi: 'परीक्षा शाखा',        name: '',            phone: 'XXXXX XXXXX' },
      { role: 'Scholarship desk',      roleHi: 'छात्रवृत्ति डेस्क',   name: '',            phone: 'XXXXX XXXXX' },
      { role: 'Library',               roleHi: 'पुस्तकालय',           name: '',            phone: 'XXXXX XXXXX' },
      { role: 'Class representative',  roleHi: 'क्लास रिप्रेज़ेंटेटिव', name: 'Your CR name', nameHi: 'सीआर का नाम', phone: 'XXXXX XXXXX' }
    ]
  };
})();
