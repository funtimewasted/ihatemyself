// data.js

// Sample questions for English Language - First Semester - Unit 1 - Reading and Vocabulary
const questionBank = {
    english: {
        first: {  // Changed from firstSemester to match select value
            unit1: {
                "Reading and Vocabulary": {
                    questions: [
                        {
                            id: 1,
                            type: "multiple",
                            question: "What is the difference between 'affect' and 'effect'?",
                            options: [
                                "'Affect' is usually a verb, 'effect' is usually a noun",
                                "'Affect' and 'effect' are completely interchangeable",
                                "'Affect' is only used in medical contexts",
                                "'Effect' is only used as a verb"
                            ],
                            correctAnswer: 0,
                            explanation: "'Affect' is typically used as a verb meaning 'to influence,' while 'effect' is typically used as a noun meaning 'a result or consequence.'"
                        },
                        // ... other questions remain the same ...
                    ]
                }
            }
        },
        second: {  // Changed from secondSemester to match select value
            unit1: {
                "Reading and Vocabulary": {
                    questions: [
                        {
                            id: 1,
                            type: "multiple",
                            question: "What is a main idea in reading comprehension?",
                            options: [
                                "A minor detail in the text",
                                "The central thought or message of the text",
                                "The first sentence of a paragraph",
                                "The conclusion only"
                            ],
                            correctAnswer: 1,
                            explanation: "The main idea is the central thought or message that the author wants to convey in the text."
                        }
                    ]
                }
            }
        }
    },
    arabic: {
        first: {
            unit1: {
                "من القيم الإنسانية في القرآن": {
                    questions: [
                        {
                            id: 1,
                            type: "multiple",
                            question: "ما هي القيم الإنسانية الأساسية في القرآن؟",
                            options: [
                                "العدل والرحمة",
                                "الظلم والقسوة",
                                "الأنانية والطمع",
                                "الكبر والغرور"
                            ],
                            correctAnswer: 0,
                            explanation: "العدل والرحمة من أهم القيم الإنسانية التي يؤكد عليها القرآن الكريم"
                        }
                    ]
                }
            }
        },
        second: {
            unit1: {
                "في فتح القدس": {
                    questions: [
                        {
                            id: 1,
                            type: "multiple",
                            question: "متى تم فتح القدس؟",
                            options: [
                                "638 م",
                                "637 م",
                                "639 م",
                                "636 م"
                            ],
                            correctAnswer: 1,
                            explanation: "تم فتح القدس في عام 637 م على يد الخليفة عمر بن الخطاب"
                        }
                    ]
                }
            }
        }
    }
};

// Subject structure for navigation
const subjectStructure = {
    english: {
        name: "English Language",
        semesters: {
            first: {
                name: "First Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "Reading and Vocabulary",
                            "Past & Present Tenses",
                            "Question Tags"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "Reading and Vocabulary",
                            "Future Forms"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "Reading and Vocabulary",
                            "Habits & Clauses"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "Reading and Vocabulary",
                            "Narration & Inversion"
                        ]
                    }
                }
            },
            second: {
                name: "Second Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "Reading and Vocabulary",
                            "Modal & Related Articles"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "Reading and Vocabulary",
                            "Reported Speech & Reporting Verbs"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "Reading and Vocabulary",
                            "The Passive"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "Reading and Vocabulary",
                            "Conditionals & Modals"
                        ]
                    },
                    unit5: {
                        name: "Unit 5",
                        lessons: [
                            "Reading and Vocabulary",
                            "Modals & Clauses"
                        ]
                    }
                }
            }
        }
    },
    arabic: {
        name: "Arabic Language",
        semesters: {
            first: {
                name: "First Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "من القيم الإنسانية في القرآن",
                            "اسلوب الطلب وجوابه المجزوم",
                            "التشبيه المفرد"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "عمانيات",
                            "صور الفاعل",
                            "التشبيه التمثيلي"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "الزهايمر-الخرف المبكر",
                            "صور المبتدأ والخبر",
                            "الجملة الخبرية والإنشائية"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "الإعلام ومشروع النهوض باللغة العربية",
                            "المفعول معه",
                            "الأمر"
                        ]
                    },
                    unit5: {
                        name: "Unit 5",
                        lessons: [
                            "التعليم التقني بوابة المستقبل في عالم متغير",
                            "انواع ما",
                            "الإستفهام"
                        ]
                    }
                }
            },
            second: {
                name: "Second Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "في فتح القدس",
                            "معاني حروف الجر",
                            "التشخيص"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "قصة-حفنة تمر",
                            "اسم الفاعل",
                            "اسم المفعول",
                            "الطباق",
                            "المقابلة"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "شاعرات من بلدي",
                            "اسم الزمان",
                            "اسم المكان",
                            "جمع التكسير (القلة والكثرة)"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "من مقامات بديع الزمان الهمذاني",
                            "مصدر المرة",
                            "مصدر الهيئة",
                            "البحر المتدارك"
                        ]
                    },
                    unit5: {
                        name: "Unit 5",
                        lessons: [
                            "الذكاء الاصطناعي-عالم جديد",
                            "اسم الآلة"
                        ]
                    }
                }
            }
        }
    },
    history: {
        name: "History",
        semesters: {
            first: {
                name: "First Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "الأردن في العصور الحجرية",
                            "الأردن في العصر الحديدي",
                            "مملكة الأنباط",
                            "مظاهر الحضارة اليونانية في الأردن",
                            "مظاهر الحضارة الرومانية-البيزنطية في الأردن"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "الأردن في صدر الإسلام",
                            "الأردن في العصر الأموي",
                            "الأردن في العصر العباسي",
                            "الأردن خلال حملات الفرنجة",
                            "الأردن في العصر الأيوبي",
                            "الأردن في العصر المملوكي"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "الأوضاع السياسية والإدارية في الأردن في العهد العثماني",
                            "الأوضاع الإجتماعية والإقتصادية الأردن في العهد العثماني",
                            "الثورة العربية الكبرى",
                            "الأردن في عهد المملكة العربية السورية والحكومات المحلية"
                        ]
                    }
                }
            },
            second: {
                name: "Second Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "تأسيس الإمارة الأردنية",
                            "استقلال المملكة الأردنية الهاشمية",
                            "تطور الحياة السياسية في الأردن بين عامي (1948-1957)",
                            "تطور الحياة السياسية في الأردن بين عامي (1958-1999)",
                            "الحياة السياسية في الأردن منذ 1999",
                            "الأردن والعلاقات العربية والدولية",
                            "القوات المسلحة الأردنية - الجيش العربي",
                            "الأجهزة الأمنية الأردنية"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "الحياة الاقتصادية في الأردن بين عامي (1921-1950)",
                            "الحياة الاقتصادية في الأردن بين عامي (1951-1967)",
                            "الحياة الاقتصادية في الأردن بين عامي (1968-1999)",
                            "الحياة الاقتصادية في الأردن منذ عام 1999"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "الحياة الاجتماعية في الأردن بين عامي (1921-1950)",
                            "الحياة الاجتماعية في الأردن بين عامي (1951-1999)",
                            "الحياة الاجتماعية في الأردن منذ عام 1999"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "التعليم العام في الأردن بين عامي (1921-1950)",
                            "التعليم العام في الأردن بين عامي (1951-1987)",
                            "التعليم العام في الأردن بين عامي (1988-2024)",
                            "التعليم العالي والبحث العلمي في الأردن منذ عام 1951",
                            "الحياة الثقافية في الأردن في عهد الإمارة",
                            "الحياة الثقافية في الأردن منذ عام 1946"
                        ]
                    },
                    unit5: {
                        name: "Unit 5",
                        lessons: [
                            "موقف الأردن من القضية الفلسطينية بين عامي (1916-1951)",
                            "موقف الأردن من القضية الفلسطينية منذ عام 1951",
                            "الوصاية والإعمار الهاشمي للمقدسات الدينية في القدس"
                        ]
                    }
                }
            }
        }
    },
    islamic: {
        name: "Islamic Studies",
        semesters: {
            first: {
                name: "First Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "سورة آل عمران (102-105)",
                            "حديث اتقاء الشبهات",
                            "من صور الضلال",
                            "كرامة الإنسان في الشريعة",
                            "الزواج-مشروعيته ومقدماته",
                            "الجهاد في الإسلام"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "جهود علماء المسلمين في خدمة القرآن",
                            "العزيمة والرخصة",
                            "معركة مؤتة (8 هجري)",
                            "المحرمات من النساء",
                            "التعايش الإنساني",
                            "الحقوق الإجتماعية للمرأة في الإسلام"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "سورة آل عمران (169-174)",
                            "حديث - رضا الله تعالى",
                            "فتح مكة (8 هجري)",
                            "من خصائص الشريعة - الإيجابية",
                            "شروط صحة عقد الزواج",
                            "الحقوق المالية للمرأة في الإسلام"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "سورة الروم (21-24)",
                            "مكانة السنة النبوية في التشريع",
                            "مراعاة الأعراف في الشريعة",
                            "حقوق الزوجين",
                            "تنظيم النسل وتحديده",
                            "الأمن الغذائي في الإسلام",
                            "الإسلام والوحدة الوطنية"
                        ]
                    }
                }
            },
            second: {
                name: "Second Semester",
                units: {
                    unit1: {
                        name: "Unit 1",
                        lessons: [
                            "سورة البقرة (284-286)",
                            "دلائل وجود الله تعالى",
                            "إعجاز القرآن الكريم",
                            "الأمر بالمعروف والنهي عن المنكر",
                            "اليوم الآخر - احداثه وآثار الإيمان به",
                            "الإجتهاد في الإسلام"
                        ]
                    },
                    unit2: {
                        name: "Unit 2",
                        lessons: [
                            "سورة الأعراف (31-34)",
                            "مراعاة المصالح في الشريعة",
                            "جهود علماء المسلمين في الحفاظ على السنة النبوية",
                            "حديث - منهج الإسلام في الحياة",
                            "رسائل النبي الى الملوك والزعماء في عصره",
                            "يوم تبوك (9 هجري)",
                            "الحقوق السياسية للمرأة في الإسلام"
                        ]
                    },
                    unit3: {
                        name: "Unit 3",
                        lessons: [
                            "سورة الفرقان (63-77)",
                            "الطلاق",
                            "العدة",
                            "الوصية في الشريعة",
                            "الميراث في الشريعة",
                            "من خصائص الشريعة - الوسطية",
                            "مجالات الوقف ودورها في التنمية"
                        ]
                    },
                    unit4: {
                        name: "Unit 4",
                        lessons: [
                            "حديث - مفهوم الإفلاس بين الدنيا والآخرة",
                            "مقاصد الشريعة",
                            "منهج الإسلام في مكافحة الجريمة",
                            "من وصايا النبي في حجة الوداع",
                            "المسؤولية المجتمعية في الإسلام",
                            "حقوق الإنسان بين الإسلام والإعلان العالمي لحقوق الإنسان"
                        ]
                    }
                }
            }
        }
    }
};

export { questionBank, subjectStructure };
