import { MainTheme } from './types';

// All separate storage keys are replaced by this single key for atomic and consistent data management.
export const APP_DATA_STORAGE_KEY = 'flashcard_app_data_v2';

// The old flat VOCABULARY_CARDS is now replaced by this hierarchical structure.
// This allows for nested themes and a more organized learning path.

export const THEMED_VOCABULARY: MainTheme[] = [
    
  {
    "id": "1",
    "name": "Giáo dục",
    "subThemes": [
      {
        "id": "1-1",
        "name": "Phương pháp",
        "cards": [
          {
            "id": 11001,
            "word": "memorisation",
            "pronunciation": "/ˌmeməraɪˈzeɪʃn/",
            "definition": "quá trình ghi nhớ thông tin qua lặp lại",
            "example": "Excessive memorisation can hinder deep understanding.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 11002,
            "word": "rote learning",
            "pronunciation": "/ˌrəʊt ˈlɜːnɪŋ/",
            "definition": "học vẹt dựa trên lặp lại máy móc",
            "example": "Many pupils rely on rote learning before exams.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 11003,
            "word": "comprehension",
            "pronunciation": "/ˌkɒmprɪˈhenʃn/",
            "definition": "khả năng hiểu văn bản/khái niệm",
            "example": "Reading comprehension is vital for academic success.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 11004,
            "word": "critical thinking",
            "pronunciation": "/ˌkrɪtɪkl ˈθɪŋkɪŋ/",
            "definition": "tư duy phản biện",
            "example": "Universities aim to cultivate critical thinking.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 11005,
            "word": "collaborative learning",
            "pronunciation": "/kəˈlæbərətɪv ˈlɜːnɪŋ/",
            "definition": "học theo nhóm để giải quyết vấn đề",
            "example": "Collaborative learning builds teamwork skills.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11006,
            "word": "self-directed learning",
            "pronunciation": "/ˌself daɪˈrektɪd ˈlɜːnɪŋ/",
            "definition": "học tự chủ do người học định hướng",
            "example": "Self-directed learning fosters autonomy.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11007,
            "word": "experiential learning",
            "pronunciation": "/ɪkˌspɪəriˈenʃl ˈlɜːnɪŋ/",
            "definition": "học qua trải nghiệm thực tế",
            "example": "Experiential learning connects theory to practice.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11008,
            "word": "pedagogy",
            "pronunciation": "/ˈpedəɡɒdʒi/",
            "definition": "khoa sư phạm/phương pháp dạy học",
            "example": "Sound pedagogy improves learner outcomes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11009,
            "word": "assessment",
            "pronunciation": "/əˈsesmənt/",
            "definition": "đánh giá kết quả học tập",
            "example": "Regular assessment tracks progress.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 11010,
            "word": "formative assessment",
            "pronunciation": "/ˈfɔːmətɪv əˈsesmənt/",
            "definition": "đánh giá vì mục tiêu cải thiện",
            "example": "Formative assessment gives actionable feedback.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11011,
            "word": "summative assessment",
            "pronunciation": "/ˈsʌmətɪv əˈsesmənt/",
            "definition": "đánh giá tổng kết học phần/khóa",
            "example": "High-stakes exams are summative assessments.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11012,
            "word": "mastery learning",
            "pronunciation": "/ˈmɑːstəri ˈlɜːnɪŋ/",
            "definition": "học đến mức thành thạo trước khi tiến",
            "example": "Mastery learning reduces attainment gaps.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11013,
            "word": "inquiry-based learning",
            "pronunciation": "/ɪnˈkwaɪəri beɪst ˈlɜːnɪŋ/",
            "definition": "học dựa trên truy vấn/tự khám phá",
            "example": "Inquiry-based learning stimulates curiosity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11014,
            "word": "problem-based learning",
            "pronunciation": "/ˈprɒbləm beɪst ˈlɜːnɪŋ/",
            "definition": "học dựa trên vấn đề thực tế",
            "example": "Problem-based learning develops problem-solving.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11015,
            "word": "Socratic questioning",
            "pronunciation": "/səˈkrætɪk ˈkwestʃənɪŋ/",
            "definition": "hỏi kiểu Xô-crát để gợi mở tư duy",
            "example": "Socratic questioning sharpens analysis.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11016,
            "word": "heuristic",
            "pronunciation": "/hjʊəˈrɪstɪk/",
            "definition": "phương pháp mò mẫm/quy tắc kinh nghiệm",
            "example": "Heuristic approaches can accelerate discovery.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11017,
            "word": "mnemonics",
            "pronunciation": "/nɪˈmɒnɪks/",
            "definition": "mẹo ghi nhớ",
            "example": "Using mnemonics helps retain vocabulary.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 11018,
            "word": "retrieval practice",
            "pronunciation": "/rɪˈtriːvl ˈpræktɪs/",
            "definition": "luyện hồi tưởng để củng cố trí nhớ",
            "example": "Regular retrieval practice strengthens memory traces.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11019,
            "word": "spaced repetition",
            "pronunciation": "/speɪst ˌrepəˈtɪʃn/",
            "definition": "lặp lại ngắt quãng tối ưu hóa ghi nhớ",
            "example": "Spaced repetition beats cramming.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11020,
            "word": "interleaving",
            "pronunciation": "/ˌɪntəˈliːvɪŋ/",
            "definition": "ôn xen kẽ chủ đề để phân biệt khái niệm",
            "example": "Interleaving improves transfer across topics.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11021,
            "word": "cognitive load",
            "pronunciation": "/ˈkɒɡnətɪv ləʊd/",
            "definition": "tải nhận thức (gánh nặng xử lý)",
            "example": "Reducing extraneous cognitive load aids focus.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11022,
            "word": "scaffolding",
            "pronunciation": "/ˈskæfəʊldɪŋ/",
            "definition": "chống đỡ sư phạm theo từng bước",
            "example": "Effective scaffolding supports novices.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11023,
            "word": "differentiation",
            "pronunciation": "/ˌdɪfərenʃiˈeɪʃn/",
            "definition": "dạy học phân hóa theo nhu cầu",
            "example": "Thoughtful differentiation benefits mixed-ability classes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11024,
            "word": "flipped classroom",
            "pronunciation": "/flɪpt ˈklɑːsruːm/",
            "definition": "lớp học đảo ngược (học trước–thảo luận trên lớp)",
            "example": "A flipped classroom frees time for practice.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11025,
            "word": "blended learning",
            "pronunciation": "/ˌblendɪd ˈlɜːnɪŋ/",
            "definition": "học kết hợp trực tuyến và trực tiếp",
            "example": "Blended learning offers flexibility.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11026,
            "word": "learning outcomes",
            "pronunciation": "/ˈlɜːnɪŋ ˈaʊtkʌmz/",
            "definition": "kết quả học tập dự kiến có thể đo lường",
            "example": "Clearly stated learning outcomes guide design.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11027,
            "word": "rubric",
            "pronunciation": "/ˈruːbrɪk/",
            "definition": "bảng tiêu chí đánh giá",
            "example": "Transparent rubrics make grading fair.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11028,
            "word": "peer instruction",
            "pronunciation": "/pɪə ɪnˈstrʌkʃn/",
            "definition": "học bạn dạy bạn (trao đổi ngang hàng)",
            "example": "Peer instruction encourages active participation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11029,
            "word": "metacognition",
            "pronunciation": "/ˌmetəˌkɒɡˈnɪʃn/",
            "definition": "siêu nhận thức (tự hiểu cách mình học)",
            "example": "Metacognition helps students plan and monitor learning.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 11030,
            "word": "transfer of learning",
            "pronunciation": "/ˈtrɑːnsfə(r) əv ˈlɜːnɪŋ/",
            "definition": "chuyển giao tri thức từ bối cảnh này sang bối cảnh khác",
            "example": "Good tasks promote transfer of learning.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "1-2",
        "name": "Hệ thống",
        "cards": [
          {
            "id": 12001,
            "word": "curriculum",
            "pronunciation": "/kəˈrɪkjələm/",
            "definition": "chương trình đào tạo",
            "example": "The curriculum balances theory and practice.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12002,
            "word": "syllabus",
            "pronunciation": "/ˈsɪləbəs/",
            "definition": "đề cương học phần",
            "example": "Please follow the readings on the syllabus.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12003,
            "word": "module",
            "pronunciation": "/ˈmɒdjuːl/",
            "definition": "học phần",
            "example": "This module introduces academic writing.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12004,
            "word": "credit",
            "pronunciation": "/ˈkredɪt/",
            "definition": "tín chỉ",
            "example": "You need 15 credits this term.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12005,
            "word": "semester",
            "pronunciation": "/sɪˈmestə(r)/",
            "definition": "học kỳ",
            "example": "Grades are issued at the end of the semester.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 12006,
            "word": "prerequisite",
            "pronunciation": "/ˌpriːˈrekwɪzɪt/",
            "definition": "học phần tiên quyết",
            "example": "Calculus is a prerequisite for the course.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 12007,
            "word": "elective",
            "pronunciation": "/ɪˈlektɪv/",
            "definition": "môn tự chọn",
            "example": "Students may choose two electives.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12008,
            "word": "core course",
            "pronunciation": "/kɔː(r) kɔːs/",
            "definition": "môn cốt lõi bắt buộc",
            "example": "Core courses ensure breadth of knowledge.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12009,
            "word": "major",
            "pronunciation": "/ˈmeɪdʒə(r)/",
            "definition": "ngành chính",
            "example": "She is doing a major in economics.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12010,
            "word": "minor",
            "pronunciation": "/ˈmaɪnə(r)/",
            "definition": "ngành phụ",
            "example": "He is taking a minor in statistics.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12011,
            "word": "accreditation",
            "pronunciation": "/əˌkredɪˈteɪʃn/",
            "definition": "công nhận chất lượng cơ sở đào tạo",
            "example": "Accreditation assures minimum standards.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 12012,
            "word": "registrar",
            "pronunciation": "/ˈredʒɪstrɑː(r)/",
            "definition": "phòng/viên chức quản lý đào tạo",
            "example": "Ask the registrar about your transcript.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 12013,
            "word": "cohort",
            "pronunciation": "/ˈkəʊhɔːt/",
            "definition": "nhóm sinh viên cùng khóa",
            "example": "This cohort is particularly diverse.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 12014,
            "word": "intake",
            "pronunciation": "/ˈɪnteɪk/",
            "definition": "đợt tuyển sinh",
            "example": "The autumn intake is now open.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12015,
            "word": "placement test",
            "pronunciation": "/ˈpleɪsmənt test/",
            "definition": "bài kiểm tra xếp lớp",
            "example": "A placement test determines your level.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12016,
            "word": "tuition fees",
            "pronunciation": "/tjuˈɪʃn fiːz/",
            "definition": "học phí",
            "example": "Tuition fees have risen steadily.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12017,
            "word": "bursary",
            "pronunciation": "/ˈbɜːsəri/",
            "definition": "trợ cấp học tập theo nhu cầu",
            "example": "A bursary supports low-income students.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 12018,
            "word": "scholarship",
            "pronunciation": "/ˈskɒləʃɪp/",
            "definition": "học bổng (thành tích)",
            "example": "She won a scholarship to study abroad.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12019,
            "word": "endowment",
            "pronunciation": "/ɪnˈdaʊmənt/",
            "definition": "quỹ hiến tặng của trường",
            "example": "The endowment funds scholarships.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 12020,
            "word": "alumni",
            "pronunciation": "/əˈlʌmnaɪ/",
            "definition": "cựu sinh viên",
            "example": "The alumni network offers mentoring.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12021,
            "word": "faculty",
            "pronunciation": "/ˈfækəlti/",
            "definition": "khoa/giảng viên",
            "example": "He works in the Faculty of Engineering.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 12022,
            "word": "campus",
            "pronunciation": "/ˈkæmpəs/",
            "definition": "khuôn viên trường",
            "example": "The new campus is well equipped.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 12023,
            "word": "lecture hall",
            "pronunciation": "/ˈlektʃə hɔːl/",
            "definition": "giảng đường",
            "example": "The lecture hall seats 200 students.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 12024,
            "word": "extracurricular",
            "pronunciation": "/ˌekstrəkəˈrɪkjələ/",
            "definition": "ngoại khóa",
            "example": "Extracurricular programmes build soft skills.",
            "partOfSpeech": "adjective",
            "level": "B2"
          },
          {
            "id": 12025,
            "word": "internship",
            "pronunciation": "/ˈɪntɜːnʃɪp/",
            "definition": "kỳ thực tập",
            "example": "An internship provides industry exposure.",
            "partOfSpeech": "noun",
            "level": "B2"
          }
        ]
      },
      {
        "id": "1-3",
        "name": "Giảng dạy",
        "cards": [
          {
            "id": 13001,
            "word": "didactics",
            "pronunciation": "/dɪˈdæktɪks/",
            "definition": "khoa học/triết lý dạy học",
            "example": "Sound didactics guides effective lessons.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13002,
            "word": "instructional design",
            "pronunciation": "/ɪnˌstrʌkʃənl dɪˈzaɪn/",
            "definition": "thiết kế học liệu và hoạt động",
            "example": "Quality instructional design aligns goals and tasks.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13003,
            "word": "differentiated instruction",
            "pronunciation": "/ˌdɪfəˈrenʃieɪtɪd ɪnˈstrʌkʃn/",
            "definition": "dạy học phân hóa theo năng lực",
            "example": "Differentiated instruction supports diverse learners.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13004,
            "word": "scaffolding",
            "pronunciation": "/ˈskæfəʊldɪŋ/",
            "definition": "chống đỡ sư phạm từng bước",
            "example": "Effective scaffolding enables novices to succeed.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13005,
            "word": "rubric",
            "pronunciation": "/ˈruːbrɪk/",
            "definition": "bảng tiêu chí đánh giá",
            "example": "Clear rubrics make grading transparent.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13006,
            "word": "learning outcomes",
            "pronunciation": "/ˈlɜːnɪŋ ˈaʊtkʌmz/",
            "definition": "kết quả học tập kỳ vọng",
            "example": "Courses should specify measurable outcomes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13007,
            "word": "andragogy",
            "pronunciation": "/ˈændrəɡɒdʒi/",
            "definition": "sư phạm người lớn",
            "example": "Andragogy stresses relevance and autonomy.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 13008,
            "word": "constructive alignment",
            "pronunciation": "/kənˌstrʌktɪv əˈlaɪnmənt/",
            "definition": "liên kết mục tiêu–hoạt động–đánh giá",
            "example": "Constructive alignment improves coherence.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 13009,
            "word": "flipped classroom",
            "pronunciation": "/flɪpt ˈklɑːsruːm/",
            "definition": "lớp học đảo ngược",
            "example": "A flipped classroom frees time for practice.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13010,
            "word": "invigilation",
            "pronunciation": "/ɪnˌvɪdʒɪˈleɪʃn/",
            "definition": "giám thị coi thi",
            "example": "Strict invigilation safeguards integrity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13011,
            "word": "classroom management",
            "pronunciation": "/ˈklɑːsruːm ˈmænɪdʒmənt/",
            "definition": "quản lý lớp học",
            "example": "Good classroom management keeps students on task.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 13012,
            "word": "lesson plan",
            "pronunciation": "/ˈlesn plæn/",
            "definition": "kế hoạch bài học",
            "example": "Teachers prepare a detailed lesson plan.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 13013,
            "word": "teaching methodology",
            "pronunciation": "/ˈtiːtʃɪŋ ˌmeθəˈdɒlədʒi/",
            "definition": "phương pháp giảng dạy",
            "example": "Modern methodology emphasises engagement.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13014,
            "word": "feedback literacy",
            "pronunciation": "/ˈfiːdbæk ˈlɪtərəsi/",
            "definition": "năng lực phản hồi/nhận phản hồi",
            "example": "Feedback literacy helps learners act on comments.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13015,
            "word": "assessment literacy",
            "pronunciation": "/əˈsesmənt ˈlɪtərəsi/",
            "definition": "năng lực đánh giá",
            "example": "Assessment literacy improves test design.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13016,
            "word": "learning analytics",
            "pronunciation": "/ˈlɜːnɪŋ ˌænəˈlɪtɪks/",
            "definition": "phân tích dữ liệu học tập",
            "example": "Learning analytics can personalise support.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13017,
            "word": "micro-teaching",
            "pronunciation": "/ˌmaɪkrəʊ ˈtiːtʃɪŋ/",
            "definition": "dạy thử vi mô (quan sát–phản hồi)",
            "example": "Micro-teaching develops reflective practice.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13018,
            "word": "active learning",
            "pronunciation": "/ˌæktɪv ˈlɜːnɪŋ/",
            "definition": "học chủ động có tương tác",
            "example": "Active learning boosts retention.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 13019,
            "word": "gamification",
            "pronunciation": "/ˌɡeɪmɪfɪˈkeɪʃn/",
            "definition": "trò chơi hóa việc học",
            "example": "Gamification can increase motivation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13020,
            "word": "digital pedagogy",
            "pronunciation": "/ˈdɪdʒɪtl ˈpedəɡɒdʒi/",
            "definition": "sư phạm số",
            "example": "Digital pedagogy leverages online tools.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13021,
            "word": "inclusive teaching",
            "pronunciation": "/ɪnˈkluːsɪv ˈtiːtʃɪŋ/",
            "definition": "giảng dạy hòa nhập",
            "example": "Inclusive teaching removes participation barriers.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13022,
            "word": "team teaching",
            "pronunciation": "/tiːm ˈtiːtʃɪŋ/",
            "definition": "đồng giảng",
            "example": "Team teaching blends complementary strengths.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13023,
            "word": "learning objective",
            "pronunciation": "/ˈlɜːnɪŋ əbˈdʒektɪv/",
            "definition": "mục tiêu học tập cụ thể",
            "example": "Clear objectives focus activities.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 13024,
            "word": "outcome-based education",
            "pronunciation": "/ˈaʊtkʌm beɪst ˌedʒuˈkeɪʃn/",
            "definition": "giáo dục định hướng kết quả",
            "example": "Outcome-based education clarifies expectations.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 13025,
            "word": "proctoring",
            "pronunciation": "/ˈprɒktərɪŋ/",
            "definition": "giám sát thi (trực tiếp/online)",
            "example": "Online proctoring deters cheating.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "1-4",
        "name": "Sinh viên",
        "cards": [
          {
            "id": 14001,
            "word": "attendance",
            "pronunciation": "/əˈtendəns/",
            "definition": "sự chuyên cần/đi học đều",
            "example": "Regular attendance improves outcomes.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 14002,
            "word": "discipline",
            "pronunciation": "/ˈdɪsəplɪn/",
            "definition": "kỷ luật",
            "example": "Discipline keeps the class productive.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14003,
            "word": "diligence",
            "pronunciation": "/ˈdɪlɪdʒəns/",
            "definition": "sự siêng năng",
            "example": "Diligence often leads to excellence.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14004,
            "word": "plagiarism",
            "pronunciation": "/ˈpleɪdʒərɪzəm/",
            "definition": "đạo văn",
            "example": "Plagiarism results in penalties.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14005,
            "word": "peer pressure",
            "pronunciation": "/ˈpɪə ˌpreʃə/",
            "definition": "áp lực bạn bè",
            "example": "Peer pressure can affect motivation.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14006,
            "word": "time management",
            "pronunciation": "/ˈtaɪm ˌmænɪdʒmənt/",
            "definition": "quản lý thời gian",
            "example": "Time management helps balance life and study.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14007,
            "word": "extracurricular activities",
            "pronunciation": "/ˌekstrəkəˈrɪkjələ ækˈtɪvɪtiz/",
            "definition": "hoạt động ngoại khóa",
            "example": "Activities develop social skills.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14008,
            "word": "self-discipline",
            "pronunciation": "/ˌself ˈdɪsəplɪn/",
            "definition": "tự kỷ luật",
            "example": "Self-discipline is key to independence.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14009,
            "word": "academic performance",
            "pronunciation": "/ˌækəˈdemɪk pəˈfɔːməns/",
            "definition": "thành tích học tập",
            "example": "The policy aims to improve performance.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14010,
            "word": "dropout",
            "pronunciation": "/ˈdrɒpaʊt/",
            "definition": "người bỏ học",
            "example": "The school tries to reduce dropouts.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14011,
            "word": "growth mindset",
            "pronunciation": "/ɡrəʊθ ˈmaɪndset/",
            "definition": "tư duy phát triển",
            "example": "A growth mindset turns setbacks into learning.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14012,
            "word": "procrastination",
            "pronunciation": "/prəˌkræstɪˈneɪʃn/",
            "definition": "trì hoãn",
            "example": "Routines can curb procrastination.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14013,
            "word": "cram",
            "pronunciation": "/kræm/",
            "definition": "nhồi nhét trước kỳ thi",
            "example": "Students often cram the night before.",
            "partOfSpeech": "verb",
            "level": "B2"
          },
          {
            "id": 14014,
            "word": "note-taking",
            "pronunciation": "/ˈnəʊt ˌteɪkɪŋ/",
            "definition": "ghi chép",
            "example": "Structured note-taking boosts retention.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14015,
            "word": "retrieval practice",
            "pronunciation": "/rɪˈtriːvl ˈpræktɪs/",
            "definition": "luyện hồi tưởng",
            "example": "Frequent retrieval practice strengthens memory.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14016,
            "word": "spaced repetition",
            "pronunciation": "/speɪst ˌrepəˈtɪʃn/",
            "definition": "lặp lại ngắt quãng",
            "example": "Spaced repetition outperforms massed study.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14017,
            "word": "interleaving",
            "pronunciation": "/ˌɪntəˈliːvɪŋ/",
            "definition": "ôn xen kẽ",
            "example": "Interleaving helps discriminate concepts.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14018,
            "word": "cognitive load",
            "pronunciation": "/ˈkɒɡnətɪv ləʊd/",
            "definition": "tải nhận thức",
            "example": "Reducing cognitive load improves focus.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14019,
            "word": "burnout",
            "pronunciation": "/ˈbɜːnaʊt/",
            "definition": "kiệt sức học đường",
            "example": "Breaks can prevent burnout.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14020,
            "word": "student loan",
            "pronunciation": "/ˈstjuːdnt ləʊn/",
            "definition": "khoản vay sinh viên",
            "example": "Many graduates repay student loans for years.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14021,
            "word": "wellbeing",
            "pronunciation": "/ˌwelˈbiːɪŋ/",
            "definition": "sức khỏe tinh thần/thể chất",
            "example": "Universities now provide wellbeing services.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14022,
            "word": "academic misconduct",
            "pronunciation": "/ˌækəˈdemɪk mɪsˈkɒndʌkt/",
            "definition": "gian lận/vi phạm học thuật",
            "example": "Academic misconduct is taken seriously.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 14023,
            "word": "attendance policy",
            "pronunciation": "/əˈtendəns ˈpɒləsi/",
            "definition": "chính sách chuyên cần",
            "example": "The attendance policy is strictly enforced.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14024,
            "word": "past paper",
            "pronunciation": "/pɑːst ˈpeɪpə/",
            "definition": "đề thi các năm trước",
            "example": "Past papers help familiarise with formats.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 14025,
            "word": "study grant",
            "pronunciation": "/ˈstʌdi ɡrɑːnt/",
            "definition": "trợ cấp học tập",
            "example": "A study grant eased her burden.",
            "partOfSpeech": "noun",
            "level": "B2"
          }
        ]
      },
      {
        "id": "1-5",
        "name": "ĐH & Nghiên cứu",
        "cards": [
          {
            "id": 15001,
            "word": "thesis",
            "pronunciation": "/ˈθiːsɪs/",
            "definition": "luận văn thạc sĩ/đại học",
            "example": "He is writing a thesis on energy policy.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 15002,
            "word": "dissertation",
            "pronunciation": "/ˌdɪsəˈteɪʃn/",
            "definition": "luận án tiến sĩ",
            "example": "Her dissertation examines climate governance.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15003,
            "word": "research methodology",
            "pronunciation": "/rɪˈsɜːtʃ ˌmeθəˈdɒlədʒi/",
            "definition": "phương pháp nghiên cứu",
            "example": "The methodology must be transparent.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15004,
            "word": "empirical study",
            "pronunciation": "/ɪmˈpɪrɪkl ˈstʌdi/",
            "definition": "nghiên cứu thực nghiệm",
            "example": "They conducted an empirical study on motivation.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 15005,
            "word": "academic journal",
            "pronunciation": "/ˌækəˈdemɪk ˈdʒɜːnl/",
            "definition": "tạp chí học thuật",
            "example": "Publishing in a journal builds credibility.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15006,
            "word": "peer review",
            "pronunciation": "/ˌpɪə rɪˈvjuː/",
            "definition": "phản biện học thuật",
            "example": "Peer review ensures quality.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15007,
            "word": "citation",
            "pronunciation": "/saɪˈteɪʃn/",
            "definition": "trích dẫn",
            "example": "Proper citation avoids plagiarism.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 15008,
            "word": "grant",
            "pronunciation": "/ɡrɑːnt/",
            "definition": "khoản tài trợ nghiên cứu",
            "example": "The lab received a major grant.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 15009,
            "word": "scholarly publication",
            "pronunciation": "/ˈskɒləli ˌpʌblɪˈkeɪʃn/",
            "definition": "xuất bản học thuật",
            "example": "Scholarly publications shape the field.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 15010,
            "word": "innovation hub",
            "pronunciation": "/ˌɪnəˈveɪʃn hʌb/",
            "definition": "trung tâm đổi mới",
            "example": "The hub fosters collaboration.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15011,
            "word": "literature review",
            "pronunciation": "/ˈlɪtrətʃə rɪˈvjuː/",
            "definition": "tổng quan tài liệu",
            "example": "A literature review frames the study.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15012,
            "word": "hypothesis",
            "pronunciation": "/haɪˈpɒθəsɪs/",
            "definition": "giả thuyết nghiên cứu",
            "example": "The hypothesis was supported by data.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15013,
            "word": "variable",
            "pronunciation": "/ˈveəriəbl/",
            "definition": "biến số",
            "example": "We controlled for confounding variables.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 15014,
            "word": "sample size",
            "pronunciation": "/ˈsɑːmpl saɪz/",
            "definition": "kích thước mẫu",
            "example": "The sample size was adequate.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 15015,
            "word": "randomised trial",
            "pronunciation": "/ˈrændəmaɪzd ˈtraɪəl/",
            "definition": "thử nghiệm ngẫu nhiên",
            "example": "A randomised trial strengthens causal claims.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15016,
            "word": "replication",
            "pronunciation": "/ˌreplɪˈkeɪʃn/",
            "definition": "tái lập nghiên cứu",
            "example": "Replication enhances reliability.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15017,
            "word": "ethics approval",
            "pronunciation": "/ˈeθɪks əˈpruːvl/",
            "definition": "chấp thuận đạo đức nghiên cứu",
            "example": "Ethics approval is mandatory.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15018,
            "word": "data collection",
            "pronunciation": "/ˈdeɪtə kəˈlekʃn/",
            "definition": "thu thập dữ liệu",
            "example": "Data collection followed strict protocols.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 15019,
            "word": "data cleansing",
            "pronunciation": "/ˈdeɪtə ˈklɛnzɪŋ/",
            "definition": "làm sạch dữ liệu",
            "example": "Data cleansing removed anomalies.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15020,
            "word": "statistical significance",
            "pronunciation": "/stəˈtɪstɪkl sɪɡˈnɪfɪkəns/",
            "definition": "ý nghĩa thống kê",
            "example": "The results reached statistical significance.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15021,
            "word": "confidence interval",
            "pronunciation": "/ˈkɒnfɪdəns ˈɪntəvl/",
            "definition": "khoảng tin cậy",
            "example": "We report 95% confidence intervals.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15022,
            "word": "open access",
            "pronunciation": "/ˌəʊpən ˈækses/",
            "definition": "truy cập mở (tạp chí)",
            "example": "Open access increases visibility.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15023,
            "word": "preprint",
            "pronunciation": "/ˈpriːprɪnt/",
            "definition": "bản thảo tiền in",
            "example": "The preprint was posted online.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15024,
            "word": "research grant holder",
            "pronunciation": "/rɪˈsɜːtʃ ɡrɑːnt ˈhəʊldə/",
            "definition": "chủ nhiệm đề tài được tài trợ",
            "example": "The grant holder managed the budget.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 15025,
            "word": "supervisor",
            "pronunciation": "/ˈsuːpəvaɪzə/",
            "definition": "người hướng dẫn khoa học",
            "example": "Meet your supervisor regularly.",
            "partOfSpeech": "noun",
            "level": "B2"
          }
        ]
      },
      {
        "id": "1-6",
        "name": "Giáo dục & Xã hội",
        "cards": [
          {
            "id": 16001,
            "word": "illiteracy",
            "pronunciation": "/ɪˈlɪtərəsi/",
            "definition": "nạn mù chữ",
            "example": "Illiteracy persists in remote areas.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16002,
            "word": "gender gap",
            "pronunciation": "/ˈdʒendə ɡæp/",
            "definition": "khoảng cách giới trong giáo dục",
            "example": "Policies aim to close the gender gap.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16003,
            "word": "equal opportunity",
            "pronunciation": "/ˈiːkwəl ˌɒpəˈtjuːnəti/",
            "definition": "bình đẳng cơ hội",
            "example": "Universities should ensure equal opportunity.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16004,
            "word": "educational reform",
            "pronunciation": "/ˌedʒuˈkeɪʃənl rɪˈfɔːm/",
            "definition": "cải cách giáo dục",
            "example": "Reform is crucial for progress.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16005,
            "word": "compulsory education",
            "pronunciation": "/kəmˈpʌlsəri ˌedʒuˈkeɪʃn/",
            "definition": "giáo dục bắt buộc",
            "example": "Compulsory education protects children.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 16006,
            "word": "vocational training",
            "pronunciation": "/vəʊˈkeɪʃənl ˈtreɪnɪŋ/",
            "definition": "đào tạo nghề",
            "example": "Vocational training reduces youth unemployment.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16007,
            "word": "educational inequality",
            "pronunciation": "/ˌedʒuˈkeɪʃənl ˌɪnɪˈkwɒləti/",
            "definition": "bất bình đẳng giáo dục",
            "example": "Inequality limits social mobility.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16008,
            "word": "adult education",
            "pronunciation": "/əˈdʌlt ˌedʒuˈkeɪʃn/",
            "definition": "giáo dục người lớn",
            "example": "Adult education supports lifelong learning.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16009,
            "word": "dropout rate",
            "pronunciation": "/ˈdrɒpaʊt reɪt/",
            "definition": "tỷ lệ bỏ học",
            "example": "The dropout rate has fallen.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16010,
            "word": "knowledge economy",
            "pronunciation": "/ˈnɒlɪdʒ ɪˈkɒnəmi/",
            "definition": "nền kinh tế tri thức",
            "example": "The knowledge economy needs skilled workers.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16011,
            "word": "social mobility",
            "pronunciation": "/ˈsəʊʃl məʊˈbɪləti/",
            "definition": "dịch chuyển xã hội",
            "example": "Education drives social mobility.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16012,
            "word": "equity in education",
            "pronunciation": "/ˈekwəti ɪn ˌedʒuˈkeɪʃn/",
            "definition": "công bằng trong giáo dục",
            "example": "Equity requires targeted support.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16013,
            "word": "inclusive education",
            "pronunciation": "/ɪnˈkluːsɪv ˌedʒuˈkeɪʃn/",
            "definition": "giáo dục hòa nhập",
            "example": "Inclusive education benefits all learners.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16014,
            "word": "rural-urban divide",
            "pronunciation": "/ˌrʊərəl ˈɜːbən dɪˈvaɪd/",
            "definition": "khoảng cách nông thôn–đô thị",
            "example": "Bridging the divide remains challenging.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16015,
            "word": "brain drain",
            "pronunciation": "/ˌbreɪn ˈdreɪn/",
            "definition": "chảy máu chất xám",
            "example": "Brain drain weakens local institutions.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16016,
            "word": "literacy rate",
            "pronunciation": "/ˈlɪtərəsi reɪt/",
            "definition": "tỷ lệ biết chữ",
            "example": "The literacy rate has improved steadily.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16017,
            "word": "STEM education",
            "pronunciation": "/stem ˌedʒuˈkeɪʃn/",
            "definition": "giáo dục khoa học–kỹ thuật",
            "example": "STEM education addresses skills shortages.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 16018,
            "word": "funding gap",
            "pronunciation": "/ˈfʌndɪŋ ɡæp/",
            "definition": "thiếu hụt ngân sách",
            "example": "The funding gap affects school quality.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16019,
            "word": "school-to-work transition",
            "pronunciation": "/skuːl tə wɜːk trænˈzɪʃn/",
            "definition": "chuyển tiếp từ trường học sang việc làm",
            "example": "Stronger links ease the transition.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 16020,
            "word": "lifelong learning",
            "pronunciation": "/ˈlaɪflɒŋ ˈlɜːnɪŋ/",
            "definition": "học tập suốt đời",
            "example": "Lifelong learning keeps skills current.",
            "partOfSpeech": "noun",
            "level": "B2"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "name": "Môi trường",
    "subThemes": [
      {
        "id": "2-1",
        "name": "Biến đổi khí hậu",
        "cards": [
          {
            "id": 21001,
            "word": "greenhouse effect",
            "pronunciation": "/ˈɡriːnhaʊs ɪˈfekt/",
            "definition": "hiệu ứng nhà kính",
            "example": "The greenhouse effect traps heat in the atmosphere.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21002,
            "word": "global warming",
            "pronunciation": "/ˌɡləʊbl ˈwɔːmɪŋ/",
            "definition": "hiện tượng ấm lên toàn cầu",
            "example": "Global warming accelerates ice-sheet melting.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21003,
            "word": "climate change",
            "pronunciation": "/ˈklaɪmət tʃeɪndʒ/",
            "definition": "biến đổi khí hậu",
            "example": "Climate change threatens food security.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21004,
            "word": "climate crisis",
            "pronunciation": "/ˈklaɪmət ˈkraɪsɪs/",
            "definition": "khủng hoảng khí hậu",
            "example": "The climate crisis requires immediate action.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21005,
            "word": "carbon footprint",
            "pronunciation": "/ˌkɑːbən ˈfʊtprɪnt/",
            "definition": "dấu chân carbon (lượng phát thải)",
            "example": "We can shrink our carbon footprint by flying less.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21006,
            "word": "carbon neutrality",
            "pronunciation": "/ˌkɑːbən njuːˈtræləti/",
            "definition": "trung hòa carbon",
            "example": "The firm aims for carbon neutrality by 2035.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21007,
            "word": "carbon offset",
            "pronunciation": "/ˌkɑːbən ˈɒfset/",
            "definition": "bù trừ phát thải carbon",
            "example": "They purchase carbon offsets to balance emissions.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21008,
            "word": "greenhouse gas",
            "pronunciation": "/ˈɡriːnhaʊs ɡæs/",
            "definition": "khí nhà kính",
            "example": "Methane is a potent greenhouse gas.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21009,
            "word": "methane",
            "pronunciation": "/ˈmiːθeɪn/",
            "definition": "khí mê-tan",
            "example": "Methane leaks worsen climate forcing.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21010,
            "word": "sea-level rise",
            "pronunciation": "/ˌsiː ˈlevl raɪz/",
            "definition": "mực nước biển dâng",
            "example": "Sea-level rise threatens coastal cities.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21011,
            "word": "ocean acidification",
            "pronunciation": "/ˈəʊʃn əˌsɪdɪfɪˈkeɪʃn/",
            "definition": "axit hóa đại dương",
            "example": "Ocean acidification harms shell-forming species.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21012,
            "word": "heatwave",
            "pronunciation": "/ˈhiːtweɪv/",
            "definition": "đợt nắng nóng gay gắt",
            "example": "Record heatwaves have become more frequent.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21013,
            "word": "extreme weather",
            "pronunciation": "/ɪkˌstriːm ˈweðə/",
            "definition": "thời tiết cực đoan",
            "example": "Extreme weather events strain infrastructure.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21014,
            "word": "drought",
            "pronunciation": "/draʊt/",
            "definition": "hạn hán",
            "example": "Prolonged drought devastates harvests.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21015,
            "word": "wildfire",
            "pronunciation": "/ˈwaɪldfaɪə/",
            "definition": "cháy rừng",
            "example": "Wildfires release substantial carbon.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21016,
            "word": "permafrost",
            "pronunciation": "/ˈpɜːməfrɒst/",
            "definition": "tầng băng vĩnh cửu",
            "example": "Melting permafrost emits methane.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21017,
            "word": "tipping point",
            "pronunciation": "/ˈtɪpɪŋ pɔɪnt/",
            "definition": "điểm ngưỡng (khó đảo ngược)",
            "example": "Some ecosystems are nearing climate tipping points.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21018,
            "word": "resilience",
            "pronunciation": "/rɪˈzɪliəns/",
            "definition": "khả năng chống chịu",
            "example": "Urban resilience is vital under climate stress.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21019,
            "word": "adaptation",
            "pronunciation": "/ˌædæpˈteɪʃn/",
            "definition": "thích ứng (với biến đổi khí hậu)",
            "example": "Adaptation plans protect vulnerable groups.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 21020,
            "word": "mitigation",
            "pronunciation": "/ˌmɪtɪˈɡeɪʃn/",
            "definition": "giảm nhẹ (phát thải/tác động)",
            "example": "Mitigation targets cut net emissions.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21021,
            "word": "climate modelling",
            "pronunciation": "/ˈklaɪmət ˈmɒdəlɪŋ/",
            "definition": "mô hình khí hậu",
            "example": "Climate modelling informs policy choices.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21022,
            "word": "decarbonise",
            "pronunciation": "/ˌdiːˈkɑːbənaɪz/",
            "definition": "khử carbon (giảm phát thải)",
            "example": "We must decarbonise power and transport.",
            "partOfSpeech": "verb",
            "level": "C1"
          },
          {
            "id": 21023,
            "word": "net-zero",
            "pronunciation": "/ˌnet ˈzɪərəʊ/",
            "definition": "phát thải ròng bằng 0",
            "example": "Net-zero pledges need credible roadmaps.",
            "partOfSpeech": "adjective",
            "level": "C1"
          },
          {
            "id": 21024,
            "word": "climate finance",
            "pronunciation": "/ˈklaɪmət ˈfaɪnæns/",
            "definition": "tài chính khí hậu",
            "example": "Climate finance supports mitigation in developing countries.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 21025,
            "word": "loss and damage",
            "pronunciation": "/lɒs ənd ˈdæmɪdʒ/",
            "definition": "tổn thất và thiệt hại do khí hậu",
            "example": "Loss and damage funds aid affected communities.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "2-2",
        "name": "Ô nhiễm",
        "cards": [
          {
            "id": 22001,
            "word": "air pollution",
            "pronunciation": "/ˈeə pəˌluːʃn/",
            "definition": "ô nhiễm không khí",
            "example": "Air pollution raises mortality risks.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22002,
            "word": "water contamination",
            "pronunciation": "/ˈwɔːtə kənˌtæmɪˈneɪʃn/",
            "definition": "ô nhiễm nguồn nước",
            "example": "Water contamination threatens fisheries.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22003,
            "word": "soil degradation",
            "pronunciation": "/ˈsɔɪl ˌdeɡrəˈdeɪʃn/",
            "definition": "thoái hóa đất",
            "example": "Soil degradation reduces crop yields.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22004,
            "word": "industrial emissions",
            "pronunciation": "/ɪnˈdʌstriəl ɪˈmɪʃnz/",
            "definition": "khí thải công nghiệp",
            "example": "Stricter rules curb industrial emissions.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22005,
            "word": "vehicle emissions",
            "pronunciation": "/ˈviːəkl ɪˈmɪʃnz/",
            "definition": "khí thải xe cộ",
            "example": "Vehicle emissions worsen urban smog.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22006,
            "word": "smog",
            "pronunciation": "/smɒɡ/",
            "definition": "khói mù",
            "example": "Winter smog limits visibility.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22007,
            "word": "particulate matter",
            "pronunciation": "/pɑːˈtɪkjələt ˈmætə/",
            "definition": "bụi mịn (PM2.5/PM10)",
            "example": "Particulate matter penetrates deep into lungs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22008,
            "word": "toxic fumes",
            "pronunciation": "/ˈtɒksɪk fjuːmz/",
            "definition": "khói độc",
            "example": "Workers were exposed to toxic fumes.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22009,
            "word": "chemical spill",
            "pronunciation": "/ˈkemɪkl spɪl/",
            "definition": "tràn hóa chất",
            "example": "The chemical spill contaminated the river.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22010,
            "word": "eutrophication",
            "pronunciation": "/juːˌtrɒfɪˈkeɪʃn/",
            "definition": "phú dưỡng hóa",
            "example": "Eutrophication triggers algal blooms.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22011,
            "word": "algal bloom",
            "pronunciation": "/ˈælɡəl bluːm/",
            "definition": "tảo nở hoa",
            "example": "Frequent algal blooms suffocate fish.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22012,
            "word": "acid rain",
            "pronunciation": "/ˌæsɪd ˈreɪn/",
            "definition": "mưa axit",
            "example": "Acid rain damages forests.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22013,
            "word": "noise pollution",
            "pronunciation": "/ˈnɔɪz pəˌluːʃn/",
            "definition": "ô nhiễm tiếng ồn",
            "example": "Noise pollution impairs sleep quality.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22014,
            "word": "light pollution",
            "pronunciation": "/ˈlaɪt pəˌluːʃn/",
            "definition": "ô nhiễm ánh sáng",
            "example": "Light pollution disrupts nocturnal wildlife.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22015,
            "word": "microplastics",
            "pronunciation": "/ˌmaɪkrəʊˈplæstɪks/",
            "definition": "vi nhựa",
            "example": "Microplastics have entered the food chain.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22016,
            "word": "landfill leachate",
            "pronunciation": "/ˈlændfɪl ˈliːtʃeɪt/",
            "definition": "nước rỉ rác bãi chôn lấp",
            "example": "Leachate treatment is costly.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 22017,
            "word": "hazardous waste",
            "pronunciation": "/ˈhæzədəs weɪst/",
            "definition": "chất thải nguy hại",
            "example": "Hazardous waste requires special handling.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22018,
            "word": "pollutant",
            "pronunciation": "/pəˈluːtənt/",
            "definition": "chất gây ô nhiễm",
            "example": "Regulations limit key pollutants.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 22019,
            "word": "emission standard",
            "pronunciation": "/ɪˈmɪʃn ˈstændəd/",
            "definition": "tiêu chuẩn phát thải",
            "example": "New emission standards protect air quality.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22020,
            "word": "pollution hotspot",
            "pronunciation": "/pəˈluːʃn ˈhɒtspɒt/",
            "definition": "điểm nóng ô nhiễm",
            "example": "Sensors identified several pollution hotspots.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22021,
            "word": "contaminant",
            "pronunciation": "/kənˈtæmɪnənt/",
            "definition": "tạp chất gây ô nhiễm",
            "example": "The lab detected contaminants in the water.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22022,
            "word": "bioaccumulation",
            "pronunciation": "/ˌbaɪəʊəˌkjuːmjʊˈleɪʃn/",
            "definition": "tích lũy sinh học",
            "example": "Bioaccumulation magnifies toxicity up the food web.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 22023,
            "word": "endocrine disruptor",
            "pronunciation": "/ˈendəkrɪn dɪsˈrʌptə/",
            "definition": "chất gây rối loạn nội tiết",
            "example": "Endocrine disruptors affect reproduction.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 22024,
            "word": "brownfield site",
            "pronunciation": "/ˈbraʊnfiːld saɪt/",
            "definition": "khu đất ô nhiễm cần cải tạo",
            "example": "Brownfield sites can be redeveloped sustainably.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 22025,
            "word": "environmental monitoring",
            "pronunciation": "/ɪnˌvaɪrənˈmentl ˈmɒnɪtərɪŋ/",
            "definition": "quan trắc môi trường",
            "example": "Continuous monitoring informs enforcement.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "2-3",
        "name": "Rác & Tái chế",
        "cards": [
          {
            "id": 23001,
            "word": "waste management",
            "pronunciation": "/weɪst ˈmænɪdʒmənt/",
            "definition": "quản lý chất thải",
            "example": "Integrated waste management reduces landfill use.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23002,
            "word": "recycling",
            "pronunciation": "/ˌriːˈsaɪklɪŋ/",
            "definition": "tái chế",
            "example": "Recycling conserves resources and energy.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 23003,
            "word": "reuse",
            "pronunciation": "/ˌriːˈjuːz/",
            "definition": "tái sử dụng",
            "example": "We prioritise reuse before recycling.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23004,
            "word": "upcycling",
            "pronunciation": "/ˈʌpsaɪklɪŋ/",
            "definition": "tái chế nâng cấp",
            "example": "Upcycling turns waste into higher-value goods.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23005,
            "word": "circular economy",
            "pronunciation": "/ˌsɜːkjələ rɪˈkɒnəmi/",
            "definition": "kinh tế tuần hoàn",
            "example": "A circular economy minimises waste.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23006,
            "word": "zero-waste",
            "pronunciation": "/ˌzɪərəʊ ˈweɪst/",
            "definition": "không rác thải",
            "example": "Zero-waste stores avoid single-use packaging.",
            "partOfSpeech": "adjective",
            "level": "C1"
          },
          {
            "id": 23007,
            "word": "single-use plastic",
            "pronunciation": "/ˌsɪŋɡl juːs ˈplæstɪk/",
            "definition": "nhựa dùng một lần",
            "example": "Bans on single-use plastics are expanding.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23008,
            "word": "biodegradable",
            "pronunciation": "/ˌbaɪəʊdɪˈɡreɪdəbl/",
            "definition": "phân hủy sinh học",
            "example": "Biodegradable bags break down faster.",
            "partOfSpeech": "adjective",
            "level": "B2"
          },
          {
            "id": 23009,
            "word": "compostable",
            "pronunciation": "/kɒmˈpɒstəbl/",
            "definition": "có thể ủ phân",
            "example": "Compostable packaging needs proper facilities.",
            "partOfSpeech": "adjective",
            "level": "C1"
          },
          {
            "id": 23010,
            "word": "composting",
            "pronunciation": "/ˈkɒmpɒstɪŋ/",
            "definition": "ủ phân hữu cơ",
            "example": "Community composting diverts food waste.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23011,
            "word": "landfill",
            "pronunciation": "/ˈlændfɪl/",
            "definition": "bãi chôn lấp rác",
            "example": "Landfills emit methane unless captured.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23012,
            "word": "incineration",
            "pronunciation": "/ɪnˌsɪnəˈreɪʃn/",
            "definition": "đốt rác (thiêu hủy)",
            "example": "Incineration reduces volume but may emit toxins.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23013,
            "word": "material recovery facility",
            "pronunciation": "/məˈtɪəriəl rɪˈkʌvəri fəˈsɪləti/",
            "definition": "cơ sở phân loại – thu hồi vật liệu",
            "example": "A new MRF increases recycling rates.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 23014,
            "word": "waste segregation",
            "pronunciation": "/weɪst ˌseɡrɪˈɡeɪʃn/",
            "definition": "phân loại rác",
            "example": "Waste segregation at source is essential.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23015,
            "word": "producer responsibility",
            "pronunciation": "/prəˈdjuːsə rɪˌspɒnsəˈbɪləti/",
            "definition": "trách nhiệm mở rộng của nhà sản xuất",
            "example": "EPR schemes fund recycling infrastructure.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 23016,
            "word": "littering",
            "pronunciation": "/ˈlɪtərɪŋ/",
            "definition": "xả rác bừa bãi",
            "example": "Strict fines deter littering.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 23017,
            "word": "marine debris",
            "pronunciation": "/məˈriːn dɪˈbriː/",
            "definition": "rác thải biển",
            "example": "Marine debris harms seabirds and turtles.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23018,
            "word": "waste audit",
            "pronunciation": "/weɪst ˈɔːdɪt/",
            "definition": "kiểm toán rác thải",
            "example": "A waste audit identifies reduction opportunities.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 23019,
            "word": "batch collection",
            "pronunciation": "/bætʃ kəˈlekʃn/",
            "definition": "thu gom theo đợt",
            "example": "Batch collection improves logistics.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23020,
            "word": "reverse logistics",
            "pronunciation": "/rɪˈvɜːs ləˈdʒɪstɪks/",
            "definition": "logistics ngược (thu hồi sản phẩm)",
            "example": "Reverse logistics supports take-back schemes.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 23021,
            "word": "resource recovery",
            "pronunciation": "/rɪˈzɔːs rɪˈkʌvəri/",
            "definition": "thu hồi tài nguyên",
            "example": "Resource recovery creates local jobs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23022,
            "word": "waste-to-energy",
            "pronunciation": "/weɪst tuː ˈenədʒi/",
            "definition": "chuyển rác thành năng lượng",
            "example": "Waste-to-energy plants generate electricity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23023,
            "word": "leachate treatment",
            "pronunciation": "/ˈliːtʃeɪt ˈtriːtmənt/",
            "definition": "xử lý nước rỉ rác",
            "example": "Leachate treatment prevents groundwater pollution.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 23024,
            "word": "take-back scheme",
            "pronunciation": "/ˈteɪk bæk skiːm/",
            "definition": "chương trình thu hồi sản phẩm",
            "example": "Take-back schemes boost recycling rates.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 23025,
            "word": "plastic footprint",
            "pronunciation": "/ˌplæstɪk ˈfʊtprɪnt/",
            "definition": "dấu chân nhựa (mức tiêu thụ nhựa)",
            "example": "Cutting our plastic footprint protects oceans.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "2-4",
        "name": "Bảo tồn & Đa dạng",
        "cards": [
          {
            "id": 24001,
            "word": "biodiversity",
            "pronunciation": "/ˌbaɪəʊdaɪˈvɜːsəti/",
            "definition": "đa dạng sinh học",
            "example": "Biodiversity supports resilient ecosystems.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24002,
            "word": "ecosystem",
            "pronunciation": "/ˈiːkəʊsɪstəm/",
            "definition": "hệ sinh thái",
            "example": "Wetland ecosystems store carbon.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24003,
            "word": "keystone species",
            "pronunciation": "/ˈkiːstəʊn ˈspiːʃiːz/",
            "definition": "loài chủ chốt",
            "example": "Losing keystone species destabilises food webs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24004,
            "word": "habitat",
            "pronunciation": "/ˈhæbɪtæt/",
            "definition": "môi trường sống",
            "example": "Habitat loss threatens many species.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24005,
            "word": "habitat fragmentation",
            "pronunciation": "/ˈhæbɪtæt ˌfræɡmenˈteɪʃn/",
            "definition": "phân mảnh sinh cảnh",
            "example": "Fragmentation isolates wildlife populations.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24006,
            "word": "endangered species",
            "pronunciation": "/ɪnˈdeɪndʒəd ˈspiːʃiːz/",
            "definition": "loài nguy cấp",
            "example": "Endangered species need strict protection.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24007,
            "word": "extinction",
            "pronunciation": "/ɪkˈstɪŋkʃn/",
            "definition": "tuyệt chủng",
            "example": "Human activity drives extinction rates.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24008,
            "word": "invasive species",
            "pronunciation": "/ɪnˈveɪsɪv ˈspiːʃiːz/",
            "definition": "loài ngoại lai xâm hại",
            "example": "Invasive species outcompete native fauna.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24009,
            "word": "wildlife corridor",
            "pronunciation": "/ˈwaɪldlaɪf ˈkɒrɪdɔː/",
            "definition": "hành lang sinh học",
            "example": "Wildlife corridors reconnect fragmented habitats.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24010,
            "word": "reforestation",
            "pronunciation": "/ˌriːˌfɒrɪˈsteɪʃn/",
            "definition": "trồng lại rừng",
            "example": "Reforestation restores degraded land.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24011,
            "word": "afforestation",
            "pronunciation": "/əˌfɒrɪˈsteɪʃn/",
            "definition": "trồng rừng mới",
            "example": "Afforestation increases carbon sinks.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24012,
            "word": "deforestation",
            "pronunciation": "/diːˌfɒrɪˈsteɪʃn/",
            "definition": "phá rừng",
            "example": "Deforestation accelerates soil erosion.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24013,
            "word": "overexploitation",
            "pronunciation": "/ˌəʊvəˌeksplɔɪˈteɪʃn/",
            "definition": "khai thác quá mức",
            "example": "Overexploitation depletes fish stocks.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 24014,
            "word": "poaching",
            "pronunciation": "/ˈpəʊtʃɪŋ/",
            "definition": "săn bắt trộm",
            "example": "Anti-poaching units patrol reserves.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24015,
            "word": "protected area",
            "pronunciation": "/prəˈtektɪd ˈeəriə/",
            "definition": "khu bảo tồn",
            "example": "Protected areas safeguard biodiversity.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24016,
            "word": "conservation genetics",
            "pronunciation": "/ˌkɒnsəˈveɪʃn dʒɪˈnetɪks/",
            "definition": "di truyền bảo tồn",
            "example": "Genetics guides breeding programmes.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 24017,
            "word": "species reintroduction",
            "pronunciation": "/ˈspiːʃiːz ˌriːɪntrəˈdʌkʃn/",
            "definition": "tái thả loài về tự nhiên",
            "example": "Reintroduction restores ecological functions.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 24018,
            "word": "ecosystem services",
            "pronunciation": "/ˈiːkəʊsɪstəm ˈsɜːvɪsɪz/",
            "definition": "dịch vụ hệ sinh thái",
            "example": "Pollination is a crucial ecosystem service.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24019,
            "word": "wetland",
            "pronunciation": "/ˈwetlænd/",
            "definition": "đất ngập nước",
            "example": "Wetlands buffer floods.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24020,
            "word": "mangrove",
            "pronunciation": "/ˈmæŋɡrəʊv/",
            "definition": "rừng ngập mặn",
            "example": "Mangroves protect shorelines from storms.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 24021,
            "word": "coral bleaching",
            "pronunciation": "/ˈkɒrəl ˈbliːtʃɪŋ/",
            "definition": "tẩy trắng san hô",
            "example": "Coral bleaching intensifies during heatwaves.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24022,
            "word": "nature-based solutions",
            "pronunciation": "/ˈneɪtʃə beɪst səˈluːʃnz/",
            "definition": "giải pháp dựa vào thiên nhiên",
            "example": "Nature-based solutions reduce flood risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24023,
            "word": "restoration ecology",
            "pronunciation": "/ˌrestəˈreɪʃn iˈkɒlədʒi/",
            "definition": "sinh thái phục hồi",
            "example": "Restoration ecology rehabilitates degraded land.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 24024,
            "word": "carrying capacity",
            "pronunciation": "/ˈkærɪɪŋ kəˈpæsəti/",
            "definition": "sức chứa sinh thái",
            "example": "Tourism must respect carrying capacity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 24025,
            "word": "biosphere reserve",
            "pronunciation": "/ˈbaɪəsfɪə rɪˈzɜːv/",
            "definition": "khu dự trữ sinh quyển",
            "example": "Biosphere reserves balance people and nature.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "2-5",
        "name": "Năng lượng & Tài nguyên",
        "cards": [
          {
            "id": 25001,
            "word": "renewable energy",
            "pronunciation": "/rɪˈnjuːəbl ˈenədʒi/",
            "definition": "năng lượng tái tạo",
            "example": "Renewable energy reduces reliance on fossil fuels.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25002,
            "word": "solar power",
            "pronunciation": "/ˈsəʊlə ˈpaʊə/",
            "definition": "điện năng lượng mặt trời",
            "example": "Solar power is increasingly affordable.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25003,
            "word": "wind farm",
            "pronunciation": "/ˈwɪnd fɑːm/",
            "definition": "trang trại gió",
            "example": "Offshore wind farms generate steady output.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25004,
            "word": "hydropower",
            "pronunciation": "/ˈhaɪdrəʊˌpaʊə/",
            "definition": "thủy điện",
            "example": "Hydropower provides baseload electricity.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25005,
            "word": "geothermal energy",
            "pronunciation": "/ˌdʒiːəʊˈθɜːml ˈenədʒi/",
            "definition": "địa nhiệt",
            "example": "Geothermal plants run continuously.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25006,
            "word": "biomass",
            "pronunciation": "/ˈbaɪəʊmæs/",
            "definition": "sinh khối",
            "example": "Biomass can be carbon-neutral if managed well.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25007,
            "word": "fossil fuel",
            "pronunciation": "/ˈfɒsl ˌfjuːəl/",
            "definition": "nhiên liệu hóa thạch",
            "example": "Phasing out fossil fuels is crucial.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25008,
            "word": "natural gas",
            "pronunciation": "/ˌnætʃrəl ˈɡæs/",
            "definition": "khí tự nhiên",
            "example": "Natural gas emits less CO₂ than coal.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 25009,
            "word": "coal-fired plant",
            "pronunciation": "/ˈkəʊl faɪəd plɑːnt/",
            "definition": "nhà máy nhiệt điện than",
            "example": "Coal-fired plants face stricter rules.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25010,
            "word": "energy efficiency",
            "pronunciation": "/ˈenədʒi ɪˈfɪʃnsi/",
            "definition": "hiệu quả năng lượng",
            "example": "Efficiency upgrades cut bills.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25011,
            "word": "energy storage",
            "pronunciation": "/ˈenədʒi ˈstɔːrɪdʒ/",
            "definition": "lưu trữ năng lượng",
            "example": "Storage balances intermittent renewables.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25012,
            "word": "smart grid",
            "pronunciation": "/ˌsmɑːt ˈɡrɪd/",
            "definition": "lưới điện thông minh",
            "example": "Smart grids improve reliability.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25013,
            "word": "demand response",
            "pronunciation": "/dɪˈmɑːnd rɪˈspɒns/",
            "definition": "điều chỉnh phụ tải",
            "example": "Demand response reduces peak demand.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 25014,
            "word": "energy audit",
            "pronunciation": "/ˈenədʒi ˈɔːdɪt/",
            "definition": "kiểm toán năng lượng",
            "example": "An energy audit identified major savings.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25015,
            "word": "retrofit",
            "pronunciation": "/ˈretrəʊfɪt/",
            "definition": "cải tạo nâng cấp (tiết kiệm năng lượng)",
            "example": "Building retrofits lower emissions.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25016,
            "word": "electric vehicle",
            "pronunciation": "/ɪˈlektrɪk ˈviːɪkl/",
            "definition": "xe điện",
            "example": "Electric vehicles need charging networks.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 25017,
            "word": "battery degradation",
            "pronunciation": "/ˈbætəri ˌdeɡrəˈdeɪʃn/",
            "definition": "suy giảm pin",
            "example": "Battery degradation depends on use patterns.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25018,
            "word": "rare earths",
            "pronunciation": "/ˌreə ˈɜːθs/",
            "definition": "đất hiếm",
            "example": "Rare earths are vital for turbines and EVs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25019,
            "word": "critical minerals",
            "pronunciation": "/ˈkrɪtɪkl ˈmɪnərəlz/",
            "definition": "khoáng sản trọng yếu",
            "example": "Critical minerals supply chains are fragile.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25020,
            "word": "water scarcity",
            "pronunciation": "/ˈwɔːtə ˈskeəsəti/",
            "definition": "khả năng thiếu nước",
            "example": "Water scarcity limits power generation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25021,
            "word": "desalination",
            "pronunciation": "/ˌdiːˌsælɪˈneɪʃn/",
            "definition": "khử mặn",
            "example": "Desalination is energy-intensive.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25022,
            "word": "energy transition",
            "pronunciation": "/ˈenədʒi trænˈzɪʃn/",
            "definition": "chuyển dịch năng lượng",
            "example": "The energy transition creates new jobs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25023,
            "word": "levelised cost of energy",
            "pronunciation": "/ˈlevəlaɪzd kɒst əv ˈenədʒi/",
            "definition": "chi phí điện quy dẫn (LCOE)",
            "example": "Falling LCOE drives adoption.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 25024,
            "word": "capacity factor",
            "pronunciation": "/kəˈpæsəti ˈfæktə/",
            "definition": "hệ số công suất",
            "example": "Offshore wind has a high capacity factor.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 25025,
            "word": "grid integration",
            "pronunciation": "/ɡrɪd ˌɪntɪˈɡreɪʃn/",
            "definition": "tích hợp lên lưới điện",
            "example": "Grid integration requires flexible resources.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "2-6",
        "name": "Chính sách & Bền vững",
        "cards": [
          {
            "id": 26001,
            "word": "sustainability",
            "pronunciation": "/səˌsteɪnəˈbɪləti/",
            "definition": "tính bền vững",
            "example": "Sustainability goals guide corporate strategy.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 26002,
            "word": "sustainable development",
            "pronunciation": "/səˈsteɪnəbl dɪˈveləpmənt/",
            "definition": "phát triển bền vững",
            "example": "Sustainable development balances people and planet.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 26003,
            "word": "ESG reporting",
            "pronunciation": "/iː ɛs dʒiː rɪˈpɔːtɪŋ/",
            "definition": "báo cáo ESG (môi trường–xã hội–quản trị)",
            "example": "ESG reporting is now mandatory for many firms.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26004,
            "word": "greenwashing",
            "pronunciation": "/ˈɡriːnwɒʃɪŋ/",
            "definition": "tẩy xanh (đánh bóng hình ảnh môi trường)",
            "example": "Greenwashing erodes public trust.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26005,
            "word": "environmental stewardship",
            "pronunciation": "/ɪnˌvaɪrənˈmentl ˈstjuːədʃɪp/",
            "definition": "quản trị môi trường có trách nhiệm",
            "example": "Stewardship programmes engage communities.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26006,
            "word": "regulatory compliance",
            "pronunciation": "/ˌreɡjʊˈleɪtəri kəmˈplaɪəns/",
            "definition": "tuân thủ quy định",
            "example": "Compliance audits prevent violations.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26007,
            "word": "carbon pricing",
            "pronunciation": "/ˌkɑːbən ˈpraɪsɪŋ/",
            "definition": "định giá carbon",
            "example": "Carbon pricing incentivises low-carbon choices.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26008,
            "word": "carbon tax",
            "pronunciation": "/ˈkɑːbən tæks/",
            "definition": "thuế carbon",
            "example": "A carbon tax can drive behavioural change.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 26009,
            "word": "emissions trading",
            "pronunciation": "/ɪˈmɪʃn ˈtreɪdɪŋ/",
            "definition": "mua bán quyền phát thải (ETS)",
            "example": "Emissions trading caps total pollution.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26010,
            "word": "cap-and-trade",
            "pronunciation": "/ˌkæp ən ˈtreɪd/",
            "definition": "cơ chế trần và trao đổi hạn ngạch",
            "example": "Cap-and-trade lowers emissions cost-effectively.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26011,
            "word": "environmental impact assessment",
            "pronunciation": "/ɪnˌvaɪrənˈmentl ˈɪmpækt əˈsesmənt/",
            "definition": "đánh giá tác động môi trường (ĐTM)",
            "example": "An EIA is required for large projects.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26012,
            "word": "precautionary principle",
            "pronunciation": "/prɪˈkɔːʃənəri ˈprɪnsəpl/",
            "definition": "nguyên tắc thận trọng",
            "example": "The precautionary principle guides chemicals policy.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 26013,
            "word": "polluter pays principle",
            "pronunciation": "/pəˈluːtə peɪz ˈprɪnsəpl/",
            "definition": "nguyên tắc người gây ô nhiễm phải trả tiền",
            "example": "The polluter pays principle underpins fines.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26014,
            "word": "stakeholder engagement",
            "pronunciation": "/ˈsteɪkhəʊldə ɪnˈɡeɪdʒmənt/",
            "definition": "tham vấn các bên liên quan",
            "example": "Strong engagement improves outcomes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26015,
            "word": "community-based management",
            "pronunciation": "/kəˈmjuːnəti beɪst ˈmænɪdʒmənt/",
            "definition": "quản lý dựa vào cộng đồng",
            "example": "Community-based management protects forests.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26016,
            "word": "public awareness campaign",
            "pronunciation": "/ˈpʌblɪk əˈweənəs kæmˈpeɪn/",
            "definition": "chiến dịch nâng cao nhận thức",
            "example": "Awareness campaigns change daily habits.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 26017,
            "word": "corporate accountability",
            "pronunciation": "/ˈkɔːpərət əˌkaʊntəˈbɪləti/",
            "definition": "trách nhiệm giải trình của doanh nghiệp",
            "example": "Accountability mechanisms deter violations.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26018,
            "word": "environmental justice",
            "pronunciation": "/ɪnˌvaɪrənˈmentl ˈdʒʌstɪs/",
            "definition": "công lý môi trường",
            "example": "Environmental justice addresses unequal burdens.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26019,
            "word": "just transition",
            "pronunciation": "/dʒʌst trænˈzɪʃn/",
            "definition": "chuyển dịch công bằng",
            "example": "A just transition supports affected workers.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26020,
            "word": "supply-chain traceability",
            "pronunciation": "/səˈplaɪ tʃeɪn ˌtreɪsəˈbɪləti/",
            "definition": "truy xuất nguồn gốc chuỗi cung ứng",
            "example": "Traceability increases consumer trust.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 26021,
            "word": "life-cycle assessment",
            "pronunciation": "/ˈlaɪf saɪkl əˈsesmənt/",
            "definition": "đánh giá vòng đời sản phẩm (LCA)",
            "example": "LCA reveals hidden impacts.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 26022,
            "word": "eco-labelling",
            "pronunciation": "/ˈiːkəʊ ˈleɪbəlɪŋ/",
            "definition": "nhãn sinh thái",
            "example": "Eco-labelling helps shoppers choose wisely.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26023,
            "word": "sustainable procurement",
            "pronunciation": "/səˈsteɪnəbl prəˈkjʊərmənt/",
            "definition": "mua sắm bền vững",
            "example": "Green procurement standards reduce waste.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 26024,
            "word": "resource efficiency",
            "pronunciation": "/rɪˈzɔːs ɪˈfɪʃnsi/",
            "definition": "hiệu quả sử dụng tài nguyên",
            "example": "Resource efficiency lowers costs and impacts.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "name": "Công nghệ",
    "subThemes": [
      {
        "id": "3-1",
        "name": "Hạ tầng số",
        "cards": [
          {
            "id": 31001,
            "word": "cloud computing",
            "pronunciation": "/klaʊd kəmˈpjuːtɪŋ/",
            "definition": "điện toán đám mây",
            "example": "Cloud computing scales resources on demand.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 31002,
            "word": "data centre",
            "pronunciation": "/ˈdeɪtə ˌsentə/",
            "definition": "trung tâm dữ liệu",
            "example": "The company operates a tier-III data centre.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 31003,
            "word": "content delivery network",
            "pronunciation": "/ˈkɒntent dɪˈlɪvəri ˈnetwɜːk/",
            "definition": "mạng phân phối nội dung (CDN)",
            "example": "A CDN reduces latency for global users.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31004,
            "word": "latency",
            "pronunciation": "/ˈleɪtənsi/",
            "definition": "độ trễ",
            "example": "Low latency is crucial for gaming.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 31005,
            "word": "bandwidth",
            "pronunciation": "/ˈbændwɪdθ/",
            "definition": "băng thông",
            "example": "Higher bandwidth supports HD streaming.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 31006,
            "word": "redundancy",
            "pronunciation": "/rɪˈdʌndənsi/",
            "definition": "dự phòng (hệ thống)",
            "example": "Redundancy improves service availability.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31007,
            "word": "failover",
            "pronunciation": "/ˈfeɪlˌəʊvə/",
            "definition": "chuyển đổi dự phòng",
            "example": "Automatic failover prevents downtime.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31008,
            "word": "load balancing",
            "pronunciation": "/ˈləʊd ˌbælənsɪŋ/",
            "definition": "cân bằng tải",
            "example": "Load balancing distributes traffic fairly.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31009,
            "word": "containerisation",
            "pronunciation": "/kənˌteɪnəraɪˈzeɪʃn/",
            "definition": "đóng gói ứng dụng bằng container",
            "example": "Containerisation speeds up deployment.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31010,
            "word": "orchestration",
            "pronunciation": "/ˌɔːkɪˈstreɪʃn/",
            "definition": "điều phối container/dịch vụ",
            "example": "Orchestration automates scaling and healing.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31011,
            "word": "microservices",
            "pronunciation": "/ˈmaɪkrəʊˌsɜːvɪsɪz/",
            "definition": "kiến trúc vi dịch vụ",
            "example": "Microservices enable independent releases.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31012,
            "word": "serverless",
            "pronunciation": "/ˈsɜːvələs/",
            "definition": "kiến trúc không máy chủ (FaaS)",
            "example": "Serverless cuts ops overhead for spikes.",
            "partOfSpeech": "adjective",
            "level": "C1"
          },
          {
            "id": 31013,
            "word": "edge computing",
            "pronunciation": "/edʒ kəmˈpjuːtɪŋ/",
            "definition": "điện toán biên",
            "example": "Edge computing reduces backhaul traffic.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31014,
            "word": "infrastructure as code",
            "pronunciation": "/ˈɪnfrəstrʌktʃə əz kəʊd/",
            "definition": "hạ tầng như mã (IaC)",
            "example": "Infrastructure as code ensures repeatability.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31015,
            "word": "observability",
            "pronunciation": "/əbˌzɜːvəˈbɪləti/",
            "definition": "khả năng quan sát hệ thống",
            "example": "Observability shortens incident response time.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31016,
            "word": "telemetry",
            "pronunciation": "/təˈlemətri/",
            "definition": "thu thập số liệu từ xa",
            "example": "Telemetry provides real-time insights.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31017,
            "word": "throughput",
            "pronunciation": "/ˈθruːpʊt/",
            "definition": "thông lượng",
            "example": "Throughput improved after tuning queries.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31018,
            "word": "availability",
            "pronunciation": "/əˌveɪləˈbɪləti/",
            "definition": "độ sẵn sàng",
            "example": "We target 99.99% availability.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 31019,
            "word": "service-level agreement",
            "pronunciation": "/ˈsɜːvɪs ˈlevl əˈɡriːmənt/",
            "definition": "thoả thuận mức dịch vụ (SLA)",
            "example": "The SLA guarantees response within one hour.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31020,
            "word": "multi-tenancy",
            "pronunciation": "/ˌmʌlti ˈtenənsi/",
            "definition": "đa người thuê (chia sẻ tài nguyên)",
            "example": "Multi-tenancy isolates customers securely.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31021,
            "word": "virtualisation",
            "pronunciation": "/ˌvɜːtʃuəlaɪˈzeɪʃn/",
            "definition": "ảo hoá",
            "example": "Virtualisation consolidates workloads.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 31022,
            "word": "hypervisor",
            "pronunciation": "/ˈhaɪpəˌvaɪzə/",
            "definition": "trình quản lý máy ảo",
            "example": "The hypervisor manages guest VMs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31023,
            "word": "container registry",
            "pronunciation": "/kənˈteɪnə ˈredʒɪstri/",
            "definition": "kho lưu trữ container",
            "example": "Images are pushed to a private registry.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31024,
            "word": "disaster recovery",
            "pronunciation": "/dɪˈzɑːstə rɪˈkʌvəri/",
            "definition": "khôi phục sau thảm hoạ (DR)",
            "example": "A DR plan is tested yearly.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31025,
            "word": "infrastructure footprint",
            "pronunciation": "/ˈɪnfrəstrʌktʃə ˈfʊtprɪnt/",
            "definition": "quy mô hạ tầng (tài nguyên dùng)",
            "example": "We cut our infrastructure footprint by 20%.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31026,
            "word": "autoscaling",
            "pronunciation": "/ˈɔːtəʊˌskeɪlɪŋ/",
            "definition": "tự động tăng/giảm tài nguyên theo tải",
            "example": "Autoscaling keeps response times stable under spikes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 31027,
            "word": "service mesh",
            "pronunciation": "/ˈsɜːvɪs meʃ/",
            "definition": "lớp kết nối/quan sát giữa vi dịch vụ",
            "example": "A service mesh standardises traffic policies.",
            "partOfSpeech": "noun",
            "level": "C2"
          }
        ]
      },
      {
        "id": "3-2",
        "name": "Phần mềm & Dev",
        "cards": [
          {
            "id": 32001,
            "word": "version control",
            "pronunciation": "/ˈvɜːʃn kənˈtrəʊl/",
            "definition": "kiểm soát phiên bản",
            "example": "Version control enables collaborative coding.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32002,
            "word": "continuous integration",
            "pronunciation": "/kənˈtɪnjuəs ˌɪntɪˈɡreɪʃn/",
            "definition": "tích hợp liên tục (CI)",
            "example": "CI catches errors early.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32003,
            "word": "continuous delivery",
            "pronunciation": "/kənˈtɪnjuəs dɪˈlɪvəri/",
            "definition": "giao hàng liên tục (CD)",
            "example": "CD reduces release risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32004,
            "word": "pipeline",
            "pronunciation": "/ˈpaɪplaɪn/",
            "definition": "chuỗi xử lý tự động (pipeline)",
            "example": "The pipeline runs tests and deploys to staging.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32005,
            "word": "unit test",
            "pronunciation": "/ˈjuːnɪt test/",
            "definition": "kiểm thử đơn vị",
            "example": "High unit test coverage builds confidence.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32006,
            "word": "integration test",
            "pronunciation": "/ˌɪntɪˈɡreɪʃn test/",
            "definition": "kiểm thử tích hợp",
            "example": "Integration tests validate components together.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32007,
            "word": "end-to-end test",
            "pronunciation": "/ˌend tuː ˈend test/",
            "definition": "kiểm thử đầu-cuối",
            "example": "E2E tests simulate user flows.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32008,
            "word": "static analysis",
            "pronunciation": "/ˈstætɪk əˈnæləsɪs/",
            "definition": "phân tích tĩnh mã nguồn",
            "example": "Static analysis flags common bugs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32009,
            "word": "code review",
            "pronunciation": "/kəʊd rɪˈvjuː/",
            "definition": "duyệt mã",
            "example": "Thorough code review spreads knowledge.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32010,
            "word": "refactoring",
            "pronunciation": "/ˌriːˈfæktərɪŋ/",
            "definition": "tái cấu trúc mã",
            "example": "Refactoring improves readability and design.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32011,
            "word": "design pattern",
            "pronunciation": "/dɪˈzaɪn ˈpætn/",
            "definition": "mẫu thiết kế",
            "example": "Use patterns judiciously, not blindly.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32012,
            "word": "dependency injection",
            "pronunciation": "/dɪˈpendənsi ɪnˈdʒekʃn/",
            "definition": "tiêm phụ thuộc",
            "example": "Dependency injection decouples components.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32013,
            "word": "immutability",
            "pronunciation": "/ɪˌmjuːtəˈbɪləti/",
            "definition": "tính bất biến",
            "example": "Immutability simplifies reasoning about state.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32014,
            "word": "concurrency",
            "pronunciation": "/kənˈkʌrənsi/",
            "definition": "tính đồng thời",
            "example": "Concurrency bugs are often subtle.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32015,
            "word": "idempotent",
            "pronunciation": "/ˈɪdempətənt/",
            "definition": "tính bất biến khi lặp (idempotent)",
            "example": "Idempotent APIs are easier to retry.",
            "partOfSpeech": "adjective",
            "level": "C2"
          },
          {
            "id": 32016,
            "word": "rollback",
            "pronunciation": "/ˈrəʊlbæk/",
            "definition": "khôi phục phiên bản trước",
            "example": "We prepared a rollback plan.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32017,
            "word": "feature flag",
            "pronunciation": "/ˈfiːtʃə flæɡ/",
            "definition": "cờ bật/tắt tính năng",
            "example": "Feature flags allow gradual rollouts.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32018,
            "word": "blue‑green deployment",
            "pronunciation": "/ˌbluː ˈɡriːn dɪˈplɔɪmənt/",
            "definition": "triển khai xanh‑lam (song song)",
            "example": "Blue‑green deployment minimises downtime.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32019,
            "word": "canary release",
            "pronunciation": "/kəˈnɑːri rɪˈliːs/",
            "definition": "phát hành chim hoàng yến (thử nhỏ)",
            "example": "A canary release detects issues early.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32020,
            "word": "observability test",
            "pronunciation": "/əbˌzɜːvəˈbɪləti test/",
            "definition": "kiểm thử khả năng quan sát",
            "example": "We validate logs and traces via tests.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 32021,
            "word": "SDK",
            "pronunciation": "/ˌes diː ˈkeɪ/",
            "definition": "bộ phát triển phần mềm",
            "example": "The SDK simplifies integrations.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 32022,
            "word": "API gateway",
            "pronunciation": "/ˌeɪ piː ˈaɪ ˈɡeɪtweɪ/",
            "definition": "cổng API",
            "example": "An API gateway centralises auth and routing.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32023,
            "word": "rate limiting",
            "pronunciation": "/reɪt ˈlɪmɪtɪŋ/",
            "definition": "giới hạn tốc độ gọi API",
            "example": "Rate limiting protects shared services.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 32024,
            "word": "circuit breaker",
            "pronunciation": "/ˈsɜːkɪt ˈbreɪkə/",
            "definition": "cầu chì phần mềm (ngắt mạch)",
            "example": "Circuit breakers prevent cascading failures.",
            "partOfSpeech": "noun",
            "level": "C2"
          }
        ]
      },
      {
        "id": "3-3",
        "name": "AI & Dữ liệu",
        "cards": [
          {
            "id": 33001,
            "word": "machine learning",
            "pronunciation": "/məˈʃiːn ˈlɜːnɪŋ/",
            "definition": "học máy",
            "example": "Machine learning finds patterns in data.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 33002,
            "word": "neural network",
            "pronunciation": "/ˈnjʊərəl ˈnetwɜːk/",
            "definition": "mạng nơ-ron",
            "example": "Neural networks approximate complex functions.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33003,
            "word": "deep learning",
            "pronunciation": "/ˌdiːp ˈlɜːnɪŋ/",
            "definition": "học sâu",
            "example": "Deep learning excels at image recognition.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33004,
            "word": "training data",
            "pronunciation": "/ˈtreɪnɪŋ ˈdeɪtə/",
            "definition": "dữ liệu huấn luyện",
            "example": "High-quality training data reduces bias.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 33005,
            "word": "overfitting",
            "pronunciation": "/ˌəʊvəˈfɪtɪŋ/",
            "definition": "quá khớp (mô hình)",
            "example": "Regularisation mitigates overfitting.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33006,
            "word": "generalisation",
            "pronunciation": "/ˌdʒenrəlaɪˈzeɪʃn/",
            "definition": "khả năng khái quát hoá của mô hình",
            "example": "More data often improves generalisation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33007,
            "word": "feature engineering",
            "pronunciation": "/ˈfiːtʃə ˌendʒɪˈnɪərɪŋ/",
            "definition": "kỹ thuật đặc trưng",
            "example": "Feature engineering boosts performance.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33008,
            "word": "hyperparameter",
            "pronunciation": "/ˌhaɪpəˈpærəmiːtə/",
            "definition": "siêu tham số",
            "example": "Tuning hyperparameters can be costly.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33009,
            "word": "gradient descent",
            "pronunciation": "/ˈɡreɪdiənt dɪˈsent/",
            "definition": "thuật toán hạ dốc",
            "example": "We used stochastic gradient descent.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33010,
            "word": "loss function",
            "pronunciation": "/lɒs ˈfʌŋkʃn/",
            "definition": "hàm mất mát",
            "example": "The loss function guides learning.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33011,
            "word": "regularisation",
            "pronunciation": "/ˌreɡjələraɪˈzeɪʃn/",
            "definition": "chuẩn hoá để tránh quá khớp",
            "example": "Regularisation adds penalties to weights.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33012,
            "word": "cross‑validation",
            "pronunciation": "/ˌkrɒs ˌvælɪˈdeɪʃn/",
            "definition": "đánh giá chéo",
            "example": "Cross‑validation estimates out‑of‑sample error.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33013,
            "word": "classification",
            "pronunciation": "/ˌklæsɪfɪˈkeɪʃn/",
            "definition": "phân loại",
            "example": "We framed the task as classification.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 33014,
            "word": "regression",
            "pronunciation": "/rɪˈɡreʃn/",
            "definition": "hồi quy",
            "example": "Linear regression is a baseline.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 33015,
            "word": "embedding",
            "pronunciation": "/ɪmˈbedɪŋ/",
            "definition": "biểu diễn nhúng",
            "example": "Embeddings capture semantic similarity.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 33016,
            "word": "vector database",
            "pronunciation": "/ˈvektə ˈdeɪtəbeɪs/",
            "definition": "cơ sở dữ liệu véc-tơ",
            "example": "A vector database speeds up retrieval.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 33017,
            "word": "retrieval‑augmented generation",
            "pronunciation": "/rɪˈtriːvl ɔːɡˈmentɪd ˌdʒenəˈreɪʃn/",
            "definition": "tạo sinh tăng cường truy hồi (RAG)",
            "example": "RAG improves factual accuracy.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 33018,
            "word": "prompt engineering",
            "pronunciation": "/prɒmpt ˌendʒɪˈnɪərɪŋ/",
            "definition": "kỹ thuật lời nhắc",
            "example": "Prompt engineering shapes model behaviour.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33019,
            "word": "hallucination",
            "pronunciation": "/həˌluːsɪˈneɪʃn/",
            "definition": "bịa đặt của mô hình",
            "example": "Guardrails reduce hallucination risks.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33020,
            "word": "data governance",
            "pronunciation": "/ˈdeɪtə ˈɡʌvənəns/",
            "definition": "quản trị dữ liệu",
            "example": "Strong governance protects privacy.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33021,
            "word": "data lineage",
            "pronunciation": "/ˈdeɪtə ˈlɪniɪdʒ/",
            "definition": "dòng dõi dữ liệu (nguồn gốc)",
            "example": "Data lineage clarifies transformations.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 33022,
            "word": "MLOps",
            "pronunciation": "/ˌem el ˈɒps/",
            "definition": "vận hành học máy (MLOps)",
            "example": "MLOps bridges model and production.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33023,
            "word": "model drift",
            "pronunciation": "/ˈmɒdl drɪft/",
            "definition": "trôi mô hình theo thời gian",
            "example": "Monitoring detects model drift.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 33024,
            "word": "A/B testing",
            "pronunciation": "/ˌeɪ biː ˈtestɪŋ/",
            "definition": "thử nghiệm A/B",
            "example": "A/B testing quantifies uplift.",
            "partOfSpeech": "noun",
            "level": "B2"
          }
        ]
      },
      {
        "id": "3-4",
        "name": "An ninh mạng",
        "cards": [
          {
            "id": 34001,
            "word": "cybersecurity",
            "pronunciation": "/ˌsaɪbə sɪˈkjʊərəti/",
            "definition": "an ninh mạng",
            "example": "Cybersecurity protects systems and data.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 34002,
            "word": "attack surface",
            "pronunciation": "/əˈtæk ˈsɜːfɪs/",
            "definition": "bề mặt tấn công",
            "example": "Reducing the attack surface lowers risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34003,
            "word": "zero‑trust",
            "pronunciation": "/ˌzɪərəʊ ˈtrʌst/",
            "definition": "mô hình không tin cậy mặc định",
            "example": "Zero‑trust requires continuous verification.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34004,
            "word": "phishing",
            "pronunciation": "/ˈfɪʃɪŋ/",
            "definition": "lừa đảo qua mạng (phishing)",
            "example": "Staff training reduces phishing success.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 34005,
            "word": "ransomware",
            "pronunciation": "/ˈrænsəmweə/",
            "definition": "mã độc tống tiền",
            "example": "Backups limit ransomware damage.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 34006,
            "word": "malware",
            "pronunciation": "/ˈmælweə/",
            "definition": "phần mềm độc hại",
            "example": "Anti‑malware tools block common threats.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 34007,
            "word": "vulnerability",
            "pronunciation": "/ˌvʌlnərəˈbɪləti/",
            "definition": "lỗ hổng bảo mật",
            "example": "We patched a critical vulnerability.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34008,
            "word": "exploit",
            "pronunciation": "/ˈeksplɔɪt/",
            "definition": "khai thác lỗ hổng",
            "example": "Attackers exploited an outdated library.",
            "partOfSpeech": "verb",
            "level": "C1"
          },
          {
            "id": 34009,
            "word": "penetration test",
            "pronunciation": "/ˌpenɪˈtreɪʃn test/",
            "definition": "kiểm thử xâm nhập (pentest)",
            "example": "A pentest revealed misconfigurations.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34010,
            "word": "intrusion detection",
            "pronunciation": "/ɪnˈtruːʒn dɪˈtekʃn/",
            "definition": "phát hiện xâm nhập",
            "example": "An IDS monitors suspicious activity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34011,
            "word": "endpoint security",
            "pronunciation": "/ˈendpɔɪnt sɪˈkjʊərəti/",
            "definition": "bảo mật điểm cuối",
            "example": "Endpoint security protects laptops and phones.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34012,
            "word": "identity and access management",
            "pronunciation": "/aɪˈdentəti ənd ˈækses ˈmænɪdʒmənt/",
            "definition": "quản lý danh tính và truy cập (IAM)",
            "example": "IAM enforces least privilege.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34013,
            "word": "least privilege",
            "pronunciation": "/liːst ˈprɪvɪlɪdʒ/",
            "definition": "đặc quyền tối thiểu",
            "example": "Grant least privilege to reduce impact.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34014,
            "word": "multi‑factor authentication",
            "pronunciation": "/ˌmʌlti ˈfæktə ɔːˌθentɪˈkeɪʃn/",
            "definition": "xác thực đa yếu tố (MFA)",
            "example": "MFA blocks many account takeovers.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 34015,
            "word": "threat intelligence",
            "pronunciation": "/θret ɪnˈtelɪdʒəns/",
            "definition": "tình báo mối đe doạ",
            "example": "Threat intelligence informs defences.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 34016,
            "word": "security posture",
            "pronunciation": "/sɪˈkjʊərəti ˈpɒstʃə/",
            "definition": "tư thế bảo mật tổng thể",
            "example": "We review our security posture quarterly.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34017,
            "word": "incident response",
            "pronunciation": "/ˈɪnsɪdənt rɪˈspɒns/",
            "definition": "ứng phó sự cố",
            "example": "Incident response plans must be rehearsed.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34018,
            "word": "forensics",
            "pronunciation": "/fəˈrensɪks/",
            "definition": "pháp chứng số",
            "example": "Digital forensics preserves evidence.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34019,
            "word": "encryption",
            "pronunciation": "/ɪnˈkrɪpʃn/",
            "definition": "mã hoá",
            "example": "End‑to‑end encryption protects messages.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 34020,
            "word": "key management",
            "pronunciation": "/kiː ˈmænɪdʒmənt/",
            "definition": "quản lý khoá",
            "example": "Poor key management undermines security.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 34021,
            "word": "public key infrastructure",
            "pronunciation": "/ˈpʌblɪk kiː ˈɪnfrəstrʌktʃə/",
            "definition": "hạ tầng khoá công khai (PKI)",
            "example": "PKI enables digital signatures.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 34022,
            "word": "tokenisation",
            "pronunciation": "/ˌtəʊkənaɪˈzeɪʃn/",
            "definition": "mã hoá thay thế bằng token",
            "example": "Tokenisation limits sensitive data exposure.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 34023,
            "word": "secure enclave",
            "pronunciation": "/sɪˈkjʊə ˈæŋkleɪv/",
            "definition": "vùng bảo mật cô lập phần cứng",
            "example": "Secure enclaves store secrets safely.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 34024,
            "word": "supply‑chain attack",
            "pronunciation": "/səˈplaɪ tʃeɪn əˈtæk/",
            "definition": "tấn công chuỗi cung ứng",
            "example": "Supply‑chain attacks bypass perimeters.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 34025,
            "word": "red teaming",
            "pronunciation": "/red ˈtiːmɪŋ/",
            "definition": "đội tấn công mô phỏng để kiểm tra phòng thủ",
            "example": "Red teaming tests real‑world scenarios.",
            "partOfSpeech": "noun",
            "level": "C2"
          }
        ]
      },
      {
        "id": "3-5",
        "name": "Thiết bị & Ph phần cứng",
        "cards": [
          {
            "id": 35001,
            "word": "semiconductor",
            "pronunciation": "/ˌsemikənˈdʌktə/",
            "definition": "bán dẫn",
            "example": "Semiconductor shortages disrupted supply chains.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35002,
            "word": "CPU core",
            "pronunciation": "/ˌsiː piː ˈjuː kɔː/",
            "definition": "lõi CPU",
            "example": "More CPU cores improve parallelism.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35003,
            "word": "GPU",
            "pronunciation": "/ˌdʒiː piː ˈjuː/",
            "definition": "bộ xử lý đồ hoạ (GPU)",
            "example": "GPUs accelerate training workloads.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35004,
            "word": "TPU",
            "pronunciation": "/ˌtiː piː ˈjuː/",
            "definition": "bộ xử lý tensor (TPU)",
            "example": "TPUs optimise matrix operations.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35005,
            "word": "memory bandwidth",
            "pronunciation": "/ˈmeməri ˈbændwɪdθ/",
            "definition": "băng thông bộ nhớ",
            "example": "Memory bandwidth limits throughput.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35006,
            "word": "cache hierarchy",
            "pronunciation": "/kæʃ ˈhaɪərɑːki/",
            "definition": "phân cấp bộ đệm",
            "example": "The cache hierarchy reduces latency.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35007,
            "word": "non‑volatile memory",
            "pronunciation": "/ˌnɒn ˈvɒlətaɪl ˈmeməri/",
            "definition": "bộ nhớ không bay hơi",
            "example": "SSDs use non‑volatile memory.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35008,
            "word": "NVMe",
            "pronunciation": "/ˌen viː em ˈiː/",
            "definition": "giao thức NVMe tốc độ cao",
            "example": "NVMe drives deliver low latency.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35009,
            "word": "PCI Express",
            "pronunciation": "/ˌpiː siː aɪ ɪkˈspres/",
            "definition": "chuẩn PCIe",
            "example": "PCI Express provides high‑speed lanes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35010,
            "word": "through‑silicon via",
            "pronunciation": "/ˌθruː ˈsɪlɪkən ˈviːə/",
            "definition": "lỗ thông qua silicon (TSV)",
            "example": "TSVs enable 3D stacking.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 35011,
            "word": "chiplet",
            "pronunciation": "/ˈtʃɪplɪt/",
            "definition": "mô‑đun vi mạch nhỏ (chiplet)",
            "example": "Chiplets improve yield and flexibility.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 35012,
            "word": "system‑on‑chip",
            "pronunciation": "/ˌsɪstəm ɒn ˈtʃɒp/",
            "definition": "hệ thống trên chip (SoC)",
            "example": "Smartphones use system‑on‑chip designs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35013,
            "word": "firmware",
            "pronunciation": "/ˈfɜːmweə/",
            "definition": "phần sụn",
            "example": "Firmware updates patch vulnerabilities.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35014,
            "word": "embedded system",
            "pronunciation": "/ɪmˈbedɪd ˈsɪstəm/",
            "definition": "hệ thống nhúng",
            "example": "Embedded systems control appliances.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35015,
            "word": "IoT sensor",
            "pronunciation": "/ˌaɪ əʊ ˈtiː ˈsensə/",
            "definition": "cảm biến IoT",
            "example": "IoT sensors stream telemetry data.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35016,
            "word": "wearable",
            "pronunciation": "/ˈweərəbl/",
            "definition": "thiết bị đeo",
            "example": "Wearables track health metrics.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35017,
            "word": "AR headset",
            "pronunciation": "/ˌeɪ ˈɑː ˈhedset/",
            "definition": "kính thực tế tăng cường",
            "example": "AR headsets overlay digital objects.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35018,
            "word": "VR",
            "pronunciation": "/ˌviː ˈɑː/",
            "definition": "thực tế ảo",
            "example": "VR enables immersive training.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35019,
            "word": "haptic feedback",
            "pronunciation": "/ˈhæptɪk ˈfiːdbæk/",
            "definition": "phản hồi xúc giác",
            "example": "Haptic feedback improves realism.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35020,
            "word": "battery density",
            "pronunciation": "/ˈbætəri ˈdensəti/",
            "definition": "mật độ năng lượng pin",
            "example": "Higher battery density extends range.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35021,
            "word": "thermal throttling",
            "pronunciation": "/ˈθɜːml ˈθrɒtlɪŋ/",
            "definition": "giảm xung do nhiệt",
            "example": "Thermal throttling lowers performance.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35022,
            "word": "cooling solution",
            "pronunciation": "/ˈkuːlɪŋ səˈluːʃn/",
            "definition": "giải pháp tản nhiệt",
            "example": "A better cooling solution stabilises clocks.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 35023,
            "word": "antenna array",
            "pronunciation": "/ænˈtenə əˈreɪ/",
            "definition": "mảng ăng‑ten",
            "example": "A phased antenna array steers beams.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 35024,
            "word": "5G mmWave",
            "pronunciation": "/ˌfaɪv dʒiː ˈmɪməweɪv/",
            "definition": "sóng milimet 5G",
            "example": "5G mmWave offers ultra‑high bandwidth.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 35025,
            "word": "satellite constellation",
            "pronunciation": "/ˈsætəlaɪt ˌkɒnstəˈleɪʃn/",
            "definition": "chòm vệ tinh",
            "example": "Satellite constellations provide global coverage.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "3-6",
        "name": "Kinh tế số & Xã hội",
        "cards": [
          {
            "id": 36001,
            "word": "digital transformation",
            "pronunciation": "/ˈdɪdʒɪtl ˌtrænsfəˈmeɪʃn/",
            "definition": "chuyển đổi số",
            "example": "Digital transformation reshapes operations.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36002,
            "word": "platform economy",
            "pronunciation": "/ˈplætfɔːm ɪˈkɒnəmi/",
            "definition": "kinh tế nền tảng",
            "example": "The platform economy favours network effects.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36003,
            "word": "two‑sided market",
            "pronunciation": "/ˌtuː ˈsaɪdɪd ˈmɑːkɪt/",
            "definition": "thị trường hai chiều",
            "example": "Two‑sided markets require balancing demand.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 36004,
            "word": "network effect",
            "pronunciation": "/ˈnetwɜːk ɪˈfekt/",
            "definition": "hiệu ứng mạng lưới",
            "example": "Network effects create winner‑takes‑most dynamics.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36005,
            "word": "disintermediation",
            "pronunciation": "/dɪsˌɪntəˌmiːdiˈeɪʃn/",
            "definition": "loại bỏ trung gian",
            "example": "Disintermediation changes value chains.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 36006,
            "word": "fintech",
            "pronunciation": "/ˈfɪntek/",
            "definition": "công nghệ tài chính",
            "example": "Fintech expands access to credit.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36007,
            "word": "digital wallet",
            "pronunciation": "/ˈdɪdʒɪtl ˈwɒlɪt/",
            "definition": "ví điện tử",
            "example": "Digital wallets support contactless payments.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36008,
            "word": "blockchain",
            "pronunciation": "/ˈblɒktʃeɪn/",
            "definition": "chuỗi khối",
            "example": "Blockchain enables tamper‑evident ledgers.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36009,
            "word": "smart contract",
            "pronunciation": "/ˌsmɑːt ˈkɒntrækt/",
            "definition": "hợp đồng thông minh",
            "example": "Smart contracts execute automatically.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36010,
            "word": "token economy",
            "pronunciation": "/ˈtəʊkən ɪˈkɒnəmi/",
            "definition": "nền kinh tế token",
            "example": "A token economy aligns incentives.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 36011,
            "word": "privacy by design",
            "pronunciation": "/ˈpraɪvəsi baɪ dɪˈzaɪn/",
            "definition": "bảo mật ngay từ thiết kế",
            "example": "Privacy by design reduces breaches.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36012,
            "word": "GDPR compliance",
            "pronunciation": "/ˌdʒiː diː piː ˈɑː kəmˈplaɪəns/",
            "definition": "tuân thủ GDPR",
            "example": "GDPR compliance requires lawful processing.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36013,
            "word": "digital divide",
            "pronunciation": "/ˌdɪdʒɪtl dɪˈvaɪd/",
            "definition": "khoảng cách số",
            "example": "The digital divide widens inequalities.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36014,
            "word": "algorithmic bias",
            "pronunciation": "/ˌælɡəˈrɪðmɪk ˈbaɪəs/",
            "definition": "thiên lệch thuật toán",
            "example": "We audit models for algorithmic bias.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36015,
            "word": "platform governance",
            "pronunciation": "/ˈplætfɔːm ˈɡʌvənəns/",
            "definition": "quản trị nền tảng",
            "example": "Platform governance sets fair rules.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 36016,
            "word": "content moderation",
            "pronunciation": "/ˈkɒntent ˌmɒdəˈreɪʃn/",
            "definition": "kiểm duyệt nội dung",
            "example": "Content moderation combats abuse.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36017,
            "word": "digital literacy",
            "pronunciation": "/ˈdɪdʒɪtl ˈlɪtərəsi/",
            "definition": "năng lực số",
            "example": "Digital literacy empowers citizens.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36018,
            "word": "e‑commerce",
            "pronunciation": "/ˌiː ˈkɒmɜːs/",
            "definition": "thương mại điện tử",
            "example": "E‑commerce reshapes retail.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36019,
            "word": "creator economy",
            "pronunciation": "/kriˈeɪtə ɪˈkɒnəmi/",
            "definition": "kinh tế nhà sáng tạo",
            "example": "The creator economy monetises attention.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36020,
            "word": "gig work",
            "pronunciation": "/ɡɪɡ wɜːk/",
            "definition": "việc làm tự do theo nhiệm vụ",
            "example": "Gig work offers flexibility but little security.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36021,
            "word": "surveillance capitalism",
            "pronunciation": "/səˈveɪləns ˈkæpɪtəlɪzəm/",
            "definition": "chủ nghĩa tư bản giám sát",
            "example": "Critics warn about surveillance capitalism.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 36022,
            "word": "attention economy",
            "pronunciation": "/əˈtenʃn ɪˈkɒnəmi/",
            "definition": "nền kinh tế chú ý",
            "example": "The attention economy rewards addictive design.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 36023,
            "word": "digital wellbeing",
            "pronunciation": "/ˈdɪdʒɪtl ˌwelˈbiːɪŋ/",
            "definition": "sức khoẻ số",
            "example": "Apps now promote digital wellbeing.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36024,
            "word": "accessibility",
            "pronunciation": "/əkˌsesəˈbɪləti/",
            "definition": "khả năng tiếp cận",
            "example": "Accessibility guidelines improve inclusion.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 36025,
            "word": "human‑computer interaction",
            "pronunciation": "/ˌhjuːmən kəmˈpjuːtə ˌɪntərˈækʃn/",
            "definition": "tương tác người‑máy (HCI)",
            "example": "HCI research informs UI design.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      }
    ]
  },
  {
    "id": "4",
    "name": "Kinh tế",
    "subThemes": [
      {
        "id": "4-1",
        "name": "Vĩ mô",
        "cards": [
          {
            "id": 41001,
            "word": "gross domestic product",
            "pronunciation": "/ˌɡrəʊs dəˌmestɪk ˈprɒdʌkt/",
            "definition": "tổng sản phẩm quốc nội (GDP)",
            "example": "GDP growth slowed to 4% last quarter.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41002,
            "word": "real GDP",
            "pronunciation": "/rɪəl ˌdʒiː diː ˈpiː/",
            "definition": "GDP thực (đã loại trừ lạm phát)",
            "example": "Real GDP better reflects living standards.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41003,
            "word": "GDP per capita",
            "pronunciation": "/ˌdʒiː diː ˈpiː pə ˈkæpɪtə/",
            "definition": "GDP bình quân đầu người",
            "example": "GDP per capita varies widely across regions.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41004,
            "word": "inflation",
            "pronunciation": "/ɪnˈfleɪʃn/",
            "definition": "lạm phát",
            "example": "Inflation erodes purchasing power.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41005,
            "word": "deflation",
            "pronunciation": "/diːˈfleɪʃn/",
            "definition": "giảm phát",
            "example": "Deflation can discourage investment.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41006,
            "word": "stagflation",
            "pronunciation": "/stæɡˈfleɪʃn/",
            "definition": "lạm phát đình trệ",
            "example": "Stagflation poses a policy dilemma.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41007,
            "word": "consumer price index",
            "pronunciation": "/kənˈsjuːmə praɪs ˈɪndeks/",
            "definition": "chỉ số giá tiêu dùng (CPI)",
            "example": "The CPI rose faster than expected.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41008,
            "word": "producer price index",
            "pronunciation": "/prəˈdjuːsə praɪs ˈɪndeks/",
            "definition": "chỉ số giá sản xuất (PPI)",
            "example": "The PPI often leads consumer prices.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41009,
            "word": "unemployment rate",
            "pronunciation": "/ˌʌnɪmˈplɔɪmənt reɪt/",
            "definition": "tỷ lệ thất nghiệp",
            "example": "The unemployment rate ticked down.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41010,
            "word": "labour force participation",
            "pronunciation": "/ˈleɪbə fɔːs pɑːˌtɪsɪˈpeɪʃn/",
            "definition": "tỷ lệ tham gia lực lượng lao động",
            "example": "Participation has not fully recovered.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41011,
            "word": "output gap",
            "pronunciation": "/ˈaʊtpʊt ɡæp/",
            "definition": "khoảng cách sản lượng",
            "example": "A negative output gap signals slack.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41012,
            "word": "potential output",
            "pronunciation": "/pəˈtenʃl ˈaʊtpʊt/",
            "definition": "sản lượng tiềm năng",
            "example": "Potential output depends on productivity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41013,
            "word": "business cycle",
            "pronunciation": "/ˈbɪznəs ˈsaɪkl/",
            "definition": "chu kỳ kinh doanh",
            "example": "The business cycle has peaked.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41014,
            "word": "recession",
            "pronunciation": "/rɪˈseʃn/",
            "definition": "suy thoái",
            "example": "The economy slipped into recession.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41015,
            "word": "soft landing",
            "pronunciation": "/ˌsɒft ˈlændɪŋ/",
            "definition": "hạ cánh mềm (kiềm chế lạm phát không suy thoái)",
            "example": "Policymakers aim for a soft landing.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41016,
            "word": "monetary policy",
            "pronunciation": "/ˈmʌnɪtri ˈpɒləsi/",
            "definition": "chính sách tiền tệ",
            "example": "Monetary policy tightened to curb inflation.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41017,
            "word": "fiscal policy",
            "pronunciation": "/ˈfɪskl ˈpɒləsi/",
            "definition": "chính sách tài khóa",
            "example": "Fiscal policy supported households.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41018,
            "word": "interest rate",
            "pronunciation": "/ˈɪntrəst reɪt/",
            "definition": "lãi suất",
            "example": "Interest rates are expected to stabilise.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41019,
            "word": "quantitative easing",
            "pronunciation": "/ˌkwɒntɪtətɪv ˈiːzɪŋ/",
            "definition": "nới lỏng định lượng",
            "example": "Quantitative easing lowered borrowing costs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41020,
            "word": "exchange rate",
            "pronunciation": "/ɪksˈtʃeɪndʒ reɪt/",
            "definition": "tỷ giá hối đoái",
            "example": "A strong exchange rate hurts exports.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 41021,
            "word": "current account",
            "pronunciation": "/ˈkʌrənt əˈkaʊnt/",
            "definition": "tài khoản vãng lai",
            "example": "The current account moved into surplus.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41022,
            "word": "balance of payments",
            "pronunciation": "/ˈbælens əv ˈpeɪmənts/",
            "definition": "cán cân thanh toán",
            "example": "The balance of payments deteriorated.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41023,
            "word": "sovereign debt",
            "pronunciation": "/ˈsɒvrɪn det/",
            "definition": "nợ công",
            "example": "Rising sovereign debt raises risks.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41024,
            "word": "credit rating",
            "pronunciation": "/ˈkredɪt ˈreɪtɪŋ/",
            "definition": "xếp hạng tín nhiệm",
            "example": "A downgrade lifted borrowing costs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 41025,
            "word": "macroeconomic stability",
            "pronunciation": "/ˌmækrəʊˌekəˈnɒmɪk stəˈbɪləti/",
            "definition": "ổn định kinh tế vĩ mô",
            "example": "Macroeconomic stability attracts investment.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "4-2",
        "name": "Vi mô & Doanh nghiệp",
        "cards": [
          {
            "id": 42001,
            "word": "supply and demand",
            "pronunciation": "/səˈplaɪ ənd dɪˈmɑːnd/",
            "definition": "cung và cầu",
            "example": "Prices are set by supply and demand.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 42002,
            "word": "price elasticity",
            "pronunciation": "/praɪs iːˌlæˈstɪsəti/",
            "definition": "độ co giãn của giá",
            "example": "Luxury goods show high price elasticity.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42003,
            "word": "marginal cost",
            "pronunciation": "/ˈmɑːdʒɪnl kɒst/",
            "definition": "chi phí cận biên",
            "example": "Firms expand output until price equals marginal cost.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42004,
            "word": "marginal utility",
            "pronunciation": "/ˈmɑːdʒɪnl juːˈtɪləti/",
            "definition": "lợi ích cận biên",
            "example": "Consumers buy while marginal utility exceeds price.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42005,
            "word": "opportunity cost",
            "pronunciation": "/ˌɒpəˈtjuːnəti kɒst/",
            "definition": "chi phí cơ hội",
            "example": "Education has significant opportunity costs.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42006,
            "word": "economies of scale",
            "pronunciation": "/ɪˌkɒnəmiz əv skeɪl/",
            "definition": "lợi thế kinh tế theo quy mô",
            "example": "Large plants enjoy economies of scale.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42007,
            "word": "diseconomies of scale",
            "pronunciation": "/ˌdɪsɪˈkɒnəmiz əv skeɪl/",
            "definition": "bất lợi theo quy mô",
            "example": "Bureaucracy can cause diseconomies of scale.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42008,
            "word": "fixed cost",
            "pronunciation": "/ˌfɪkst kɒst/",
            "definition": "chi phí cố định",
            "example": "Rent is a typical fixed cost.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 42009,
            "word": "variable cost",
            "pronunciation": "/ˌveəriəbl kɒst/",
            "definition": "chi phí biến đổi",
            "example": "Raw materials are variable costs.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 42010,
            "word": "average cost",
            "pronunciation": "/ˈævərɪdʒ kɒst/",
            "definition": "chi phí bình quân",
            "example": "Average cost falls then rises.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42011,
            "word": "market structure",
            "pronunciation": "/ˈmɑːkɪt ˈstrʌktʃə/",
            "definition": "cấu trúc thị trường",
            "example": "Competition depends on market structure.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42012,
            "word": "perfect competition",
            "pronunciation": "/ˌpɜːfɪkt ˌkɒmpəˈtɪʃn/",
            "definition": "cạnh tranh hoàn hảo",
            "example": "Perfect competition is a benchmark.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42013,
            "word": "monopoly",
            "pronunciation": "/məˈnɒpəli/",
            "definition": "độc quyền",
            "example": "A monopoly can restrict output.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42014,
            "word": "oligopoly",
            "pronunciation": "/ˌɒlɪˈɡɒpəli/",
            "definition": "thiểu quyền",
            "example": "Pricing in an oligopoly is interdependent.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42015,
            "word": "monopolistic competition",
            "pronunciation": "/məˌnɒpəˈlɪstɪk ˌkɒmpəˈtɪʃn/",
            "definition": "cạnh tranh độc quyền",
            "example": "Firms differentiate products under monopolistic competition.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42016,
            "word": "barrier to entry",
            "pronunciation": "/ˈbæriə tə ˈentri/",
            "definition": "rào cản gia nhập",
            "example": "High capital needs are barriers to entry.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42017,
            "word": "game theory",
            "pronunciation": "/ˈɡeɪm ˌθɪəri/",
            "definition": "lý thuyết trò chơi",
            "example": "Game theory predicts strategic behaviour.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 42018,
            "word": "principal–agent problem",
            "pronunciation": "/ˈprɪnsəpl ˈeɪdʒənt ˈprɒbləm/",
            "definition": "vấn đề người uỷ quyền–đại lý",
            "example": "Incentives solve the principal–agent problem.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 42019,
            "word": "asymmetric information",
            "pronunciation": "/ˌæsɪˈmetrɪk ˌɪnfəˈmeɪʃn/",
            "definition": "thông tin bất cân xứng",
            "example": "Asymmetric information can cause market failure.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 42020,
            "word": "adverse selection",
            "pronunciation": "/ˌædvɜːs sɪˈlekʃn/",
            "definition": "lựa chọn bất lợi",
            "example": "Adverse selection raises insurance premiums.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 42021,
            "word": "moral hazard",
            "pronunciation": "/ˌmɒrəl ˈhæzəd/",
            "definition": "rủi ro đạo đức",
            "example": "Bailouts may create moral hazard.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 42022,
            "word": "sunk cost",
            "pronunciation": "/ˌsʌŋk kɒst/",
            "definition": "chi phí chìm",
            "example": "Ignore sunk costs when deciding.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42023,
            "word": "break‑even point",
            "pronunciation": "/ˌbreɪk ˈiːvn pɔɪnt/",
            "definition": "điểm hòa vốn",
            "example": "The project reached its break‑even point in year two.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42024,
            "word": "return on investment",
            "pronunciation": "/rɪˈtɜːn ɒn ɪnˈvestmənt/",
            "definition": "tỷ suất sinh lời (ROI)",
            "example": "Marketing delivered a strong return on investment.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 42025,
            "word": "working capital",
            "pronunciation": "/ˌwɜːkɪŋ ˈkæpɪtl/",
            "definition": "vốn lưu động",
            "example": "Tight working capital can choke growth.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "4-3",
        "name": "Thị trường & Thương mại",
        "cards": [
          {
            "id": 43001,
            "word": "market equilibrium",
            "pronunciation": "/ˌmɑːkɪt ˌiːkwɪˈlɪbrɪəm/",
            "definition": "cân bằng thị trường",
            "example": "Taxes shift market equilibrium.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43002,
            "word": "price ceiling",
            "pronunciation": "/ˌpraɪs ˈsiːlɪŋ/",
            "definition": "giá trần",
            "example": "A price ceiling can cause shortages.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43003,
            "word": "price floor",
            "pronunciation": "/ˌpraɪs flɔː/",
            "definition": "giá sàn",
            "example": "A price floor may create surpluses.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43004,
            "word": "subsidy",
            "pronunciation": "/ˈsʌbsɪdi/",
            "definition": "trợ cấp",
            "example": "Fuel subsidies distort incentives.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43005,
            "word": "tariff",
            "pronunciation": "/ˈtærɪf/",
            "definition": "thuế quan",
            "example": "Tariffs protect domestic producers.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43006,
            "word": "quota",
            "pronunciation": "/ˈkwəʊtə/",
            "definition": "hạn ngạch",
            "example": "Quotas restrict import volumes.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43007,
            "word": "free trade agreement",
            "pronunciation": "/ˌfriː treɪd əˈɡriːmənt/",
            "definition": "hiệp định thương mại tự do (FTA)",
            "example": "The FTA slashed tariffs.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43008,
            "word": "comparative advantage",
            "pronunciation": "/kəmˌpærətɪv ədˈvɑːntɪdʒ/",
            "definition": "lợi thế so sánh",
            "example": "Trade arises from comparative advantage.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43009,
            "word": "terms of trade",
            "pronunciation": "/ˌtɜːmz əv treɪd/",
            "definition": "điều kiện thương mại",
            "example": "Commodity exporters face volatile terms of trade.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43010,
            "word": "protectionism",
            "pronunciation": "/prəˈtekʃənɪzəm/",
            "definition": "chủ nghĩa bảo hộ",
            "example": "Rising protectionism threatens growth.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43011,
            "word": "trade deficit",
            "pronunciation": "/treɪd ˈdefɪsɪt/",
            "definition": "thâm hụt thương mại",
            "example": "The trade deficit narrowed in May.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43012,
            "word": "trade surplus",
            "pronunciation": "/treɪd ˈsɜːpləs/",
            "definition": "thặng dư thương mại",
            "example": "A trade surplus eased currency pressures.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43013,
            "word": "non‑tariff barrier",
            "pronunciation": "/ˌnɒn ˈtærɪf ˈbæriə/",
            "definition": "rào cản phi thuế quan",
            "example": "Standards can act as non‑tariff barriers.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43014,
            "word": "dumping",
            "pronunciation": "/ˈdʌmpɪŋ/",
            "definition": "bán phá giá",
            "example": "Anti‑dumping duties were imposed.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43015,
            "word": "value chain",
            "pronunciation": "/ˈvæljuː tʃeɪn/",
            "definition": "chuỗi giá trị",
            "example": "Firms upgrade within global value chains.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43016,
            "word": "logistics",
            "pronunciation": "/ləˈdʒɪstɪks/",
            "definition": "hậu cần",
            "example": "Efficient logistics reduce delivery times.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43017,
            "word": "incoterms",
            "pronunciation": "/ˈɪŋkəʊtɜːmz/",
            "definition": "điều kiện thương mại quốc tế (Incoterms)",
            "example": "Incoterms clarify risk and costs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43018,
            "word": "bill of lading",
            "pronunciation": "/ˌbɪl əv ˈleɪdɪŋ/",
            "definition": "vận đơn đường biển",
            "example": "A bill of lading is required at customs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43019,
            "word": "letter of credit",
            "pronunciation": "/ˈletər əv ˈkredɪt/",
            "definition": "thư tín dụng (L/C)",
            "example": "Payment was secured by a letter of credit.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43020,
            "word": "harmonised system code",
            "pronunciation": "/ˈhɑːmənaɪzd ˈsɪstəm kəʊd/",
            "definition": "mã HS phân loại hàng hóa",
            "example": "The HS code determines tariffs.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 43021,
            "word": "market liberalisation",
            "pronunciation": "/ˌmɑːkɪt ˌlɪbəraɪˈzeɪʃn/",
            "definition": "tự do hoá thị trường",
            "example": "Liberalisation increased competition.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43022,
            "word": "foreign direct investment",
            "pronunciation": "/ˌfɒrən dɪˈrekt ɪnˈvestmənt/",
            "definition": "đầu tư trực tiếp nước ngoài (FDI)",
            "example": "FDI flows rebounded strongly.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 43023,
            "word": "portfolio investment",
            "pronunciation": "/pɔːtˈfəʊliəʊ ɪnˈvestmənt/",
            "definition": "đầu tư danh mục",
            "example": "Portfolio investment is more volatile.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43024,
            "word": "export diversification",
            "pronunciation": "/ˈekspɔːt daɪˌvɜːsɪfɪˈkeɪʃn/",
            "definition": "đa dạng hóa xuất khẩu",
            "example": "Export diversification reduces risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 43025,
            "word": "trade facilitation",
            "pronunciation": "/treɪd fəˌsɪlɪˈteɪʃn/",
            "definition": "tạo thuận lợi thương mại",
            "example": "Customs reform improved trade facilitation.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "4-4",
        "name": "Tài chính & Ngân hàng",
        "cards": [
          {
            "id": 44001,
            "word": "financial system",
            "pronunciation": "/faɪˈnænʃl ˈsɪstəm/",
            "definition": "hệ thống tài chính",
            "example": "A sound financial system channels savings to investment.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44002,
            "word": "capital market",
            "pronunciation": "/ˈkæpɪtl ˈmɑːkɪt/",
            "definition": "thị trường vốn",
            "example": "Capital markets price risk and return.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44003,
            "word": "money market",
            "pronunciation": "/ˈmʌni ˈmɑːkɪt/",
            "definition": "thị trường tiền tệ",
            "example": "Money markets provide short‑term funding.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44004,
            "word": "bond yield",
            "pronunciation": "/bɒnd jiːld/",
            "definition": "lợi suất trái phiếu",
            "example": "Bond yields rose on inflation fears.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44005,
            "word": "yield curve",
            "pronunciation": "/jiːld kɜːv/",
            "definition": "đường cong lợi suất",
            "example": "An inverted yield curve signals recession risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44006,
            "word": "equity market",
            "pronunciation": "/ˈekwɪti ˈmɑːkɪt/",
            "definition": "thị trường cổ phiếu",
            "example": "Equity markets rallied after the announcement.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44007,
            "word": "market capitalisation",
            "pronunciation": "/ˌmɑːkɪt ˌkæpɪtələˈzeɪʃn/",
            "definition": "vốn hóa thị trường",
            "example": "The firm reached a $1‑trillion capitalisation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44008,
            "word": "initial public offering",
            "pronunciation": "/ɪˈnɪʃl ˈpʌblɪk ˈɒfərɪŋ/",
            "definition": "phát hành cổ phiếu lần đầu (IPO)",
            "example": "The IPO was oversubscribed.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44009,
            "word": "secondary offering",
            "pronunciation": "/ˈsekəndri ˈɒfərɪŋ/",
            "definition": "phát hành thứ cấp",
            "example": "A secondary offering diluted existing shareholders.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44010,
            "word": "liquidity",
            "pronunciation": "/lɪˈkwɪdəti/",
            "definition": "tính thanh khoản",
            "example": "Liquidity dried up during the crisis.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44011,
            "word": "market volatility",
            "pronunciation": "/ˈmɑːkɪt ˌvɒləˈtɪləti/",
            "definition": "biến động thị trường",
            "example": "Volatility spiked after the data release.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 44012,
            "word": "derivative",
            "pronunciation": "/dɪˈrɪvətɪv/",
            "definition": "phái sinh tài chính",
            "example": "Derivatives help hedge risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44013,
            "word": "futures contract",
            "pronunciation": "/ˈfjuːtʃəz ˈkɒntrækt/",
            "definition": "hợp đồng tương lai",
            "example": "Futures contracts lock in prices.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44014,
            "word": "option",
            "pronunciation": "/ˈɒpʃn/",
            "definition": "quyền chọn",
            "example": "Options confer the right but not the obligation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44015,
            "word": "hedging",
            "pronunciation": "/ˈhedʒɪŋ/",
            "definition": "phòng hộ rủi ro",
            "example": "The airline is hedging fuel costs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44016,
            "word": "counterparty risk",
            "pronunciation": "/ˈkaʊntəpɑːti rɪsk/",
            "definition": "rủi ro đối tác",
            "example": "Clearing houses reduce counterparty risk.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44017,
            "word": "systemic risk",
            "pronunciation": "/sɪˈstemɪk rɪsk/",
            "definition": "rủi ro hệ thống",
            "example": "Systemic risk requires macro‑prudential tools.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44018,
            "word": "capital adequacy ratio",
            "pronunciation": "/ˈkæpɪtl ˈædɪkwəsi ˈreɪʃiəʊ/",
            "definition": "tỷ lệ an toàn vốn (CAR)",
            "example": "Banks must meet capital adequacy ratios.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44019,
            "word": "non‑performing loan",
            "pronunciation": "/ˌnɒn pəˈfɔːmɪŋ ləʊn/",
            "definition": "nợ xấu (NPL)",
            "example": "NPLs declined thanks to restructuring.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44020,
            "word": "loan‑to‑value ratio",
            "pronunciation": "/ˌləʊn tə ˈvæljuː ˈreɪʃiəʊ/",
            "definition": "tỷ lệ cho vay trên giá trị tài sản (LTV)",
            "example": "Lower LTVs reduce default risk.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44021,
            "word": "credit spread",
            "pronunciation": "/ˈkredɪt spred/",
            "definition": "chênh lệch lợi suất tín dụng",
            "example": "Credit spreads widened abruptly.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44022,
            "word": "Basel III",
            "pronunciation": "/ˈbɑːzəl θriː/",
            "definition": "bộ quy định Basel III",
            "example": "Basel III strengthened bank resilience.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44023,
            "word": "shadow banking",
            "pronunciation": "/ˈʃædəʊ ˈbæŋkɪŋ/",
            "definition": "ngân hàng bóng tối",
            "example": "Shadow banking can transmit shocks.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 44024,
            "word": "fintech lending",
            "pronunciation": "/ˈfɪntek ˈlendɪŋ/",
            "definition": "cho vay công nghệ tài chính",
            "example": "Fintech lending broadens access to credit.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 44025,
            "word": "financial inclusion",
            "pronunciation": "/faɪˈnænʃl ɪnˈkluːʒn/",
            "definition": "tài chính toàn diện",
            "example": "Digital ID promotes financial inclusion.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "4-5",
        "name": "Lao động & Năng suất",
        "cards": [
          {
            "id": 45001,
            "word": "labour productivity",
            "pronunciation": "/ˈleɪbə ˌprɒdʌkˈtɪvəti/",
            "definition": "năng suất lao động",
            "example": "Labour productivity has stagnated.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45002,
            "word": "total factor productivity",
            "pronunciation": "/ˈtəʊtl ˈfæktə ˌprɒdʌkˈtɪvəti/",
            "definition": "năng suất nhân tố tổng hợp (TFP)",
            "example": "Innovation boosts total factor productivity.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 45003,
            "word": "human capital",
            "pronunciation": "/ˈhjuːmən ˈkæpɪtl/",
            "definition": "vốn con người",
            "example": "Education builds human capital.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45004,
            "word": "skills mismatch",
            "pronunciation": "/skɪlz ˈmɪsmætʃ/",
            "definition": "lệch pha kỹ năng",
            "example": "Retraining addresses skills mismatches.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45005,
            "word": "automation",
            "pronunciation": "/ˌɔːtəˈmeɪʃn/",
            "definition": "tự động hoá",
            "example": "Automation displaces some tasks.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45006,
            "word": "reskilling",
            "pronunciation": "/ˌriːˈskɪlɪŋ/",
            "definition": "học kỹ năng mới (đổi nghề)",
            "example": "Reskilling programmes support workers.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45007,
            "word": "labour market tightness",
            "pronunciation": "/ˈleɪbə ˈmɑːkɪt ˈtaɪtnəs/",
            "definition": "độ thắt chặt thị trường lao động",
            "example": "Tightness pushes up wages.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45008,
            "word": "participation rate",
            "pronunciation": "/pɑːˌtɪsɪˈpeɪʃn reɪt/",
            "definition": "tỷ lệ tham gia",
            "example": "A higher participation rate eases shortages.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45009,
            "word": "wage growth",
            "pronunciation": "/weɪdʒ ɡrəʊθ/",
            "definition": "tăng lương",
            "example": "Wage growth outpaced inflation.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45010,
            "word": "collective bargaining",
            "pronunciation": "/kəˌlektɪv ˈbɑːɡənɪŋ/",
            "definition": "thương lượng tập thể",
            "example": "Collective bargaining raised pay floors.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45011,
            "word": "minimum wage",
            "pronunciation": "/ˈmɪnɪməm weɪdʒ/",
            "definition": "lương tối thiểu",
            "example": "The minimum wage was increased.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 45012,
            "word": "gig economy",
            "pronunciation": "/ɡɪɡ ɪˈkɒnəmi/",
            "definition": "nền kinh tế việc vặt (gig)",
            "example": "The gig economy offers flexibility.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45013,
            "word": "informal sector",
            "pronunciation": "/ɪnˈfɔːml ˈsektə/",
            "definition": "khu vực phi chính thức",
            "example": "Most workers remain in the informal sector.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45014,
            "word": "brain drain",
            "pronunciation": "/ˌbreɪn ˈdreɪn/",
            "definition": "chảy máu chất xám",
            "example": "Brain drain undermines innovation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45015,
            "word": "occupational safety",
            "pronunciation": "/ˌɒkjʊˈpeɪʃənl ˈseɪfti/",
            "definition": "an toàn nghề nghiệp",
            "example": "Standards improved occupational safety.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45016,
            "word": "work‑life balance",
            "pronunciation": "/ˌwɜːk laɪf ˈbælæns/",
            "definition": "cân bằng công việc–cuộc sống",
            "example": "Remote work reshaped work‑life balance.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45017,
            "word": "remote work",
            "pronunciation": "/rɪˈməʊt wɜːk/",
            "definition": "làm việc từ xa",
            "example": "Remote work widened the talent pool.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 45018,
            "word": "labour mobility",
            "pronunciation": "/ˈleɪbə məʊˈbɪləti/",
            "definition": "tính di động lao động",
            "example": "Labour mobility reduces regional gaps.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45019,
            "word": "union density",
            "pronunciation": "/ˈjuːniən ˈdensəti/",
            "definition": "tỷ lệ công đoàn",
            "example": "Union density has declined.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45020,
            "word": "productivity frontier",
            "pronunciation": "/ˌprɒdʌkˈtɪvəti ˈfrʌntɪə/",
            "definition": "biên năng suất",
            "example": "Firms chase the productivity frontier.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 45021,
            "word": "knowledge spillover",
            "pronunciation": "/ˈnɒlɪdʒ ˈspɪləʊvə/",
            "definition": "lan toả tri thức",
            "example": "Clusters generate knowledge spillovers.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 45022,
            "word": "learning curve",
            "pronunciation": "/ˈlɜːnɪŋ kɜːv/",
            "definition": "đường học tập (kinh nghiệm)",
            "example": "Output rises along the learning curve.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 45023,
            "word": "absenteeism",
            "pronunciation": "/ˌæbsənˈtiːɪzəm/",
            "definition": "vắng mặt không lý do",
            "example": "Absenteeism fell after reforms.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 45024,
            "word": "labour share",
            "pronunciation": "/ˈleɪbə ʃeə/",
            "definition": "tỷ phần lao động trong thu nhập quốc dân",
            "example": "The labour share has declined for decades.",
            "partOfSpeech": "noun",
            "level": "C2"
          }
        ]
      },
      {
        "id": "4-6",
        "name": "Chính sách & Phát triển",
        "cards": [
          {
            "id": 46001,
            "word": "industrial policy",
            "pronunciation": "/ɪnˈdʌstriəl ˈpɒləsi/",
            "definition": "chính sách công nghiệp",
            "example": "Industrial policy targets strategic sectors.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46002,
            "word": "innovation policy",
            "pronunciation": "/ˌɪnəˈveɪʃn ˈpɒləsi/",
            "definition": "chính sách đổi mới sáng tạo",
            "example": "Innovation policy funds R&D.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46003,
            "word": "competition policy",
            "pronunciation": "/ˌkɒmpəˈtɪʃn ˈpɒləsi/",
            "definition": "chính sách cạnh tranh",
            "example": "Competition policy tackles cartels.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46004,
            "word": "industrial cluster",
            "pronunciation": "/ɪnˈdʌstriəl ˈklʌstə/",
            "definition": "cụm công nghiệp",
            "example": "Clusters foster collaboration and spillovers.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46005,
            "word": "public–private partnership",
            "pronunciation": "/ˌpʌblɪk ˈpraɪvət ˈpɑːtnəʃɪp/",
            "definition": "đối tác công–tư (PPP)",
            "example": "PPP mobilises private capital for infrastructure.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46006,
            "word": "ease of doing business",
            "pronunciation": "/iːz əv ˈduːɪŋ ˈbɪznəs/",
            "definition": "mức độ thuận lợi kinh doanh",
            "example": "Reforms improved the ease of doing business.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46007,
            "word": "regulatory sandbox",
            "pronunciation": "/ˈreɡjʊlətəri ˈsændbɒks/",
            "definition": "khung thử nghiệm chính sách (sandbox)",
            "example": "A sandbox allows controlled innovation.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 46008,
            "word": "governance",
            "pronunciation": "/ˈɡʌvənəns/",
            "definition": "quản trị",
            "example": "Good governance increases policy credibility.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46009,
            "word": "rule of law",
            "pronunciation": "/ˌruːl əv ˈlɔː/",
            "definition": "pháp quyền",
            "example": "The rule of law attracts investment.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46010,
            "word": "property rights",
            "pronunciation": "/ˈprɒpəti raɪts/",
            "definition": "quyền sở hữu tài sản",
            "example": "Strong property rights encourage entrepreneurship.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46011,
            "word": "informal institutions",
            "pronunciation": "/ɪnˈfɔːml ˌɪnstɪˈtjuːʃnz/",
            "definition": "thiết chế phi chính thức",
            "example": "Norms are powerful informal institutions.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 46012,
            "word": "state‑owned enterprise",
            "pronunciation": "/ˌsteɪt əʊnd ˈentəpraɪz/",
            "definition": "doanh nghiệp nhà nước (SOE)",
            "example": "SOE reform lifted efficiency.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46013,
            "word": "privatisation",
            "pronunciation": "/ˌpraɪvɪtaɪˈzeɪʃn/",
            "definition": "tư nhân hoá",
            "example": "Privatisation expanded competition.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46014,
            "word": "industrial upgrading",
            "pronunciation": "/ɪnˈdʌstriəl ˈʌpˌɡreɪdɪŋ/",
            "definition": "nâng cấp công nghiệp",
            "example": "Upgrading moves firms into high‑value niches.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 46015,
            "word": "export‑oriented strategy",
            "pronunciation": "/ˈekspɔːt ɔːriˌentɪd ˈstrætədʒi/",
            "definition": "chiến lược hướng về xuất khẩu",
            "example": "The strategy integrated the economy into GVCs.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46016,
            "word": "import substitution",
            "pronunciation": "/ˈɪmpɔːt ˌsʌbstɪˈtjuːʃn/",
            "definition": "thay thế nhập khẩu",
            "example": "Import substitution nurtured infant industries.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46017,
            "word": "poverty alleviation",
            "pronunciation": "/ˈpɒvəti əˌliːviˈeɪʃn/",
            "definition": "giảm nghèo",
            "example": "Poverty alleviation remains a priority.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46018,
            "word": "inclusive growth",
            "pronunciation": "/ɪnˈkluːsɪv ɡrəʊθ/",
            "definition": "tăng trưởng bao trùm",
            "example": "Inclusive growth shares the gains widely.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46019,
            "word": "human development index",
            "pronunciation": "/ˈhjuːmən dɪˈveləpmənt ˈɪndeks/",
            "definition": "chỉ số phát triển con người (HDI)",
            "example": "The HDI improved steadily.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46020,
            "word": "middle‑income trap",
            "pronunciation": "/ˌmɪdl ˈɪnkʌm træp/",
            "definition": "bẫy thu nhập trung bình",
            "example": "Escaping the middle‑income trap requires innovation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46021,
            "word": "green industrialisation",
            "pronunciation": "/ɡriːn ɪnˌdʌstriəlaɪˈzeɪʃn/",
            "definition": "công nghiệp hoá xanh",
            "example": "Green industrialisation opens new markets.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 46022,
            "word": "carbon border adjustment",
            "pronunciation": "/ˈkɑːbən ˈbɔːdə əˈdʒʌstmənt/",
            "definition": "điều chỉnh biên giới carbon (CBAM)",
            "example": "CBAM will affect exporters.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 46023,
            "word": "digital government",
            "pronunciation": "/ˈdɪdʒɪtl ˈɡʌvənmənt/",
            "definition": "chính phủ số",
            "example": "Digital government streamlines services.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 46024,
            "word": "public finance management",
            "pronunciation": "/ˈpʌblɪk faɪˈnæns ˈmænɪdʒmənt/",
            "definition": "quản lý tài chính công (PFM)",
            "example": "PFM reforms improved transparency.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 46025,
            "word": "results‑based budgeting",
            "pronunciation": "/rɪˈzʌlts beɪst ˈbʌdʒɪtɪŋ/",
            "definition": "ngân sách theo kết quả",
            "example": "RBB links funding to outcomes.",
            "partOfSpeech": "noun",
            "level": "C2"
          }
        ]
      }
    ]
  },
  {
    "id": "5",
    "name": "Truyền thông",
    "subThemes": [
      {
        "id": "5-1",
        "name": "Báo chí & Tin tức",
        "cards": [
          {
            "id": 51001,
            "word": "headline",
            "pronunciation": "/ˈhedlaɪn/",
            "definition": "tiêu đề bài báo",
            "example": "A concise headline captures attention instantly.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 51002,
            "word": "byline",
            "pronunciation": "/ˈbaɪlaɪn/",
            "definition": "dòng ghi tên tác giả",
            "example": "The byline credited two reporters.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51003,
            "word": "lead",
            "pronunciation": "/liːd/",
            "definition": "đoạn mở bài nêu ý chính",
            "example": "The lead summarised the who, what, and why.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51004,
            "word": "nut graf",
            "pronunciation": "/ˈnʌt ɡrɑːf/",
            "definition": "đoạn lõi nêu bối cảnh cốt lõi",
            "example": "The nut graf explained why the story matters.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 51005,
            "word": "op‑ed",
            "pronunciation": "/ˌɒp ˈed/",
            "definition": "bài ý kiến (bình luận)",
            "example": "The op‑ed argued for tax reform.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51006,
            "word": "editorial",
            "pronunciation": "/ˌedɪˈtɔːriəl/",
            "definition": "bài xã luận của tòa soạn",
            "example": "The editorial criticised the policy shift.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51007,
            "word": "investigative journalism",
            "pronunciation": "/ɪnˈvestɪɡətɪv ˈdʒɜːnəlɪzəm/",
            "definition": "báo chí điều tra",
            "example": "Investigative journalism exposes wrongdoing.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51008,
            "word": "fact‑checking",
            "pronunciation": "/ˈfækt ˌtʃekɪŋ/",
            "definition": "kiểm chứng sự thật",
            "example": "Rigorous fact‑checking builds credibility.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51009,
            "word": "source protection",
            "pronunciation": "/sɔːs prəˈtekʃn/",
            "definition": "bảo vệ nguồn tin",
            "example": "Source protection encourages whistle-blowers.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 51010,
            "word": "off the record",
            "pronunciation": "/ˌɒf ðə ˈrekɔːd/",
            "definition": "không để đăng tải chính thức",
            "example": "The comment was strictly off the record.",
            "partOfSpeech": "adjective",
            "level": "C1"
          },
          {
            "id": 51011,
            "word": "on background",
            "pronunciation": "/ɒn ˈbækɡraʊnd/",
            "definition": "cung cấp thông tin không nêu tên",
            "example": "The briefing was on background only.",
            "partOfSpeech": "adverb",
            "level": "C2"
          },
          {
            "id": 51012,
            "word": "attribution",
            "pronunciation": "/ˌætrɪˈbjuːʃn/",
            "definition": "trích dẫn nguồn/ghi công",
            "example": "Clear attribution prevents misrepresentation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51013,
            "word": "angle",
            "pronunciation": "/ˈæŋɡl/",
            "definition": "góc tiếp cận câu chuyện",
            "example": "The human-interest angle made it relatable.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 51014,
            "word": "newsworthiness",
            "pronunciation": "/ˈnjuːzwɜːðinəs/",
            "definition": "tính đáng đưa tin",
            "example": "Editors weigh the newsworthiness of events.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 51015,
            "word": "press freedom",
            "pronunciation": "/ˌpres ˈfriːdəm/",
            "definition": "tự do báo chí",
            "example": "Press freedom underpins democracy.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 51016,
            "word": "media pluralism",
            "pronunciation": "/ˈmiːdiə ˈplʊərəlɪzəm/",
            "definition": "đa nguyên truyền thông",
            "example": "Pluralism prevents dominance by one voice.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 51017,
            "word": "defamation",
            "pronunciation": "/ˌdefəˈmeɪʃn/",
            "definition": "phỉ báng, vu khống trên truyền thông",
            "example": "Defamation suits can chill speech.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51018,
            "word": "libel",
            "pronunciation": "/ˈlaɪbl/",
            "definition": "phỉ báng bằng văn bản (tội phỉ báng)",
            "example": "The paper was sued for libel.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51019,
            "word": "slander",
            "pronunciation": "/ˈslɑːndə/",
            "definition": "vu khống bằng lời nói",
            "example": "The claim amounted to slander.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51020,
            "word": "correction",
            "pronunciation": "/kəˈrekʃn/",
            "definition": "đính chính",
            "example": "The outlet published a prompt correction.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 51021,
            "word": "retraction",
            "pronunciation": "/rɪˈtrækʃn/",
            "definition": "rút lại bài/khẳng định sai",
            "example": "A full retraction was issued.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51022,
            "word": "news cycle",
            "pronunciation": "/ˈnjuːz ˌsaɪkl/",
            "definition": "chu kỳ tin tức",
            "example": "The 24‑hour news cycle fuels sensationalism.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 51023,
            "word": "gatekeeping",
            "pronunciation": "/ˈɡeɪtˌkiːpɪŋ/",
            "definition": "kiểm soát nội dung được đăng tải",
            "example": "Gatekeeping standards vary across outlets.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 51024,
            "word": "editorial independence",
            "pronunciation": "/ˌedɪˈtɔːriəl ˌɪndɪˈpendəns/",
            "definition": "độc lập biên tập",
            "example": "Editorial independence builds trust.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 51025,
            "word": "public interest",
            "pronunciation": "/ˌpʌblɪk ˈɪntrəst/",
            "definition": "lợi ích công chúng",
            "example": "Publishing was justified by public interest.",
            "partOfSpeech": "noun",
            "level": "B2"
          }
        ]
      },
      {
        "id": "5-2",
        "name": "Quảng cáo & PR",
        "cards": [
          {
            "id": 52001,
            "word": "advertising campaign",
            "pronunciation": "/ˈædvətaɪzɪŋ kæmˈpeɪn/",
            "definition": "chiến dịch quảng cáo",
            "example": "The campaign boosted brand awareness.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52002,
            "word": "creative brief",
            "pronunciation": "/kriːˈeɪtɪv briːf/",
            "definition": "bản tóm tắt sáng tạo",
            "example": "The creative brief clarified the message.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52003,
            "word": "brand positioning",
            "pronunciation": "/brænd pəˈzɪʃənɪŋ/",
            "definition": "định vị thương hiệu",
            "example": "Clear positioning differentiates competitors.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52004,
            "word": "value proposition",
            "pronunciation": "/ˈvæljuː ˌprɒpəˈzɪʃn/",
            "definition": "đề xuất giá trị",
            "example": "The value proposition resonated with students.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52005,
            "word": "unique selling point",
            "pronunciation": "/juːˈniːk ˈselɪŋ pɔɪnt/",
            "definition": "điểm bán hàng độc đáo (USP)",
            "example": "We refined our unique selling point.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52006,
            "word": "call to action",
            "pronunciation": "/ˌkɔːl tuː ˈækʃn/",
            "definition": "lời kêu gọi hành động (CTA)",
            "example": "A clear call to action increased sign‑ups.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52007,
            "word": "target audience",
            "pronunciation": "/ˈtɑːɡɪt ˈɔːdiəns/",
            "definition": "khán giả mục tiêu",
            "example": "We narrowed the target audience.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52008,
            "word": "segmentation",
            "pronunciation": "/ˌseɡmenˈteɪʃn/",
            "definition": "phân khúc khách hàng",
            "example": "Segmentation improved relevance.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52009,
            "word": "A/B testing",
            "pronunciation": "/ˌeɪ biː ˈtestɪŋ/",
            "definition": "thử nghiệm A/B",
            "example": "A/B testing optimised the headline.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52010,
            "word": "brand equity",
            "pronunciation": "/brænd ˈekwɪti/",
            "definition": "giá trị thương hiệu",
            "example": "Brand equity grew after the launch.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52011,
            "word": "earned media",
            "pronunciation": "/ɜːnd ˈmiːdiə/",
            "definition": "lượng tiếp cận tự nhiên (được nhắc)",
            "example": "The story generated significant earned media.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52012,
            "word": "paid media",
            "pronunciation": "/peɪd ˈmiːdiə/",
            "definition": "truyền thông trả phí",
            "example": "Paid media amplified reach.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52013,
            "word": "owned media",
            "pronunciation": "/əʊnd ˈmiːdiə/",
            "definition": "kênh sở hữu (web, email)",
            "example": "Owned media nurtures loyal audiences.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52014,
            "word": "public relations",
            "pronunciation": "/ˌpʌblɪk rɪˈleɪʃnz/",
            "definition": "quan hệ công chúng (PR)",
            "example": "Public relations shaped the narrative.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52015,
            "word": "press release",
            "pronunciation": "/ˈpres rɪˌliːs/",
            "definition": "thông cáo báo chí",
            "example": "The press release highlighted key milestones.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52016,
            "word": "media pitch",
            "pronunciation": "/ˈmiːdiə pɪtʃ/",
            "definition": "thư mời đăng tin tới báo chí",
            "example": "A tailored media pitch secured coverage.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52017,
            "word": "brand storytelling",
            "pronunciation": "/brænd ˈstɔːritelɪŋ/",
            "definition": "kể chuyện thương hiệu",
            "example": "Storytelling forged emotional ties.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52018,
            "word": "influencer marketing",
            "pronunciation": "/ˈɪnfluənsə ˈmɑːkɪtɪŋ/",
            "definition": "tiếp thị qua người ảnh hưởng",
            "example": "Influencer marketing reached new niches.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52019,
            "word": "native advertising",
            "pronunciation": "/ˈneɪtɪv ˈædvətaɪzɪŋ/",
            "definition": "quảng cáo native (hoà nội dung)",
            "example": "Native ads must be clearly labelled.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52020,
            "word": "programmatic buying",
            "pronunciation": "/ˌprəʊɡrəˈmætɪk ˈbaɪɪŋ/",
            "definition": "mua quảng cáo tự động theo thuật toán",
            "example": "Programmatic buying optimised budgets.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 52021,
            "word": "brand safety",
            "pronunciation": "/brænd ˈseɪfti/",
            "definition": "an toàn thương hiệu (môi trường hiển thị)",
            "example": "Brand safety rules excluded sensitive sites.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52022,
            "word": "viewability",
            "pronunciation": "/vjuːəˈbɪləti/",
            "definition": "khả năng hiển thị quảng cáo",
            "example": "Higher viewability improved ROI.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 52023,
            "word": "ad fraud",
            "pronunciation": "/ˌæd frɔːd/",
            "definition": "gian lận quảng cáo",
            "example": "Ad fraud inflated reported clicks.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 52024,
            "word": "sponsorship",
            "pronunciation": "/ˈspɒnsəʃɪp/",
            "definition": "tài trợ truyền thông",
            "example": "Sponsorship raised event visibility.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 52025,
            "word": "crisis communication",
            "pronunciation": "/ˈkraɪsɪs kəˌmjuːnɪˈkeɪʃn/",
            "definition": "truyền thông khủng hoảng",
            "example": "Swift crisis communication preserved trust.",
            "partOfSpeech": "noun",
            "level": "C1"
          }
        ]
      },
      {
        "id": "5-3",
        "name": "Mạng xã hội & Nội dung số",
        "cards": [
          {
            "id": 53001,
            "word": "user‑generated content",
            "pronunciation": "/ˌjuːzə ˌdʒenəˈreɪtɪd ˈkɒntent/",
            "definition": "nội dung do người dùng tạo (UGC)",
            "example": "UGC boosts authenticity.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53002,
            "word": "engagement rate",
            "pronunciation": "/ɪnˈɡeɪdʒmənt reɪt/",
            "definition": "tỷ lệ tương tác",
            "example": "The engagement rate doubled after tweaks.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53003,
            "word": "organic reach",
            "pronunciation": "/ɔːˈɡænɪk riːtʃ/",
            "definition": "độ phủ tự nhiên",
            "example": "Organic reach declined due to algorithm changes.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53004,
            "word": "algorithmic feed",
            "pronunciation": "/ˌælɡəˈrɪðmɪk fiːd/",
            "definition": "bảng tin do thuật toán sắp xếp",
            "example": "An algorithmic feed can create filter bubbles.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53005,
            "word": "filter bubble",
            "pronunciation": "/ˈfɪltə ˈbʌbl/",
            "definition": "bong bóng lọc thông tin",
            "example": "Filter bubbles narrow perspectives.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53006,
            "word": "echo chamber",
            "pronunciation": "/ˈekəʊ ˈtʃeɪmbə/",
            "definition": "phòng vang (cộng hưởng quan điểm)",
            "example": "Echo chambers intensify polarisation.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53007,
            "word": "viral",
            "pronunciation": "/ˈvaɪrəl/",
            "definition": "lan truyền mạnh trên mạng",
            "example": "The clip went viral overnight.",
            "partOfSpeech": "adjective",
            "level": "B2"
          },
          {
            "id": 53008,
            "word": "clickbait",
            "pronunciation": "/ˈklɪkbeɪt/",
            "definition": "mồi câu nhấp chuột",
            "example": "Clickbait erodes audience trust.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53009,
            "word": "shadow ban",
            "pronunciation": "/ˈʃædəʊ bæn/",
            "definition": "ẩn hạn chế hiển thị tài khoản",
            "example": "Creators complained about shadow bans.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 53010,
            "word": "content moderation",
            "pronunciation": "/ˈkɒntent ˌmɒdəˈreɪʃn/",
            "definition": "kiểm duyệt nội dung",
            "example": "Content moderation tackles abuse and spam.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53011,
            "word": "community guidelines",
            "pronunciation": "/kəˈmjuːnəti ˈɡaɪdlaɪnz/",
            "definition": "quy tắc cộng đồng",
            "example": "Posts breached community guidelines.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53012,
            "word": "terms of service",
            "pronunciation": "/ˌtɜːmz əv ˈsɜːvɪs/",
            "definition": "điều khoản dịch vụ",
            "example": "Violations triggered a terms‑of‑service strike.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53013,
            "word": "hashtag",
            "pronunciation": "/ˈhæʃtæɡ/",
            "definition": "thẻ chủ đề (hashtag)",
            "example": "Effective hashtags improve discovery.",
            "partOfSpeech": "noun",
            "level": "B1"
          },
          {
            "id": 53014,
            "word": "story format",
            "pronunciation": "/ˈstɔːri ˈfɔːmæt/",
            "definition": "định dạng story (ngắn, dọc)",
            "example": "The story format suits mobile viewing.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53015,
            "word": "short‑form video",
            "pronunciation": "/ʃɔːt fɔːm ˈvɪdiəʊ/",
            "definition": "video ngắn",
            "example": "Short‑form video dominates attention.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53016,
            "word": "watch time",
            "pronunciation": "/ˈwɒtʃ taɪm/",
            "definition": "thời gian xem",
            "example": "Watch time is a core ranking signal.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53017,
            "word": "retention curve",
            "pronunciation": "/rɪˈtenʃn kɜːv/",
            "definition": "đường giữ chân khán giả",
            "example": "We analysed the retention curve drop‑offs.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 53018,
            "word": "creator fund",
            "pronunciation": "/kriˈeɪtə fʌnd/",
            "definition": "quỹ trả tiền cho nhà sáng tạo",
            "example": "The creator fund incentivises output.",
            "partOfSpeech": "noun",
            "level": "C1"
          },
          {
            "id": 53019,
            "word": "demonetisation",
            "pronunciation": "/ˌdiːˌmɒnɪtaɪˈzeɪʃn/",
            "definition": "tắt kiếm tiền nội dung",
            "example": "Policy changes led to demonetisation.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 53020,
            "word": "brand collaboration",
            "pronunciation": "/brænd kəˌlæbəˈreɪʃn/",
            "definition": "hợp tác thương hiệu với creator",
            "example": "Brand collaborations must disclose ads.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53021,
            "word": "platform governance",
            "pronunciation": "/ˈplætfɔːm ˈɡʌvənəns/",
            "definition": "quản trị nền tảng",
            "example": "Better governance protects users.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 53022,
            "word": "digital wellbeing",
            "pronunciation": "/ˈdɪdʒɪtl ˌwelˈbiːɪŋ/",
            "definition": "sức khoẻ số",
            "example": "Apps encourage digital wellbeing breaks.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53023,
            "word": "privacy policy",
            "pronunciation": "/ˈpraɪvəsi ˈpɒləsi/",
            "definition": "chính sách quyền riêng tư",
            "example": "A clear privacy policy builds trust.",
            "partOfSpeech": "noun",
            "level": "B2"
          },
          {
            "id": 53024,
            "word": "data portability",
            "pronunciation": "/ˌdeɪtə ˌpɔːtəˈbɪləti/",
            "definition": "khả năng mang dữ liệu sang nền tảng khác",
            "example": "Data portability empowers users.",
            "partOfSpeech": "noun",
            "level": "C2"
          },
          {
            "id": 53025,
            "word": "algorithmic transparency",
            "pronunciation": "/ˌælɡərɪðmɪk trænˈspærənsi/",
            "definition": "minh bạch thuật toán",
            "example": "Transparency helps regulators and users.",
            "partOfSpeech": "noun",
            "level": "C2"
          }
        ]
      }
    ]
  }
];
