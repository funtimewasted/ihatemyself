// data.js

// Sample questions for English Language - First Semester - Unit 1 - Reading and Vocabulary
const questionBank = {
    english: {
        firstSemester: {
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
                        {
                            id: 2,
                            type: "multiple",
                            question: "Which word best completes the sentence: 'The archaeological ___ yielded several ancient artifacts.'",
                            options: [
                                "dig",
                                "excavation",
                                "hole",
                                "mining"
                            ],
                            correctAnswer: 1,
                            explanation: "'Excavation' is the most appropriate formal term for an archaeological site where systematic digging occurs."
                        },
                        {
                            id: 3,
                            type: "multiple",
                            question: "What is a 'context clue'?",
                            options: [
                                "A hidden message in the text",
                                "A type of punctuation mark",
                                "Information that helps you understand an unfamiliar word",
                                "A grammatical error"
                            ],
                            correctAnswer: 2,
                            explanation: "Context clues are hints in the surrounding text that help readers understand unfamiliar words."
                        },
                        {
                            id: 4,
                            type: "true-false",
                            question: "Prefixes and suffixes can change both the meaning and the part of speech of a word.",
                            correctAnswer: true,
                            explanation: "Yes, affixes can change both meaning (e.g., 'happy' to 'unhappy') and part of speech (e.g., 'teach' to 'teacher')."
                        },
                        {
                            id: 5,
                            type: "short",
                            question: "Explain the importance of understanding synonyms and antonyms in expanding vocabulary. Provide an example of each.",
                            sampleAnswer: "Understanding synonyms and antonyms helps in choosing the most precise word for a context and enriches writing style. For example, 'happy' and 'joyful' are synonyms, while 'happy' and 'sad' are antonyms. This knowledge allows for better word choice and more varied expression.",
                            explanation: "A good answer should mention both the practical use of synonyms/antonyms and include clear examples."
                        }
                    ]
                },
                "Past & Present Tenses": {
                    questions: [] // Add questions here
                },
                "Question Tags": {
                    questions: [] // Add questions here
                }
            }
            // Add other units here
        }
        // Add second semester here
    }
    // Add other subjects here
};

// Subject structure for navigation
const subjectStructure = {
    english: {
        name: "English Language",
        semesters: {
            firstSemester: {
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
                    }
                    // Add other units
                }
            },
            secondSemester: {
                // Add second semester structure
            }
        }
    },
    arabic: {
        // Add Arabic language structure
    },
    history: {
        // Add History structure
    },
    islamic: {
        // Add Islamic Studies structure
    }
};

export { questionBank, subjectStructure };